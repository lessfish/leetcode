// Source : https://leetcode.com/problems/intersection-of-two-arrays-ii/
// Author : Han Zichi
// Date   : 2016-05-21

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var hash1 = {};
  var hash2 = {};

  nums1.forEach(function(item) {
    if (!hash1[item])
      hash1[item] = 1; 
    else 
      hash1[item]++;
  });

  nums2.forEach(function(item) {
    if (!hash2[item])
      hash2[item] = 1; 
    else 
      hash2[item]++;
  });

  var ans = [];

  for (var k in hash1) {
    var times = Math.min(hash1[k], hash2[k] || 0);
    while (times--)
      ans.push(+k);
  }
    
  return ans;
};