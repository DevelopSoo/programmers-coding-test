// N: 전체 스테이지 개수
// stages: 현재 멈춰있는 스테이지의 번호가 담긴 배열
// failed = 이전까지 떨어진 사람
// failedObject = 실패율 기록해놓는 곳
// 1번 스테이지 실패율 -> stages에서 1의 개수 - failed / stages.length;
// failed = stages에서 1의 개수
// { 1: 실패율 }
// 2번 스테이지 실패율 -> stages에서 2의 개수 - failed / stages.length - failed;
// failed += stages에서 2의 개수
// { 1: 실패율, 2: 실패율 }
// 3번 스테이지 실패율 -> stages에서 3의 개수 - failed / stages.length - failed;
// failed += stages에서 3의 개수
// { 1: 실패율, 2: 실패율, 3: 실패율 }
// 4번 스테이지 실패율 -> stages에서 4의 개수 - failed / stages.length - failed;
// failed += stages에서 4의 개수
// { 1: 실패율, 2: 실패율, 3: 실패율, 4: 실패율 }
// 5번 스테이지 실패율 -> stages에서 5의 개수 - failed / stages.length - failed;
// failed += stages에서 5의 개수
// { 1: 실패율, 2: 실패율, 3: 실패율, 4: 실패율, 5: 실패율  }
// => N이 5이므로 더 계산 X

// [1번 실패율, 2번 실패율, 3번 실패율, 4번 실패율, 5번 실패율]
// 실패율이 높은 스테이지부터 나열하기 (???) 객체?

// 첫 번째 풀이
// function solution(N, stages) {
//   let failedSum = 0;
//   const failedObject = {};

//   // N번 loop & stages를 매번 filtering -> 너무 빡셀 듯
//   for (let i = 1; i <= N; i++) {
//     // 해당 스테이지의 실패한 사람
//     const failed = stages.filter((stage) => stage === i).length;

//     const failedRate = failed / (stages.length - failedSum);
//     failedSum += failed;
//     console.log({
//       스테이지의실패개수: failed,
//       failedSum,
//       스테이지의실패율: failedRate,
//     });
//     failedObject[i] = failedRate;
//   }

//   return Object.entries(failedObject)
//     .sort(([, a], [, b]) => b - a)
//     .map((item) => Number(item[0]));
// }

// 두 번째 풀이
function solution(N, stages) {
  const answer = [];

  // N번 loop & stages를 매번 filtering -> 너무 빡셀 듯
  for (let i = 1; i <= N; i++) {
    // 분모
    const 분모 = stages.filter((x) => x >= i).length;
    // 분자
    const 분자 = stages.filter((x) => x === i).length;
    answer.push([i, 분자 / 분모]);
  }

  return answer.sort((a, b) => b[1] - a[1]).map((x) => x[0]);
}
