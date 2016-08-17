// Source : https://leetcode.com/problems/add-and-search-word-data-structure-design/
// Author : Han Zichi
// Date   : 2016-08-17
// Runtime: 240 ms
// Your runtime beats 100.00% of javascript submissions


function Node() {
  this.nodes = [];
  this.endFlag = false;
}

/**
 * @constructor
 */
var WordDictionary = function() {
  this.startNode = new Node();
  // 以该 node 结尾的单词存在
  this.startNode.endFlag = true;
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
  var node = this.startNode;

  for (var i = 0, len = word.length; i < len; i++) {
    var item = word.charCodeAt(i) - 97;
    if (!node.nodes[item]) {
      node.nodes[item] = new Node();
    }
    node = node.nodes[item];
  }

  node.endFlag = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
  var node = this.startNode;
  var isFound = false;

  dfs(node, 0);

  function dfs(node, index) {
    if (isFound)
      return;

    if (index === word.length) {
      isFound = node.endFlag;
      return;
    }

    if (word[index] === '.') {
      for (var i = 0; i < 26; i++) {
        if (node.nodes[i])
          dfs(node.nodes[i], index + 1);
      }
    } else {
      var item = word.charCodeAt(index) - 97;
      if (node.nodes[item])
        dfs(node.nodes[item], index + 1);
    }
  }

  return isFound;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */