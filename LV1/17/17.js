function solution(numbers) {
  // 45
  const totalSum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
    (acc, cur) => acc + cur,
    0
  );
  let answer = totalSum;

  for (let i = 0; i < numbers.length; i++) {
    answer = answer - numbers[i];
  }
  return answer;
}
