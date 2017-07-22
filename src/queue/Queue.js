// @flow

/*
Queue time complexity
║ Algorithm ║ Average ║ Worst Case ║
║ Space     ║ O(n)    ║ O(n)       ║
║ Search    ║ O(n)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(1)       ║
║ Delete    ║ O(1)    ║ O(1)       ║
*/

class Queue<T> {
  storage: Array<T> = [];

  enqueue(item: T): void {
    this.storage.push(item);
  }

  dequeue(): void {
    if (this.size() === 0) {
      throw new Error('Cannot dequeue an empty Queue');
    }
    this.storage.shift();
  }

  size(): number {
    return this.storage.length;
  }

  front(): T {
    return this.storage[0] || null;
  }
}

export default Queue;
