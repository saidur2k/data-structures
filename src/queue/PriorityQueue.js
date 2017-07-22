// @flow

class PriorityItem<T> {
  data: T;
  priority: number;

  constructor(data: T, priority: number) {
    this.data = data;
    this.priority = priority;
  }

  getPriority(): number {
    return this.priority;
  }
}

class PriorityQueue {
  storage: Array<PriorityItem<any>> = [];

  enqueue(item: PriorityItem<any>): void {
    const size = this.size();
    let added: boolean = false;
    for (let i = 0; i <= size; i += 1) {
      if (item && item.priority && this.storage[i] && this.storage[i].priority) {
        if (parseInt(item.priority, 10) < parseInt(this.storage[i].priority, 10)) {
          this.storage.splice(i, 0, item);
          added = true;
          break;
        }
      }
    }
    if (!added) {
      this.storage.push(item);
    }
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

  front(): PriorityItem<any> {
    return this.storage[0];
  }
}

export default PriorityQueue;
export { PriorityItem };
