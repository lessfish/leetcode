// Source : https://leetcode.com/problems/maximum-product-of-word-lengths/
// Author : Han Zichi
// Date   : 2016-05-11

// use Bit Manipulation 

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  var tmp = [];

  words.forEach(function(item) {
    var obj = {};
    obj.item = item;

    var num = 0;
    for (var i = 0, len = item.length; i < len; i++) 
      num |= 1 << (item.charCodeAt(i) - 97);
    
    obj.num = num;

    tmp.push(obj);
  });
  
  var ans = 0;

  for (var i = 0, len = tmp.length; i < len; i++)
    for (var j = i + 1; j < len; j++) {
      var item1 = tmp[i];
      var item2 = tmp[j];

      if (item1.num & item2.num)
        continue;

      ans = Math.max(ans, item1.item.length * item2.item.length);
    }

  return ans;
};