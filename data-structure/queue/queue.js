class Queue {
  constructor() {
    this.items = [];
  }

  // 큐 뒤에 요소 추가
  enqueue(element) {
    this.items.push(element);
  }

  // 큐가 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 큐 앞에 있는 요소 제거 및 반환
  dequeue() {
    if (this.isEmpty()) {
      return "큐가 비어있음";
    }
    return this.items.shift();
  }

  // 큐 앞에 있는 요소 반환
  front() {
    if (this.isEmpty()) {
      return "큐가 비어있음";
    }
    return this.items[0];
  }

  // 큐 요소 개수 반환
  size() {
    return this.items.length;
  }

  // 큐 초기화
  clear() {
    this.items = [];
  }
}

const queue = new Queue();
queue.enqueue("가");
queue.enqueue("나");
queue.enqueue("다");
console.log(queue.items);
console.log(queue.dequeue());
console.log(queue.items);
console.log(queue.front());
console.log(queue.size());
queue.clear();
console.log(queue.items);
