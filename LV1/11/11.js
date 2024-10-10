function solution(n) {
  // 처음 풀이
  // let answer = 0
  // for (let x = 1; x*x <= n; x++) {
  //     if (x * x === n) {
  //         answer = (x + 1) * (x + 1)
  //         break;
  //     } else {
  //         answer = -1
  //     }
  // }
  // return answer

  // 수정 풀이
  let x = Math.sqrt(n);
  if (x % 1 === 0) {
    return (x + 1) * (x + 1);
  } else {
    return -1;
  }
}
