// Source : https://leetcode.com/problems/simplify-path/
// Author : Han Zichi
// Date   : 2017-01-23

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let res = []
    , str = '';

  for (let item of path) {
    if (item === '/') {
      if (str === '' || str === '.') {
        // nothing to do
      } else if (str === '..') {
        if (res.length)
          res.pop();
      } else {
        res.push(str);
      }
      str = '';
    } else {
      str += item;
    }
  }

  if (str && str !== '.' && str !== '..')
    res.push(str);
  else if (str === '..' && res.length)
    res.pop();

  return '/' + res.join('/');
};
