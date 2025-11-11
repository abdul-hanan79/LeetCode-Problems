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
var preorderTraversal = function (root) {
    let result = []
    const preOrder = (root) => {
        if (root == null) {
            return
        }
        result.push(root.val)
        preOrder(root.left)
        preOrder(root.right)

    }
    preOrder(root)
    return result
};