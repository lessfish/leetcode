// Source : https://leetcode.com/problems/rectangle-area/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  var width, height;

  if (C <= E || G <= A || D <= F || H <= B)
    width = height = 0;
  else {
    var tmp = [A, C, E, G].sort(function(a, b) {
      return a - b;
    });

    width = tmp[2] - tmp[1];

    tmp = [B, D, F, H].sort(function(a, b) {
      return a - b;
    });

    height = tmp[2] - tmp[1];
  }
  
  return (C - A) * (D - B) + (G - E) * (H - F) - width * height;
};