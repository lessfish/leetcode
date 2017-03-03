# Source : https://leetcode.com/problems/minimum-absolute-difference-in-bst/?tab=Description
# Author : Han Zichi
# Date   : 2017-03-01

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def getMinimumDifference(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        def dfs(node):
            if node == None:
                return
            res.append(node.val)
            if node.left:
                dfs(node.left)
            if node.right:
                dfs(node.right)

        res = []
        dfs(root)
        res = sorted(res)

        ans = 99999999
        for i in range(len(res)):
            if (i):
                ans = min(ans, res[i] - res[i - 1])

        return ans
