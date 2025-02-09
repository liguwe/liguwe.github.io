/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let S = new Set();
    let res = new Set();
    let left = 0;
    let right = 0;
    while (right < s.length) {
        // 扩大窗口，移入字符
        right++;
        // 当子串的长度达到要求
        if (right - left == 10) {
            let str = s.substring(left, right);
            if (S.has(str)) {
                res.add(str);
            }
            S.add(str);
            // 缩小窗口，移出字符
            left++;
        }
    }
    return [...res];
};
