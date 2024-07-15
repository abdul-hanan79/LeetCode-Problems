// class List {
//   constructor(data) {
//     this.head = {
//       value: data,
//       next: null,
//     };
//     this.tail = this.head;
//     this.size = 1;
//   }
//   insertNode(nodeData) {
//     let newNode = {
//       value: nodeData,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.size += 1;
//   }
// }

// let list = new List(200);
// list.insertNode(400);
// list.insertNode(500);
// list.insertNode(600);
// // list.insertNode(600);
// // list.insertNode(800);
// // list.insertNode(900);
// console.log("list", list);

// // {value:3,
// //     next:{
// //     value:3,
// //     next:{

// //     }
// // }}

// Node class to represent each element in the list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class to manage the nodes
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Method to add a node at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Method to add a node at the beginning
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Method to insert a node at a specific index
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    const newNode = new Node(value);
    let current = this.head;
    let previous;
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }

  // Method to remove a node from the list
  remove(value) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.value === value) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.value;
      }
      previous = current;
      current = current.next;
    }
    return null;
  }

  // Method to get the size of the list
  getSize() {
    return this.size;
  }

  // Method to print the list
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// Usage example
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.insertAt(15, 2);
list.printList(); // Output: 5 -> 10 -> 15 -> 20 -> null
console.log("Size:", list.getSize()); // Output: Size: 4
list.remove(15);
list.printList(); // Output: 5 -> 10 -> 20 -> null

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}















// let prev = null;
// let cur = head; // 1

// while (cur !== null) {
//     let tempNext = cur.next; // store the next node // 2,3,4,5,
//     cur.next = prev;         // reverse the current node's pointer //null,1,2,3
//     prev = cur;              // move prev to the current node //1,2,3,4
//     cur = tempNext;          // move cur to the next node // 2,3,4,5
// }

// return prev; // prev will be the new head of the reversed list

