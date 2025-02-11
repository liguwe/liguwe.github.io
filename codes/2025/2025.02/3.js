var maxSlidingWindow = function (nums, k) {
    let p1 = 0;
    let p2 = k;
    let n = nums.length;
    let res = [];
    for (; p2 <= n; p2++) {
        let max = Math.max(...nums.slice(p1, p2));
        res.push(max);
        p1++;
    }
    return res;
};
