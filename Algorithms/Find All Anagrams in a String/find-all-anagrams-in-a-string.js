// Source : https://leetcode.com/problems/find-all-anagrams-in-a-string/
// Author : Han Zichi
// Date   : 2016-10-24

"use strict";

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let len = p.length;
  let hash = {};
  let ans = {};
  let ret = [];

  for (let i = 0, l = p.length; i < l; i++) {
    let index = p.charCodeAt(i) - 97;
    ans[index] = ~~ans[index] + 1;
  }

  for (let i = 0, l = s.length; i < l; i++) {
    let index = s.charCodeAt(i) - 97;
    hash[index] = ~~hash[index] + 1;

    if (i >= len) { // remove
      let index = s.charCodeAt(i - len) - 97;
      hash[index] = ~~hash[index] - 1;
    }

    if (i + 1 >= len) { // can compare
      help() && ret.push(i - len + 1);
    }
  }

  function help() {
    for (let i = 0; i < 26; i++) {
      if (~~hash[i] !== ~~ans[i])
        return false;
    }

    return true;
  }

  return ret;
};