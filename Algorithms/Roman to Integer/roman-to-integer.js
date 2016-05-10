// Source : https://leetcode.com/problems/roman-to-integer/
// Author : Han Zichi
// Date   : 2016-05-04

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var hash = {};
  hash["I"] = 1;
  hash["X"] = 10;
  hash["C"] = 100;
  hash["M"] = 1000;
  hash["V"] = 5;
  hash["L"] = 50;
  hash["D"] = 500;

  var sum = 0;

  for (var i = 0, len = s.length; i < len; i++) {
    var item = hash[s[i]];

    var nextItem = i + 1 === len ? 0 : hash[s[i + 1]];

    if (nextItem > item) {
      sum += nextItem - item;
      i++;
    } else 
      sum += item;
  } 

  return sum;
};