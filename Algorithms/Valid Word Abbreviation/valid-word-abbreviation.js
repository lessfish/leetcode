// Source : https://leetcode.com/problems/valid-word-abbreviation
// Author : Han Zichi
// Date   : 2016-10-02

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
  // 排除孤立的 `0` 的干扰
  if (/([^1-9]|^)0+/.test(abbr))
    return false;

  abbr = abbr.replace(/\d+/g, "[A-z]{$&}");
  abbr = "^" + abbr + "$";

  return new RegExp(abbr).test(word);
};