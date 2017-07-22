// @flow
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
  expect(myDoublyLinkedList.elementDataAt(1)).toEqual(9);
  expect(myDoublyLinkedList.elementDataAt(0)).toEqual(2);
  myDoublyLinkedList.add(5);
  expect(myDoublyLinkedList.elementDataAt(2)).toEqual(5);
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
  expect(myDoublyLinkedList.elementDataAt(0)).toEqual(3);
  expect(myDoublyLinkedList.elementDataAt(1)).toEqual(5);
  expect(myDoublyLinkedList.elementDataAt(-1)).toEqual(null);
});

test('it can remove any element element from a DLL', () => {
  const myDoublyLinkedList = new DoublyLinkedList();
  myDoublyLinkedList.add(2);
  myDoublyLinkedList.add(3);
  myDoublyLinkedList.add(4);
  myDoublyLinkedList.add(5);
  myDoublyLinkedList.remove(4);
  expect(myDoublyLinkedList.elementDataAt(0)).toEqual(2);
  expect(myDoublyLinkedList.elementDataAt(1)).toEqual(3);
  expect(myDoublyLinkedList.elementDataAt(2)).toEqual(5);
});

test('it can remove last element from a DLL', () => {
  const myDoublyLinkedList = new DoublyLinkedList();
  myDoublyLinkedList.add(2);
  myDoublyLinkedList.add(3);
  myDoublyLinkedList.add(4);
  myDoublyLinkedList.add(5);
  myDoublyLinkedList.remove(5);
  expect(myDoublyLinkedList.getTail()).toMatchObject({ data: 4, next: null });
  expect(myDoublyLinkedList.elementDataAt(2)).toEqual(4);
  expect(myDoublyLinkedList.elementDataAt(3)).toEqual(null);
});

test('it can reverse an emtpy DLL', () => {
  const myDoublyLinkedList = new DoublyLinkedList();
  const reversedDoublyLinkedList = myDoublyLinkedList.reverse();
  expect(myDoublyLinkedList).toEqual({ head: null, tail: null });
  expect(reversedDoublyLinkedList).toEqual({ head: null, tail: null });
});
test('it can reverse a DLL', () => {
  const myDoublyLinkedList = new DoublyLinkedList();
  myDoublyLinkedList.add(2);
  myDoublyLinkedList.add(3);
  myDoublyLinkedList.add(4);
  myDoublyLinkedList.add(5);
  const reversedDoublyLinkedList = myDoublyLinkedList.reverse();

  const head = reversedDoublyLinkedList.getHead();
  const tail = reversedDoublyLinkedList.getTail();

  const reversedFirstElementValueFromHead = head;
  const reversedSecondElementFromHead = reversedDoublyLinkedList.elementDataAt(1);
  const reversedthirdElementFromHead = reversedDoublyLinkedList.elementDataAt(2);
  const reversedFourthElementFromTail = tail;

  expect(reversedFirstElementValueFromHead).toMatchObject({ data: 5, prev: null });
  expect(reversedSecondElementFromHead).toEqual(4);
  expect(reversedthirdElementFromHead).toEqual(3);
  expect(reversedFourthElementFromTail).toMatchObject({ data: 2 });
});
