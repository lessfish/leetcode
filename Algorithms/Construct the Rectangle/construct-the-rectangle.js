// Source : https://leetcode.com/problems/construct-the-rectangle/
// Author : Han Zichi
// Date   : 2017-01-22

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let mid = Math.ceil(Math.sqrt(area));

  for ( ; ; mid++) {
    if (area % mid === 0)
      return [mid, area / mid];
  }
};
