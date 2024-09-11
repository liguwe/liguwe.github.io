const promise = new Promise((resolve, reject) => {
  reject("error");
  resolve("success2");
});
promise
  .then((res) => {
    console.log("then1: ", res);
  })
  .then((res) => {
    console.log("then2: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  })
  .then((res) => {
    console.log("then3: ", res);
  });

// Output:
// catch:  error
// then3:  undefined
