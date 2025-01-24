function minTimeToType(word: string): number {
    let count: number = 0, currChar: string = "a"
    for (let char of word) {
        const charDiff: number = Math.abs(currChar.charCodeAt(0) - char.charCodeAt(0))
        if (charDiff > 13) {
            count += 26 - charDiff + 1
        } else {
            count += charDiff + 1
        }
        currChar = char
    }
    return count
};