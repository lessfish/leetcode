// Source : https://leetcode.com/problems/relative-ranks/
// Author : Han Zichi
// Date   : 2017-02-07

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let res = [];

  nums.forEach((item, index) => {
    res.push({
      index: index,
      score: item,
      rank: null
    });
  });

  res.sort((a, b) => (b.score - a.score));

  for (let i = 0, len = res.length; i < len; i++) {
    if (i === 0)
      res[i].rank = "Gold Medal";
    else if (i === 1)
      res[i].rank = "Silver Medal";
    else if (i === 2)
      res[i].rank = "Bronze Medal";
    else
      res[i].rank = (i + 1) + '';
  }

  res.sort((a, b) => (a.index - b.index));

  let ans = [];

  res.forEach((item) => {
    ans.push(item.rank);
  });

  return ans;
};
