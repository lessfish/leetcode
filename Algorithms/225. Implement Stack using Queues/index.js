// Source : https://leetcode.com/problems/implement-stack-using-queues/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @constructor
 */
var Stack = function() {
  this.a = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  this.a.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  this.a.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  return this.a[this.a.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return !this.a.length ? true : false;
};