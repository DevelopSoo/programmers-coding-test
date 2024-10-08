function solution(n) {
  var answer = [];
  const stringN = String(n);

  for (let i = 0; i < stringN.length; i++) {
    answer.unshift(Number(stringN[i]));
  }

  return answer;
}
