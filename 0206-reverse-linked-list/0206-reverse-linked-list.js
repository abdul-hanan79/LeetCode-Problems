/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    console.log("head",head)
    let prev = null;
    let cur = head;
    while (cur !== null) {
        let tempNext = cur.next; // store the next node 
        cur.next = prev;         // reverse the current node's pointer 
        prev = cur;              // move prev to the current node
        cur = tempNext;          // move cur to the next node
    }
    return prev; // prev will be the new head of the reversed list
};