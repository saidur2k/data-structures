import Stack from './Stack';

test('Can push to stack', () => {
  const myStack = new Stack();
  expect(myStack.size()).toEqual(0);
  myStack.push(1);
  expect(myStack.size()).toEqual(1);
  expect(myStack.peek()).toEqual(1);
  myStack.push('abc');
  expect(myStack.size()).toEqual(2);
  expect(myStack.peek()).toEqual('abc');
});

test('Can pop from stack', () => {
  const myStack = new Stack();

  myStack.push('cat');
  myStack.push('abc');
  myStack.push('dog');

  expect(myStack.size()).toEqual(3);
  expect(myStack.peek()).toEqual('dog');
  myStack.pop();
  expect(myStack.size()).toEqual(2);
  expect(myStack.peek()).toEqual('abc');
  myStack.pop();
  expect(myStack.size()).toEqual(1);
  expect(myStack.peek()).toEqual('cat');

  myStack.pop();
  expect(myStack.size()).toEqual(0);

  expect(myStack.pop).toThrowError();
});
