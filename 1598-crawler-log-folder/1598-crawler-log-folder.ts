function minOperations(logs: string[]): number {
    let stack: string[] = []
    for (let i of logs) {
        if (i == "../") {
            if (stack.length)
                stack.pop()
        } else if (i != "./") {
            stack.push(i)
        }

    }
    return stack.length
};