// @flow

class Maps {
  collection: Object = {};
  count: number = 0;

  add(key: string, value: mixed): void {
    this.collection[key] = value;
    this.count += 1;
  }

  size(): number {
    return this.count;
  }

  values() {
    const result = [];
    Object.keys(this.collection).forEach((key) => {
      result.push(this.collection[key]);
    });
    return result;
  }

  clear(): void {
    this.collection = {};
    this.count = 0;
  }

  get(key: string): mixed {
    return this.collection[key];
  }

  remove(key: string): boolean {
    if (key && this.count > 0 && this.collection[key]) {
      delete this.collection[key];
      this.count -= 1;
      return true;
    }

    return false;
  }

  has(key: string): boolean {
    if (key && this.count > 0 && this.collection[key]) {
      return true;
    }

    return false;
  }
}

export default Maps;
