// Source : https://leetcode.com/problems/linked-list-random-node/
// Author : Han Zichi
// Date   : 2017-01-23

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  let nums = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }
  this.nums = nums;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let index = ~~(Math.random() * this.nums.length);
  return this.nums[index];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */
