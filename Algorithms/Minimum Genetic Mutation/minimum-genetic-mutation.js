// Source : https://leetcode.com/problems/minimum-genetic-mutation/
// Author : Han Zichi
// Date   : 2016-11-04

"use strict";

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  const BANK = 'ACGT';
  let s      = new Set(bank);
  let q      = [{str: start, step: 0}];

  while (q.length) {
    let item = q.shift()
      , str = item.str
      , step = item.step;

    if (str === end)
      return step;

    // change this element
    for (let i = 0, len = str.length; i < len; i++) {
      let a = str.substring(0, i);
      let b = str.substring(i + 1);

      for (let j of BANK) {
        let c = a + j + b;
        if (s.has(c)) {
          q.push({str: c, step: step + 1});
          s.delete(c);
        }
      }
    }
  }

  return -1;
};