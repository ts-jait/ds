/**
 * Definition for a binary tree node.
 *
 */
function LevelTreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const q = [root];

  while (q.length) {
    let nodes = [];
    let currentLayerLength = q.length;
    for (let i = 0; i < currentLayerLength; i++) {
      let node = q.shift();
      nodes.push(node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    res.push(nodes);
  }

  return res;
};

/*const levelTree = new LevelTreeNode(
  3,
  new LevelTreeNode(9),
  new LevelTreeNode(20, new LevelTreeNode(15), new LevelTreeNode(7))
);
console.log(levelOrder(levelTree));*/
