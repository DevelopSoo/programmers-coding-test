function solution(s) {
  var answer = "";
  let isEven = s.length % 2 === 0;
  const midIndex = Math.floor(s.length / 2);
  return isEven ? s[midIndex - 1] + s[midIndex] : s[midIndex];
}
