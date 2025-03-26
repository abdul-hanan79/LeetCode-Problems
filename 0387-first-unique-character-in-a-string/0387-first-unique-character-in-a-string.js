/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let queue = []
    for (let char of s) {
        if(queue.length && queue[0]==char){
            queue.shift()
        }else{
            queue.push(char)
        }
    }
    return s.indexOf(queue[0])
};