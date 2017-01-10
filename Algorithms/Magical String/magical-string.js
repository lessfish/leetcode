// Source : https://leetcode.com/problems/magical-string/
// Author : Han Zichi
// Date   : 2017-01-10

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
  let arr = [1, 2, 2];
  let index = 2;

  while (arr.length < n) {
    let item = arr[arr.length - 1] === 2 ? 1 : 2;
    for (let i = 0; i < arr[index]; i++)
      arr[arr.length] = item;
    index++;
  }

  let ans = 0;
  for (let i = 0; i < n; i++)
    (arr[i] === 1) && ans++;

  return ans;
};
