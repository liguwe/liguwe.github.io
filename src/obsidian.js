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
const uuid = require("uuid");
const v5 = uuid.v5;
function generateUniqueId(name) {
  return v5(name, uuid.v5.URL);
}
const ObsidianPath = path.resolve(__dirname, "../../832");

// 排除的文件夹，这些是个人笔记，私有的文件夹
const excludeArr = [
  /\.obsidian/,
  /\.git/,
  /\.trash/,
  /\.idea/,
  /.DS_Store/,
  /\.space/,
  /\.makemd/,
  /\.gitignore/,
  // /0\.\s+前序/,
  /1\.\s+原则/,
  /2\.\s+日课/,
  /3\.\s+OKR/,
  /4\.\s+日志/,
  /5\.\s+月报/,
  // /6\.\s+832 Monthly/,
  // /7\.\s+博客&播客/,
  // /7\.\s+AGI/,
  /9\.\s+英语/,
  // /10\.\s+技术管理/,
  // /10\.\s+前端/,
  // /11\.\s+算法/,
  // /12\.\s+计算机科学/,
  /14\.\s+生活/,
  /15\.\s+育儿/,
  /99\.\s+Obsidian/,
];

// uid 规则：根据文件的信息生成唯一的 id
// 用于存储所有的内容，key为 uid, value 为文件内容
const postObj = {};

// 排除掉.git 和 .obsidian 和 .trash 等文件夹
// 并且只显示文件夹和.md 文件
const indexReg = /^\d+\.\s+/;
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
  const H1Content = "\n" + `# ${file.title}` + "\n";
  const postContent = H1Content + "\n" + content;
  postObj[uid] = postContent;

  const postPath = path.resolve(__dirname, "./post");
  fs.writeFileSync(`${postPath}/${file.uid}.md`, postContent);
};

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

// 直到 100 部分
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

// 第一层级加上序号，第几部分，看起来像本书的目录
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
        arr[index] = {
          ...item,
          indexFile,
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
