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


// *************Problem 5*******************

//    Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.



// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// const myPromise = new Promise((resolve, reject) => {
    // This is the executor function.
    // It takes two arguments: resolve and reject.

    // Perform some asynchronous operation here.
    // If successful, call resolve with the result.
    // If there's an error, call reject with an error message.

    // Example:
//     setTimeout(() => {
//         const randomNumber = Math.random();
//         if (randomNumber > 0.5) {
//             resolve(randomNumber); // Resolve with a value
//         } else {
//             reject("Random number is too small."); // Reject with an error message
//         }
//     }, 1000);
// });

// Using the promise:
// myPromise.then(result => {
//     console.log("Resolved:", result);
// }).catch(error => {
//     console.error("Rejected:", error);
// });












// const newPromise = new Promise((res, re) => {
//     setTimeout(() => {
//         const random = Math.random() * 2
//         if (random > 1) {
//             res(random)
//         }
//         else {
//             rej("this is not ok F")
//         }
//     }, 5000);
// })
// newPromise.then(result => {
//     console.log("resul", result);
// }).catch(error => {
//     console.log("error", error);
// })




    // *************Problem 6*******************

//     Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

// If the length of the array is 0, it should return init.

// Please solve it without using the built-in Array.reduce method.

 

// Example 1:

// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
// var reduce = function (nums, fn, init) {
//     var val = init

//     for (const num of nums) {
//         console.log("value of val before is", val, "num=", num)
//         val = fn(val, num)
//         console.log("value of val is", val)
//     }
//     return val
// }
