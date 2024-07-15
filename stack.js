class Stack {
  constructor(data) {
    this.item = [];
  }

  push(data) {
    this.item.push(data);
  }
  pop() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      this.item.pop();
    }
  }
  isEmpty() {
    return this.item.length == 0;
  }
  size() {
    return this.item.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.item[this.item.length - 1];
  }
  print() {
    console.log(this.item.toString());
  }
}

const myStack = new Stack();
myStack.push(2);
myStack.push(1);
myStack.push(4);
myStack.push(5);
myStack.push(6);
// myStack.pop();
// myStack.pop();
console.log(myStack.peek());
myStack.print();
