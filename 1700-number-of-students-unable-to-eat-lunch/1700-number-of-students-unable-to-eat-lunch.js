/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let studentsEat = 0
    let n = students.length
    let swipoingLimit = 0;
    while (students.length && swipoingLimit <= students.length) {
        if (students[0] == sandwiches[0]) {
            students.shift()
            sandwiches.shift()
            studentsEat++
            swipoingLimit=0
        } else {
            let item = students.shift()
            students.push(item)
            swipoingLimit++
        }
        console.log("student",students)
        console.log("sandwiches",sandwiches)
        console.log("swipoingLimit",swipoingLimit)
        console.log("studentsEat",studentsEat)

    }

    return n - studentsEat
};