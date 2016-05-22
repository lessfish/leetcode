// Source : https://leetcode.com/problems/word-break/
// Author : Han Zichi
// Date   : 2016-05-22

/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  var len = s.length;

  // f[i] 为 true 表示 s[0]-s[i] 这段能被 Set 中的字符串 cut
  // 所以最后判断 f[len] 即可
  var f = []; 

  var arr = [];

  var obj = {};
  obj.pos = 0;
  obj.str = '';

  arr.push(obj);

  while (arr.length) {
    var obj = arr.shift();
    var pos = obj.pos;
    var str = obj.str;

    if (wordDict.has(str) && !f[pos]) {
      f[pos] = true;

      if (pos < len) {
        var _obj = {};
        _obj.pos = pos + 1;
        _obj.str = s[pos];
        arr.push(_obj);
      }
    }

    if (pos < len) {
      var _obj = {};
      _obj.pos = pos + 1;
      _obj.str = str + s[pos];
      arr.push(_obj);
    }
  }

  return !!f[len];
};