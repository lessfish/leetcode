// Source : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Author : Han Zichi
// Date   : 2016-08-19

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var hash = {};
  for (var i = 0, len = numbers.length; i < len; i++) {
    var item = target - numbers[i];
    if (hash[item] === undefined) {
      hash[numbers[i]] = i;
      continue;
    }
    return [hash[item] + 1, i + 1];
  }
};