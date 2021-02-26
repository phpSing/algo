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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 0;
  let longest = 0;
  function getMax(node) {
    if (!node) return 0;
    let left = getMax(node.left);
    let right = getMax(node.right);
    longest = Math.max(longest, left, right);
    return Math.max(left, right) + 1;
  }
  getMax(root);
  return longest;
};
