#!/usr/bin/env sh

# 生成 sidebar.json →  生成 summary.md
node src/obsidian.js && node src/summary.js


# set -e 是一个 Bash shell 命令，它指示 shell 在执行命令时遇到任何错误即停止执行脚本，并返回一个非零退出状态码。
set -e
git add .

# 获取当前日期和时间，并格式化为YYYY-MM-DD-HH-MM
current_datetime=$(date +"%Y-%m-%d %H:%M")

# 构建 commit 消息
commit_message="feat: deploy at ${current_datetime}"

git commit -am "$commit_message"

git push
