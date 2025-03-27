/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    let queue = []
    let i = 1;
    while (i <= n) {
        queue.push(i)
        i++
    }
    while (queue.length > 1) {
        let i = 0;
        while (i < k) {
            queue.push(queue.shift())
            i++
        }
        queue.pop()
    }
    return queue[0]
};