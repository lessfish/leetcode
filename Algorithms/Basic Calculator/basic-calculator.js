// Source : https://leetcode.com/problems/basic-calculator/
// Author : Han Zichi
// Date   : 2016-08-22

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(/\s/g, '');
  var numStack = [];
  var symStack = [];
  var len = s.length;
  var num = 0;

  for (var i = 0; i < len; i++) {
    var item = s[i];
    if ('-+('.indexOf(item) !== -1) {
      symStack.push(item);

      if (i && '0123456789'.indexOf(s[i - 1]) !== -1) {
        numStack.push(num);
        num = 0;
      }
    } else if (item === ')') {
      if (i && '0123456789'.indexOf(s[i - 1]) !== -1) {
        numStack.push(num);
        num = 0;
      }

      var _numStack = [];
      var _symStack = [];

      while (true) {
        var sym = symStack.pop();
        if (sym === '(') {
          _numStack.unshift(numStack.pop());
          numStack.push(help(_numStack, _symStack));
          break;
        }

        _numStack.unshift(numStack.pop());
        _symStack.unshift(sym);
      }
    } else {
      num = num * 10 + (+item);
    }
  }

  if (s[len - 1] !== ')')
    numStack.push(num);

  return help(numStack, symStack);
};


/**
 * @param  {array} numStack
 * @param  {array} symStack
 * @return {number}
 */
function help(numStack, symStack) {
  while (numStack.length !== 1) {
    var sym = symStack.shift();
    var a = numStack.shift();
    var b = numStack.shift();

    if (sym === '+')
      numStack.unshift(a + b);
    else
      numStack.unshift(a - b);
  }

  return numStack[0];
}