function solution(num) {
  // 주어진 수가 1일 때 0 반환
  if (num === 1) {
    return 0;
  }

  for (let i = 1; i <= 500; i++) {
    let isEven = num % 2 === 0;
    if (isEven) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }

    // 체크 중 num이 1이 되면 i 반환
    if (num === 1) {
      return i;
    }
  }

  // for 문을 다 돌아도 결과가 나오지 않으면 -1
  return -1;
}
