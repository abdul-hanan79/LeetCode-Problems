/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    xDistance=Math.abs(z-x)
    yDistance=Math.abs(z-y)
    if(xDistance<yDistance){
        return 1
    }else if (xDistance>yDistance){
        return 2
    }else {return 0}
};