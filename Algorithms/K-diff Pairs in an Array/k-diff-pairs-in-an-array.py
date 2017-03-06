# Source : https://leetcode.com/problems/k-diff-pairs-in-an-array/?tab=Description
# Author : Han Zichi
# Date   : 2017-03-06

class Solution(object):
    def findPairs(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        if k < 0:
            return 0

        nums.sort()
        dict = {}

        for item in nums:
            key = str(item)
            if key in dict:
                dict[key] += 1
            else:
                dict[key] = 1

        pre, ans = None, 0
        for item in nums:
            if item == pre:
                continue
            dict[str(item)] -= 1
            target = item + k
            if str(target) in dict and dict[str(target)] > 0:
                ans += 1
            pre = item

        return ans
