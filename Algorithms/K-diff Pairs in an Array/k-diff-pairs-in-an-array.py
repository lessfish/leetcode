# Source : https://leetcode.com/problems/k-diff-pairs-in-an-array/?tab=Description
# Author : Han Zichi
# Date   : 2017-03-07

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
            if item in dict:
                dict[item] += 1
            else:
                dict[item] = 1

        pre, ans = None, 0
        for item in nums:
            if item == pre:
                continue
            dict[item] -= 1
            target = item + k
            if target in dict and dict[target] > 0:
                ans += 1
            pre = item

        return ans
