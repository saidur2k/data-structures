// @flow
import LinkedList from './LinkedList';

test('Can add to LinkedList', () => {
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  expect(list.size()).toEqual(2);
});

test('Can remove from LinkedList', () => {
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.remove(2);
  expect(list.size()).toEqual(1);
});

test('Can indicate LinkedList isEmpty', () => {
  const list = new LinkedList();
  expect(list.isEmpty()).toBe(true);
  list.add(1);
  list.add(2);
  list.remove(2);
  expect(list.size()).toEqual(1);
  expect(list.isEmpty()).toBe(false);
  list.remove(1);
  expect(list.isEmpty()).toBe(true);
});

test('Throws error when trying to remove from an empty list', () => {
  const conga = new LinkedList();
  conga.add('Kitten');
  conga.add('Puppy');
  conga.add('Dog');
  conga.remove('Dog');
  conga.remove('Kitten');
  conga.remove('Puppy');
  function expectErrorToBeThrown() {
    conga.remove('Cat');
  }
  expect(expectErrorToBeThrown).toThrowError('Cannot remove element from empty list');
  expect(conga.isEmpty()).toBe(true);
});

test('Can show the indexOf element', () => {
  const list = new LinkedList();
  list.add(1);
  list.add(5);
  list.add(2);
  list.add(0);

  expect(list.indexOf(2)).toEqual(2);
  expect(list.indexOf(5)).toEqual(1);
  expect(list.indexOf(1)).toEqual(0);
  expect(list.indexOf(0)).toEqual(3);
});

test('Can show the element at index', () => {
  const list = new LinkedList();
  function expectErrorToBeThrown() {
    list.elementAt(0);
  }
  expect(expectErrorToBeThrown).toThrowError();

  list.add(1);
  list.add(5);
  list.add(2);
  list.add(0);

  expect(list.elementAt(0)).toEqual(1);
  expect(list.elementAt(1)).toEqual(5);
  expect(list.elementAt(2)).toEqual(2);
  expect(list.elementAt(3)).toEqual(0);
  function expectErrorToBeThrownAgain() {
    list.elementAt(4);
  }
  expect(expectErrorToBeThrownAgain).toThrowError();
});

test('Can add element at a given index', () => {
  const list = new LinkedList();
  list.add(1);
  list.add(5);
  list.add(2);
  list.add(0);
  expect(list.elementAt(0)).toEqual(1);
  expect(list.elementAt(1)).toEqual(5);
  expect(list.elementAt(2)).toEqual(2);
  expect(list.elementAt(3)).toEqual(0);
  expect(list.size()).toEqual(4);

  list.addAt(2, 9);
  expect(list.size()).toEqual(5);
  expect(list.elementAt(0)).toEqual(1);
  expect(list.elementAt(1)).toEqual(5);
  expect(list.elementAt(2)).toEqual(9);
  expect(list.elementAt(3)).toEqual(2);
  expect(list.elementAt(4)).toEqual(0);

  list.addAt(0, 15);
  expect(list.size()).toEqual(6);
  expect(list.elementAt(0)).toEqual(15);
  expect(list.elementAt(1)).toEqual(1);
  expect(list.elementAt(2)).toEqual(5);
  expect(list.elementAt(3)).toEqual(9);
  expect(list.elementAt(4)).toEqual(2);
  expect(list.elementAt(5)).toEqual(0);
});

test('Can remote element at a given index', () => {
  const list = new LinkedList();
  list.add(1);
  list.add(5);
  list.add(2);
  list.add(0);
  expect(list.elementAt(0)).toEqual(1);
  expect(list.elementAt(1)).toEqual(5);
  expect(list.elementAt(2)).toEqual(2);
  expect(list.elementAt(3)).toEqual(0);
  expect(list.size()).toEqual(4);

  list.removeAt(2);
  expect(list.size()).toEqual(3);
  expect(list.elementAt(0)).toEqual(1);
  expect(list.elementAt(1)).toEqual(5);
  expect(list.elementAt(2)).toEqual(0);
  function expectErrorToBeThrown(index) {
    return () => list.removeAt(index);
  }

  expect(expectErrorToBeThrown(3)).toThrowError();
  expect(expectErrorToBeThrown(4)).toThrowError();

  list.removeAt(1);
  expect(list.size()).toEqual(2);
  expect(list.elementAt(0)).toEqual(1);
  expect(list.elementAt(1)).toEqual(0);
  expect(expectErrorToBeThrown(2)).toThrowError();
});
