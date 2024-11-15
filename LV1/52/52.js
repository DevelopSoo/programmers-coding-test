const countDivisor = (num) => {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count++;

      if (i !== num / i) {
        count++;
      }
    }
  }
  return count;
};

function solution(number, limit, power) {
  var answer = 0;

  // 1부터 number까지 숫자 배열 반복
  for (let i = 1; i <= number; i++) {
    // 약수의 개수 구하기
    const divisorCount = countDivisor(i);
    answer += divisorCount > limit ? power : divisorCount;
  }
  return answer;
}
