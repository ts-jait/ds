/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];
  traverse(root);
  return res;
  function traverse(node) {
    if (!node) {
      return;
    }
    res.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
};

var preorderTraversalLoop = function (root) {
  const stack = [root];
  const res = [];
  while (stack.length) {
    const currentVal = stack.pop();
    if (currentVal) {
      res.push(currentVal.val);
      stack.push(currentVal.left);
      stack.push(currentVal.right);
    }
  }
  return res;
};
const root = new TreeNode(
  1,
  undefined,
  new TreeNode(2, new TreeNode(3), undefined)
);

console.log(preorderTraversal(root));
console.log(preorderTraversalLoop(root));
