async function async1() {
  console.log("1");
  await async2();
  console.log("2");
  setTimeout(() => {
    console.log("3");
  }, 0);
}
async function async2() {
  setTimeout(() => {
    console.log("4");
  }, 0);
  console.log("5");
}

async1();

// 先于第 5 行解析到
setTimeout(() => {
  console.log("6");
}, 0);

console.log("7");

// 1
// 5
// 7
// 4
// 6
// 2
// 3
