// Source : https://leetcode.com/problems/heaters/
// Author : Han Zichi
// Date   : 2016-12-11

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {

  houses.sort(function(a, b) {return a - b});
  heaters.sort(function(a, b) {return a - b});

  let A = houses.length
    , B = heaters.length
    , j = 0
    , ans = 0;

  // enum each hourse
  for (let i = 0; i < A; i++) {
    let pos = houses[i]
      , minDis = Infinity; // the minimum radius that houses[i] can be covered

    while (heaters[j] < pos && j < B - 1)
      j++;

    // heaters[j - 1] is the one right before houses[i]
    // heaters[j] is the one right after houses[i]
    j > 0 && (minDis = Math.min(minDis, Math.abs(pos - heaters[j - 1])));
    minDis = Math.min(minDis, Math.abs(pos - heaters[j]));

    ans = Math.max(ans, minDis);

    j > 0 && j--;
  }

  return ans;
};
