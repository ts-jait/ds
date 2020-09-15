const { TreeNode } = require("./treeNode");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let left_depth = maxDepth(root.left) + 1;
  let right_depth = maxDepth(root.right) + 1;
  return Math.max(left_depth, right_depth);
};

const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(maxDepth(tree));
