/**
 * @description 同步 liguwe.site 博客 至 语雀笔记本 【liguwe.site】 https://www.yuque.com/liguwe/post
 * */

const SDK = require("@yuque/sdk");
const sidebar = require("./sidebar.json");
const namespace = "liguwe/post1";
const fs = require("fs");
const path = require("path");
const pLimit = require("p-limit").default;

const client = new SDK({
  token: require("../.env.json").YUQUE_TOKEN,
  requestOpts: {
    timeout: 100000, // 100s
  },
});

// 获取语雀笔记本 【liguwe.site】 下的所有笔记
async function getTOC(namespace) {
  let res = null;
  try {
    res = await client.repos.getTOC({
      namespace,
    });
  } catch (e) {
    console.log(e);
  }
  return res;
}

/**
 * @description 创建文档
 * @param namespace 语雀 namespace
 * @param title 文档标题
 * @param slug 文档slug
 * @param body 文档内容
 * */
async function create(namespace, title, slug, body, public = 0) {
  let res = null;
  try {
    res = await client.docs.create({
      namespace,
      data: {
        title,
        slug,
        format: "markdown",
        public, // 0: private, 1: public
        body,
      },
    });
  } catch (e) {
    console.log(`create doc: ${slug} 失败：`, e);
  }
  return res;
}

/**
 * @description 根据编号ID 更新文档
 * @param namespace 语雀 namespace
 * @param id 文档 id
 * @param title 文档标题
 * @param body 文档内容
 * */
async function update(namespace, id, title, body, public = 0) {
  let res = null;
  try {
    res = await client.docs.update({
      namespace,
      id,
      data: {
        format: "markdown",
        title,
        public, // 0: private, 1: public
        body,
        _force_asl: true,
      },
    });
  } catch (e) {
    console.log(`update doc: ${id} 失败：`, e);
  }
  return res;
}

/**
 * 并发请求，同步到语雀
 * */
async function syncToYuque(
  namespace,
  posts,
  maxConcurrency = 5,
  public = 0,
  force = false
) {
  const limit = pLimit(maxConcurrency);
  const docs = await getTOC(namespace);


  const tasks = [];

  posts.map((post) => {
    tasks.push(
      limit(async () => {
        const currentDoc = docs.find((doc) => {
          return post.uid === doc.slug || post.indexFile?.uid === doc.slug;
        });
        // 已经存在，更新文档
        if (currentDoc && currentDoc.id) {
          if (!force) {
            console.log(
              `已存在该文档slug：${post.uid}，不需要更新：${post.title}`
            );
            return true;
          } else {  
            console.log(
              `已存在该文档slug：${post.uid}，强制更新：${post.title}`
            );
            let pathStr = post?.mdLink || post?.indexFile?.mdLink || "";
            if (pathStr) {
              let content = fs.readFileSync(
                path.resolve(__dirname, pathStr),
                "utf-8"
              );
              // `\n## 目录\n` + `<!-- toc -->`
              content = content.replace(`\n## 目录\n` + `<!-- toc -->`, "");
              // 去掉标题层级 1 的标题
              content = content.replace(/^#\s+.*\n/m, "");
              // [AGI](/post/nifydp6rzc.html) 变成 [AGI](/liguwe/post/nifydp6rzc)
              content = content.replace(
                /\[([^\]]+)\]\(\/post\/([^\s]+)\.html\)/g,
                "[$1](/liguwe/post/$2)"
              );
              console.log(`更新文档：${post.title}，slug：${post.uid || post.indexFile?.uid}`);
              return await update(
                namespace,
                currentDoc.id,
                post.title,
                content,
                public
              );
            }
          }
        }
        // 没有文档，则创建文档
        else {
          let pathStr = post?.mdLink || post?.indexFile?.mdLink || "";
          if (pathStr) {
            let content = fs.readFileSync(
              path.resolve(__dirname, pathStr),
              "utf-8"
            );
            // `\n## 目录\n` + `<!-- toc -->`
            content = content.replace(`\n## 目录\n` + `<!-- toc -->`, "");
            // 去掉标题层级 1 的标题
            content = content.replace(/^#\s+.*\n/m, "");
            // [AGI](/post/nifydp6rzc.html) 变成 [AGI](/liguwe/post/nifydp6rzc)
            content = content.replace(
              /\[([^\]]+)\]\(\/post\/([^\s]+)\.html\)/g,
              "[$1](/liguwe/post/$2)"
            );
            console.log(`创建文档：${post.title}，slug：${post.uid || post.indexFile?.uid}，path：${pathStr}`);
            return await create(
              namespace,
              post.title,
              post.uid || post.indexFile?.uid,
              content,
              public
            );
          }
        }
        return true;
      })
    );
  });

  // 等待所有请求完成
  return Promise.all(tasks);
}

/**
 * 更新知识库的 Toc
 * */
async function updateToc(namespace) {
  let res = null;
  let tocStr = fs.readFileSync(
    path.resolve(__dirname, "./yuque.SUMMARY.md"),
    "utf-8"
  );
  try {
    res = await client.repos.update({
      namespace,
      data: {
        toc: tocStr,
        public: 1,
        description: "liguwe.site 博客",
        slug: "post",
        name: "liguwe.site",
      },
    });
  } catch (e) {
    console.log(`update toc: ${namespace} 失败：`, e);
  }
  return res;
}

Promise.resolve().then(async () => {
  let flattenPosts = [];
  // 递归打平 sidebar
  const flattenSidebar = (sidebar) => {
    sidebar.forEach((item) => {
      if (item.type === "file") {
        flattenPosts.push(item);
      }
      if (item.children) {
        flattenPosts.push(item);
        flattenSidebar(item.children);
      }
    });
  };
  flattenSidebar(sidebar);
  await syncToYuque(namespace, flattenPosts, 5, 1, false);
  console.log("文档同步完成");
  await updateToc(namespace);
  console.log("Toc 更新完成");
});
