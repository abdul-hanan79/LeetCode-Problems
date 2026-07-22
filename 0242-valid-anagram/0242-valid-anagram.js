/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false 

    let sMap = new Map() 

    for (let ch of s) { 
        sMap.set(ch, (sMap.get(ch) ?? 0) + 1) 
    }

    for (let ch of t) {
        const count = sMap.get(ch)
        if (count == undefined || count == 0) {
            return false
        }
        sMap.set(ch, count - 1)
    }

    return true
};


// Problem: I need to find that all the characters of T are in S,
// 1. length of t and s must b same , if not its mean they are not anagrams
// 2. all letters of t must be in s. (the characters are same in two strings just order is different)
//  input, two strings: s="anagram", t="nagaram"
// true/ false
//  Bruete force, take, t and check in the s, by includes
// edge case, s="abca", t="abba" 


// map
// {
//     a: 2,
//         b: 1,
//             c: 1,
// }

// problem breakdown:
// 1. I'll first create the map of s, and count how many letter appears
// 2. then check in the t, and minus that number, if 0 or not present then return false, otherwise true

