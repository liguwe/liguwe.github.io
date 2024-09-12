Promise.resolve()
  .then(() => {
    return new Error("error!!!");
  })
  .then((res) => {
    console.log("then: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });

// Output:
// then:  Error: error!!!

Promise.resolve()
  .then(() => {
    return Promise.reject(new Error("error!!!"));
    // or
    throw new Error("error!!!");
  })
  .then((res) => {
    console.log("then: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });

// Output:
// catch:  Error: error!!!
