import BSTwithOrder from './BSTwithOrder';

test('it can show MinHeight', () => {
  const myBstWithOrder = new BSTwithOrder();
  expect(myBstWithOrder.findMinHeight()).toEqual(0);
});

test('it can show MinHeight', () => {
  const myBstWithOrder = new BSTwithOrder();
  myBstWithOrder.add(9);
  myBstWithOrder.add(4);
  myBstWithOrder.add(17);
  myBstWithOrder.add(3);
  myBstWithOrder.add(6);
  myBstWithOrder.add(22);
  myBstWithOrder.add(5);
  myBstWithOrder.add(7);
  myBstWithOrder.add(20);
  myBstWithOrder.add(10);
  expect(myBstWithOrder.findMinHeight()).toEqual(2);
});

test('it can show MaxHeight', () => {
  const myBstWithOrder = new BSTwithOrder();
  expect(myBstWithOrder.findMaxHeight()).toEqual(0);
});

test('it can show MaxHeight', () => {
  const myBstWithOrder = new BSTwithOrder();
  myBstWithOrder.add(9);
  myBstWithOrder.add(4);
  myBstWithOrder.add(17);
  myBstWithOrder.add(3);
  myBstWithOrder.add(6);
  myBstWithOrder.add(22);
  myBstWithOrder.displayTree();
  expect(myBstWithOrder.findMaxHeight()).toEqual(2);
});

test('it can show MaxHeight', () => {
  const myBstWithOrder = new BSTwithOrder();
  myBstWithOrder.add(9);
  myBstWithOrder.add(4);
  myBstWithOrder.add(17);
  myBstWithOrder.add(3);
  myBstWithOrder.add(6);
  myBstWithOrder.add(22);
  myBstWithOrder.add(5);
  myBstWithOrder.add(7);
  myBstWithOrder.add(20);
  myBstWithOrder.add(10);
  expect(myBstWithOrder.findMaxHeight()).toEqual(3);
});
