// Source : https://leetcode.com/problems/counting-bits/
// Author : Han Zichi
// Date   : 2016-03-25

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var ans = Array(num + 1);
    ans[0]=0;
    for (let i=1; i<=num; i++) {
        ans[i]= ans[i & (i-1)] + 1;
    }
    return ans;
};
