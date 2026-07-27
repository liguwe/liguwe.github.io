const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

const { convertPublicationLinks } = require("./make.js");

const sourceRoot = "/workspace/os";
const sourcePath = path.resolve(
  sourceRoot,
  "notes/2026/328. AgentX：GPT 为什么会翻译.md",
);
const publicArticlePath = path.resolve(
  sourceRoot,
  "notes/2026/327. AgentX：LLM 为什么能生成 Token.md",
);
const options = {
  sourcePath,
  sourceRoot,
  validBlogSlugs: new Set(["327", "328"]),
  publishedArticlePaths: new Map([[publicArticlePath, "327"]]),
};

test("公开的 os/notes WikiLink 保留站内链接", () => {
  const content =
    "上一篇：[[notes/2026/327. AgentX：LLM 为什么能生成 Token|上一篇]]";

  assert.equal(
    convertPublicationLinks(content, options),
    "上一篇：[上一篇](/blog/327)",
  );
});

test("私有或未发布的 WikiLink 转成内部标题文本", () => {
  const content =
    "参考[[archive/旧笔记/为什么 GPT 会翻译？|以前的笔记]]。";

  assert.equal(
    convertPublicationLinks(content, options),
    "参考【内部：以前的笔记】。",
  );
});

test("os 仓库外的 Markdown 链接转成内部标题文本", () => {
  const content =
    "参考[本地 JD 原始材料](../../../FDE/JD/raw/README.md)。";

  assert.equal(
    convertPublicationLinks(content, options),
    "参考【内部：本地 JD 原始材料】。",
  );
});

test("公开的 os/notes Markdown 链接改成站内链接", () => {
  const content =
    "上一篇：[LLM 为什么能生成 Token](./327. AgentX：LLM 为什么能生成 Token.md)";

  assert.equal(
    convertPublicationLinks(content, options),
    "上一篇：[LLM 为什么能生成 Token](/blog/327)",
  );
});

test("公开网页链接保持不变", () => {
  const content =
    "参考[Attention Is All You Need](https://arxiv.org/abs/1706.03762)。";

  assert.equal(convertPublicationLinks(content, options), content);
});
