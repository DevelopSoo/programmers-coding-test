function solution(seoul) {
  var answer = "";
  // 처음 풀이
  // for (let i = 0; i < seoul.length; i++) {
  //     if (seoul[i] === "Kim") {
  //         answer = `김서방은 ${i}에 있다`;
  //         break;
  //     }
  // }
  // 다른 풀이
  answer = `김서방은 ${seoul.indexOf("Kim")}에 있다`;
  return answer;
}
