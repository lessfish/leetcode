// Source : https://leetcode.com/problems/multiply-strings/
// Author : Han Zichi
// Date   : 2016-08-05

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  var ans = [];

  for (i = 0, len = num2.length; i < len; i++) {
    var product = m(num1, num2[i]);
    var zeroNum = len - i - 1;
    while (zeroNum--)
      product.unshift(0);
    ans = p(ans, product);
  }

  ans.reverse();
  ans = ans.join('');

  for (var i = 0, len = ans.length; i < len; i++)
    if (ans[i] !== '0')
      return ans.substring(i);

  return '0';
};

// "123" * "4"
function m(a, b) {
  var add = 0;
  var ans = [];
  b = +b;

  for (var i = a.length; i--; ) {
    var item = +a[i];
    var sum = item * b + add;
    ans.push(sum % 10);
    add = ~~(sum / 10);
  }

  add && ans.push(add);
  return ans;
}

// "120" + "12" =>
// [0, 2, 1] + [2, 1]
function p(a, b) {
  var len = Math.max(a.length, b.length);
  var add = 0;
  var ans = [];

  for (var i = 0; i < len; i++) {
    var sum = (~~a[i]) + (~~b[i]) + add;
    ans.push(sum % 10);
    add = ~~(sum / 10);
  }

  add && ans.push(add);
  return ans;
}