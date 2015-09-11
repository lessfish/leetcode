// Source : https://leetcode.com/problems/restore-ip-addresses/
// Author : Han Zichi
// Date   : 2015-09-11

/**
 * @param {string} s
 * @return {string[]}
 */

var res, ans;

function check(str) { // 0 <= str <= 255
  if (!str.length)
    return false;
  if (str.length !== Number(str).toString().length)
    return false;
  if (Number(str) > 255)
    return false;
  return true;
}

function dfs(str, index, arrayIndex, s) {
  if (Number(str) > 255)
    return;
  if (arrayIndex === 4)
    return;

  if (index === s.length) {
    if (check(str) && arrayIndex === 3) {
      res[arrayIndex] = str;
      ans.push(res[0] + '.' + res[1] + '.' + res[2] + '.' + res[3]);
    }
    return;
  }

  dfs(str + s[index], index + 1, arrayIndex, s);

  if (check(str)) {
    res[arrayIndex] = str;
    dfs(s[index], index + 1, arrayIndex + 1, s);
  }
}

var restoreIpAddresses = function(s) {
  res = [], ans = [];
  dfs('', 0, 0, s);
  return ans;
};