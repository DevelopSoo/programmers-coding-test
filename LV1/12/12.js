function solution(x) {
  var answer = true;
  let numToDivide = x
    .toString()
    .split("")
    .map((b) => Number(b))
    .reduce((acc, cur) => acc + cur, 0);
  return x % numToDivide === 0;
}
