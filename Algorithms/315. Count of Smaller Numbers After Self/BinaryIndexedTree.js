// Source : https://leetcode.com/problems/count-of-smaller-numbers-after-self/
// Author : Han Zichi
// Date   : 2016-01-06

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  var arr = []
    , len = nums.length;

  // array to object
  // 增加 index 属性，以便离散化
  for (var i = 0; i < len; i++) {
    var tmp = {};
    tmp.index = i;
    tmp.value = nums[i];
    arr.push(tmp);
  }

  arr.sort(function(a, b) {
    return a.value - b.value;
  });

  // 离散化
  var maxn = 1;
  for (var i = 0; i < len; i++) {
    if (!i) {
      arr[i].nValue = maxn;
    } else {
      arr[i].nValue = arr[i].value === arr[i - 1].value ? maxn : ++maxn;
    }
  }

  arr.sort(function(a, b) {
    return a.index - b.index;
  });


  // 逆序树状数组
  var ans = []
    , sum = [];

  for (var i = 0; i <= maxn; i++)
    sum[i] = 0;

  function lowbit(x) { return x & (-x); }

  function update(index, val) {
    for (var i = index; i <= maxn; i += lowbit(i))
      sum[i] += val;
  } 

  function getSum(index) {
    var ans = 0;
    for (var i = index; i; i -= lowbit(i))
      ans += sum[i];
    return ans;
  }

  for (var i = len - 1; i >= 0; i--) {
    var nValue = arr[i].nValue;
    ans.unshift(getSum(nValue - 1));
    update(nValue, 1);
  }

  return ans;
};