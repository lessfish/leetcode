// Source : https://leetcode.com/problems/remove-k-digits/
// Author : Han Zichi
// Date   : 2016-09-22

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let stack = [];
  let len = num.length;

  for (let i = 0; i < len; i++) {
    let item = num[i];
    if (!stack.length)
      stack.push(item);
    else {
      while (stack.length && item < stack[stack.length - 1] && len - i + stack.length - 1 >= len - k) // make sure that there are len - k items at least
        stack.pop();
      stack.push(item);
    }
  }

  // remove redundant items
  while (stack.length > len - k)
    stack.pop();

  let str = stack.join('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '0')
      return str.substring(i);
  }

  return '0';
};