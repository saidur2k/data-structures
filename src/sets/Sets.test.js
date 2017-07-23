// flow

import Sets from './Sets';

it('can create an empty Set', () => {
  const mySet = new Sets();
  expect(mySet.values()).toEqual([]);
  expect(mySet.has(1)).toEqual(false);
});

it('can add to a Set', () => {
  const mySet = new Sets();
  expect(mySet.add('abc')).toEqual(true);
  expect(mySet.size()).toEqual(1);
  expect(mySet.add(2)).toEqual(true);
  expect(mySet.size()).toEqual(2);
  expect(mySet.add(2)).toEqual(false);
  expect(mySet.size()).toEqual(2);
});

it('can remove from a Set', () => {
  const mySet = new Sets();
  expect(mySet.add('abc')).toEqual(true);
  expect(mySet.add(2)).toEqual(true);
  expect(mySet.add('blah')).toEqual(true);
  expect(mySet.size()).toEqual(3);

  expect(mySet.remove('mad')).toEqual(false);
  expect(mySet.size()).toEqual(3);
  expect(mySet.values()).toEqual(['abc', 2, 'blah']);

  expect(mySet.remove('blah')).toEqual(true);
  expect(mySet.size()).toEqual(2);
  expect(mySet.values()).toEqual(['abc', 2]);

  expect(mySet.remove('abc')).toEqual(true);
  expect(mySet.values()).toEqual([2]);
  expect(mySet.size()).toEqual(1);

  expect(mySet.remove(2)).toEqual(true);
  expect(mySet.values()).toEqual([]);
  expect(mySet.size()).toEqual(0);

  expect(mySet.remove(2)).toEqual(false);
  expect(mySet.values()).toEqual([]);
  expect(mySet.size()).toEqual(0);
});
