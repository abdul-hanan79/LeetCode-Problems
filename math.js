// https://leetcode.com/problems/lemonade-change/description/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {number[]} bills
 * @return {boolean}
 */
// var lemonadeChange = function (bills) {
//     let bill10 = 0;
//     let bill5 = 0;
//     let bill20 = 0;
//     let billAmount = 0;
//     for (let i = 0; i < bills.length; i++) {
//         if (bills[i] == 5) {
//             billAmount += 5;
//             bill5++
//         }
//         if (bills[i] == 10) {
//             billAmount += 5;
//             bill10++
//             if (bill5 > 0) {
//                 --bill5
//             } else {
//                 return false
//             }
//         }
//         if (bills[i] == 20) {
//             billAmount += 5;
//             bill20++
//             if ((bill5 > 0 && bill10 > 0)) {
//                 console.log("not working")
//                 --bill5
//                 --bill10
//             } else if (bill5 >= 3) {
//                 bill5 -= 3
//             }
//             else {
//                 return false
//             }
//         }
//     }
//     console.log("bill amount", billAmount)
//     return true
// };