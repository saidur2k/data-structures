import Maps from './Maps';

test('Can add to map', () => {
  const myMap = new Maps();
  expect(myMap.values()).toEqual([]);
  myMap.add('screens', 2);
  expect(myMap.size()).toEqual(1);
  expect(myMap.values()).toEqual([2]);
  expect(myMap.get('screens')).toEqual(2);
  myMap.add('keyboard', 1);
  expect(myMap.size()).toEqual(2);
  expect(myMap.values()).toEqual([2, 1]);
  expect(myMap.get('keyboard')).toEqual(1);
  myMap.clear();
  expect(myMap.size()).toEqual(0);
  expect(myMap.values()).toEqual([]);
});

test('Can remove from map', () => {
  const myMap = new Maps();
  expect(myMap.values()).toEqual([]);
  expect(myMap.remove()).toEqual(false);
  myMap.add('screens', 2);
  myMap.add('keyboard', 1);
  expect(myMap.size()).toEqual(2);
  expect(myMap.values()).toEqual([2, 1]);
  expect(myMap.has('screens')).toEqual(true);
  expect(myMap.has('keyboard')).toEqual(true);

  expect(myMap.remove('screens')).toEqual(true);
  expect(myMap.values()).toEqual([1]);
  expect(myMap.has('screens')).toEqual(false);

  expect(myMap.remove('keyboard')).toEqual(true);
  expect(myMap.values()).toEqual([]);
  expect(myMap.has('keyboard')).toEqual(false);
});
