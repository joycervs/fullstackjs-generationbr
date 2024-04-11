import { colors } from "./util/Cores";

interface queueInterface<Type> {
  enqueue(dataItem: Type): void;
  dequeue(): Type | undefined;
  isEmpty(): boolean;
  count(): number;
  printQueue(): void;
  peek(): Type | undefined;
  contains(dataItem: Type): boolean;
  clear(): void;
}

export class Queue<Type> implements queueInterface<Type> {
  private QueueData: Array<Type> = [];

  constructor() {}

  isEmpty(): boolean {
    let result = this.QueueData.length <= 0;
    return result;
  }

  enqueue(dataItem: Type): void {
    this.QueueData.push(dataItem);
  }

  dequeue(): Type | undefined {
    if (this.isEmpty()) {
      console.log(`\n${colors.fg.red}A Fila está vazia${colors.reset}`);
      return;
    } else {
      let element = this.QueueData.shift();
      return element;
    }
  }

  count(): number {
    let len = this.QueueData.length;
    return len;
  }

  printQueue(): void {
    for (let i = 0; i < this.QueueData.length; i++) {
      console.log(this.QueueData[i]);
    }
  }

  peek(): Type | undefined {
    if (this.isEmpty()) {
      console.log(`\n${colors.fg.red}A Fila está vazia${colors.reset}`);
      return;
    } else {
      var element = this.QueueData[0];
      return element;
    }
  }

  contains(dataItem: Type): boolean {
    if (this.QueueData.includes(dataItem)) {
      return true;
    } else {
      return false;
    }
  }

  clear(): void {
    this.QueueData.length = 0;
  }
}
