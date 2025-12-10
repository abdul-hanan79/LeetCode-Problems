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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    let result = []
    const queue = [root]
    while (queue.length > 0) {
        const currentLevel = [];
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Dequeue the front element
            currentLevel.push(node.val);

            if (node.left) {
                queue.push(node.left); // Enqueue left child
            }
            if (node.right) {
                queue.push(node.right); // Enqueue right child
            }
        }
        result.push(currentLevel);
    }
    return result
};