// 첫 번째 풀이 -> 시간 초과
/*
function solution(scoville, K) {
  // 섞은 횟수
  let count = 0;
  // 기존 scoville 배열을 직접 변경하지 않도록 복사
  let foods = [...scoville];

  // 개수가 2개 보다 작으면 더 이상 섞을 수 없음
  while (foods.length >= 2) {
    // 배열 정렬
    foods.sort((a, b) => a - b);

    // 정렬 후 첫 번째 요소가 K 이상이면 모든 요소가 K 이상
    if (foods[0] >= K) {
      return count;
    }

    // 가장 맵지 않은 두 음식 추출
    const first = foods.shift();
    const second = foods.shift();

    // 새로운 스코빌 지수 계산 및 추가
    const newScoville = first + second * 2;
    foods.push(newScoville);

    // 섞었기 때문에 count + 1
    count++;
  }

  // foods의 배열 요소 개수가 1개인데(처음부터 혹은 섞은 후), 그 요소의 스코빌 지수가 K 이상이면 count 반환, 아니면 -1 반환
  return foods[0] >= K ? count : -1;
}
*/
// 두 번째 풀이 -> 힙 사용
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 최소힙 배열 중 가장 마지막에 두고, bubbleUp 함수를 통해 최소힙 구조로 정렬
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // 최소힙 배열 중 최소값(root)를 반환하고, 마지막 요소를 root로 올린 후 bubbleDown 함수를 통해 최소힙 구조로 정렬
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  // 마지막 요소를 부모 요소와 비교하며 더 작은 경우 부모와 자리를 바꾼다.
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;

      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (true) {
      // 현재 루트에 있는 요소를 최소 인덱스라고 가정
      let smallest = index;

      // 왼쪽 자식 인덱스
      const leftChild = 2 * index + 1;
      // 오른쪽 자식 인덱스
      const rightChild = 2 * index + 2;

      // 왼쪽 자식 인덱스가 배열 길이보다 작고 (존재하고),
      // 왼쪽 자식 요소가 현재 요소보다 작으면 최소 인덱스를 왼쪽 자식 인덱스로 변경
      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] < this.heap[smallest]
      ) {
        smallest = leftChild;
      }

      // 오른쪽 자식 인덱스가 배열 길이보다 작고 (존재하고),
      // 오른쪽 자식 요소가 현재 요소보다 작으면 최소 인덱스를 오른쪽 자식 인덱스로 변경
      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[smallest]
      ) {
        smallest = rightChild;
      }

      // 최소 인덱스가 현재 인덱스와 같으면 더 이상 정렬할 필요가 없음
      if (smallest === index) break;

      // 현재 요소와 최소 인덱스의 요소를 자리를 바꾼다.
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      // 현재 인덱스를 최소 인덱스로 변경
      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  let count = 0;

  // 모든 스코빌 지수를 힙에 넣기
  scoville.forEach((s) => minHeap.push(s));

  // 가장 작은 값이 K보다 작은 동안 반복
  while (minHeap.size() >= 2 && minHeap.heap[0] < K) {
    // 가장 작은 값 두 개를 꺼내서 섞은 후 힙에 넣기
    const first = minHeap.pop();
    const second = minHeap.pop();
    const newScoville = first + second * 2;
    minHeap.push(newScoville);

    // 섞었기 때문에 count + 1
    count++;
  }

  // 최소 힙 배열 중 최소값(root)이 K 이상인지 확인
  // 여전히 없다면 -1 반환
  return minHeap.heap[0] >= K ? count : -1;
}
