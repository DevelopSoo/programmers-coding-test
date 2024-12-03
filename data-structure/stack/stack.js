class Stack {
  constructor() {
    this.items = [];
  }

  // 스택에 요소 추가
  push(element) {
    this.items.push(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }
  // 스택에서 맨 위 요소 제거 및 반환
  pop() {
    if (this.isEmpty()) {
      return "스택이 비어있음";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "스택이 비어있음";
    }
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const stack = new Stack();
stack.push("가"); // stack => ["가"]
stack.push("나"); // stack => ["가", "나"]
stack.push("다"); // stack => ["가", "나", "다"]
console.log(stack.items);
stack.pop(); // stack => ["가", "나"]
console.log(stack.items);
stack.isEmpty(); // false
stack.peek(); // "나";
stack.size(); // 2;
stack.clear(); // stack => [];
console.log(stack.items);
