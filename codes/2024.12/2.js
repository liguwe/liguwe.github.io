// const readline = require('readline');
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// });
// rl.on('line', function(data){
//    console.log(data);
// })
function pathSum(root) {
  let res = [];
  function traverse(root, paths) {
    paths.push(root.val);
    if (!root) {
      return;
    }
    if (!root.left || !root.right) {
      res.push([...paths]);
      return;
    }
    traverse(root.left, paths);
    paths.pop();
    traverse(root.right, paths);
    paths.pop();
  }
  traverse(root, []);

  let sum = 0;
  console.log(res);
  res.forEach((item) => {
    sum += parseInt(item.join(""));
  });
  return sum;
}
let s = {
  left: {
    val: 9,
    left: {
      val: 5,
    },
    right: {
      val: 1,
    },
  },
  right: {
    val: 0,
  },
  val: 4,
};
console.log(pathSum(s));
