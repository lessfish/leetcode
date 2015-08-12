// Source : https://leetcode.com/problems/median-of-two-sorted-arrays/
// Author : Han Zichi
// Date   : 2015-08-10

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// the test data is weak, so..

var findMedianSortedArrays = function(nums1, nums2) {
  var s = nums1.concat(nums2);
  s.sort(function(a, b) {
    return a - b;
  });

  var len = s.length;
  if (len & 1) return s[~~(len / 2)];
  else return (s[len / 2 - 1] + s[len / 2]) / 2;
};