// @flow

import CircularQueue from './CircularQueue';

test('it can set size of the CircularQueue', () => {
  const myQ = new CircularQueue(3);
  expect(myQ.print()).toEqual([null, null, null]);
});

test('it can enqueue the CircularQueue', () => {
  const myQ = new CircularQueue(3);
  myQ.enqueue(1);
  expect(myQ.print()).toEqual([1, null, null]);

  myQ.enqueue(2);
  expect(myQ.print()).toEqual([1, 2, null]);

  myQ.enqueue(3);
  expect(myQ.print()).toEqual([1, 2, 3]);

  myQ.enqueue(4);
  expect(myQ.print()).toEqual([4, 2, 3]);

  myQ.enqueue(5);
  expect(myQ.print()).toEqual([4, 5, 3]);

  myQ.enqueue(6);
  expect(myQ.print()).toEqual([4, 5, 6]);

  myQ.enqueue(7);
  expect(myQ.print()).toEqual([7, 5, 6]);
});

test('it can enqueue the CircularQueue', () => {
  const myQ = new CircularQueue(3);
  myQ.enqueue(1);
  myQ.enqueue(2);
  myQ.enqueue(3);
  expect(myQ.print()).toEqual([1, 2, 3]);
  myQ.dequeue();
  expect(myQ.print()).toEqual([null, 2, 3]);
  myQ.dequeue();
  expect(myQ.print()).toEqual([null, null, 3]);
  myQ.enqueue(4);
  expect(myQ.print()).toEqual([4, null, 3]);
  myQ.dequeue();
  expect(myQ.print()).toEqual([4, null, null]);
  myQ.enqueue(5);
  expect(myQ.print()).toEqual([4, 5, null]);
  myQ.dequeue();
  expect(myQ.print()).toEqual([null, 5, null]);
  myQ.dequeue();
  expect(myQ.print()).toEqual([null, null, null]);
});
