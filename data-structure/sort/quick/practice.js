// 실행 과정을 보여주는 예시
function quickSortWithSteps(arr) {
  console.log("현재 처리중인 배열:", arr);

  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  console.log("선택된 피벗:", pivot);

  const left = arr.filter((element) => element < pivot);
  const equal = arr.filter((element) => element === pivot);
  const right = arr.filter((element) => element > pivot);

  console.log("피벗보다 작은 요소들:", left);
  console.log("피벗과 같은 요소들:", equal);
  console.log("피벗보다 큰 요소들:", right);
  console.log("-------------------");

  return [...quickSortWithSteps(left), ...equal, ...quickSortWithSteps(right)];
}

// 테스트
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log("최종 정렬 결과:", quickSortWithSteps(testArray));
