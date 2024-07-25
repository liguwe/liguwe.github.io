/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);

  const res1 = [...s1].filter((num) => !s2.has(num));
  const res2 = [...s2].filter((num) => !s1.has(num));

  return [res1, res2];
};
