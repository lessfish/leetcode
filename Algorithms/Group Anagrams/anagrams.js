// Source : https://leetcode.com/problems/anagrams/
// Author : Han Zichi
// Date   : 2016-08-12

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var ans = [];
  var hash = {};

  strs.forEach(function(item) {
    var str = item.split('').sort().join('');
    if (hash[str] === undefined) {
      hash[str] = ans.length;
      ans.push([item]);
    } else {
      ans[hash[str]].push(item);
    }
  });

  return ans;
};