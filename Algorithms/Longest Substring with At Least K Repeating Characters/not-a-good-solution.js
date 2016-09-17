// Source : https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
// Author : Han Zichi
// Date   : 2016-09-17
// Runtime: 105 ms

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if (k === 1)
    return s.length;

  let len = s.length;
  let ans = 0;
  let num = [];
  let f = {};

  for (let i = 0; i < len; i++) {
    var item = s[i];
    if (!f[item])
      f[item] = [i];
    else
      f[item].push(i);

    num[i] = f[item].length;
  }

  let minn = Infinity;
  for (let key in f)
    minn = Math.min(minn, f[key].length);

  if (k <= minn)
    return s.length;

  // 枚举 substring 的起点
  for (let i = 0; i < len; i++) {
    let rightPos = i - 1;
    let hash = {};

    for (let j = i; j < len; j++) {
      let item = s[j];
      if (!hash[item]) {
        hash[item] = true;

        let a = num[j]; // item 是第几个同类 item
        let pos = f[item][a + k - 2]; // 确保 substring 中有 k 个 item，至少需要到达的位置
        if (pos === undefined)  // 没有这么多 item 元素了
          break;
        rightPos = Math.max(rightPos, pos);
      }

      if (j >= rightPos) {
        ans = Math.max(ans, j - i + 1);
      }
    }
  }

  return ans;
};