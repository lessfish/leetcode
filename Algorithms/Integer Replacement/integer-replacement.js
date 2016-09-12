// Source : https://leetcode.com/problems/integer-replacement/
// Author : Han Zichi
// Date   : 2016-09-12

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  var minn = {};
  minn[n] = 0;

  var q = [{num: n, step: 0}];
  while (q.length) {
    var item = q.shift()
      , num = item.num
      , step = item.step;

    if (num === 1)
      break;

    if (num & 1) {
      if (minn[num + 1] === undefined) {
        q.push({num: num + 1, step: step + 1});
        minn[num + 1] = step + 1;
      }
      if (minn[num - 1] === undefined) {
        q.push({num: num - 1, step: step + 1});
        minn[num - 1] = step + 1;
      }
    } else {
      if (minn[num / 2] === undefined) {
        q.push({num: num / 2, step: step + 1});
        minn[num / 2] = step + 1;
      }
    }
  }

  return minn[1];
};