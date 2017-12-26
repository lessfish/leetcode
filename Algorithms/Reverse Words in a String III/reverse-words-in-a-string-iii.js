// Source : https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
// Author : Fish.Yu
// Date   : 2017-12-26

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(' ').map(item => item.split('').reverse().join(''))
  return arr.join(' ')
};