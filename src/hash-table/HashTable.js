// @flow

// A very simple hash function
const hashFunction = (string: string, numberOfBuckets: number): number => {
  let hash = 0;
  for (let i = 0; i < string.length; i += 1) {
    hash += string.charCodeAt(i);
  }

  return hash % numberOfBuckets;
};

class HashItem<T> {
  key: string;
  value: Array<T>;
  constructor(key: string, value: T) {
    this.key = key;
    this.value = [value];
  }

  addToKey(value: T) {
    this.value.push(value);
  }
}

class HashTable<T> {
  storage: Array<Array<HashItem<T>>> = [];
  storageLimit: number;
  hash: Function;

  constructor(storageLimit: number, hash: Function) {
    this.storageLimit = storageLimit;
    this.hash = hash;
  }

  values() {
    return this.storage;
  }

  add(key: string, value: T): boolean {
    const index = this.hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [new HashItem(key, value)];
      return true;
    }

    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i += 1) {
        if (this.storage[index][i]) {
          if (this.storage[index][i].key === key) {
            this.storage[index][i].addToKey(value);
            return true;
          }
        }
      }

      this.storage[index].push(new HashItem(key, value));
      return true;
    }

    return false;
  }

  remove(key: string): boolean {
    const index = this.hash(key, this.storageLimit);

    if (this.storage[index]) {
      if (this.storage[index].length === 1) {
        this.storage[index].splice(0, 1);
        return true;
      }

      if (this.storage[index].length > 1) {
        for (let i = 0; i < this.storage[index].length; i += 1) {
          if (this.storage[index][i].key === key) {
            this.storage[index].splice(i, 1);
            return true;
          }
          return false;
        }
      }

      return true;
    }

    return false;
  }

  lookup(key: string): ?Array<T> {
    const index = this.hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return null;
    }

    for (let i = 0; i < this.storage[index].length; i += 1) {
      if (this.storage[index][i].key === key) {
        return this.storage[index][i].value;
      }
    }

    return null;
  }
}

export default HashTable;
export { hashFunction };
