
function clumsy(n: number): number {
    let stack = [n]
    let opr = "*"
    for (let i = n - 1; i > 0; i--) {
        switch (opr) {
            case "*":
                stack.push(stack.pop() * i)
                opr = "/"
                break
            case "/":
                stack.push(Math.trunc(stack.pop() / i))
                opr = "+"
                break
            case "+":
                stack.push(i)
                opr = "-"
                break
            case "-":
                stack.push(-i)
                opr = "*"
                break
        }
    }
    return stack.reduce((acc, cum) => acc + cum, 0)
};
