// 二分查找
function searchIndex(arr, target) {
  // 左右指针
  let left = 0;
  let right = arr.length - 1;

  // 当左指针小于等于右指针时，继续查找
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      // 如果目标值小于中间值，则说明目标值在右侧，更新左指针
      // 在右半边查找
      left = mid + 1;
    } else if (arr[mid] > target) {
      // 如果目标值大于中间值，则说明目标值在左侧，更新右指针
      // 在左半边查找
      right = mid - 1;
    } else if (arr[mid] === target) {
      // 如果找到目标，直接返回即可
      return mid;
    }
  }
  // 未找到
  return -1;
}

function searchLeftIndex(arr, target) {
  var left = 0,
    right = nums.length - 1;
  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] == target) {
      // 别返回，锁定左侧边界
      right = mid - 1;
    }
  }
  // 判断 target 是否存在于 nums 中
  if (left < 0 || left >= nums.length) {
    return -1;
  }
  // 判断一下 nums[left] 是不是 target
  return nums[left] == target ? left : -1;
}

var searchRightIndex = function (nums, target) {
  var left = 0,
    right = nums.length - 1;
  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] == target) {
      // 别返回，锁定右侧边界
      left = mid + 1;
    }
  }
  // 由于 while 的结束条件是 right == left - 1，且现在在求右边界
  // 所以用 right 替代 left - 1 更好记
  if (right < 0 || right >= nums.length) {
    return -1;
  }
  return nums[right] == target ? right : -1;
};
