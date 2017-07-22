// @flow

/*
Stack time complexity
║ Algorithm ║ Average ║ Worst Case ║
║ Space     ║ O(n)    ║ O(n)       ║
║ Search    ║ O(n)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(1)       ║
║ Delete    ║ O(1)    ║ O(1)       ║
*/

class Stack<T> {
  count: number = 0;
  storage: Array<T> = [];

  size(): number {
    return this.count || 0;
  }

  push(data: T): void {
    this.storage[this.count] = data;
    this.count += 1;
  }

  peek(): T {
    if (this.size === 0) {
      return this.storage[0];
    }
    return this.storage[this.size() - 1];
  }

  pop(): T {
    if (this.size() === 0) {
      throw new Error('Cannot pop empty stack');
    }
    const lastItem: T = this.peek();
    delete this.storage[this.count];
    this.count -= 1;
    return lastItem;
  }
}

export default Stack;
