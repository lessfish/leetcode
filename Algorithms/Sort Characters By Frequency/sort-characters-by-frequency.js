// Source : https://leetcode.com/problems/sort-characters-by-frequency/
// Author : Han Zichi
// Date   : 2016-11-04

"use strict";

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let hash = {};
  for (let item of s)
    hash[item] = ~~hash[item] + 1;

  let arr = [];
  Object.keys(hash).forEach(function(item) {
    arr.push({item: item, count: hash[item]});
  });

  arr.sort(function(a, b) {
    return b.count - a.count;
  });

  let ans = '';
  arr.forEach(function(item) {
    while (item.count--)
      ans += item.item;
  });

  return ans;
};