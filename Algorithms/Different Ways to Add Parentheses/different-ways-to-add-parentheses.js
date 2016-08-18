// Source : https://leetcode.com/problems/different-ways-to-add-parentheses/
// Author : Han Zichi
// Date   : 2016-08-18

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  var ans = [];

  // 暴力递归求解
  dfs([], [], 0, 0, input);

  return ans;

  function dfs(numStack, symStack, num, index, input) {
    if (index === input.length) {
      numStack.push(num);

      while (symStack.length) {
        var b = numStack.pop();
        var a = numStack.pop();
        var sym = symStack.pop();

        numStack.push(eval('(' + a + ')' + sym + '(' + b + ')' ));
      }

      ans.push(numStack[0]);
      return;
    }

    var item = input[index];

    if ('-+*'.indexOf(item) !== -1) {

      // 不处理
      var _numStack = numStack.concat();
      var _symStack = symStack.concat();
      _numStack.push(num);
      _symStack.push(item);
      dfs(_numStack, _symStack, 0, index + 1, input);

      // 处理
      _numStack = numStack.concat();
      _numStack.push(num);
      _symStack = symStack.concat();
      while (_symStack.length) {
        var b = _numStack.pop();
        var a = _numStack.pop();
        var sym = _symStack.pop();

        _numStack.push(eval('(' + a + ')' + sym + '(' + b + ')' ));

        var newNumStack = _numStack.concat();
        var newSymStack = _symStack.concat();
        newSymStack.push(item);
        dfs(newNumStack, newSymStack, 0, index + 1, input);
      }
    } else {
      dfs(numStack.concat(), symStack.concat(), num * 10 + +item, index + 1, input);
    }
  }
};