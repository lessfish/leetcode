#!/usr/bin/env python
# coding=utf-8


# Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
# Author : Meow-z
# Date   : 2017-01-04


# 122ms
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        new_list = []
        max_list = []
        for i in s:
            if len(new_list) >= len(max_list):
                max_list = new_list
            if i in new_list:
                list_index = new_list.index(i)
                new_list = new_list[list_index+1:]
            new_list.append(i)
        return len(max_list)