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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function depth(root) {
    if (!root) return 0;
    let left = 1 + depth(root.left);
    let right = 1 + depth(root.right);
    return Math.abs(left - right) > 1 ? Infinity : Math.max(left, right);
  }
  return depth(root) === Infinity ? false : true;
};
