// Source : https://leetcode.com/problems/encode-and-decode-tinyurl/
// Author : Han Zichi
// Date   : 2017-04-23

let [p, index] = [new Map(), 0];

var base62 = (n) => {
  let str = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ';
  let len = str.length;
  let ret = '';

  do {
    ret += str[n % len];
    n = ~~(n / len);
  } while (n);

  return ret;
};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  let shortUrl = base62(index++);
  p.set(shortUrl, longUrl);
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return p.get(shortUrl);
};