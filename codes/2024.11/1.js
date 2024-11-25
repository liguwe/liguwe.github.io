const p = Promise.resolve(1);

p.then((res) => {
  console.log(res);
  return 2; // 等价于 return resolve(2)
})
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
    console.log(p);
  });
