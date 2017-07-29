# Source : https://leetcode.com/problems/sum-of-square-numbers/description/
# Author : Han Zichi
# Date   : 2017-07-29

import math

class Solution:
  def judgeSquareSum(self, c):
    """
    :type c: int
    :rtype: bool
    """
    mid = math.floor(math.sqrt(c))

    for i in range(0, mid + 1):
      rem = c - i * i
      if (rem == math.pow(math.floor(math.sqrt(rem)), 2)):
        return True 

    return False

obj = Solution()
print(obj.judgeSquareSum(5))