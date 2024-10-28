function solution(sizes) {
  var answer = 0;
  // 1. 모든 명함을 긴 부분을 가로, 짧은 부분을 세로로 변경한다. (모두 같은 조건으로 바꾼다)
  // 2. 가장 긴 가로와 가장 긴 세로를 찾는다.
  // 3. 곱한다.
  // 원래: [[60, 50], [30, 70], [60, 30], [80, 40]]
  // 뒤집기: [[60, 50], [70, 30], [60, 30], [80, 40]]
  // 원래: [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]
  // 뒤집기: [[10, 7], [12, 3], [15, 8], [14, 7], [15, 5]]
  // 원래: [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]
  // 뒤집기: [[14, 4], [19, 6], [16, 6], [18, 7], [11, 7]]

  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach((size) => {
    let width = Math.max(...size);
    let height = Math.min(...size);
    maxWidth = Math.max(maxWidth, width);
    maxHeight = Math.max(maxHeight, height);
  });

  return maxWidth * maxHeight;
}
