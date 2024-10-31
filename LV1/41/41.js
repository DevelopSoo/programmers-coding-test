// 인덱스 비교
function solution(s) {
  let store = {};
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (store[s[i]] !== undefined) {
      answer.push(i - store[s[i]]);
      store[s[i]] = i;
    } else {
      answer.push(-1);
      store[s[i]] = i;
    }
  }

  return answer;
}
