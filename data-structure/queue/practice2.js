/*
문제: 최근 호출된 함수들의 이력을 저장하는 캐시를 구현하세요.
- 최대 n개의 최근 호출 이력만 저장합니다.
- 새로운 호출이 추가될 때 가장 오래된 호출은 자동으로 삭제됩니다.
- 모든 호출 이력을 출력하는 기능을 구현하세요.
- 모든 호출을 삭제하는 기능을 구현하세요.

예시:
const cache = new RecentCallsCache(3); // 최대 3개 저장
cache.addCall("function1"); // cache -> ["function1"]
cache.addCall("function2"); // cache -> ["function1", "function2"]
cache.addCall("function3"); // cache -> ["function1", "function2", "function3"]
cache.addCall("function4"); // cache -> ["function2", "function3", "function4"]
cache.getCalls(); // ["function2", "function3", "function4"]
cache.clearCalls(); // cache -> []
*/

class RecentCallsCache {
  constructor(n) {
    this.maxSize = n;
    this.queue = [];
  }

  addCall(functionName) {
    if (this.queue.length >= this.maxSize) {
      // 가장 앞에 있는 호출 제거
      this.queue.shift();
    }
    this.queue.push(functionName);
  }

  getCalls() {
    // this.queue를 반환할 경우 this.queue가 수정될 위험이 있음
    return [...this.queue];
  }

  clearCalls() {
    this.queue = [];
  }
}
