function solution(n, m) {
  var answer = [];

  let gcd = 1;

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  answer.push(gcd);

  // 최소공배수
  // n과 m을 동시에 나눌 수 있는 수를 구하기
  // 최대공약수는 두 수의 곱에 최대공약수를 나누면 된다.
  const greatestCommonFactor = answer[0];
  answer.push((n * m) / greatestCommonFactor);

  return answer;
}
