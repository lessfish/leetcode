// Source : https://leetcode.com/problems/4sum-ii/
// Author : Han Zichi
// Date   : 2016-11-16

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let p = new Map();
  for (let i = 0, lenA = A.length; i < lenA; i++)
    for (let j = 0, lenB = B.length; j < lenB; j++) {
      let sum = A[i] + B[j];
      let count = ~~p.get(sum);
      p.set(sum, count + 1);
    }

  let ans = 0;
  for (let i = 0, lenC = C.length; i < lenC; i++)
    for (let j = 0, lenD = D.length; j < lenD; j++) {
      let sum = C[i] + D[j];
      ans += ~~p.get(-sum);
    }

  return ans;
};
