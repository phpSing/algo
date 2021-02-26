/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  if (!root) return false;
  const hashdep = {};
  const hashparent = {};
  function dfs(node, parent, depth) {
    if (!node) return;
    if (node.val === x || node.val === y) {
      hashdep[node.val] = depth;
      hashparent[node.val] = parent.val;
    }
    dfs(node.left, node, depth + 1);
    dfs(node.right, node, depth + 1);
  }
  dfs(root, root, 0);
  return hashdep[x] === hashdep[y] && hashparent[x] !== hashparent[y];
};
