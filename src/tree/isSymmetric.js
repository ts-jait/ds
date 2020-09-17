const { TreeNode } = require("./treeNode");

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return [];
  }
  return isMirror(root, root);
  function isMirror(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    return (
      node1.val === node2.val &&
      isMirror(node1.left, node2.right) &&
      isMirror(node1.right, node2.left)
    );
  }
};

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
const tree1 = new TreeNode(
  1,
  new TreeNode(2, undefined, new TreeNode(3)),
  new TreeNode(2, undefined, new TreeNode(3))
);
console.log(isSymmetric(tree));
console.log(isSymmetric(tree1));
