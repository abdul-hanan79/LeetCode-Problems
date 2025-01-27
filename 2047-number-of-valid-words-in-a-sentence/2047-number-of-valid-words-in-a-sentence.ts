function countValidWords(sentence: string): number {
    let words = sentence.trim().replace(/\s+/g, " ").split(" ")
    let correctWords = 0
    for (let word of words) {
        let regex = /^([a-z]+(-[a-z]+)?)?[!.,]?$/;
        if (regex.test(word)) {
            correctWords++
        }
    }
    return correctWords
};
