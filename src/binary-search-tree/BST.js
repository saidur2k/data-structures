// @flow
import Node from './Node';

class BST {
  root: Node = new Node(null);

  searchTree(data: number, nodeOnFocus: Node) {
    const node: Node = nodeOnFocus;
    if (typeof node.data === 'number') {
      if (data < node.data) {
        if (node.left === null) {
          return (node.left = new Node(data));
        }

        if (typeof node.left === 'object') {
          return this.searchTree(data, node.left);
        }
      } else if (data > node.data) {
        if (node.right === null) {
          return (node.right = new Node(data));
        }

        if (typeof node.right === 'object') {
          return this.searchTree(data, node.right);
        }
      }
    }
    return null;
  }

  add(data: number) {
    if (this.root.data === null) {
      return (this.root = new Node(data));
    }
    return this.searchTree(data, this.root);
  }

  findMin(): ?number {
    if (typeof this.root === 'object') {
      let current: Node = this.root;
      const currentData: ?number = current.data;
      if (currentData === null) {
        return null;
      }
      if (typeof current.left === 'object') {
        while (current.left !== null) {
          current = current.left;
        }
        return current.data;
      }
      return currentData;
    }

    return null;
  }

  findMax(): ?number {
    if (typeof this.root === 'object') {
      let current: Node = this.root;
      const currentData: ?number = current.data;
      if (currentData === null) {
        return null;
      }
      if (typeof current.right === 'object') {
        while (current.right !== null) {
          current = current.right;
        }
        return current.data;
      }
      return currentData;
    }

    return null;
  }

  getRoot(): Node {
    return this.root;
  }

  isPresent(data: number): boolean {
    if (typeof this.root === 'object') {
      let current: ?Node = this.root;
      while (current) {
        if (typeof current === 'object') {
          if (typeof current.data === 'number') {
            if (data === current.data) {
              return true;
            }

            if (typeof current.left === 'object') {
              if (data < current.data) {
                current = current.left;
              }
            }

            if (typeof current.right === 'object') {
              if (data > current.data) {
                current = current.right;
              }
            }
          }
        }
      }
    }
    return false;
  }
}
export default BST;
