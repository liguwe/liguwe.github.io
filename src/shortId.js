const crypto = require("crypto");

class ShortIdGenerator {
  constructor(options = {}) {
    this.options = {
      length: options.length || 10,
      alphabet:
        options.alphabet ||
        "0123456789abcdefghijklmnopqrstuvwxyz",
      algorithm: options.algorithm || "md5",
    };
  }

  generate(input) {
    // 创建哈希
    const hash = crypto
      .createHash(this.options.algorithm)
      .update(input)
      .digest("hex");

    // 将哈希转换为数字
    let number = BigInt(`0x${hash}`);

    // 使用这个数字生成短 ID
    let shortId = "";
    const alphabetLength = BigInt(this.options.alphabet.length);

    while (shortId.length < this.options.length) {
      const remainder = number % alphabetLength;
      shortId = this.options.alphabet[Number(remainder)] + shortId;
      number = number / alphabetLength;
    }

    return shortId;
  }

  generateUrlSafe(input) {
    const hash = crypto
      .createHash(this.options.algorithm)
      .update(input)
      .digest("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");

    return hash.substr(0, this.options.length);
  }
}

module.exports = ShortIdGenerator;

// 使用示例
// const generator = new ShortIdGenerator({
//   length: 8, // 生成的 ID 长度
//   algorithm: "md5", // 使用的哈希算法
//   // 自定义字母表（可选）
//   alphabet: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
// });

// // 测试函数
// function runTests() {
//   const testCases = [
//     "https://example.com/very/long/url",
//     "user123@email.com",
//     "这是一个中文测试",
//     "Hello, World!",
//   ];

//   console.log("=== 基本生成测试 ===");
//   testCases.forEach((input) => {
//     const id = generator.generate(input);
//     console.log(`Input: ${input}`);
//     console.log(`ShortId: ${id}`);
//     console.log("---");
//   });

//   console.log("=== URL 安全版本测试 ===");
//   testCases.forEach((input) => {
//     const id = generator.generateUrlSafe(input);
//     console.log(`Input: ${input}`);
//     console.log(`ShortId: ${id}`);
//     console.log("---");
//   });

//   // 一致性测试
//   console.log("=== 一致性测试 ===");
//   const testString = "test-string";
//   const results = new Set();
//   for (let i = 0; i < 5; i++) {
//     results.add(generator.generate(testString));
//   }
//   console.log(`同一输入的5次结果是否相同: ${results.size === 1 ? "是" : "否"}`);
// }

// // 运行测试
// runTests();
