async function async1() {
  try {
    await Promise.reject("1");
  } catch (e) {
    console.log("e:", e);
  }
  console.log("2");
  return Promise.resolve("3");
}
async1().then((res) => console.log(res));
console.log("4");

// 4 e:1 2 3
