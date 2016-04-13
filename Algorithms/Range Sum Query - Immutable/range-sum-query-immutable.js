// Source : https://leetcode.com/problems/range-sum-query-immutable/
// Author : Han Zichi
// Date   : 2016-01-20

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.len = nums.length;
  this.sum = [];
  for (var i = 0; i < this.len; i++) {
    if (!i)
      this.sum[i] = nums[i];
    else 
      this.sum[i] = this.sum[i - 1] + nums[i];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (!i)
    return this.sum[j];

  return this.sum[j] - this.sum[i - 1];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */