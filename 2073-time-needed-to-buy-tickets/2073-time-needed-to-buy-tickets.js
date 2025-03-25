/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let index = k
    let numberOfTickets = 0;
    while (tickets.length > 0) {
        if (tickets[0] == 1) {
            numberOfTickets++
            tickets.shift()
            if (index == 0) {
                break;
            }
            index--
        } else {
            tickets.push(tickets.shift() - 1)
            numberOfTickets++
            if (index == 0) {
                index = tickets.length - 1
            } else {
                index--
            }
        }
    }
    return numberOfTickets
};