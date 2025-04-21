/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
    let x=y=curr=0;
    for(let d of differences){
    curr+=d
    x=Math.min(x,curr)
    y=Math.max(y,curr)
    }
    return Math.max(0,(upper-lower)-(y-x)+1)
};