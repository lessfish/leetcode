# Source : https://leetcode.com/problems/longest-uncommon-subsequence-i/#/description
# Author : Han Zichi
# Date   : 2017-04-23

class Solution(object):
    def findLUSlength(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: int
        """
        if a == b:
            return -1
        if a.find(b) != -1:
            return len(a)
        if b.find(a) != -1:
            return len(b)
        return max(len(a), len(b))