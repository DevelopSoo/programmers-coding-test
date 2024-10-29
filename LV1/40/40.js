function solution(s) {
  var answer = "";
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let currentText = "";
  for (let i = 0; i < s.length; i++) {
    // 일반 텍스트인 경우
    if (isNaN(s[i])) {
      currentText += s[i];
      if (numbers[currentText] !== undefined) {
        answer += numbers[currentText];
        currentText = "";
      }
      // 이미 숫자인 경우
    } else {
      answer += s[i];
    }
  }

  return Number(answer);
}
