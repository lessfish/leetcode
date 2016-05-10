// Source : https://leetcode.com/problems/median-of-two-sorted-arrays/
// Author : Han Zichi
// Date   : 2016-05-10

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
  // 合并数组，返回有序数组
  var s = merge(nums1, nums2);

  var len = s.length;

  // 根据数组长度求中位数
  if (len & 1) return s[~~(len / 2)];
  else return (s[len / 2 - 1] + s[len / 2]) / 2;
};

function merge(left, right) {
  var tmp = [];

  while (left.length && right.length) {
    if (left[0] < right[0])
      tmp.push(left.shift());
    else
      tmp.push(right.shift());
  }

  return tmp.concat(left, right);
}