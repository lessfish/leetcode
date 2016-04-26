// Source : https://leetcode.com/problems/power-of-four/
// Author : Han Zichi
// Date   : 2016-04-26

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var vowelString = "aeiouAEIOU"
    , arr = s.split('')
    , len = arr.length;
  
  var vowelArr = [];

  for (var i = 0; i < len; i++) {
    if (vowelString.indexOf(arr[i]) !== -1)
      vowelArr.push(arr[i]);
  }

  vowelArr.reverse();

  var ansStr = ''
    , idx = 0;

  for (var i = 0; i < len; i++) {
    if (vowelString.indexOf(arr[i]) !== -1)
      ansStr += vowelArr[idx++];
    else 
      ansStr += arr[i];
  }
  
  return ansStr;
};