// 첫 번째 풀이
// function solution(k, score) {
//   const 명예의전당 = [];
//   const answer = [];

//   for (let i = 0; i < score.length; i++) {
//     // k까지는 일단 명예의 전당에 넣어
//     if (i < k) {
//       명예의전당.push(score[i]);
//     } else if (score[i] > Math.min(...명예의전당)) {
//       // 가장 작은 놈 찾아서
//       // 그놈을 대체한다.
//       let smallest = Math.min(...명예의전당);
//       const index = 명예의전당.findIndex((item) => smallest === item);
//       명예의전당.splice(index, 1, score[i]);
//     }

//     let smallest = Math.min(...명예의전당);
//     answer.push(smallest);
//   }
//   return answer;
// }

function solution(k, score) {
  const 명예의전당 = [];
  return score.map((점수) => {
    // 일단 넣어
    명예의전당.push(점수);
    // 정렬해  [1, 1, 3, 4, 5] => [5, 4, 3, 1, 1]
    명예의전당.sort((a, b) => b - a);
    // 원하는 개수를 넘으면 맨 마지막 놈 날리기
    if (명예의전당.length > k) {
      명예의전당.pop();
    }
    // 최소값 가져오기
    return Math.min(...명예의전당);
  });
}
