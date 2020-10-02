/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
    let ans = "";
    d.forEach(word => {
        let j = 0;
        [...s].forEach(c => {
            if (c === word[j]) {
                j++;
            }
        });
        if (j === word.length) {
            if (word.length > ans.length) {
                ans = word;
            } else if (word.length === ans.length && ans.localeCompare(word) > 0) {
                ans = word;
            }
        }
    });
    return ans;
};