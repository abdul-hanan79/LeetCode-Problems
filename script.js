// *************Problem*******************

/**
 * Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 * 
 */

// My solution
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {

    var steps = 0;
    for (var i = num; i >= 0; i--) {
        console.log("value of i", i)
        console.log("value of num is", num)
        if (num != 0) {
            if (num % 2 == 0) {
                console.log(`${num} is even`)
                num /= 2;
                steps++
            }
            else {
                console.log(`${num} is odd`)
                num -= 1;
                steps++

            }
        }
        else {
            break;
        }

    }
    return steps
};

// best solutions
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps1 = function (num) {

    var steps = 0;
    while (num > 0) {
        num % 2 == 0 ? num /= 2 : num--;
        steps++
    }
    console.log("steps",steps);
    return steps
};
numberOfSteps1(14)