// Source : https://leetcode.com/problems/keyboard-row/
// Author : Han Zichi
// Date   : 2017-02-07

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let keys = [
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm'
  ];

  let ans = [];

  words.forEach(function(item) {
    let s = new Set();
    let word = item.toLowerCase();

    for (let letter of word) {
      for (let i = 0; i < 3; i++)
        if (keys[i].indexOf(letter) !== -1) {
          s.add(i);
          break;
        }
    }

    if (s.size === 1)
      ans.push(item);
  });

  return ans;
};
