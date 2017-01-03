#!/usr/bin/env python
# coding=utf-8


# Source : https://leetcode.com/problems/median-of-two-sorted-arrays/
# Author : Meow-z
# Date   : 2017-01-03

# 96s
class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        new_nums = sorted(nums1 + nums2)
        lens = len(new_nums)
        if lens % 2 == 1:
            return new_nums[lens // 2]
        else:
            return (new_nums[lens // 2 - 1] + new_nums[lens // 2 ])/2.00000  # TODO: 这样除法感觉不合适