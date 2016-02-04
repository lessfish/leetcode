// Source : https://leetcode.com/problems/3sum-closest/
// Author : Han Zichi
// Date   : 2016-02-04

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

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

  return start;
}


var threeSumClosest = function(nums, target) {
  nums.sort(function(a, b) {
    return a - b;
  });

  var len = nums.length;
  var ans = Infinity;

  for (var i = 0; i < len; i++)
    for (var j = i + 1; j < len; j++) {
      var a = target - nums[i] - nums[j];
      var pos = binarySearch(nums, a);
      
      for (var k = Math.max(0, pos - 1); k <= Math.min(pos + 0, len - 1); k++) {
        if (k === i || k === j) 
          continue;

        var sum = nums[i] + nums[j] + nums[k];
        if (Math.abs(sum - target) < Math.abs(ans - target))
          ans = sum;
      }

    }

  return ans;
};