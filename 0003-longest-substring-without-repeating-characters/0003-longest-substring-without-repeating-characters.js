/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let left = 0
    let ans = 0

    for (let right = 0; right < s.length; right++) {
        let ch = s[right]
        while (set.has(ch)) {
            set.delete(s[left])
            left++
        }

        set.add(ch)
        ans = Math.max(ans, set.size)

    }
    return ans

};

// Input: string, s="abcabcbb"
// output: number, longest substring without duplicates
// Problem: the problem asked me to find the longest substring with contains no duplicate charactesr, I need to keep track of the longest substring length.

// constraints: 
// 1. length can be zero
// 2. s consists of letters, digits, symbols and spaces

// pattern: sliding window, because I need to maintain the window 
// breaking the problem into steps:
// 1. set the left and right to zero
// 2. keep adding the new element, when duplicate don't occurs, if duplicate occurs then add incrase the element till untile it removes