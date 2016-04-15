// Source : https://leetcode.com/problems/find-median-from-data-stream/
// Author : Han Zichi
// Date   : 2016-01-20

// Your runtime beats 100.00% of javascript submissions.
// easy binary search with splice method

function binarySearch(a, target) {
  target += 1;
  var start = 0
    , end = a.length - 1;

  while(start <= end) {
    var mid = ~~((start + end) >> 1);
    if (a[mid] >= target)
      end = mid - 1;
    else 
      start = mid + 1;
  }

  return start;
}

/**
 * @constructor
 */
var MedianFinder = function() {
  this.num = [];
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function(num) {
  var index = binarySearch(this.num, num);
  this.num.splice(index, 0, num);
};

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function() {
  var len = this.num.length;

  if (len & 1)
    return this.num[~~(len / 2)];
  else return (this.num[len / 2] + this.num[len / 2 - 1]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */