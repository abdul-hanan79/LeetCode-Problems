function findPoisonedDuration(timeSeries: number[], duration: number): number {
    let res = 0
    for (let i = 1; i < timeSeries.length; i++) {
        const diff = timeSeries[i] - timeSeries[i - 1]
        res += diff < duration ? diff : duration

    }
    return res + duration

};