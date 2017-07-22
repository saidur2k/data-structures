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
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.getNext() === null) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  add(data: T): void {
    let currentNode = this.head;
    if (this.head === null) {
      this.head = new Node(data, null);
    }

    while (currentNode) {
      if (typeof currentNode.getNext() === 'undefined') {
        currentNode.setNext(new Node(data, currentNode));
        return;
      }
      currentNode = currentNode.getNext();
    }
  }

  remove(data: T): void {
    let currentNode = this.head;
    let previousNode: ?Node<T>;
    let nextNode: ?Node<T>;
    // console.log('here', JSON.stringify(currentNode, null, 2));
    if (currentNode === null) {
      throw new Error('Cannot remove from empty DLL');
    }
    if (this.head && this.head.getData() === data) {
      if (this.head.next) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.head = null;
      }
    } else {
      while (currentNode && typeof currentNode !== 'undefined') {
        previousNode = currentNode.getPrev();
        if (currentNode.next && typeof currentNode.next !== 'undefined') {
          nextNode = currentNode.next;
        } else {
          nextNode = null;
        }

        if (currentNode.getData() === data) {
          if (nextNode) {
            console.log('HERExxx');
            currentNode = nextNode;
          } else {
            console.log('HERE');
            previousNode.setNext(null);
            return;
          }

          if (typeof currentNode.getPrev() === null) {
            currentNode.setPrev(null);
          } else {
            currentNode.setPrev(previousNode);
            previousNode.setNext(currentNode);
          }

          return;
        }
        currentNode = nextNode;
      }
    }
  }
}

export default DoublyLinkedList;
