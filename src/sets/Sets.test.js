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

test('Can return the intersection of two sets', () => {
  const setA = new Sets();
  setA.add('a');
  setA.add('b');
  setA.add('c');

  const setB = new Sets();
  setB.add('a');
  setB.add('b');
  setB.add('d');
  setB.add('e');

  expect(setA.intersection(setB).values()).toEqual(['a', 'b']);
  expect(setB.intersection(setA).values()).toEqual(['a', 'b']);
});

test('Can return the union of two sets', () => {
  const setA = new Sets();
  setA.add('a');
  setA.add('b');
  setA.add('c');

  const setB = new Sets();
  setB.add('a');
  setB.add('b');
  setB.add('d');
  setB.add('e');

  expect(setA.union(setB).values()).toEqual(['a', 'b', 'c', 'd', 'e']);
  expect(setB.union(setA).values()).toEqual(['a', 'b', 'd', 'e', 'c']);
});

test('Can return the difference of two sets', () => {
  const setA = new Sets();
  setA.add('a');
  setA.add('b');
  setA.add('c');

  const setB = new Sets();
  setB.add('a');
  setB.add('b');
  setB.add('d');
  setB.add('e');

  expect(setA.difference(setB).values()).toEqual(['c']);
  expect(setB.difference(setA).values()).toEqual(['d', 'e']);
});

test('Can check if a set is a subset of another set', () => {
  const setA = new Sets();
  setA.add('a');
  setA.add('b');
  setA.add('c');

  const setB = new Sets();
  setB.add('a');
  setB.add('b');

  expect(setB.subset(setA)).toEqual(true);
  expect(setA.subset(setB)).toEqual(false);

  const setC = new Sets();
  setC.add('a');
  setC.add('b');
  setC.add('d');

  expect(setC.subset(setA)).toEqual(false);

  const setD = new Sets();
  const setE = new Sets();
  expect(setD.subset(setE)).toEqual(true);
  expect(setE.subset(setD)).toEqual(true);
});
