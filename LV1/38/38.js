function solution(s, n) {
  const arrS = s.split("");
  const calculated = arrS.map((char) => {
    // 공백은 변화 X
    if (char === " ") return " ";
    // 문자의 아스키(ASCII) 코드 구하기
    // ex. "a" -> 97, "b" -> 98, ...
    const code = char.charCodeAt(0);

    // 대문자의 아스키코드 범위 (65 ~ 90)
    if (code >= 65 && code <= 90) {
      // A를 0번째라고 가정 (code - 65)
      // n 만큼 밀기 (code - 65 + n)
      // 알파벳 개수로 나눈 나머지를 구해서 26을 넘어가지 않게 만들기 (code - 65 + n) % 26
      // +65로 다시 원래 ASCII 코드로 변환
      return String.fromCharCode(((code - 65 + n) % 26) + 65);
    }

    // 소문자인 경우 (97 ~ 122)
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + n) % 26) + 97);
    }
  });

  return calculated.join("");
}
