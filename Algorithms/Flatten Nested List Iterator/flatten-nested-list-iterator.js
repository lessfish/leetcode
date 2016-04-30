// Source : https://leetcode.com/problems/flatten-nested-list-iterator/
// Author : Han Zichi
// Date   : 2016-04-30

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.a = nestedList;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  if (!this.a.length)
    return false;

  while (this.a.length) {
    if (this.a[0] instanceof NestedInteger) {
      var obj = this.a.shift();
      // if a[0] is List
      if (!obj.isInteger()) {
        var arr = obj.getList();
        if (arr.length) 
          Array.prototype.unshift.apply(this.a, arr);
      } else {
        var item = obj.getInteger();
        Array.prototype.unshift.apply(this.a, [item]);
        return true;
      }
    } else {
      return true;
    }
  }

  return false;
};


/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  return this.a.shift();
};