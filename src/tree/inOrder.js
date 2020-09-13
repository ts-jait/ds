/**
 * Definition for a binary tree node.
 
 */
function inOrderTreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  traverse(root);
  return res;
  function traverse(node) {
    if (!node) {
      return;
    }
    traverse(node.left);
    res.push(node.val);
    traverse(node.right);
  }
};

var inOrderTraversalLoop = function (root) {
  const res = [];
  const stack = [];
  let currentNode = root;
  while (currentNode !== null || stack.length) {
    while (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();
    res.push(currentNode.val);
    currentNode = currentNode.right;
  }
  return res;
};

const tree = new inOrderTreeNode(
  1,
  undefined,
  new inOrderTreeNode(2, new inOrderTreeNode(3), undefined)
);
// console.log(inorderTraversal(tree));
console.log(inOrderTraversalLoop(tree));
