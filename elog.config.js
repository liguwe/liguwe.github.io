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
            catalog: true,
            format: 'markdown',
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
