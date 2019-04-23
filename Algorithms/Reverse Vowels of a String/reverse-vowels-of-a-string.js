// Source : https://leetcode.com/problems/power-of-four/
// Author : Han Zichi
// Date   : 2016-04-26

/**
 * @param {string} s
 * @return {string}
 */
const vowelString = "aeiouAEIOU";
function getVowelArr(len, arr) {
  var vowelArr = [];

  for (var i = 0; i < len; i++) {
    if (vowelString.includes(arr[i])) {
      vowelArr.push(arr[i]);
    }
  }
  return vowelArr;
}
var reverseVowels = function(s) {
  var arr = s.split(""),
    len = arr.length;
  //first in last out
  let vowelStack = getVowelArr(len, arr);

  var ansStr = "";
  for (var i = 0; i < len; i++) {
    if (vowelString.includes(arr[i])) {
      ansStr += vowelStack.pop();
    } else {
      ansStr += arr[i];
    }
  }

  return ansStr;
};
