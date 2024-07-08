// 0.12.0及以上版本用法
const { matterMarkdownAdapter } = require('@elog/cli')


/**
 * @description 格式化文档内容，处理文档内容，整体缩进标题层级
 * @param  doc 的类型定义为 DocDetail
 * @param  imageClient 图床下载器，可用于图片上传
 * @return 返回处理后的文档对象
 * @reference https://elog.1874.cool/notion/deploy-platform#formatext-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E
 */
const format = async (doc, imageClient) => {
    /*************************************************
     * ::::处理 markdown 文档内容::::
     * 首先 H1 为 # 当前文档的标题
     * 如果是# 标题H1，则会解析为 ## 标题H1
     * 如果是## 标题H2，则会解析为 ### 标题H2
     * 如果是### 标题H3，则会解析为 #### 标题H3
     * 如果是#### 标题H4，则会解析为 ##### 标题H4
     * 如果是##### 标题H5，则会解析为 ###### 标题H5
     * 如果是###### 标题H6，则会解析为 标题H6
     * 即标题层级会降低一级，如果是 H6 则会解析为正文
     ************************************************/
    doc.body = doc.body.replace(/^(#+)/gm, (match, p1) => {
        if (p1.length === 6) {
            return '';
        }
        return `#${p1}`;
    });
    // doc.body = matterMarkdownAdapter(doc); 会在每个文档的头部添加一个 matter 标签，用于记录文档的元数据，用不着的话可以注释掉
    doc.body = `# ${doc.properties.title}\n\n${doc.body}`;
    return doc;
};

module.exports = {
    format,
};
