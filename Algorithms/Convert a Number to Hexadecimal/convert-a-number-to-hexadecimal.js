// Source : https://leetcode.com/problems/convert-a-number-to-hexadecimal/
// Author : Han Zichi
// Date   : 2016-09-26

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num > 0)
    return help(num);
  else if (num === 0)
    return '0';
  else {
    num = -num;
    return help(0xffffffff - num + 1);
  }

  function help(num) {
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let ans = '';

    while (num) {
      let mod = num % 16;
      ans = arr[mod] + ans;
      num = ~~(num / 16);
    }

    return ans;
  }
};