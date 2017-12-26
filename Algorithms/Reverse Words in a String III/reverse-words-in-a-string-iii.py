# Source : https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
# Author : Fish.Yu
# Date   : 2017-12-26

class Solution:
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        def f(x):
            l = list(x)
            l.reverse()
            return ''.join(l)

        arr = list(map(f, s.split(' ')))
        return ' '.join(arr)