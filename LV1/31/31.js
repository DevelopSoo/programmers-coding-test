// 첫 번째 풀이
// function solution(arr) {
//     const answer = [];

//     arr.forEach((item, index) => {
//         // 만약 지금 answer에 값이 없다면?
//         // 그냥 넣기
//         if (index === 0) {
//             answer.push(item)
//         } else if (arr[index] !== answer[answer.length-1]) {
//             answer.push(item)
//         }
//     })

//     return answer;
// }

// 두 번째 풀이
function solution(arr) {
  return arr.filter((val, index) => val !== arr[index + 1]);
}
