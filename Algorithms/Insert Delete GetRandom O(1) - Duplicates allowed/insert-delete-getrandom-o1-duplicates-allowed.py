# Source : https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/#/description
# Author : Han Zichi
# Date   : 2017-04-23

import random
class RandomizedCollection(object):

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.s = []
        

    def insert(self, val):
        """
        Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
        :type val: int
        :rtype: bool
        """
        if val in self.s:
            self.s.append(val)
            return False
        else:
            self.s.append(val)
            return True 
        

    def remove(self, val):
        """
        Removes a value from the collection. Returns true if the collection contained the specified element.
        :type val: int
        :rtype: bool
        """
        if val in self.s:
            self.s.remove(val)
            return True 
        else:
            return False

    def getRandom(self):
        """
        Get a random element from the collection.
        :rtype: int
        """
        index = int(random.random() * len(self.s))
        return self.s[index]
