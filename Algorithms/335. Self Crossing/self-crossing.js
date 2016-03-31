// Source : https://leetcode.com/problems/self-crossing/
// Author : Han Zichi
// Date   : 2016-03-07

/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function(x) {
  var line = [];

  var current = {x: 0, y: 0};

  for (var i = 0, len = x.length; i < len; i++) {
    var rem = i % 4;

    var item = x[i];

    var a = {};

    a.x1 = current.x;
    a.y1 = current.y;

    if (rem === 0)
      current.y += item;
    else if (rem === 1)
      current.x -= item;
    else if (rem === 2)
      current.y -= item;
    else
      current.x += item;

    a.x2 = current.x;
    a.y2 = current.y;

    line.push(a);
  }

  for (var i = 0; i < len; i++)
    for (var j = i + 2; j < len; j++) {
      if (f(line[i], line[j])) {
        return true;
      }
    }

  return false;
};


/**
 * @param {object} a
 * @param {object} b
 * @return {boolean}
 * a, b 表示两条线段。
 * (a.x1, a.y1), (a.x2, a.y2) 分别表示线段 a 两个端点; b 类似
 */

function f(a, b) {

  function online(a, b, c) {
    if (a.x >= Math.min(b.x, c.x) && a.x <= Math.max(b.x, c.x) && a.y >= Math.min(b.y, c.y) && a.y <= Math.max(b.y, c.y))
      return true;

    return false;
  }

  var n1, n2, n3, n4;

  n1 = (a.x1 - b.x2) * (b.y1 - b.y2) - (a.y1 - b.y2) * (b.x1 - b.x2);
  n2 = (a.x2 - b.x2) * (b.y1 - b.y2) - (a.y2 - b.y2) * (b.x1 - b.x2);
  n3 = (b.x1 - a.x2) * (a.y1 - a.y2) - (b.y1 - a.y2) * (a.x1 - a.x2);
  n4 = (b.x2 - a.x2) * (a.y1 - a.y2) - (b.y2 - a.y2) * (a.x1 - a.x2);
   
  if (n1 * n2 < 0 && n3 * n4 < 0) 
    return 1;

  var p1 = {x: a.x1, y: a.y1};

  var p2 = {x: a.x2, y: a.y2};

  var p3 = {x: b.x1, y: b.y1};

  var p4 = {x: b.x2, y: b.y2};

  if (n1 === 0 && online(p1, p3, p4))
    return 1;

  if (n2 === 0 && online(p2, p3, p4))
    return 1;

  if (n3 === 0 && online(p3, p1, p2))
    return 1;

  if (n4 === 0 && online(p4, p1, p2))
    return 1;

  return 0;
}