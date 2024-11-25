function solution(n, m, section) {
  // 칠한 수
  let count = 0;
  // 현재까지 칠한 위치
  let currentPainted = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > currentPainted) {
      count++;
      currentPainted = section[i] + m - 1;
    }
  }

  return count;
}
