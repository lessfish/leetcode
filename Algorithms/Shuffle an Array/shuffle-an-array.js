// Source : https://leetcode.com/problems/shuffle-an-array/
// Author : Han Zichi
// Date   : 2017-01-23

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  // @see https://github.com/hanzichi/underscore-analysis/issues/15
  function shuffle(a) {
    var length = a.length;
    var shuffled = Array(length);

    for (var index = 0, rand; index < length; index++) {
      rand = ~~(Math.random() * (index + 1));
      if (rand !== index)
        shuffled[index] = shuffled[rand];
      shuffled[rand] = a[index];
    }

    return shuffled;
  }

  return shuffle(this.nums);
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
