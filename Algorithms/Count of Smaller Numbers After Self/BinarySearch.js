// Source : https://leetcode.com/problems/count-of-smaller-numbers-after-self/
// Author : Han Zichi
// Date   : 2016-01-06

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {

  // binary search
  function bSearch(target, a) {
    var start = 0
      , end = a.length - 1;

    while(start <= end) {
      var mid = ~~((start + end) >> 1);
      if (a[mid] >= target)
        end = mid - 1;
      else if (a[mid] < target)
        start = mid + 1;
    }

    return start;
  }

  var tmp = []  // store 
    , ans = [];

  for (var i = nums.length; i--; ) {
    var item = nums[i];

    var index = bSearch(item, tmp);

    ans.unshift(index);
    tmp.splice(index, 0, item);
  }

  return ans;
};