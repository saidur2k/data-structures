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
  const head = myDoublyLinkedList.getHead();
  expect(head.getNext().getNext().getData()).toEqual(5);
  expect(head.getNext().getNext().getPrev().getData()).toEqual(9);
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

  const firstElementValueFromHead = head;
  const firstElementValueFromTail = tail.getPrev().getPrev().getPrev();
  const firstElementViaNextPrev = head.getNext().getPrev();
  const secondElementFromHead = head.getNext();
  const secondElementFromtail = tail.getPrev().getPrev();
  const secondElementFromNextPrev = head.getNext().getNext().getPrev();
  const thirdElementFromHead = head.getNext().getNext();
  const thirdElementFromTail = tail.getPrev();
  const thirdElementFromNextPrev = head.getNext().getNext().getNext().getPrev();
  const fourthElementFromHead = head.getNext().getNext().getNext();
  const fourthElementFromTail = tail;
  function expectErrorFromHead() {
    const lastElement = head.getNext().getNext().getNext().getNext();
    return lastElement.getPrev();
  }

  expect(firstElementValueFromHead.getData()).toEqual(5);
  expect(firstElementValueFromTail.getData()).toEqual(5);
  expect(firstElementViaNextPrev.getData()).toEqual(5);
  expect(secondElementFromHead.getData()).toEqual(4);
  expect(secondElementFromtail.getData()).toEqual(4);
  expect(secondElementFromNextPrev.getData()).toEqual(4);
  expect(thirdElementFromHead.getData()).toEqual(3);
  expect(thirdElementFromTail.getData()).toEqual(3);
  expect(thirdElementFromNextPrev.getData()).toEqual(3);
  expect(fourthElementFromHead.getData()).toEqual(2);
  expect(fourthElementFromTail.getData()).toEqual(2);
  expect(expectErrorFromHead).toThrowError("Cannot read property 'getPrev' of undefined");
});
