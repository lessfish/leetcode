// Source : https://leetcode.com/problems/additive-number/
// Author : Han Zichi
// Date   : 2016-01-09

/**
 * @param {string} num
 * @return {boolean}
 */

// use Depth-First-Search Algorithm

var ans;

function dfs(a, b, c, index, num) {
  if (ans)
    return;

  if (index === num.length) {
    if (a === -1 || b === -1 || c === -1)
      return;
    if ((+a) + (+b) === (+c))
      ans = true;
    return;
  }

  if (a === -1) {
    dfs(num[index], b, c, index + 1, num);
    return;
  }

  if (b === -1) {
    if (a !== '0')
      dfs(a + num[index], b, c, index + 1, num);

    dfs(a, num[index], c, index + 1, num);

    return;
  }

  if (c === -1) {
    if (b !== '0')
      dfs(a, b + num[index], c, index + 1, num);

    dfs(a, b, num[index], index + 1, num);
    return;
  }

  if (c !== '0') {
    if ((+a) + (+b) === (+c)) {
      dfs(b, c, -1, index, num);
    } else {
      if ((+a) + (+b) < (+c))
        return;
      dfs(a, b, c + num[index], index + 1, num);
    }
  } else {
    if (a === '0' && b === '0')
      dfs(b, c, -1, index, num);
  }
}

var isAdditiveNumber = function(num) {
  ans = false;
  dfs(-1, -1, -1, 0, num);
  return ans;
};