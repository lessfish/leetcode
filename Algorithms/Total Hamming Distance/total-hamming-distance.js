// Source : https://leetcode.com/problems/total-hamming-distance/
// Author : Han Zichi
// Date   : 2016-12-21

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  let one = []
    , len = nums.length;

  nums.forEach(function(item) {
    let index = 0;
    while (item) {
      if (item & 1)
        one[index] = ~~one[index] + 1;

      item >>= 1;
      index++;
    }
  });

  let ans = 0;
  for (let i = 0, oneLen = one.length; i < oneLen; i++) {
    let oneNum = ~~one[i]
      , zeroNum = len - oneNum;

    ans += oneNum * zeroNum;
  }

  return ans;
};
