import BST from './BST';

test('I can add a root node', () => {
  const myBinaryTree = new BST();
  myBinaryTree.add(50);
  console.log(myBinaryTree.getRoot());
});
