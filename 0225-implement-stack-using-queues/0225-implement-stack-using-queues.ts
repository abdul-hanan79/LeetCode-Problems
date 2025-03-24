// class MyStack {
//     stack;
//     constructor() {
//         this.stack=[]
//     }
//     push(x: number): void {
//         this.stack.push(x)
//     }
//     pop(): number {
//         return this.stack.pop()
//     }

//     top(): number {
//         return this.stack[this.stack.length-1]
//     }

//     empty(): boolean {
//         return !this.stack.length
//     }
// }

// /**
//  * Your MyStack object will be instantiated and called as such:
//  * var obj = new MyStack()
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.empty()
//  */



class MyStack {
    private queue1: number[];
    private queue2: number[];
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }
    push(x: number): void {
        this.queue2.push(x);
        // Move all elements from queue1 to queue2
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift()!);
        }
        // Swap queue1 and queue2
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

    }
    pop(): number {
        return this.queue1.shift();
    }

    top(): number {
        return this.queue1[0]
    }

    empty(): boolean {
        return !this.queue1.length
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */