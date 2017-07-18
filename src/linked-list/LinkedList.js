// @flow

class Node {
  element: number;
  next: ?Node = null;

  constructor(e: number) {
    this.element = e;
  }

  getElement() {
    return this.element;
  }
}

class LinkedList {
  head: ?Node = null;
  length: number = 0;

  size(): number {
    return this.length;
  }

  getHead(): ?Node {
    return this.head;
  }

  add(element: number): void {
    const node: Node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode: ?Node = this.head;

      if (currentNode) {
        while (currentNode.next != null) {
          currentNode = currentNode.next;
        }

        currentNode.next = node;
      }
    }
    this.length = this.length + 1;
  }

  remove(element: number): void {
    let currentNode: ?Node = this.head;
    let previousNode: ?Node;

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

  elementAt(index: number): number {
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

  addAt(index: number, element: number): void {
    const nodeToAdd: Node = new Node(element);
    let currentNode: ?Node = this.head;
    let previousNode: ?Node;
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

  removeAt(index: number): number {
    let currentNode: ?Node = this.head;
    let previousNode: ?Node;
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
