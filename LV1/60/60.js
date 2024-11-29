// 첫 번째 풀이
// function solution(dartResult) {
//   let current = ""; // 현재 값
//   let results = []; // 결과 값

//   for (let i = 0; i < dartResult.length; i++) {
//     const char = dartResult[i]; // 현재 문자 ex) 1, D, 2, S, #, 1, 0, S ...

//     // 숫자인 경우
//     if (!isNaN(char)) {
//       // 숫자가 10인 경우
//       if (char === "1" && dartResult[i + 1] === "0") {
//         current = "10";
//         i++; // 다음 문자('0')로 건너뛰기
//       } else {
//         current = char;
//       }
//       // S, D, T가 오는 경우
//     } else if (["S", "D", "T"].includes(char)) {
//       const nextChar = dartResult[i + 1]; // 특수 문자인지 체크를 위해 다음 문자 확인
//       results.push({
//         score: Number(current), // 이전에 저장해놓은 숫자 넣기
//         bonus: char, // S, D, T 중 하나
//         option: nextChar === "*" || nextChar === "#" ? nextChar : null, // 옵션이 있는 경우 옵션 저장
//       });
//     }
//   }

//   const scores = [];

//   results.forEach((result, index) => {
//     let score = Math.pow(
//       result.score,
//       result.bonus === "S" ? 1 : result.bonus === "D" ? 2 : 3
//     );

//     if (result.option === "#") {
//       score *= -1; // 아차상: 해당 점수 마이너스 곱하기
//     }

//     if (result.option === "*") {
//       score *= 2;
//       if (index > 0) {
//         // 이전 점수도 2배
//         scores[index - 1] *= 2;
//       }
//     }

//     scores.push(score);
//   });

//   return scores.reduce((acc, cur) => acc + cur, 0);
// }

// 두 번째 풀이 - 정규식 사용
function solution(dartResult) {
  // /: 정규식 시작과 끝
  // ( ): 그룹
  // \d: 숫자
  // {1,2}: 1개 또는 2개 -> 1부터 99까지 숫자를 찾음
  // []: 문자 클래스 정의?
  // SDT: S, D, T 중 하나와 일치
  // []: 문자 클래스 정의
  // *#: * 또는 # 중 하나와 일치
  // ?: 0개 또는 1개 (있을 수도 없을 수도 있음)
  // g: 문자열 전체에서 일치하는 항목을 찾는다.

  const regex = /(\d{1,2})([SDT])([*#]?)/g;
  const matches = [...dartResult.matchAll(regex)];

  const results = [];
  matches.forEach((match) => {
    const [_, score, bonus, option] = match;
    results.push({ score: Number(score), bonus, option: option || null });
  });

  const scores = [];
  results.forEach((item, index) => {
    let score = Math.pow(
      item.score,
      item.bonus === "S" ? 1 : item.bonus === "D" ? 2 : 3
    );

    if (item.option === "#") {
      score *= -1;
    } else if (item.option === "*") {
      score *= 2;
      if (index > 0) {
        scores[index - 1] *= 2;
      }
    }
    scores.push(score);
  });
  return scores.reduce((acc, cur) => acc + cur, 0);
}
