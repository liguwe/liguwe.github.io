// aabcccccaaa 会变为 a2b1c5a3

function fn(str) {
  let num = 1;
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      num++;
    } else {
      res.push(`${str[i]}${num}`);
      num = 1;
    }
  }
  return res.join("");
}

console.log(fn("aabcccccaaa"));
