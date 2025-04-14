#!/usr/bin/env sh

# 先清空，然后新建 src/post目录
rm -rf src/post && mkdir -p src/post

# 生成 sidebar.json
node src/obsidian.js

# 生成 summary.md
node src/summary.js


# 本地启动
mdbook serve
