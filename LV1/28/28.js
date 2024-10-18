function solution(arr1, arr2) {
  var answer = [[]];

  // arr1을 돌린다.
  for (let i = 0; i < arr1.length; i++) {
    // i=0 이면 arr1의 [1,2] 를 의미한다.
    for (let j = 0; j < arr1[i].length; j++) {
      if (!answer[i]) {
        answer[i] = [];
      }
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
