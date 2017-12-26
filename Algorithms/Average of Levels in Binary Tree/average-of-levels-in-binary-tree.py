# Source : https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
# Author : Fish.Yu
# Date   : 2017-12-26

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def averageOfLevels(self, root):
        """
        :type root: TreeNode
        :rtype: List[float]
        """
        root.level = 0
        q = [root]
        ans = []
        sum, num, curLevel = 0, 0, 0

        while len(q):
            item = q[0]
            del q[0]
            if item.level == curLevel:
                sum += item.val 
                num += 1
            else:
                ans.append(sum / num)
                curLevel += 1
                sum = item.val 
                num = 1
            
            if item.left:
                item.left.level = item.level + 1
                q.append(item.left)
            if item.right:
                item.right.level = item.level + 1
                q.append(item.right)
            
        ans.append(sum / num)
        return ans