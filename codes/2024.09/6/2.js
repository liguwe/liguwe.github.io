function quickSort(arr) {
  // base case: 数组为空或只包含一个元素时
  if (arr.length <= 1) {
    return arr;
  }
  var midIndex = Math.floor(arr.length / 2);
  var mid = arr.splice(midIndex, 1)[0];

  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([mid], quickSort(right));
}

// test
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(quickSort(arr)); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
var arr1 = [-1, -3, 1];
console.log(quickSort(arr1)); // [-3, -1, 1]
