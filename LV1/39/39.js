function solution(numbers) {
  var answer = [];
  // for문 2번 돌려서 다 더한다.
  // 돌리는 동안 이미 존재하면 그냥 넘어간다.
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (answer.indexOf(sum) === -1) {
        answer.push(sum);
      } else {
        continue;
      }
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}
