// @flow

class CircularQueue<T> {
  queue: Array<?T> = [];
  read: number = 0;
  write: number = 0;
  max: number;
  size: number;

  constructor(size: number) {
    let inputSize = size;
    this.size = size;
    this.max = size - 1;
    while (inputSize) {
      this.queue.push(null);
      inputSize -= 1;
    }
  }

  print(): Array<?T> {
    return this.queue;
  }

  enqueue(item: T): void {
    if (this.write >= 0 && this.write < this.max) {
      this.queue[this.write] = item;
      this.write += 1;
      return;
    }
    if (this.write === this.max) {
      this.queue[this.write] = item;
      this.write = 0;
    }
  }

  dequeue(): void {
    if (this.read >= 0 && this.read < this.max) {
      this.queue[this.read] = null;
      this.read += 1;
      return;
    }
    if (this.read === this.max) {
      this.queue[this.read] = null;
      this.read = 0;
    }
  }
}

export default CircularQueue;
