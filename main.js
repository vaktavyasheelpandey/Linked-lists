class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.nextNode) {
          current = current.nextNode;
        }
        current.nextNode = newNode;
      }
    }
  
    prepend(value) {
      const newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  
    size() {
      let counter = 1;
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
        counter++;
      }
  
      return counter;
    }
  
    start() {
      return this.head;
    }
  
    tail() {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
  
      return current;
    }
  
    at(index) {
      let current = this.head;
  
      for (let i = 0; i < index; i++) {
        current = current.nextNode;
      }
  
      return current;
    }
  
    pop() {
      let nodeIndex = this.size() - 2;
      let current = this.head;
  
      for (let i = 0; i < nodeIndex; i++) {
        current = current.nextNode;
      }
  
      current.nextNode = null;
    }
  
    contains(value) {
      let current = this.head;
  
      while (current.value !== value) {
        if (!current.nextNode) {
          return false;
        }
  
        current = current.nextNode;
      }
  
      return true;
    }
  
    find(value) {
      let current = this.head;
      let counter = 0;
  
      while (current.value !== value) {
        if (!current.nextNode) {
          return null;
        }
  
        current = current.nextNode;
        counter++;
      }
  
      return counter;
    }
  
    toString() {
      let current = this.head;
      let string = "";
  
      while (current.nextNode) {
        string += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      string += ( ${current.value} ) -> null;
  
      return string;
    }
  }