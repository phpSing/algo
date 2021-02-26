class Node {
  //树节点
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class NodeSearch {
  //搜索树
  constructor() {
    this.root = null;
    this.len = 0;
  }

  add(key) {
    //生成节点
    let node = new Node(key);
    if (this.root) {
      this.insertNode(this.root, node);
    } else {
      this.root = node;
    }
    this.len++;
    return this;
  }

  insertNode(root, node) {
    //插入节点
    if (root.value > node.value) {
      root.left ? this.insertNode(root.left, node) : (root.left = node);
    } else {
      root.right ? this.insertNode(root.right, node) : (root.right = node);
    }
  }

  toTree(arr) {
    //生成树
    if (toString.call(arr) !== "[object Array]") return false;
    for (let i = 0; i < arr.length; i++) {
      this.add(arr[i]);
    }
  }

  toArray() {
    let result = [];
    if (this.len > 0) {
      const middleOrder = (root) => {
        root.left && middleOrder(root.left);
        result.push(root.value);
        root.right && middleOrder(root.right);
        return result;
      };
      return middleOrder(this.root);
    }
  }
}
let arr = [23, 3, 12, 45, 3];

let ns = new NodeSearch();

ns.toTree(arr);
console.log(ns.toArray());

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
 * @param {number} sum
 * @return {boolean}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// get true/false for sum
var hasPathSum = function (root, sum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return sum === root.val;
  }
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};

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
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
var maxDepth = function (root) {
  if (root === undefined || root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// mirror
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
  if (root === null) return root;
  [root.left, root.right] = [root.right, root.left];
  Mirror(root.left);
  Mirror(root.right);
}

// reverse
var reverseList = function (head) {
  let prev = null; // 在头前面先加一个空节点

  while (head !== null) {
    let nextNode = head.next;

    head.next = prev;
    prev = head;
    head = nextNode;
  }

  return prev;
};
