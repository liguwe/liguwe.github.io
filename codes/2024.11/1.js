Promise.resolve().then(() => {
  console.log("方式2");
});

// 这两种方式效果相同
queueMicrotask(() => {
  console.log("方式1");
});
