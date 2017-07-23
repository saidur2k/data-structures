// @flow
import HashTable from './HashTable';

test('it can add key/values to a HashTable', () => {
  const myHash = new HashTable(2);
  myHash.add('a', 1);
  myHash.add('b', 2);
  myHash.add('c', 3);
  myHash.add('d', 4);
  myHash.add('a', 5);
  myHash.add('a', 6);
  expect(myHash.values()).toEqual([
    [
      {
        key: 'b',
        value: [2],
      },
      {
        key: 'd',
        value: [4],
      },
    ],
    [
      {
        key: 'a',
        value: [1, 5, 6],
      },
      {
        key: 'c',
        value: [3],
      },
    ],
  ]);
});

test('it can remove key/values from a HashTable', () => {
  const myHash = new HashTable(2);
  myHash.add('a', 1);
  myHash.add('b', 2);
  myHash.add('c', 3);
  myHash.add('d', 4);
  myHash.add('a', 5);
  myHash.add('a', 6);

  expect(myHash.remove('g')).toEqual(false);
  expect(myHash.remove('a')).toEqual(true);
  expect(myHash.values()).toEqual([
    [{ key: 'b', value: [2] }, { key: 'd', value: [4] }],
    [{ key: 'c', value: [3] }],
  ]);
  expect(myHash.remove('b')).toEqual(true);
  expect(myHash.values()).toEqual([[{ key: 'd', value: [4] }], [{ key: 'c', value: [3] }]]);
  myHash.add('d', 4);
  expect(myHash.values()).toEqual([[{ key: 'd', value: [4, 4] }], [{ key: 'c', value: [3] }]]);
});

test('it can lookup by key from a HashTable', () => {
  const myHash = new HashTable(2);
  myHash.add('a', 1);
  myHash.add('b', 2);
  myHash.add('c', 3);
  myHash.add('d', 4);
  myHash.add('a', 5);
  myHash.add('a', 6);
  expect(myHash.lookup('g')).toEqual(null);
  expect(myHash.lookup('a')).toEqual([1, 5, 6]);
  expect(myHash.remove('a')).toEqual(true);
  expect(myHash.lookup('a')).toEqual(null);
  expect(myHash.lookup('b')).toEqual([2]);
});
