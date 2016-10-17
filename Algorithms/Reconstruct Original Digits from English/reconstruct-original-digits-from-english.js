// Source : https://leetcode.com/problems/reconstruct-original-digits-from-english/
// Author : Han Zichi
// Date   : 2016-10-17

"use strict";

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  let hash = {};
  let nums = [];

  for (let i = 97; i <= 122; i++)
    hash[String.fromCharCode(i)] = 0;

  for (let i = 0; i <= 9; i++)
    nums[i] = 0;

  for (let item of s)
    hash[item] = ~~hash[item] + 1;

  // zero
  nums[0] = hash['z'];
  hash['e'] -= nums[0];
  hash['r'] -= nums[0];
  hash['o'] -= nums[0];

  // two
  nums[2] = hash['w'];
  hash['t'] -= nums[2];
  hash['o'] -= nums[2];

  // four
  nums[4] = hash['u'];
  hash['f'] -= nums[4];
  hash['o'] -= nums[4];
  hash['r'] -= nums[4];

  // three
  nums[3] = hash['r'];
  hash['t'] -= nums[3];
  hash['h'] -= nums[3];
  hash['e'] -= nums[3] * 2;

  // one
  nums[1] = hash['o'];
  hash['n'] -= nums[1];
  hash['e'] -= nums[1];

  // five
  nums[5] = hash['f'];
  hash['v'] -= nums[5];

  // six
  nums[6] = hash['x'];

  // seven
  nums[7] = hash['v'];
  hash['n'] -= nums[7];

  // eight
  nums[8] = hash['g'];

  // nine
  nums[9] = hash['n'] / 2;

  // get ans
  let ans = '';
  for (let i = 0; i <= 9; i++) {
    while (nums[i]--)
      ans += i;
  }

  return ans;
};