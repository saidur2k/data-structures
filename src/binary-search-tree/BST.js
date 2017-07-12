import Node from './Node';

class BST {
  constructor() {
    this.root = null;
    this.searchTree = this.searchTree.bind(this);
    this.findMin = this.findMin.bind(this);
  }

  searchTree(data, nodeOnFocus) {
    const node = nodeOnFocus;
    if (data < node.data) {
      if (node.left === null) {
        return (node.left = new Node(data));
      }
      return this.searchTree(data, node.left);
    } else if (data > node.data) {
      if (node.right === null) {
        return (node.right = new Node(data));
      }
      return this.searchTree(data, node.right);
    }
    return null;
  }

  add(data) {
    if (this.root === null) {
      return (this.root = new Node(data));
    }
    return this.searchTree(data, this.root);
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  findMax() {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  getRoot() {
    return this.root;
  }
}
export default BST;
