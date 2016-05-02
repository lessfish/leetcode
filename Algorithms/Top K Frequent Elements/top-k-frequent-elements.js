// Source : https://leetcode.com/problems/top-k-frequent-elements/
// Author : Han Zichi
// Date   : 2016-05-01

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var obj = {};
  nums.forEach(function(item) {
    if (!obj[item])
      obj[item] = 1;
    else 
      obj[item]++;
  });

  var arr = [];

  for (var key in obj) {
    arr.push({key: key, value: obj[key]});
  }

  arr.sort(function(a, b) {
    return b.value - a.value;
  });

  var ans = [];
  for (var i = 0; i < k; i++)
    ans.push(+arr[i].key);

  return ans;
};