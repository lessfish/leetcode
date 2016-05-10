// Source : https://leetcode.com/problems/integer-to-roman/
// Author : Han Zichi
// Date   : 2016-05-04

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var hash = {};

  // 千
  hash["3000"] = "MMM";
  hash["2000"] = "MM";
  hash["1000"] = "M";

  // 百
  hash["900"] = "CM";
  hash["800"] = "DCCC";
  hash["700"] = "DCC";
  hash["600"] = "DC";
  hash["500"] = "D";
  hash["400"] = "CD";
  hash["300"] = "CCC";
  hash["200"] = "CC";
  hash["100"] = "C";

  // 十
  hash["90"] = "XC";
  hash["80"] = "LXXX";
  hash["70"] = "LXX";
  hash["60"] = "LX";
  hash["50"] = "L";
  hash["40"] = "XL";
  hash["30"] = "XXX";
  hash["20"] = "XX";
  hash["10"] = "X";

  // 个
  hash["9"] = "IX";
  hash["8"] = "VIII";
  hash["7"] = "VII";
  hash["6"] = "VI";
  hash["5"] = "V";
  hash["4"] = "IV";
  hash["3"] = "III";
  hash["2"] = "II";
  hash["1"] = "I";

  hash["0"] = "";

  var str = "";

  var tmp;

  // 千
  tmp = ~~(num / 1000);
  num -= tmp * 1000;
  str += hash[tmp * 1000];

  // 百
  tmp = ~~(num / 100);
  num -= tmp * 100;
  str += hash[tmp * 100];

  // 十
  tmp = ~~(num / 10);
  num -= tmp * 10;
  str += hash[tmp * 10];

  // 个
  tmp = ~~(num / 1);
  num -= tmp * 1;
  str += hash[tmp * 1];

  return str;
};  