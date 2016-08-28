// Source : https://leetcode.com/problems/clone-graph/
// Author : Han Zichi
// Date   : 2016-08-28

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  if (!graph)
    return null;

  var hash = {};

  return dfs(graph);

  function dfs(node) {
    var label = node.label;
    var newNode = new UndirectedGraphNode(label);
    hash[label] = newNode;

    for (var i = 0, len = node.neighbors.length; i < len; i++) {
      var item = node.neighbors[i];
      if (hash[item.label] !== undefined)
        newNode.neighbors.push(hash[item.label]);
      else
        newNode.neighbors.push(dfs(item));
    }

    return newNode;
  }
};