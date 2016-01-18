// Source : https://leetcode.com/problems/rectangle-area/
// Author : Han Zichi
// Date   : 2016-01-18

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
    if (E > A) {
      width = G < C ? G - E : C - E;
    } else {
      width = C < G ? C - A : G - A;
    }

    if (F > B) {
      height = H < D ? H - F : D - F;
    } else {
      height = D < H ? D - B: H - B;
    }
  }
  
  return (C - A) * (D - B) + (G - E) * (H - F) - width * height;
};