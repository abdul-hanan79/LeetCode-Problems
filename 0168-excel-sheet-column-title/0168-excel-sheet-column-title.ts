function convertToTitle(columnNumber: number): string {
    let res: string = ""

    while (columnNumber > 0) {
        columnNumber--
        res = String.fromCharCode((number % 25) + 65) + res
        columnNumber = Math.floor(columnNumber / 26)
    }
    return res
};