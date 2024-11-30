console.profile("P1"); // 开始性能分析
for (let i = 0; i < 10000; i++) {
  document.createElement("div");
}

console.profileEnd("P1"); // 结束性能分析
