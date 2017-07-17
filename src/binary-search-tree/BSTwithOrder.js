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

  displayTree(tree: Node = this.root): void {
    /* eslint-disable no-console */
    console.log(JSON.stringify(tree, null, 2));
    /* eslint-enable no-console */
  }
}

export default BSTwithOrder;
