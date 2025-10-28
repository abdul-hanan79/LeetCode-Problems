/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let map = {}
    if (n == 1) {
        return true
    }
    while (n > 0) {
        let sum = 0
        while (n > 0) {
            let digit = n % 10
            sum += digit ** 2
            n = Math.floor(n / 10)
        }
        n = sum
        if (n == 1) {
            return true
        }
        if (map[n]) {
            return false
        }
        map[n] = sum
    }

};

// set the map
// start the  loop, if n repeat it self stop the loop and return false
// update the n to its sum and set in the map.
//  if n==1 return the true