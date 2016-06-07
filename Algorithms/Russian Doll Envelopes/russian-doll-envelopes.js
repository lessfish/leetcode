// Source : https://leetcode.com/problems/russian-doll-envelopes/
// Author : Han Zichi
// Date   : 2016-06-07

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  a.sort(function(a, b) {
    return a[0] - b[0];
  });

  var b = [];

  for (var i = 0, len = a.length; i < len; i++) 
    b.push(a[i][1]);

  return lengthOfLIS(b);
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var a = [];

  nums.forEach(function(item) {
    var index = binarySearch(a, item) + 1;
    if (a[index] === undefined)
      a[index] = item;
    else 
      a[index] = Math.min(a[index], item);
  });

  return a.length;
};


function binarySearch(a, target) {
  var start = 0
    , end = a.length - 1;

  while(start <= end) {
    var mid = ~~((start + end) >> 1);
    if (a[mid] >= target)
      end = mid - 1;
    else 
      start = mid + 1;
  }

  return end;
}