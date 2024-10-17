function solution(s) {
  var answer = true;

  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    if (s.length !== 4 && s.length !== 6) {
      answer = false;
      break;
    }

    if (sArr[i] === "" || isNaN(Number(sArr[i]))) {
      answer = false;
      break;
    }
  }
  return answer;
}
