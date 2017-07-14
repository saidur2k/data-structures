// @flow

class Node {
  data: ?number;
  left: ?Node;
  right: ?Node;

  constructor(data: ?number = null, left: ?Node = null, right: ?Node = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export default Node;
