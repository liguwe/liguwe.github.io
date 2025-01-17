class UF {
    constructor(n) {
        this._count = n; // 连通分量
        //// 记录每个节点的父节点： x → parent[x]
        this.parent = new Array(n);
        // 树的重量：每棵树包含的节点数
        this.size = new Array(n);
        // 初始化，每个节点都是一个独立的连通分量
        for (let i = 0; i < n; i++) {
            this.parent[i] = i; // 父节点指针初始指向自己
            this.size[i] = 1;
        }
    }

    // 将节点 p 和节点 q 连通
    union(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if (rootP === rootQ) return;
        // 小树接到大树下面，较平衡
        if (this.size[rootP] > this.size[rootQ]) {
            this.parent[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        } else {
            this.parent[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        }
        // 两个分量合二为一
        this._count--;
    }

    // 判断节点 p 和节点 q 是否连通
    connected(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);
        return rootP === rootQ;
    }

    // 返回节点 x 的根节点
    // 每次 while 循环都会让部分子节点向上移动，这样每次调用 find 函数向树根遍历的同时，顺手就将树高缩短了
    find(x) {
        // 路径压缩
        while (this.parent[x] !== x) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }

    // 返回图中的连通分量个数
    count() {
        return this._count;
    }
}
