import LinkedList, { Node } from './LinkedList';

test('Can add to LinkedList', () => {
  const list = new LinkedList();
  list.add(1);
  expect(list.getHead()).toEqual(new Node(1));
});

test('Can do more with LinkedList', () => {
  const conga = new LinkedList();
  conga.add('Kitten');
  expect(conga.size()).toEqual(1);
  conga.add('Puppy');
  expect(conga.size()).toEqual(2);
  conga.add('Dog');
  expect(conga.size()).toEqual(3);
  conga.add('Cat');
  expect(conga.size()).toEqual(4);
  conga.add('Fish');
  expect(conga.size()).toEqual(5);
  conga.remove('Dog');
  expect(conga.size()).toEqual(4);
  conga.remove('Kitten');
  expect(conga.size()).toEqual(3);
  conga.remove('Puppy');
  expect(conga.size()).toEqual(2);
  conga.remove('Fish');
  expect(conga.size()).toEqual(1);
  conga.remove('Cat');
  expect(conga.size()).toEqual(0);
  function expectErrorToBeThrown() {
    conga.remove('Cat');
  }
  expect(expectErrorToBeThrown).toThrowError('Cannot remove element from empty list');
});
