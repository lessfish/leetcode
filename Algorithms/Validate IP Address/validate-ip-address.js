// Source : https://leetcode.com/problems/validate-ip-address/
// Author : Han Zichi
// Date   : 2016-12-11

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {

  function isIPv4(IP) {
    let parts = IP.split('.');

    if (parts.length !== 4)
      return false;

    for (let i = 0, len = parts.length; i < len; i++) {
      let item = parts[i];

      if (item === '')
        return false;

      if (item.startsWith('-'))
        return false;

      if (item !== '0' && item.startsWith('0'))
        return false;

      if (isNaN(item))
        return false;

      if (+item < 0 || +item > 255)
        return false;
    }

    return true;
  }

  function isIPv6(IP) {
    let parts = IP.split(':');

    if (parts.length !== 8)
      return false;

    for (let i = 0, len = parts.length; i < len; i++) {
      let item = parts[i];
      const str = '0123456789abcdefABCDEF';

      if (item === '')
        return false;

      if (item.length > 4)
        return false;

      for (let letter of item) {
        if (str.indexOf(letter) === -1)
          return false;
      }
    }

    return true;
  }

  if (isIPv4(IP))
    return 'IPv4';

  if (isIPv6(IP))
    return 'IPv6';

  return 'Neither';
};
