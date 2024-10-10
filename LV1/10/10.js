function solution(n) {
  let stringNArr = n.toString().split("");
  let newStringN = stringNArr.sort().reverse().join("");
  return Number(newStringN);
}
