function solution(n) {
  let 삼진법 = "";
  // n이 0이 될 때까지 반복
  while (n > 0) {
    // n을 3으로 나눈 나머지 + 기존 삼진법 수
    삼진법 = (n % 3) + 삼진법;
    // 몫으로 n을 바꾸기
    n = Math.floor(n / 3);
  }

  // 뒤집지 않을 때 계산이 더 쉽기 때문에 바로 계산
  // 삼진법을 십진법으로 바꾸는 법
  // 삼진법 201
  // 2(삼진법의 첫 번째 숫자) * 3^2(3의 인덱스 제곱) = 18
  // 0(삼진법의 두 번째 숫자) * 3^1(3의 인덱스 제곱) = 0
  // 1(삼진법의 두 번째 숫자) * 3^0(3의 인덱스 제곱) = 1
  const 십진법 = 삼진법.split("").reduce((acc, cur, index) => {
    return acc + parseInt(cur) * Math.pow(3, index);
  }, 0);

  return 십진법;
}
