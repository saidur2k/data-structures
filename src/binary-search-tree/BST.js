import Node from './Node';

class BST {
  constructor() {
    this.root = null;
    this.searchTree = this.searchTree.bind(this);
  }

  searchTree(data) {
    let node = null;
    node = this.root;
    if (data < node.data) {
      if (node.left === null) {
        return (node.left = new Node(data));
      }
      return this.searchTree(node.left);
    } else if (data > node.data) {
      if (node.right === null) {
        return (node.right = new Node(data));
      }
      return this.searchTree(node.right);
    }
    return null;
  }

  add(data) {
    return this.searchTree(data);
  }

  getRoot() {
    return this.root;
  }
}
export default BST;
