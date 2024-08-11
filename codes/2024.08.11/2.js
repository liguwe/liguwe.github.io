/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    /*************************************************
     * ::::① 第一步： 定义 7 个变量并初始化
     ************************************************/
        // 记录窗口所需要的字符及其个数
    const need = new Map();
    // 初始化 need
    for (const c of t) {
        need.set(c, (need.get(c) || 0) + 1);
    }
    // 记录当前窗口中的字符及其个数
    const window = new Map();
    // 双指针
    let left = 0;
    let right = 0;
    // 已经符合条件的字符个数
    let valid = 0;
    // 记录最小覆盖子串的起始索引及长度
    let start = 0;
    let len = Infinity;
    /*************************************************
     * :::::② 第二步：开始移动右指针，扩大窗口
     ************************************************/
    for (let i = 0; i < s.length; i++) {
        const c = s[i]; // c 是将移入窗口的字符
        right++;// 右移窗口
        // 如果 c 是所需字符，则更新窗口数据
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            // 如果 window 中字符 c 的数量达到 need 中字符 c 的数量，则 valid++
            // valid 表示窗口中满足 need 条件的字符个数，所以它是去重的
            // 例如 need 中有 2 个 a，window 中也有 2 个 a，那么 valid 只会加 1
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        /*************************************************
         * ::::③ 第三步：判断左侧窗口是否要收缩，条件是 valid === need.size
         ************************************************/
        while (valid === need.size) {
            // 这个时候满足条件，记录最小覆盖子串
            // 更新 start 和 len, 用于最后返回结果
            if (right - left < len) {
                start = left;
                len = right - left;
            }

            const d = s[left];// d 是将移出窗口的字符
            // 左移窗口
            left++;

            // 如果 d 是所需字符，同事需要更新窗口数据 和 valid 值
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    return len === Infinity ? '' : s.substr(start, len);
};
