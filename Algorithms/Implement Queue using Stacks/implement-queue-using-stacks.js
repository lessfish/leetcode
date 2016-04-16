// Source : https://leetcode.com/problems/implement-queue-using-stacks/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @constructor
 */
var Queue = function() {
  this.a = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
  this.a.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  this.a.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  return this.a[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return this.a.length ? false : true;
};