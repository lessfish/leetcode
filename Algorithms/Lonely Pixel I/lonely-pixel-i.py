# Source : https://leetcode.com/problems/lonely-pixel-i/?tab=Description
# Author : Han Zichi
# Date   : 2017-03-06

class Solution(object):
    def findLonelyPixel(self, picture):
        """
        :type picture: List[List[str]]
        :rtype: int
        """
        rows, ans = [], 0
        n, m = len(picture), len(picture[0])

        for item in picture:
            rows.append(item.count('B'))

        # Column j
        for j in range(m):
            letters = [picture[i][j] for i in range(n)]
            if letters.count('B') == 1:
                pos = letters.index('B') # Row pos
                if rows[pos] == 1:
                    ans += 1

        return ans
