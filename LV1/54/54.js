// 첫 번째 풀이
// function solution(k, m, score) {
//   var answer = 0;
//   score.sort((a, b) => b - a);

//   let box = [];
//   for (let i = m - 1; i < score.length; i += m) {
//     // 1. 넣는다.
//     // 2. 개수가 m개가 되면 최소값 * m을 더한다.
//     box.push(score[i]);
//     if (box.length === m) {
//       const min = Math.min(...box);

//       answer += min * m;
//       box = [];
//     }
//   }
//   return answer;
// }

function solution(k, m, score) {
  // 내림차순 정렬
  score.sort((a, b) => b - a);

  let answer = 0;
  // m개씩 그룹화했을 때 마지막 요소(최소값)만 계산
  for (let i = m - 1; i < score.length; i += m) {
    answer += score[i] * m;
  }

  return answer;
}
