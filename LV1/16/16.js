function solution(absolutes, signs) {
  let answer = 0;

  answer = absolutes.reduce((accumulator, currentValue, index) => {
    return signs[index]
      ? accumulator + currentValue
      : accumulator - currentValue;
  }, 0);
  return answer;
}
