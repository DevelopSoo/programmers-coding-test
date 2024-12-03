/*
문제: 주어진 문자열에 포함된 괄호 '(', ')'가 올바르게 짝지어져 있는지 확인하는 함수를 작성하세요.
예시:
- "()" => true
- "(())" => true
- ")()" => false
- "(()(" => false
*/

// 닫을 땐 ")" 앞에 "(" 가 있어야 한다.
function isValidParentheses(str) {
  const stack = [];

  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("(())")); // true
console.log(isValidParentheses(")()")); // false
console.log(isValidParentheses("(()(")); // false
