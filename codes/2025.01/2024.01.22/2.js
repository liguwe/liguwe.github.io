/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function (regions, region1, region2) {
    let mapping = new Map();
    for (let item of regions) {
        let first = item[0];
        for (let it of item.slice(1)) {
            mapping.set(it, first);
        }
    }

    return LCA(region1, region2);

    function LCA(p, q) {
        let p1 = p;
        let p2 = q;
        while (p1 !== p2) {
            if (mapping.has(p1)) {
                // 向前走一步
                p1 = mapping.get(p1);
            } else {
                p1 = q; // 注意不是 p1 = p2
            }
            if (mapping.has(p2)) {
                // 向前走一步
                p2 = mapping.get(p2);
            } else {
                p2 = p; // 注意不是 p2 = p1
            }
        }
        return p1;
    }
};
