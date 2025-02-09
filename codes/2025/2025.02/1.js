var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    let res = n & (n - 1);
    return res === 0;
};
