// Source : https://leetcode.com/problems/daily-temperatures/description/
// Author : Fish.Yu
// Date   : 2017-12-26

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let hash = []
  let ans = []

  for (let i = temperatures.length; i--; ) {
    let temperature = temperatures[i]
    ans[i] = Infinity

    for (let j = temperature + 1; j <= 100; j++) {
      if (hash[j] && hash[j] - i < ans[i]) {
        ans[i] = hash[j] - i
      }
    }

    if (ans[i] === Infinity) ans[i] = 0
    hash[temperature] = i
  }

  return ans
};