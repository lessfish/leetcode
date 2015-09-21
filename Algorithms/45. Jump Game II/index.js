// Source : https://leetcode.com/problems/jump-game-ii/
// Author : Han Zichi
// Date   : 2015-09-21


function binarySearch(a, start, end, target) {
  while (start <= end) {
    var mid = ~~((start + end) >> 1);
    if (a[mid] > target)
      end = mid - 1;
    else if (a[mid] < target)
      start = mid + 1;
    else
      return mid; 
  }
  return start;
}


var jump = function(nums) {
  var dp = []  // dp[i]表示i步所能到达的最右边的位置
    , end = 0; // end表示到达当前位置所要走的最少步数

  for (var i = 0, len = nums.length; i < len; i++) 
    dp[i] = i ? -1 : 0;

  nums.forEach(function(item, index) {
    var tmp = binarySearch(dp, 0, end, index); // 表示能到index的最小步数
    dp[tmp + 1] = Math.max(dp[tmp + 1], index + item);
    end = tmp + 1;
  });

  return binarySearch(dp, 0, end, len - 1);
};
