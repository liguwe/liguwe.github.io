/**
 * @description 根据目录生成所有的 Obsidian 文件
 * */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const dirTree = require("directory-tree");




/**
 * @description 根据传入的 name ,生成唯一且不变的 id
 * */
// const uuid = require("uuid");
// const v5 = uuid.v5;
const ShortIdGenerator = require("./shortId");

function generateUniqueId(name) {
    return new ShortIdGenerator().generate(name);
    // return v5(name, uuid.v5.URL).replace(/-/g, "");
}

const ObsidianPath = path.resolve(__dirname, "../../832");

// uid 规则：根据文件的信息生成唯一的 id
// 用于存储所有的内容，key为 uid, value 为文件内容
const postObj = {};

// 用于存储 uid 和 path 的映射关系
const pathMapUid = {};

const excludeArr = [
    // 排除的以.开头的文件夹和文件
    /832\/832\/\.\w+/,
    // 排除包含 @832 的文件夹, 它是私有的，这是一级目录
    /832\/832\/\d+\.\s*.+@832/,
];
// 并且只显示文件夹和.md 文件
const indexReg = /^\d+\.\s*/;
const tree = dirTree(
    ObsidianPath,
    {
        // 排除任何以.开头的文件夹
        exclude: excludeArr,
        attributes: ["type"],
        extensions: /\.md/,
    },
    // 文件
    (item, PATH, stats) => {
        // 保存 uid 和 path 的映射关系
        const pathKey = item.path.split("832/832/")[1].split(".md")[0];
        pathMapUid[pathKey] = generateUniqueId(item.path);
        if (indexReg.test(item.name)) {
            item.index = parseInt(item.name.split(".")[0]);
            item.title = item.name.split(indexReg)[1].split(".md")[0];
        } else {
            item.index = 0;
            item.title = item.name.split(".md")[0];
        }
    },
    // 目录
    (item, path, stats) => {
        if (indexReg.test(item.name)) {
            item.index = parseInt(item.name.split(".")[0]);
            item.title = item.name.split(indexReg)[1];
        } else {
            item.index = 0;
            item.title = item.name;
        }
    },
);

// tree 排除任何包含 @832 或者 @ing 的文件夹或者文件
const excludeReg = /@832|@ing|@todo|@/;
// 递归处理所有的文件
const handleExcludeTree = (tree) => {
    const traverse = (item) => {
        if (item.type === "directory") {
            item.children = item?.children?.filter((child) => {
                return !excludeReg.test(child.path);
            });
            item.children.forEach((child) => {
                traverse(child);
            });
        }
    };
    traverse(tree);
};
handleExcludeTree(tree);

// 单独处理某个文件
const handleFileAndWrite = (file, depth) => {
    const stats = fs.statSync(file.path);
    const str = fs.readFileSync(file.path, "utf8");
    // 读取文件中的头部元数据
    const res = matter(str);
    // 文件内容
    let content = res?.content || "";
    // 根据文件的路径生成唯一的 id
    const uid = generateUniqueId(file.path);

    file.mtime = stats.mtime;
    file.depth = depth;
    file.createAt = stats.birthtime;
    file.uid = uid;
    file.link = `/post/${uid}`;
    file.mdLink = `./post/${uid}.md`;

    // 从 content 中所有的文件地址（图片或者文件等）
    // 比如 ![[99. Obsidian@832/files/Pasted image 20240809084132.png|504]] 中的 `99. Obsidian@832/files/Pasted image 20240809084132.png|504`
    const imageOrFileRegex = /!\[\[(.*?)\]\]\n/g;
    let files = [];
    let match;

    while ((match = imageOrFileRegex.exec(content)) !== null) {
        files.push(match[1]);
    }

    files = files.map((item) => {
        return item.split("|")[0];
    });

    // 将这些文件复制到本地的文件夹中，files 中
    const filePath = path.resolve(__dirname, "./post/files");
    files.forEach((item) => {
        const file = path.resolve(ObsidianPath, item);
        if (!fs.existsSync(file)) {
            return;
        }
        const fileName = item.split("/").pop().replace(/\s/g, "");
        const dest = path.resolve(filePath, fileName);
        fs.copyFileSync(file, dest);
    });

    // 修改 content 中的文件地址,使用标准的 markdown 语法
    // ![[99. Obsidian@832/files/Pasted image 20240809084132.png]] 变成 ![图片&文件](./files/Pasted image 20240809084132.png)
    content = content.replace(imageOrFileRegex, (match, p1) => {
        const fileName = p1.split("/").pop().replace(/\s/g, "").split("|")[0];
        return `![图片&文件](./files/${fileName})\n`;
    });

    /*************************************************
     * :::: 匹配本地链接 ::::
     ************************************************/
    const localLinkRegex = /\[\[(.*?)\]\]/g;
    // [[12. 算法/3. 刷题篇/3. LeetCode 经典 150 题/7. 买卖股票的最佳时机|7. 买卖股票的最佳时机]]
    // 变成 买卖股票的最佳时机
    // 正则，注意不以 ! 开头,否则会匹配到图片
    content = content.replace(localLinkRegex, (match, p1) => {
        const pathKey = p1.split("|")[0];
        const postLink = pathMapUid[pathKey];
        // 如果是 @832 的私有文件，不需要处理
        if (p1.includes("@832")) {
            return `[${p1.split("|")[1]}](#)`;
        }
        // 如果没必要 postLink, 这种情况一般是本地的锚点#，不需要处理
        // todo 但是，因为 ob 每次都会格式化标题序号，所以这里的锚点可能会有问题
        if (!postLink) {
            let text = p1;
            p1 = p1
                .replace(/\s/g, "-")
                .replace(/\./g, "")
                .replace(/#/g, "")
                .replace("：", "");
            return `[${text}](/post/${uid}.html#${p1})`;
        }
        return `[${p1.split("|")[1]}](/post/${postLink}.html)`;
    });

    /*************************************************
     * :::: 匹配标签 ::::
     ************************************************/
    // markdown 内容中的 #单链表  #2024/07/30  #单链表/双指针 #单链表/快慢指针
    // 变成 `#单链表` `#2024/07/30` `#单链表/双指针` `#单链表/快慢指针`
    // 但不包含锚点，即在.html#后面的内容

    // const tagRegex = /#([^\s#]+)(?:\/([^\s#]+))*/g;
    // const tagRegex = /(?:^|\s)(#[^\s#]+(?:\/[^\s#]+)*)(?=$|\s)/g;
    const tagRegex = /(?<!\S)#([^\s#]+)(?:\/([^\s#]+))*(?!\S)/g;

    content = content.replace(tagRegex, (match, p1) => {
        return `\`${match}\``;
    });

    content = convertObsidianHighlight(content);

    // 添加 H1 标题
    const H1Content = "\n" + `# ${file.title}` + "\n";

    // 匹配到第一个 ## 标题，将其替换为目录
    const reg4 = /^##\s*(.+)$/m;
    content = content.replace(reg4, (match, p1) => {
        return `\n## 目录\n` + `<!-- toc -->` + `\n ## ${p1} `;
    });

    const postContent = H1Content + "\n" + content;

    postObj[uid] = postContent;

    const postPath = path.resolve(__dirname, "./post");

    fs.writeFileSync(`${postPath}/${file.uid}.md`, postContent);
};

function convertObsidianHighlight(text) {
    const replacements = [];
    const placeholderPrefix = "HLD_PH_";
    let counter = 0;

    // 保护代码块和缩进代码（分步处理）
    const protectionSteps = [
        {
            // 多行代码块 ```...```
            regex: /^```[\s\S]*?^```/gm,
            replace: (match) => storeReplacement(match),
        },
        {
            // 行内代码 `...`
            regex: /`[^`\n]+`/g,
            replace: (match) => storeReplacement(match),
        },
    ];

    // 分步处理保护内容
    let processedText = text;
    protectionSteps.forEach(({ regex, replace }) => {
        processedText = processedText.replace(regex, replace);
    });

    // 处理高亮语法（排除跨行情况）
    processedText = processedText.replace(/==([^=\n]+?)==/g, "**$1**");

    // 还原保护内容（逆序处理）
    for (let i = replacements.length - 1; i >= 0; i--) {
        const placeholder = `${placeholderPrefix}${i}_`;
        processedText = processedText.replace(
            new RegExp(placeholder, "g"),
            replacements[i],
        );
    }

    function storeReplacement(content) {
        const placeholder = `${placeholderPrefix}${counter}_`;
        replacements[counter] = content;
        counter++;
        return placeholder;
    }

    return processedText;
}

/**
 *  @description 递归遍历树，处理数据，添加深度 depth
 * */
const handleTree = (tree) => {
    const traverse = (item, depth) => {
        if (item.type === "file") {
            handleFileAndWrite(item, depth);
        }
        if (item.type === "directory") {
            item.depth = depth;
            item?.children?.forEach((child) => {
                traverse(child, depth + 1);
            });
        }
    };
    traverse(tree, 0);
};
handleTree(tree);

// 需要递归遍历，找到所有的文件和文件夹，然后排序
// 如果都是文件，按照 index 字段排序
// 如果都是文件夹，按照 index 字段排序
const sortTree = (tree) => {
    tree.children.sort((a, b) => {
        return a.index - b.index;
    });
    tree.children.forEach((item) => {
        if (item.children?.length) {
            sortTree(item);
        }
    });
};

sortTree(tree);

// 直到 100 本书
const indexMap = {
    0: "第一部分",
    1: "第二部分",
    2: "第三部分",
    3: "第四部分",
    4: "第五部分",
    5: "第六部分",
    6: "第七部分",
    7: "第八部分",
    8: "第九部分",
    9: "第十部分",
    10: "第十一部分",
    11: "第十二部分",
    12: "第十三部分",
    13: "第十四部分",
    14: "第十五部分",
    15: "第十六部分",
    16: "第十七部分",
    17: "第十八部分",
    18: "第十九部分",
    19: "第二十部分",
    20: "第二十一部分",
    21: "第二十二部分",
    22: "第二十三部分",
    23: "第二十四部分",
    24: "第二十五部分",
    25: "第二十六部分",
    26: "第二十七部分",
    27: "第二十八部分",
    28: "第二十九部分",
    29: "第三十部分",
    30: "第三十一部分",
    31: "第三十二部分",
    32: "第三十三部分",
    33: "第三十四部分",
    34: "第三十五部分",
    35: "第三十六部分",
    36: "第三十七部分",
    37: "第三十八部分",
    38: "第三十九部分",
    39: "第四十部分",
    40: "第四十一部分",
    41: "第四十二部分",
    42: "第四十三部分",
    43: "第四十四部分",
    44: "第四十五部分",
    45: "第四十六部分",
    46: "第四十七部分",
    47: "第四十八部分",
    48: "第四十九部分",
    49: "第五十部分",
    50: "第五十一部分",
    51: "第五十二部分",
    52: "第五十三部分",
    53: "第五十四部分",
    54: "第五十五部分",
    55: "第五十六部分",
    56: "第五十七部分",
    57: "第五十八部分",
    58: "第五十九部分",
    59: "第六十部分",
    60: "第六十一部分",
    61: "第六十二部分",
    62: "第六十三部分",
    63: "第六十四部分",
    64: "第六十五部分",
    65: "第六十六部分",
    66: "第六十七部分",
    67: "第六十八部分",
    68: "第六十九部分",
    69: "第七十部分",
    70: "第七十一部分",
    71: "第七十二部分",
    72: "第七十三部分",
    73: "第七十四部分",
    74: "第七十五部分",
    75: "第七十六部分",
    76: "第七十七部分",
    77: "第七十八部分",
    78: "第七十九部分",
    79: "第八十部分",
    80: "第八十一部分",
    81: "第八十二部分",
    82: "第八十三部分",
    83: "第八十四部分",
    84: "第八十五部分",
    85: "第八十六部分",
    86: "第八十七部分",
    87: "第八十八部分",
    88: "第八十九部分",
    89: "第九十部分",
    90: "第九十一部分",
    91: "第九十二部分",
    92: "第九十三部分",
    93: "第九十四部分",
    94: "第九十五部分",
    95: "第九十六部分",
    96: "第九十七部分",
    97: "第九十八部分",
    98: "第九十九部分",
    99: "第一百部分",
};

const length = tree.children.length;

const prefix = tree.children[0]?.children || [];
const suffix = tree.children[length - 1]?.children || [];
const part = tree.children.slice(1, -1);

// 第一层级加上序号，第几部分，看起来像部分书的目录
part.forEach((item, index) => {
    item.title = `${indexMap[index]} ${item.title}`;
    item.isPart = true;
});

// 递归遍历 part,  除了第一个层级，其他的如果是目录的则将第一个文件赋值给父元素
const recursive = (arr) => {
    arr.forEach((item, index) => {
        // 如果是目录，且不是第一个层级
        if (item.type === "directory") {
            if (!item.isPart) {
                const indexFile = item.children[0];
                // 提到上级去，融合一起
                arr[index] = {
                    ...item,
                    indexFile,
                    title: item.title,
                    isIndex: true,
                };
                arr[index].children.splice(0, 1);
            }
            recursive(item.children);
        }
    });
};

recursive(part);

const sidebar = [...prefix, ...part, ...suffix];

// 生成 tree.json 文件
fs.writeFileSync("./src/sidebar.json", JSON.stringify(sidebar));
// 生成 post.json 文件
fs.writeFileSync("./src/post.json", JSON.stringify(postObj));
// 生成 pathMapUid.json 文件
fs.writeFileSync("./src/pathMapUid.json", JSON.stringify(pathMapUid));
