# Source : https://leetcode.com/problems/perfect-number/#/description
# Author : Han Zichi
# Date   : 2017-04-23

import math
class Solution(object):
    def checkPerfectNumber(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num <= 1:
            return False

        total = 1
        end = int(math.sqrt(num))
        for i in range(2, end + 1):
            if num % i == 0:
                total += i + num / i 

        return total == num