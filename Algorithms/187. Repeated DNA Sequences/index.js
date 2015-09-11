// Source : https://leetcode.com/problems/repeated-dna-sequences/
// Author : Han Zichi
// Date   : 2015-09-11

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  var map = []
    , hash = new Set()
    , hash_ans = new Set()
    , ans = [];

  map['A'] = 0, map['C'] = 1, map['G'] = 2, map['T'] = 3;
  
  var tmp = 0;
  for (var i = 0, len = s.length; i < len; i++) {
    tmp = tmp << 2 | map[s[i]];
    if (i < 9) continue;
    if (i > 9) tmp = tmp & 0xfffff;

    if (!hash.has(tmp)) 
      hash.add(tmp);
    else {
      if (!hash_ans.has(tmp)) {
        hash_ans.add(tmp);
        ans.push(s.substring(i - 9, i + 1));
      }
    }
  }

  return ans;
};