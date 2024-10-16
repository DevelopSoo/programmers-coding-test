function solution(n) {
  var answer = "";
  const isEven = n % 2 === 0;
  const loopLength = isEven ? n / 2 : (n - 1) / 2;

  for (let i = 0; i < loopLength; i++) {
    answer += "수박";
  }

  if (!isEven) {
    answer += "수";
  }

  return answer;
}
