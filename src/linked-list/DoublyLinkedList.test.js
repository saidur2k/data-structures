import DoublyLinkedList from './DoublyLinkedList';

test('it has a head and a tail', () => {
  const myDoublyLinkedList = new DoublyLinkedList();
  expect(myDoublyLinkedList.getHead()).toBeNull();
  expect(myDoublyLinkedList.getTail()).toBeNull();
});

test('it can add an element to a DLL', () => {
  const myDoublyLinkedList = new DoublyLinkedList();
  expect(myDoublyLinkedList.getHead()).toBeNull();
  myDoublyLinkedList.add(2);
  expect(myDoublyLinkedList.getHead()).toEqual({ data: 2, prev: null });
  myDoublyLinkedList.add(9);
  expect(myDoublyLinkedList.getHead().getNext().getData()).toEqual(9);
  expect(myDoublyLinkedList.getHead().getNext().getPrev().getData()).toEqual(2);
  myDoublyLinkedList.add(5);
  expect(myDoublyLinkedList.getHead().getNext().getNext().getData()).toEqual(5);
  expect(myDoublyLinkedList.getHead().getNext().getNext().getPrev().getData()).toEqual(9);
});

test('it can remove an element from a DLL', () => {
  const myDoublyLinkedList = new DoublyLinkedList();
  const expectException = item => () => myDoublyLinkedList.remove(item);
  expect(expectException(0)).toThrowError('Cannot remove from empty DLL');
  myDoublyLinkedList.add(2);
  expect(myDoublyLinkedList.getHead()).toEqual({ data: 2, prev: null });
  myDoublyLinkedList.remove(2);
  expect(myDoublyLinkedList.getHead()).toEqual(null);
});

test('it can remove the head element from a DLL', () => {
  const myDoublyLinkedList = new DoublyLinkedList();
  myDoublyLinkedList.add(2);
  myDoublyLinkedList.add(3);
  myDoublyLinkedList.add(5);
  myDoublyLinkedList.remove(2);
  expect(myDoublyLinkedList.getHead().getData()).toEqual(3);
  expect(myDoublyLinkedList.getHead().getNext().getData()).toEqual(5);
  expect(myDoublyLinkedList.getHead().getPrev()).toEqual(null);
});

test('it can remove any element element from a DLL', () => {
  const myDoublyLinkedList = new DoublyLinkedList();
  myDoublyLinkedList.add(2);
  myDoublyLinkedList.add(3);
  myDoublyLinkedList.add(4);
  myDoublyLinkedList.add(5);
  myDoublyLinkedList.remove(4);
  expect(myDoublyLinkedList.getHead().getData()).toEqual(2);
  expect(myDoublyLinkedList.getHead().getNext().getData()).toEqual(3);
  expect(myDoublyLinkedList.getHead().getNext().getNext().getData()).toEqual(5);
});

test('it can remove last element from a DLL', () => {
  const myDoublyLinkedList = new DoublyLinkedList();
  myDoublyLinkedList.add(2);
  myDoublyLinkedList.add(3);
  myDoublyLinkedList.add(4);
  myDoublyLinkedList.add(5);
  myDoublyLinkedList.remove(5);
  expect(myDoublyLinkedList.getTail().getData()).toEqual(4);
});
