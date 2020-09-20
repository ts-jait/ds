const { TreeNode } = require("./treeNode");

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) {
    return false;
  }
  sum -= root.val;
  if (root.left === null && root.right === null) {
    return sum === 0;
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};

const tree = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, undefined, new TreeNode(1)))
);
console.log(hasPathSum(tree, 22));
