// @flow

class Sets<T> {
  collection: Array<T> = [];

  has(element: T): boolean {
    return this.collection.includes(element);
  }

  values(): Array<T> {
    return this.collection;
  }

  size(): number {
    return this.collection.length;
  }

  add(element: T): boolean {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }

    return false;
  }

  remove(element: T): boolean {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }

    return false;
  }

  intersection(setToCheck: Sets<T>): Sets<T> {
    const interSectionSet = new Sets();
    setToCheck.values().forEach((val) => {
      if (this.has(val)) {
        interSectionSet.add(val);
      }
    });

    return interSectionSet;
  }

  union(setToAdd: Sets<T>): Sets<T> {
    const unionSet = new Sets();
    this.collection.forEach(item => unionSet.add(item));
    setToAdd.values().forEach(item => unionSet.add(item));

    return unionSet;
  }
}

export default Sets;
