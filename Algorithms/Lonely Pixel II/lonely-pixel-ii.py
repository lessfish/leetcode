# Source : https://leetcode.com/problems/lonely-pixel-ii/?tab=Description
# Author : Han Zichi
# Date   : 2017-03-06

class Solution(object):
    def findBlackPixel(self, picture, N):
        """
        :type picture: List[List[str]]
        :type N: int
        :rtype: int
        """
        n = len(picture)
        m = len(picture[0])
        father = [None] * n

        for i in range(n):
            for j in range(i):
                if picture[i] == picture[j]:
                    father[i] = j
                    break
            if father[i] == None:
                father[i] = i

        rows = []
        for item in picture:
            rows.append(item.count('B'))

        cols = []
        for j in range(m):
            letters = [picture[i][j] for i in range(n)]
            cols.append(letters.count('B'))

        ans = 0
        for i in range(n):
            for j in range(m):
                if picture[i][j] != 'B':
                    continue
                if rows[i] != N or cols[j] != N:
                    continue

                f = True
                for l in range(n):
                    if picture[l][j] == 'B' and father[i] != father[l]:
                        f = False
                        break

                if f:
                    ans += 1

        return ans
