# Source : https://leetcode.com/problems/minesweeper/?tab=Description
# Author : Han Zichi
# Date   : 2017-03-07

class Solution(object):
    def updateBoard(self, board, click):
        """
        :type board: List[List[str]]
        :type click: List[int]
        :rtype: List[List[str]]
        """
        n, m = len(board), len(board[0])
        dir = [[1, 0], [-1, 0], [0, 1], [0, -1], [-1, -1], [-1, 1], [1, -1], [1, 1]]

        def isNotInMap(x, y):
            return x < 0 or x >= n or y < 0 or y >= m

        def getMineNum(x, y):
            num = 0
            for i in range(8):
                _x, _y = x + dir[i][0], y + dir[i][1]
                if isNotInMap(_x, _y):
                    continue
                if board[_x][_y] == 'M':
                    num += 1
            if num == 0:
                return 'B'
            else:
                return str(num)

        def dfs(x, y):
            if board[x][y] == 'M':
                board[x][y] = 'X'
            else:
                board[x][y] = getMineNum(x, y)
                if board[x][y] == 'B':
                    for i in range(8):
                        _x, _y = x + dir[i][0], y + dir[i][1]
                        if isNotInMap(_x, _y):
                            continue
                        if board[_x][_y] != 'E': # not an empty cell
                            continue
                        dfs(_x, _y)

        dfs(click[0], click[1])
        return board
