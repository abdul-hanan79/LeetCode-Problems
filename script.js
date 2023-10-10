// *************Problem 1*******************

/**
 * Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:
Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
 * 
 */

// My solution
/**
 * @param {number} num
 * @return {number}
 */
// var numberOfSteps = function (num) {

//     var steps = 0;
//     for (var i = num; i >= 0; i--) {
//         console.log("value of i", i)
//         console.log("value of num is", num)
//         if (num != 0) {
//             if (num % 2 == 0) {
//                 console.log(`${num} is even`)
//                 num /= 2;
//                 steps++
//             }
//             else {
//                 console.log(`${num} is odd`)
//                 num -= 1;
//                 steps++

//             }
//         }
//         else {
//             break;
//         }

//     }
//     return steps
// };

// best solutions
/**
 * @param {number} num
 * @return {number}
 */
// var numberOfSteps1 = function (num) {

//     var steps = 0;
//     while (num > 0) {
//         num % 2 == 0 ? num /= 2 : num--;
//         steps++
//     }
//     console.log("steps", steps);
//     return steps
// };
// numberOfSteps1(14)
// length
/*

// *************Problem 2*******************

You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

 Example 1:

Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
*/
// var minOperations = function (nums, x) {
//     var counter = 0;
//     while (x > 0) {
//         var lastElement = nums.push();
//         x -= lastElement;
//         counter++
//     }
//     if (counter == 1) {
//         return -1
//     }
//     else {
//         return counter;
//     }
// };


// *************Problem 3*******************

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

 

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.



/**
 * @return {null|boolean|number|string|Array|Object}
 */
// Array.prototype.last = function() {
    //     return this.length===0?-1:this.pop()
    // };
    
    /**
     * const arr = [1, 2, 3];
 * arr.last(); // 3
    */
   
   
   
   
   // *************Problem 4*******************

/**
 * 
 * 
 * Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
 * 
 */

//solution

/**
//  * @param {number} n
//  * @return {Function} counter
//  */
// var createCounter = function(n) {
    
//     return function() {
//         return n++
//     };
// };

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */