/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
   
    let totalDuration = 0
    for (let i = 1; i < timeSeries.length; i++) {
        let diff = timeSeries[i] - timeSeries[i - 1]
        if (diff < duration) {
            totalDuration += diff
        } else {
            totalDuration += duration
        }
    }
    totalDuration += duration
    return totalDuration
};