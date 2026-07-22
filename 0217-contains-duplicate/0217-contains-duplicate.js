/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // const set = new Set(nums) // O(n)
    // return set.size != nums.length
    const set = new Set()

    for (let num of nums) {
        if (set.has(num)) {
            return true
        }
        set.add(num)
    }
    return false
};

// Problem Statement in my own words: wnat me to check the array, if the element appears at least twice, if yes then return the true otherwise false.

//  input: array, [1,3,4,5,1]
// processing: use loop or something else to find that which number appears twise
//  output: boolean, true, false

// category: sets


// Breaking the problem into simple steps: 
// 1. convert the input into sets, 
// 2. check that if the length of input and the length of set is same then returne false otherwise return true
//  this appraoch is good, but new Set(nums), process all the elemnts, even if the array don't have duplicates
//  I'll use loop approach
// 1. initialize the set
// 2. loop through the nums
// 3. if number exist in the set then return false, otherwise add thsi number into set
// in the loop approach, if duplciates occurs early , then we don't need to process the whole array example

// [5,5,6,3,6,7,8,2,4,5,6,7,8,8,2,22]
//  new Set(nums) -> process 16 elements
// loop -> process two elements

