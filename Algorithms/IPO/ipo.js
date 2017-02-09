// Source : https://leetcode.com/problems/ipo/
// Author : Han Zichi
// Date   : 2017-02-09

/**
 * @param {number} k
 * @param {number} W
 * @param {number[]} Profits
 * @param {number[]} Capital
 * @return {number}
 */
var findMaximizedCapital = function(k, W, Profits, Capital) {
  let len = Profits.length
    , res = [];

  for (let i = 0; i < len; i++) {
    res.push({
      c: Capital[i],
      p: Profits[i]
    });
  }

  res.sort((a, b) => (b.p - a.p));

  let stack = []
    , index = 0;

  while (k && index !== len) {

    if (res[index].c <= W) {
      W += res[index].p;
      k--;

      while (true && k) {
        let f = false;
        for (let i = 0, l = stack.length; i < l; i++) {
          if (stack[i].c <= W) {
            W += stack[i].p;
            f = true;
            stack.splice(i, 1);
            k--;
            break;
          }
        }
        if (!f || !k) break;
      }
    } else {
      stack.push(res[index]);
    }

    index++;
  }

  return W;
};
