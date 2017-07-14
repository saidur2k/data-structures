// @flow
import BST from './BST';

test('I can add a root node', () => {
  const myBinaryTree = new BST();
  myBinaryTree.add(50);
  expect(myBinaryTree.getRoot()).toEqual({ data: 50, left: null, right: null });
});

test('I can add a root node with a left child', () => {
  const myBinaryTree = new BST();
  myBinaryTree.add(50);
  myBinaryTree.add(15);
  expect(myBinaryTree.getRoot()).toEqual({
    data: 50,
    left: { data: 15, left: null, right: null },
    right: null,
  });
});

test('I can add a root node with a right child', () => {
  const myBinaryTree = new BST();
  myBinaryTree.add(15);
  myBinaryTree.add(50);
  expect(myBinaryTree.getRoot()).toEqual({
    data: 15,
    left: null,
    right: { data: 50, left: null, right: null },
  });
});

test('I can add a root node with a both childs', () => {
  const myBinaryTree = new BST();
  myBinaryTree.add(50);
  myBinaryTree.add(15);
  myBinaryTree.add(60);
  expect(myBinaryTree.getRoot()).toEqual({
    data: 50,
    left: { data: 15, left: null, right: null },
    right: { data: 60, left: null, right: null },
  });
});

test('I can find the minimum child', () => {
  const myBinaryTree = new BST();
  myBinaryTree.add(50);
  myBinaryTree.add(15);
  myBinaryTree.add(60);
  expect(myBinaryTree.findMin()).toEqual(15);
});

test('I can find the minimum child v2', () => {
  const myBinaryTree = new BST();
  myBinaryTree.add(50);
  myBinaryTree.add(15);
  myBinaryTree.add(60);
  myBinaryTree.add(1);
  expect(myBinaryTree.findMin()).toEqual(1);
});

test('I can find the maximum child', () => {
  const myBinaryTree = new BST();
  myBinaryTree.add(50);
  myBinaryTree.add(15);
  myBinaryTree.add(60);
  expect(myBinaryTree.findMax()).toEqual(60);
});

test('I can find the maximum child', () => {
  const myBinaryTree = new BST();
  myBinaryTree.add(50);
  myBinaryTree.add(15);
  myBinaryTree.add(60);
  myBinaryTree.add(70);
  expect(myBinaryTree.findMax()).toEqual(70);
});

test('I can find items in my tree', () => {
  const myBinaryTree = new BST();
  myBinaryTree.add(50);
  myBinaryTree.add(15);
  myBinaryTree.add(60);
  myBinaryTree.add(70);
  expect(myBinaryTree.isPresent(15)).toEqual(true);
  expect(myBinaryTree.isPresent(60)).toEqual(true);
  expect(myBinaryTree.isPresent(70)).toEqual(true);
  expect(myBinaryTree.isPresent(50)).toEqual(true);
  expect(myBinaryTree.isPresent(42)).toEqual(false);
  expect(myBinaryTree.isPresent(43)).toEqual(false);
});
