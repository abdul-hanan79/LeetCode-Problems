/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const createTree = (nums, start, end) => {

        if (start > end)
            return null
        let mid = Math.floor((start + end) / 2)

        let node = new TreeNode(nums[mid])
        node.left = createTree(nums, start, mid - 1)
        node.right = createTree(nums, mid + 1, end)
        return node
    }
    return createTree(nums, 0, nums.length - 1)
};