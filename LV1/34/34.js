function solution(d, budget) {
  const copyD = [...d];
  copyD.sort((a, b) => a - b);

  let usedMoney = 0;
  let answer = 0;

  for (let i = 0; i < copyD.length; i++) {
    usedMoney += copyD[i];
    if (usedMoney > budget) {
      break;
    } else {
      answer++;
    }
  }

  return answer;
}
