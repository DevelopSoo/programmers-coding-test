function solution(a, b, n) {
  let answer = 0;
  // a: 교환 가능한 빈 병 개수.
  // b: a를 주면 돌려받는 콜라병 개수
  // n: 현재 가지고 있는 빈 병 개수
  // 빈 병의 개수가 교환 가능한 빈 병 개수보다 적어질 때까지 반복
  while (n >= a) {
    // n / a 후 소수점을 버리면 교환할 수 있는 숫자가 나온다.
    // b를 곱하여 교환할 수 있는 숫자에 병 개수를 곱한다.
    // 그럼 돌려 받는 콜라 개수가 나온다.
    const cola = Math.floor(n / a) * b;
    // 돌려받는 콜라 개수에 더한다.
    answer += cola;
    // 남은 병의 수를 계산한다 (교환하고 남은 병 + 새로 받은 콜라)
    n = (n % a) + cola;
  }
  return answer;
}
