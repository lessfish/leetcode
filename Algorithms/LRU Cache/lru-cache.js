// Source : https://leetcode.com/problems/lru-cache/
// Author : Han Zichi
// Date   : 2016-05-01

/**
 * @constructor
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.obj = {};
  this.arr = [];
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
  var val = this.obj[key];
  if (val > 0) {
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return val;
  } else 
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {

  if (this.obj[key]) {
    this.obj[key] = value;
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return;
  }

  if (this.capacity === this.arr.length) {
    var k = this.arr.pop();
    this.obj[k] = undefined;
  }

  this.obj[key] = value;
  this.arr.unshift(key);
};