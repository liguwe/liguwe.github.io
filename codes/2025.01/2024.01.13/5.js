// 防抖
function func1(fn, ms) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
}

// 节流
function func1(fn, ms) {
  let timer = null;
  let start = 0;
  return function () {
    if (Date.now() - start > ms) {
      fn();
    }
  };
}
