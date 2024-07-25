#!/usr/bin/env sh

# 生成 sidebar.json
node src/obsidian.js

# 生成 summary.md
node src/summary.js


# 本地启动
mdbook serve --open
