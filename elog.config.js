module.exports = {
    write: {
        platform: 'yuque',
        yuque: {
            token: process.env.YUQUE_TOKEN,
            login: process.env.YUQUE_LOGIN,
            repo: process.env.YUQUE_REPO,
            onlyPublic: false,
            onlyPublished: true,
        },
    },
    deploy: {
        platform: 'local',
        local: {
            outputDir: './post',
            filename: 'urlname',
            catalog: false, // 是否生成目录，在 src/docs 目录下生成目录文件,默认打平的就好
            format: 'markdown',
            formatExt:'./formatExt.js' // 格式化文档内容，处理文档内容，整体缩进标题层级
        },
    },
    image: {
        enable: true,
        platform: 'local',
        local: {
            outputDir: './post/images',
            prefixKey: './images',
            pathFollowDoc: false,
        }
    }
}
