function solution(number) {
  let count = 0;
  const arrLength = number.length;

  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      for (let k = j + 1; k < arrLength; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count++;
        }
      }
    }
  }

  return count;
}
