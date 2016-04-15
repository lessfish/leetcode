// Source : https://leetcode.com/problems/bulls-and-cows/
// Author : Han Zichi
// Date   : 2016-02-01

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  var a = secret.split('');
  var b = guess.split('');
  var len = a.length;

  var bullNum = 0;
  var cowBum = 0;

  var hash = {};

  for (var i = len; i--; ) {
    if (a[i] === b[i]) {
      a.splice(i, 1);
      b.splice(i, 1);
      bullNum++;
    } else {
      if (!hash[a[i]])
        hash[a[i]] = 1;
      else 
        hash[a[i]]++;
    }
  }


  for (var i = 0; i < b.length; i++) {
    var item = b[i];
    if (hash[item]) {
      cowBum++;
      hash[item]--;
    }
  }

  return bullNum + 'A' + cowBum + 'B';
};