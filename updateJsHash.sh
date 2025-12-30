#!/bin/bash

# 生成时间戳
TIMESTAMP=$(date +%s)

# 定义文件路径
INDEX_FILE="theme/index.hbs"

# 备份原文件
cp "$INDEX_FILE" "$INDEX_FILE.bak"

# 使用 sed 替换 toc.js 的引用，添加时间戳参数
# 匹配 <script src="{{ path_to_root }}toc.js"></script> 或 <script src="{{ path_to_root }}toc.js?v=任意数字"></script>
sed -i '' "s|<script src=\"{{ path_to_root }}toc.js\(?\[^\"]*\)\?\"></script>|<script src=\"{{ path_to_root }}toc.js?v=$TIMESTAMP\"></script>|g" "$INDEX_FILE"

echo "✅ 已更新 toc.js 的时间戳为: $TIMESTAMP"

# 删除备份文件
rm "$INDEX_FILE.bak"

