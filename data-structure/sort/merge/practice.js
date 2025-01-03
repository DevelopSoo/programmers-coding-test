// 병합 정렬의 메인 함수
function mergeSort(arr) {
  // 배열의 길이가 1 이하면 이미 정렬된 상태이므로 반환
  if (arr.length <= 1) return arr;

  // 배열을 반으로 나누기
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  console.log({ left, right });

  // 병합 전 상태 확인
  const sortedLeft = mergeSort(left);
  console.log({ sortedLeft });
  const sortedRight = mergeSort(right);
  console.log({ sortedRight });

  // 재귀적으로 분할하고 병합
  return merge(sortedLeft, sortedRight);
}

// 두 정렬된 배열을 병합하는 함수
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // 두 배열을 비교하면서 작은 값을 결과 배열에 추가
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // 남은 요소들을 결과 배열에 추가
  console.log({
    afterWhileResult: result,
    left,
    right,
    result: result
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex)),
  });
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// 사용 예시

// 예시 1
const arr1 = [64, 34, 25, 12];
console.log("정렬 전:", arr1);
console.log("정렬 후:", mergeSort(arr1));

// 예시 2
const arr2 = [38, 27, 43, 3, 9, 82, 10, 15];
console.log("정렬 전:", arr2);
console.log("정렬 후:", mergeSort(arr2));

// 예시 3
const arr3 = [64, 34, 25, 12, 22, 11, 90];
console.log("정렬 전:", arr3);
console.log("정렬 후:", mergeSort(arr3));
