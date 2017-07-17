// @flow
import Node from './Node';
import BST from './BST';

class BSTwithOrder extends BST {
  findMinHeight(node: Node = this.root): number {
    if (node === null) {
      return -1;
    }

    let left = -1;
    if (typeof node.left !== 'undefined' && node.left) {
      left = this.findMinHeight(node.left);
    }

    let right = -1;
    if (typeof node.right !== 'undefined' && node.right) {
      right = this.findMinHeight(node.right);
    }

    if (left < right) {
      return left + 1;
    }
    return right + 1;
  }

  findMaxHeight(node: Node = this.root): number {
    if (node === null) {
      return -1;
    }

    let left = -1;
    if (typeof node.left !== 'undefined' && node.left) {
      left = this.findMaxHeight(node.left);
    }

    let right = -1;
    if (typeof node.right !== 'undefined' && node.right) {
      right = this.findMaxHeight(node.right);
    }

    if (left > right) {
      return left + 1;
    }
    return right + 1;
  }

  isBalanced(): boolean {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  inOrder(): Array<?number> | null {
    if (this.root === null) {
      return null;
    }
    const result = [];
    const traverseInOrder = (node) => {
      if (node === null) {
        return;
      }

      if (typeof node.left !== 'undefined' && node.left) {
        traverseInOrder(node.left);
      }

      result.push(node.data);

      if (typeof node.right !== 'undefined' && node.right) {
        traverseInOrder(node.right);
      }
    };

    traverseInOrder(this.root);

    return result;
  }

  preOrder(): Array<?number> | null {
    if (this.root === null) {
      return null;
    }
    const result = [];
    const traverseInOrder = (node) => {
      if (node === null) {
        return;
      }

      result.push(node.data);

      if (typeof node.left !== 'undefined' && node.left) {
        traverseInOrder(node.left);
      }

      if (typeof node.right !== 'undefined' && node.right) {
        traverseInOrder(node.right);
      }
    };

    traverseInOrder(this.root);

    return result;
  }

  postOrder(): Array<?number> | null {
    if (this.root === null) {
      return null;
    }
    const result = [];
    const traverseInOrder = (node) => {
      if (node === null) {
        return;
      }

      if (typeof node.left !== 'undefined' && node.left) {
        traverseInOrder(node.left);
      }

      if (typeof node.right !== 'undefined' && node.right) {
        traverseInOrder(node.right);
      }

      result.push(node.data);
    };

    traverseInOrder(this.root);

    return result;
  }

  levelOrder(): Array<?number> | null {
    const result = [];
    const Q = [];
    if (this.root !== null) {
      Q.push(this.root);

      while (Q.length > 0) {
        const node = Q.shift();

        result.push(node.data);

        if (node.left != null) {
          Q.push(node.left);
        }

        if (node.right != null) {
          Q.push(node.right);
        }
      }

      return result;
    }
    return null;
  }
}

export default BSTwithOrder;
