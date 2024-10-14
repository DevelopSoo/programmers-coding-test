function solution(arr, divisor) {
  var answer = [];

  arr.forEach((item) => item % divisor === 0 && answer.push(item));

  if (answer.length > 0) {
    answer.sort((a, b) => a - b);
  } else {
    answer = [-1];
  }

  return answer;
}
