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
  // use Vanilla JS if want to be faster
  // http://vanilla-js.com/
  var width = (C - A) + (G - E) - Math.abs(Math.max(G, C) - Math.min(E, A)) ;
  width < 0 && (width = 0);

  var height = (D - B) + (H - F) - Math.abs(Math.max(H, D) - Math.min(F, B));
  height < 0 && (width = 0);
  
  return (C - A) * (D - B) + (G - E) * (H - F) - width * height;
};