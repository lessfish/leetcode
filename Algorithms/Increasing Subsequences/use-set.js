// Source : https://leetcode.com/problems/increasing-subsequences/
// Author : Han Zichi
// Date   : 2017-01-22

// maybe not a good solution, the runtime is around TLE time

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let len = nums.length
    , ans = []
    , res = [];

  let s = new Set();

  let dfs = (index) => {
    if (res.length > 1) {
      let str = res.toString();
      if (!s.has(str)) {
        ans.push(res.concat());
        s.add(str);
      }
    }

    for (let i = index; i < len; i++) {
      let item = nums[i];

      if (res.length === 0 || item >= res[res.length - 1]) {
        res.push(item);
        dfs(i + 1);
        res.pop();
      }
    }
  };

  dfs(0);

  return ans;
};
