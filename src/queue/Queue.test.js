// @flow
import Queue from './Queue';

test('It can enqueue an item', () => {
  const myQueue = new Queue();
  expect(myQueue.size()).toEqual(0);
  myQueue.enqueue(1);
  expect(myQueue.front()).toEqual(1);
  expect(myQueue.size()).toEqual(1);
  myQueue.enqueue(5);
  expect(myQueue.front()).toEqual(1);
  expect(myQueue.size()).toEqual(2);
});

test('It can dequeue an item', () => {
  const myQueue = new Queue();
  myQueue.enqueue(1);
  myQueue.enqueue(5);
  expect(myQueue.size()).toEqual(2);
  expect(myQueue.front()).toEqual(1);
  myQueue.dequeue();
  expect(myQueue.size()).toEqual(1);
  expect(myQueue.front()).toEqual(5);
  myQueue.dequeue();
  expect(myQueue.size()).toEqual(0);
  expect(myQueue.front()).toEqual(null);
  expect(myQueue.dequeue).toThrowError("Cannot read property 'size' of undefined");
});
