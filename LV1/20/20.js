function solution(phone_number) {
  var answer = "";
  const lastFourDigits = phone_number.slice(-4);
  const numberLength = phone_number.length;

  const stars = Array(numberLength - 4 + 1).join("*");
  answer = stars + lastFourDigits;

  return answer;
}
