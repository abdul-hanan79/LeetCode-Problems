/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const words = s.split(" ")
    let reverseWords = []
    for (let word of words) {
        let wordArray = word.split("")
        let left = 0; right = wordArray.length
        while (left < right) {
            [wordArray[left], wordArray[right]] = [wordArray[right], wordArray[left]]
            left++
            right--
        }
        reverseWords.push(wordArray.join(""))
    }
    return reverseWords.join(" ")
};


// 1. convert the string into array by splitting " "
// 2. create the reverseword array and push the  reversed word into it
// return the reversed array