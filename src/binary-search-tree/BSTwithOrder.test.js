import BSTwithOrder from './BSTwithOrder';

test('it can sort and calculate height', () => {
  const bst = new BSTwithOrder();
  bst.add(9);
  bst.add(4);
  bst.add(17);
  bst.add(3);
  bst.add(6);
  bst.add(22);
  bst.add(5);
  bst.add(7);
  bst.add(20);
  expect(bst.findMinHeight()).toEqual(1);
  expect(bst.findMaxHeight()).toEqual(3);
  expect(bst.isBalanced()).toEqual(false);
  bst.add(10);

  //        9
  //      /   \
  //    4     17
  //  / \     / \
  // 3   6  10  22
  //   /  \     /
  //  5   7    20
  expect(bst.findMinHeight()).toEqual(2);
  expect(bst.findMaxHeight()).toEqual(3);
  expect(bst.isBalanced()).toEqual(true);

  // sorted in order
  expect(bst.inOrder()).toEqual([3, 4, 5, 6, 7, 9, 10, 17, 20, 22]);

  // explore root nodes before the leaves
  expect(bst.preOrder()).toEqual([9, 4, 3, 6, 5, 7, 17, 10, 22, 20]);

  // explore leaf nodes before the root
  expect(bst.postOrder()).toEqual([3, 5, 7, 6, 4, 10, 20, 22, 17, 9]);

  // breadth first search; explore all nodes in the tree before
  // continuing to next level
  expect(bst.levelOrder()).toEqual([9, 4, 17, 3, 6, 10, 22, 5, 7, 20]);
});
