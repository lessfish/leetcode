// Source : https://leetcode.com/problems/palindrome-pairs/
// Author : Han Zichi
// Date   : 2016-05-14

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  var hash = [];

  var len = words.length;

  for (var i = 0; i < len; i++)
    hash[words[i]] = i;

  var ans = [];
  
  // 循环迭代每个元素
  // 判断该元素的前缀的逆序可否在集合中找到 
  for (var i = 0; i < len; i++) {
    var item = words[i];

    var str = '';

    var wLen = item.length;

    var j = 0;

    do {

      var index = hash[str];

      if (index === undefined || index === i) {
        str = item[j++] + str;
        continue;
      }

      var _str = item.substring(j);

      if (!isPalindrome(_str)) {
        str = item[j++] + str;
        continue;
      }

      ans.push([i, index]);

      str = item[j++] + str;

    } while (j < wLen);

  }

  // 循环迭代每个元素
  // 判断该元素的后缀的逆序可否在集合中找到
  for (var i = 0; i < len; i++) {
    var item = words[i];

    var str = '';

    var wLen = item.length;

    var j = wLen - 1;

    do {

      var index = hash[str];

      if (index === undefined || index === i) {
        str += item[j--];
        continue;
      }
      
      var _str = item.substring(0, j + 1);

      if (!isPalindrome(_str)) {
        str += item[j--];
        continue;
      }

      ans.push([index, i]);

      str += item[j--];

    } while (j >= -1);
  }

  function isPalindrome(s) {
    return s === s.split('').reverse().join('');
  }

  return ans;
};