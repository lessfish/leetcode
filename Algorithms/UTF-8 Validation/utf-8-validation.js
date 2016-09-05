// Source : https://leetcode.com/problems/utf-8-validation/
// Author : Han Zichi
// Date   : 2016-09-05

/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  // 十进制转为二进制，并补前导 0（八位二进制）
  function fn(num) {
    let str = num.toString(2);
    while (str.length !== 8)
      str = '0' + str;

    return str;
  }

  for (let i = 0, len = data.length; i < len; i++) {
    let str = fn(data[i]);

    if (str.startsWith('0'))
      continue;
    else if (str.startsWith("110")) {
      if (i + 1 >= len)
        return false;
      let a = fn(data[i + 1]);
      if (a.startsWith("10"))
        i += 1;
      else
        return false;
    } else if (str.startsWith("1110")) {
      if (i + 2 >= len)
        return false;
      let a = fn(data[i + 1]);
      let b = fn(data[i + 2]);
      if (a.startsWith("10") && b.startsWith("10"))
        i += 2;
      else
        return false;
    } else if (str.startsWith("11110")) {
      if (i + 3 >= len)
        return false;
      let a = fn(data[i + 1]);
      let b = fn(data[i + 2]);
      let c = fn(data[i + 3]);
      if (a.startsWith("10") && b.startsWith("10") && c.startsWith("10"))
        i += 3;
      else
        return false;
    } else
      return false;
  }

  return true;
};