// Source : https://leetcode.com/problems/4sum/
// Author : Han Zichi
// Date   : 2016-02-04

// 400ms 水过，基本是 worst solution
// 思路是先计算出两两的和，存入 hash 数组，把和当做 key
// 然后再次枚举，看做 (a+b)=target-(c+d) 形式
// 用 hashStr 保存答案

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort(function(a, b) {
    return a - b;
  });

  var hash = [];

  var len = nums.length;

  for (var i = 0; i < len; i++)
    for (var j = i + 1; j < len; j++) {
      var a = nums[i]
        , b = nums[j]
        , c = a + b;

      if (hash[c] === undefined) 
        hash[c] = [[i, j]];
      else 
        hash[c].push([i, j]);
    }

  var ans = [];

  var hashSet = {};

  for (var i = 0; i < len; i++)
    for (var j = i + 1; j < len; j++) {
      var a = nums[i]
        , b = nums[j]
        , sum = target - a - b;

      if (!hash[sum])
        continue;

      for (var k = 0, _len = hash[sum].length; k < _len; k++) {
        var item = hash[sum][k];

        if (item[0] === i || item[1] === i || item[0] === j || item[1] === j)
          continue;

        var c = nums[item[0]]
          , d = nums[item[1]];

        var tmp = [a, b, c, d].sort(function(a, b) {
          return a - b;
        });

        var str = tmp.join(',');
        if (!hashSet[str]) {
          hashSet[str] = true;
          ans.push(tmp);
        }
      }
    }

    return ans;
};