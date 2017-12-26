# Source : https://leetcode.com/problems/daily-temperatures/description/
# Author : Fish.Yu
# Date   : 2017-12-26

import sys

class Solution:
    def dailyTemperatures(self, temperatures):
        """
        :type temperatures: List[int]
        :rtype: List[int]
        """
        hash = [None] * 105
        ans = [sys.maxsize] * len(temperatures)

        for i in range(len(temperatures) - 1, -1, -1):
            temperature = temperatures[i]
            for j in range(temperature + 1, 101):
                if hash[j] and hash[j] - i < ans[i]:
                    ans[i] = hash[j] - i 
            if ans[i] == sys.maxsize:
                ans[i] = 0
            hash[temperature] = i
        
        return ans