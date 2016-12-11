// Source : https://leetcode.com/problems/ones-and-zeroes/
// Author : Han Zichi
// Date   : 2016-12-11

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  /**
   * [count the number of '0' of a string]
   * @param  {string} str
   * @return {number}
   */
  function count(str) {
    let num = 0;
    for(let item of str)
      item === '0' && num++;

    return num;
  }

  // dp[i][j] represents the maximum number that made up by i 0s and j 1s
  let dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++)
      dp[i][j] = 0;
  }

  for (let i = 0, len = strs.length; i < len; i++) {
    let item = strs[i];
    let zeroNum = count(item);
    let oneNum = item.length - zeroNum;

    for (let j = m; j >= zeroNum; j--)
      for (let l = n; l >= oneNum; l--)
        dp[j][l] = Math.max(dp[j][l], dp[j - zeroNum][l - oneNum] + 1);
  }

  return dp[m][n];
};
