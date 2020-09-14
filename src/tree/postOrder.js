/**
 * Definition for a binary tree node.
  
 */
function postTreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  traversal(root);
  return res;
  function traversal(node) {
    const current = node;
    if (!current) {
      return;
    }
    traversal(node.left);
    traversal(node.right);
    res.push(current.val);
  }
};

var postorderTraversalLoop = function (root) {
  const res = [];
  let stack = [];
  stack.push(root);
  let current;
  while (stack.length) {
    current = stack.pop();
    res.push(current.val);
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return res.reverse();
};

const postTree = new postTreeNode(
  1,
  undefined,
  new postTreeNode(2, new postTreeNode(3))
);
// console.log(postorderTraversal(postTree));
console.log(postorderTraversalLoop(postTree));
