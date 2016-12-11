// Source : https://leetcode.com/problems/validate-ip-address/
// Author : Han Zichi
// Date   : 2016-12-11

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {

  function isIPv4(IP) {
    let p = /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){4}$/;
    return p.test(IP + '.');
  }

  function isIPv6(IP) {
    let p = /^([0-9a-fA-F]{1,4}:){8}$/;
    return p.test(IP + ':');
  }

  if (isIPv4(IP))
    return 'IPv4';

  if (isIPv6(IP))
    return 'IPv6';

  return 'Neither';
};
