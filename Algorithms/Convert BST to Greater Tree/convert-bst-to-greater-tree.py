# Source : https://leetcode.com/problems/convert-bst-to-greater-tree/#/description
# Author : Han Zichi
# Date   : 2017-04-23

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def convertBST(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        def dfs(node):
            if node == None:
                return
            else:
                dfs(node.right)
                node.val += dfs.total
                dfs.total = node.val
                dfs(node.left)

        dfs.total = 0
        dfs(root)
        return root