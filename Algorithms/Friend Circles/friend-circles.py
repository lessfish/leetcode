# Source : https://leetcode.com/problems/friend-circles/#/description
# Author : Han Zichi
# Date   : 2017-04-23

class Solution(object):
    def findCircleNum(self, M):
        """
        :type M: List[List[int]]
        :rtype: int
        """
        def dfs(index):
            hash[index] = True
            for index, item in enumerate(M[index]):
                if hash[index] == False and item == 1:
                    dfs(index)
        
        n = len(M)
        ans = 0
        hash = [False] * n 

        for i in range(n):
            if hash[i] == False:
                ans += 1
                dfs(i)

        return ans