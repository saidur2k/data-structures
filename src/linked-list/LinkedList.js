// @flow

class Node<T> {
  element: T;
  next: ?Node<T> = null;

  constructor(e: T) {
    this.element = e;
  }

  getElement(): T {
    return this.element;
  }
}

/*
Linked list time complexity
║ Algorithm ║ Average ║ Worst Case ║
║ Space     ║ O(n)    ║ O(n)       ║
║ Search    ║ O(n)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(1)       ║
║ Delete    ║ O(1)    ║ O(1)       ║
*/

class LinkedList<T> {
  head: ?Node<T> = null;
  length: number = 0;

  size(): number {
    return this.length;
  }

  getHead(): ?Node<T> {
    return this.head;
  }

  add(element: T): void {
    const node: Node<T> = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode: ?Node<T> = this.head;

      if (currentNode) {
        while (currentNode.next != null) {
          currentNode = currentNode.next;
        }

        currentNode.next = node;
      }
    }
    this.length = this.length + 1;
  }

  remove(element: T): void {
    let currentNode: ?Node<T> = this.head;
    let previousNode: ?Node<T>;

    if (this.size() > 0) {
      if (currentNode && currentNode === element) {
        this.head = currentNode.next;
      } else {
        while (currentNode && currentNode.element && currentNode.element !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        if (currentNode && currentNode.next && previousNode) {
          previousNode.next = currentNode.next;
        }
      }
      this.length = this.length - 1;
    } else {
      throw new Error('Cannot remove element from empty list');
    }
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  indexOf(element: number): number {
    let index = -1;
    let currentNode = this.head;

    while (currentNode) {
      index += 1;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  elementAt(index: number): T {
    let currentNode = this.head;
    let count = 0;
    if (index > this.size() - 1 && this.size() > 0) {
      throw new Error('Index exceeds List length');
    }
    while (count < index) {
      count += 1;

      if (currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }
    }

    if (currentNode && (currentNode.element || currentNode.element === 0)) {
      return currentNode.element;
    }

    throw new Error('Element not found at index');
  }

  addAt(index: number, element: T): void {
    const nodeToAdd: Node<T> = new Node(element);
    let currentNode: ?Node<T> = this.head;
    let previousNode: ?Node<T>;
    let currentIndex: number = 0;

    if (index > this.length) {
      return;
    }

    if (index === 0) {
      nodeToAdd.next = currentNode;
      this.head = nodeToAdd;
      this.length += 1;
    } else {
      while (currentIndex < index) {
        currentIndex += 1;
        previousNode = currentNode;
        if (currentNode && currentNode.next) {
          currentNode = currentNode.next;
        }
      }

      nodeToAdd.next = currentNode;

      if (previousNode && previousNode.next) {
        previousNode.next = nodeToAdd;
        this.length += 1;
      }
    }
  }

  removeAt(index: number): T {
    let currentNode: ?Node<T> = this.head;
    let previousNode: ?Node<T>;
    let currentIndex: number = 0;

    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }

    if (index === 0) {
      if (currentNode && currentNode.next) {
        this.head = currentNode.next;
      } else {
        throw new Error('No node after head');
      }
    } else {
      while (currentIndex < index) {
        currentIndex += 1;
        previousNode = currentNode;

        if (currentNode && currentNode.next) {
          currentNode = currentNode.next;
        } else {
          throw new Error('Discontinuous list');
        }
      }

      if (currentNode && previousNode && previousNode.next && currentNode.next) {
        previousNode.next = currentNode.next;
      } else {
        throw new Error('Error with currentNode or previousNode');
      }
    }
    this.length -= 1;
    return currentNode.element;
  }
}

export default LinkedList;
