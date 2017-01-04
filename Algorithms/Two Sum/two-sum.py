#!/usr/bin/env python
# coding=utf-8


# Source : https://leetcode.com/problems/two-sum/
# Author : Meow-z
# Date   : 2017-01-03

# 方法一：378ms
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        a = 1  # a 代表两个数的间隔
        while(a < len(nums)):
            for i in xrange(len(nums)):  # 代表第二个数的序号
                if(i < a):
                    continue
                if(nums[i-a] + nums[i] == target):
                    return [i-a, i]
            a = a + 1
        return []

# 方法二：345ms
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        for a in xrange(1, len(nums)):
            for i in xrange(len(nums)):
                if(i < a):
                    continue
                if(nums[i-a] + nums[i] == target):
                    return [i-a, i]
        return []