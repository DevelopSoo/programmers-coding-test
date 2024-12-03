/*
문제: 프린터 대기열을 구현하세요.
- 문서는 문서이름과 페이지 수를 가집니다.
- enqueue로 문서를 추가하고, dequeue로 문서를 인쇄합니다.
- 현재 대기열의 전체 페이지 수를 반환하는 기능을 구현하세요.

예시:
printer.enqueue("A문서", 3);  // A문서 (3페이지) 추가
printer.enqueue("B문서", 5);  // B문서 (5페이지) 추가
printer.getTotalPages();      // 8 반환
printer.dequeue();           // "A문서" 인쇄
printer.getTotalPages();      // 5 반환
*/

class Printer {
  constructor() {
    this.queue = [];
  }

  enqueue(documentName, pageCount) {
    this.queue.push({ documentName, pageCount });
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  getTotalPages() {
    return this.queue.reduce((acc, cur) => acc + cur.pageCount, 0);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "대기열이 없습니다.";
    }
    return this.queue.shift().documentName;
  }
}
