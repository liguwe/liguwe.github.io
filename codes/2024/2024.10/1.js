async function asyncl() {
  try {
    await Promise.reject("error!!!");
  } catch (e) {
    console.log(e);
  }
}

asyncl();
