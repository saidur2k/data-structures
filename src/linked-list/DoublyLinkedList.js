// @flow
class Node<T> {
  data: T;
  prev: ?Node<T>;
  next: ?Node<T>;

  constructor(data: T, prev: ?Node<T>) {
    this.data = data;
    this.prev = prev;
  }

  getData(): T {
    return this.data;
  }
  getPrev(): ?Node<T> {
    return this.prev;
  }
  setPrev(prev: ?Node<T>): void {
    this.prev = prev;
  }
  getNext(): ?Node<T> {
    return this.next;
  }
  setNext(next: ?Node<T>): void {
    this.next = next;
  }
}

class DoublyLinkedList<T> {
  head: ?Node<T> = null;
  tail: ?Node<T> = null;

  getHead(): ?Node<T> {
    return this.head;
  }

  getTail(): ?Node<T> {
    return this.tail;
  }

  add(data: T): void {
    let currentNode = this.head;
    let newNode;
    if (this.head === null) {
      newNode = new Node(data, null);
      this.head = newNode;
      this.tail = newNode;
    }

    while (currentNode) {
      if (typeof currentNode.getNext() === 'undefined') {
        newNode = new Node(data, currentNode);
        this.tail = newNode;
        currentNode.setNext(newNode);
        return;
      }
      currentNode = currentNode.getNext();
    }
  }

  remove(data: T): void {
    let currentNode = this.head;
    let previousNode: ?Node<T>;
    let nextNode: ?Node<T>;

    if (currentNode === null) {
      throw new Error('Cannot remove from empty DLL');
    }

    if (this.head && this.head.getData() === data) {
      if (this.head.next) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.head = null;
        this.tail = null;
      }
    } else if (this.tail && this.tail.getData() === data) {
      if (this.tail.prev) {
        this.tail = this.tail.prev;
        this.tail.setNext(null);
      }
    } else {
      while (currentNode && typeof currentNode !== 'undefined') {
        if (currentNode.getPrev() === null) {
          previousNode = null;
        } else {
          previousNode = currentNode.getPrev();
        }

        if (currentNode.next && typeof currentNode.next !== 'undefined') {
          nextNode = currentNode.next;
        } else {
          nextNode = null;
        }

        if (currentNode.getData() === data) {
          if (nextNode) {
            currentNode = nextNode;
          } else {
            if (previousNode) {
              previousNode.setNext(null);
            }
            return;
          }

          if (currentNode.getPrev() === null) {
            currentNode.setPrev(null);
          } else if (currentNode && previousNode) {
            currentNode.setPrev(previousNode);
            previousNode.setNext(currentNode);
          }

          return;
        }
        currentNode = nextNode;
      }
    }
  }

  reverse(): DoublyLinkedList<T> {
    const reversedDLL = new DoublyLinkedList();
    let currentNode = this.tail;
    while (currentNode) {
      reversedDLL.add(currentNode.getData());
      currentNode = currentNode.getPrev();
    }
    return reversedDLL;
  }
}

export default DoublyLinkedList;
