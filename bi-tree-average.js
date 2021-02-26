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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let result = [];
  let queue = [root];
  let temp = [];
  let count = 0;
  let sum = 0;
  while (queue.length > 0 || temp.length > 0) {
    const node = queue.shift();
    if (node) {
      sum += node.val;
      count += 1;
    }
    if (node.left) {
      temp.push(node.left);
    }
    if (node.right) {
      temp.push(node.right);
    }
    if (queue.length === 0) {
      result.push(sum / count);
      queue = temp;
      temp = [];
      sum = 0;
      count = 0;
    }
  }
  return result;
};
