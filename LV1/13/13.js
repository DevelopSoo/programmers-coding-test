function solution(a, b) {
  var answer = 0;
  let smallNum = Math.min(a, b);
  let bigNum = Math.max(a, b);
  for (let i = smallNum; i <= bigNum; i++) {
    answer += i;
  }
  return answer;
}
