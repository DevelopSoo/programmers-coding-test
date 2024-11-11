// 첫 번째 풀이
// function solution(name, yearning, photo) {
//   const answer = [];

//   // 1. 점수 객체 만들기
//   const scoreObj = {};
//   name.forEach((n, index) => {
//     scoreObj[n] = yearning[index];
//   });

//   // 2. photo[인덱스]마다 더해서 answer에 넣기
//   for (let i = 0; i < photo.length; i++) {
//     let result = 0;
//     photo[i].forEach((p) => {
//       result += scoreObj[p] ? scoreObj[p] : 0;
//     });
//     answer.push(result);
//   }

//   return answer;
// }

// 두 번째 풀이
function solution(name, yearning, photo) {
  const scoreMap = new Map(name.map((n, i) => [n, yearning[i]]));
  return photo.map((people) =>
    people.reduce((sum, person) => sum + (scoreMap.get(person) || 0), 0)
  );
}
