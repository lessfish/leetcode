// Source : https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {string} digits
 * @return {string[]}
 */
var ans, tmp;

function dfs(str, idx, digits) {
  if (idx === digits.length) {
    ans.push(str);
    return;
  }

  var num = Number(digits[idx]);
  if (num <= 1)
    dfs(str, idx + 1, digits);
  else {
    for (var i = 0, len = tmp[num].length; i < len; i++)
      dfs(str + tmp[num][i], idx + 1, digits);
  }
}

var letterCombinations = function(digits) {
  if (!digits.length)
    return [];

  tmp = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'],
  ans = [];

  dfs('', 0, digits);
  return ans;
};