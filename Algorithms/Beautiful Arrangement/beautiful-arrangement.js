// Source : https://leetcode.com/problems/beautiful-arrangement/?tab=Description
// Author : Han Zichi
// Date   : 2017-02-27

/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  let [ans, hash] = [0, {}];

  let dfs = (index) => {
    if (index === N + 1) {
      ans++;
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!hash[i] && (index % i === 0 || i % index === 0)) {
        hash[i] = true;
        dfs(index + 1);
        hash[i] = false;
      }
    }
  };

  dfs(1);
  return ans;
};
