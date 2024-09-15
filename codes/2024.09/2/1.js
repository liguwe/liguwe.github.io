Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .then(() => {
        return Promise.resolve(4);
    }).then(console.log)

// 打印结果 4
