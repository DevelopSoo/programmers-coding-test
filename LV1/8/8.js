function solution(s) {
  let pCount = 0;
  let yCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === "p") {
      pCount += 1;
    } else if (s[i].toLowerCase() === "y") {
      yCount += 1;
    }
  }
  return pCount === yCount;
}
