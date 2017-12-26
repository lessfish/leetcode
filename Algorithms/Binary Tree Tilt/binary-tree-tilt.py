# Source : https://leetcode.com/problems/binary-tree-tilt/description/
# Author : Fish.Yu
# Date   : 2017-12-26

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findTilt(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        global ans
        ans = 0
        self.sumOfNode(root)
        return ans 
        
    def sumOfNode(self, root):
        if (root == None):
            return 0

        left = self.sumOfNode(root.left)
        right = self.sumOfNode(root.right)

        global ans
        ans += abs(left - right)
        return left + right + root.val