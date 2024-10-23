function solution(s) {
  const sArr = s.split(" ");
  const newArr = [];

  sArr.forEach((each) => {
    let answer = "";
    for (let i = 0; i < each.length; i++) {
      if (i % 2 === 0) {
        answer += each[i].toUpperCase();
      } else {
        answer += each[i].toLowerCase();
      }
    }
    newArr.push(answer);
  });

  return newArr.join(" ");
}
