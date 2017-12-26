# Source : https://leetcode.com/problems/degree-of-an-array/description/
# Author : Fish.Yu
# Date   : 2017-12-25

import sys

class Solution:
    def findShortestSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        dic = {}
        degreeLen = 0

        for index, item in enumerate(nums):
            if not item in dic:
                dic[item] = {}
            obj = dic[item]
            if not 'start' in obj:
                obj['start'] = index
            obj['end'] = index 
            if not 'count' in obj:
                obj['count'] = 1
            else:
                obj['count'] += 1
            degreeLen = max(degreeLen, obj['count'])

        ans = sys.maxsize
        for value in dic.values():
            if value['count'] != degreeLen:
                continue
            ans = min(ans, value['end'] - value['start'] + 1)
        
        return ans