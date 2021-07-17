class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert the node at first position
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert the  node at last position

  insertLast(data) {
    const node = new Node(data);
    let current;
    // if node is empty, then add node first
    if (this.head === null) {
      this.head = node;
    } else {
      // putting head node in current variable
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // insert at an index position (most important)

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    // insert at 0 index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;
    //set current to the first
    current = this.head;
    let it = 0;
    // iterate over the list to find
    // the position to insert
    while (it < index) {
      previous = current; // node before index
      it++;
      current = current.next; // Node after index
    }
    previous.next = node;
    node.next = current;
    this.size++;
  }

  // get data at index positon

  getAt(index) {
    let current = this.head;
    let it = 0;
    while (current) {
      if (it === index) {
        console.log("get at", current.data);
      }
      it++;
      current = current.next;
    }
    return null;
  }

  // remove at

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    console.log("remove", current.data);
  }
  // clear
  clear() {
    this.head = null;
    this.size = 0;
  }
  //printData
  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
//ll.insertAt(500, 1);
//ll.getAt(1);
//ll.removeAt(1);
//ll.clear()
ll.printData();
