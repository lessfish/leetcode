# Source : https://leetcode.com/problems/reverse-string-ii/#/description
# Author : Han Zichi
# Date   : 2017-04-23

class Solution(object):
    def reverseStr(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
        l = len(s)
        tmp = []

        for i in range(0, l, k * 2):
            tmp.append(s[i:i+k*2])

        ans = ''
        for item in tmp:
            if k <= len(item) <= k * 2:
                ans += item[0:k][::-1] + item[k:min(k*2, len(item))]
            else:
                ans += item[::-1]

        return ans