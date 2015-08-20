// Source : https://leetcode.com/problems/permutation-sequence/
// Author : Han Zichi
// Date   : 2015-08-20

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

function find(index, hash) {
  var num = 0;
  for (var i = 1; i <= 9; i++) {
    if (!hash[i]) num++;
    if (num === index) {
      hash[i] = true;
      return i;
    }
  }
}

var getPermutation = function(n, k) {
  // quickly get n!
  var a = [];
  a[0] = 1;
  for (var i = 1; i <= 9; i++)
    a[i] = a[i - 1] * i;

  var ans = ''
    , hash = [];  // the number has been used

  // fill one by one
  for (var i = n; i >= 1; i--) {
    var tmp = Math.ceil(k / a[i - 1]);
    k -= (tmp - 1) * a[i - 1];
    var index = find(tmp, hash);
    ans += index;
  } 

  return ans;
};