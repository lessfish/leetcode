// Source : https://leetcode.com/problems/degree-of-an-array/description/
// Author : Fish.Yu
// Date   : 2017-12-25
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let p = new Map()
  let degreeLen = 0

  nums.forEach((item, index) => {
    if (!p.has(item)) p.set(item, {})
    let obj = p.get(item)
    obj.start = obj.start === void 0 ? index : obj.start
    obj.end = index
    obj.count = ~~obj.count + 1
    degreeLen = Math.max(degreeLen, obj.count)
  })

  let ans = Number.POSITIVE_INFINITY
  for (let value of p.values()) {
    if (value.count !== degreeLen) continue 
    ans = Math.min(ans, value.end - value.start + 1)
  }

  return ans
};