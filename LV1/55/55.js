function solution(n) {
  // 0부터 n까지의 숫자를 담은 배열 생성
  let arr = Array(n + 1).fill(true);
  // 0과 1은 소수가 아님
  arr[0] = arr[1] = false;

  // n이 20일 때 i * i 는 2, 3, 4 까지만 반복
  for (let i = 2; i * i <= n; i++) {
    // 이미 이전에 소수가 아니라고 판별된 놈인지 확인
    // ex) arr[2] 는 소수 -> arr[4], arr[6], ... 는 이미 false로 변환되었다면 검사할 필요 없음
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  // true로 남아있는 수의 개수가 소수의 개수
  return arr.filter(Boolean).length;
}
