# Source : https://leetcode.com/problems/diameter-of-binary-tree/#/description
# Author : Han Zichi
# Date   : 2017-04-23

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def diameterOfBinaryTree(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        

        def getHeight(node, depth):
            if node == None:
                return -1
            else:
                left = getHeight(node.left, depth) + 1
                right = getHeight(node.right, depth) + 1
                getHeight.ans = max(getHeight.ans, left + right)
                return max(left, right)

        getHeight.ans = 0
        getHeight(root, 0)
        
        return getHeight.ans