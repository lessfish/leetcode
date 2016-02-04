// Source : https://leetcode.com/problems/3sum/
// Author : Han Zichi
// Date   : 2016-02-04

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var hash = {}
    , len = nums.length;

  nums.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < len; i++) {
    var item = nums[i];
    if (!hash[item])
      hash[item] = 1;
    else 
      hash[item]++;
  }

  var ans = [];
  var hashSet = {};

  for (var i = 0; i < len; i++)
    for (var j = i + 1; j < len; j++) {
      var a = nums[i]
        , b = nums[j]
        , c = 0 - a - b;

      if (c < b) 
        break;

      if (hashSet[a + ',' + b + ',' + c])
        continue;

      hash[a]--;
      hash[b]--;

      if (hash[c]) {
        hashSet[a + ',' + b + ',' + c] = true;
        ans.push([a, b, c]);
      }

      hash[a]++;
      hash[b]++;
    }

    return ans;
};