// @flow
import PriorityQueue, { PriorityItem } from './PriorityQueue';

test('It can enqueue an item', () => {
  const myQueue = new PriorityQueue();
  expect(myQueue.size()).toEqual(0);

  const firstItem = new PriorityItem('Bob', 5);
  myQueue.enqueue(firstItem);
  expect(myQueue.size()).toEqual(1);
  expect(myQueue.front()).toEqual({ data: 'Bob', priority: 5 });

  const secondItem = new PriorityItem('Jane', 6);
  myQueue.enqueue(secondItem);
  expect(myQueue.size()).toEqual(2);
  expect(myQueue.front()).toEqual({ data: 'Bob', priority: 5 });

  const thirdItem = new PriorityItem('Kate', 3);
  myQueue.enqueue(thirdItem);
  expect(myQueue.size()).toEqual(3);
  expect(myQueue.front()).toEqual({ data: 'Kate', priority: 3 });
});
