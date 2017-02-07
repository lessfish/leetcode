// Source : https://leetcode.com/problems/diagonal-traverse/
// Author : Han Zichi
// Date   : 2017-02-07

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let len = nums.length;
  nums = nums.concat(nums.slice(0, len - 1));

  let ans = [];
  let stack = [];

  // 单调队列？
  nums.forEach((item, index) => {
    if (index === 0) {
      stack.push({
        num: item,
        index: index
      });
    } else {
      while (true) {
        if (!stack.length) break;
        if (item > stack[stack.length - 1].num) {
          let lastItem = stack.pop();
          ans[lastItem.index] = item;
        } else {
          break;
        }
      }

      stack.push({
        num: item,
        index: index
      });
    }
  });

  ans = ans.slice(0, len);
  for (let i = 0; i < len; i++)
    if (ans[i] === undefined)
      ans[i] = -1;

  return ans;
};
