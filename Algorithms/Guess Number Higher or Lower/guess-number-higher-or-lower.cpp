// Source : https://leetcode.com/problems/guess-number-higher-or-lower/
// Author : Han Zichi
// Date   : 2016-07-21

// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);

class Solution {
public:
  int guessNumber(int n) {
    int start = 1, end = n;
    int ans;

    while (start <= end) {
      int mid = start + (end - start) / 2;
      int val = guess(mid);

      if (val == -1)
        end = mid - 1;
      else if (val == 1)
        start = mid + 1;
      else {
        ans = mid;
        break;
      }
    }

    return ans;
  }
};