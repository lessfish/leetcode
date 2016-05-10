// Source : https://leetcode.com/problems/median-of-two-sorted-arrays/
// Author : Han Zichi
// Date   : 2016-05-10

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
  var m = nums1.length;
  var n = nums2.length;
  var total = m + n;
  var half = total >> 1;

  if (total & 1)
    return findKth(nums1, m, nums2, n, half + 1);
  else 
    return (findKth(nums1, m, nums2, n, half) + findKth(nums1, m, nums2, n, half + 1)) / 2;
};


function findKth(a, m, b, n, k) { 
  // always assume that m is equal or smaller than n  
  if (m > n)  
    return findKth(b, n, a, m, k);  
  if (m === 0)  
    return b[k - 1];  
  if (k === 1)  
    return Math.min(a[0], b[0]); 

  // divide k into two parts  
  var pa = Math.min(k >> 1, m)
    , pb = k - pa;  

  if (a[pa - 1] < b[pb - 1])  
    return findKth(a.slice(pa), m - pa, b, n, k - pa);  
  else if (a[pa - 1] > b[pb - 1])  
    return findKth(a, m, b.slice(pb), n - pb, k - pb);  
  else 
    return a[pa - 1];  
}