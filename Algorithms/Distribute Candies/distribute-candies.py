# Source : https://leetcode.com/problems/distribute-candies/description/
# Author : Fish.Yu
# Date   : 2017-12-26

class Solution:
    def distributeCandies(self, candies):
        """
        :type candies: List[int]
        :rtype: int
        """
        d = {}
        for item in candies:
            if item in d:
                d[item] += 1
            else:
                d[item] = 1

        res = sorted(list(d.values()))

        return min(len(res), len(candies) >> 1)