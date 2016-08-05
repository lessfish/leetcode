// Source : https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
// Author : Han Zichi
// Date   : 2016-08-05

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  k = Math.min(nums1.length * nums2.length, k);
  var len = nums1.length;
  var a = [];
  var ans = [];

  for (var i = 0; i < len; i++)
    a[i] = 0;


  while (k--) {
    var minn = Infinity;
    var index;

    for (var i = 0; i < len; i++) {
      if (a[i] === nums2.length)
        continue;
      var sum = nums1[i] + nums2[a[i]];
      if (sum < minn) {
        minn = sum;
        index = i;
      }
    }

    ans.push([nums1[index], nums2[a[index]]]);
    a[index]++;
  }

  return ans;
};