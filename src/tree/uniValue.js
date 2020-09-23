const { TreeNode } = require("./treeNode");

var countUnivalSubtrees = function (root, res = { val: 0 }) {
  if (!root) {
    return 0;
  }
  res.val += isUniValue(root, root.val);
  countUnivalSubtrees(root.left, res);
  countUnivalSubtrees(root.right, res);
  return res.val;
  function isUniValue(node, val) {
    return node
      ? node.val === val &&
          isUniValue(node.left, val) &&
          isUniValue(node.right, val)
      : true;
  }
};
const tree = new TreeNode(
  5,
  new TreeNode(1, new TreeNode(5), new TreeNode(5)),
  new TreeNode(5, undefined, new TreeNode(5))
);

console.log(countUnivalSubtrees(tree));
