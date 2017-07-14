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
        if (typeof current.data === 'number') {
          if (data === current.data) {
            return true;
          }

          if (current === null) {
            return false;
          }

          if (typeof current.left === 'object' && data < current.data) {
            if (current.left === null) {
              return false;
            }
            if (data < current.data) {
              current = current.left;
            }
          }
          if (data === current.data) {
            return true;
          }
          if (typeof current.right === 'object' && data > current.data) {
            if (current.right === null) {
              return false;
            }

            if (data > current.data) {
              current = current.right;
            }
          }
          if (data === current.data) {
            return true;
          }
        }
      }
    }
    return false;
  }

  remove(data: number): void {
    this.removeNode(this.root, data);
  }

  removeNode(nodeOnFocus: Node, data: number): ?Node {
    const node: Node = nodeOnFocus;
    if (node === null) {
      return null;
    }
    if (
      typeof node.data === 'number' &&
      typeof node.left === 'object' &&
      typeof node.right === 'object'
    ) {
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }

        // two childs
        let tempNode = node.right;
        if (typeof tempNode === 'object') {
          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }

          node.data = tempNode.data;
          if (typeof node.right === 'object') {
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
          }
        }
      } else if (data < node.data) {
        if (node.left === null) {
          return null;
        }
        node.left = this.removeNode(node.left, data);
        return node;
      } else {
        if (node.right === null) {
          return null;
        }
        node.right = this.removeNode(node.right, data);
        return node;
      }
    }

    return null;
  }
}
export default BST;
