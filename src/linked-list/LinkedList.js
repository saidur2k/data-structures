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
}

export default LinkedList;
export { Node };
