import LinkedList, { Node } from './LinkedList';

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
