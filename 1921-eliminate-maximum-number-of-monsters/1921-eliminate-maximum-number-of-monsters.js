/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
    let spendTime = 0;
    let time = 0
    let killedMonsters = 0;
    let timeArray = []
    for (let i = 0; i < dist.length; i++) {
        timeArray.push(dist[i] / speed[i])
    }
    timeArray.sort((a, b) => a - b)
    for (let j = 0; j < timeArray.length; j++) {
        if (spendTime < timeArray[j] - time) {
            killedMonsters++
            spendTime += 2
            time--
        } else {
            return killedMonsters
        }
    }
    return killedMonsters
};