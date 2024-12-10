/*
문제: 후위 표기식(Postfix notation)이 주어졌을 때, 그 계산 결과를 반환하는 함수를 작성하세요.
예시:
- "23+" => 5 (2+3)
- "23*4+" => 10 ((2*3)+4)
- "234*+" => 14 (2+(3*4))
*/

// 예시1) "23+"
// stack = [2]
// stack = [2, 3]
// stack = [5]

// 예시2) "23*4+"
// stack = [2]
// stack = [2, 3]
// stack = [6]
// stack = [6, 4]
// stack = [10]

// 예시3) "234**"
// stack = [2];
// stack = [2, 3];
// stack = [2, 3, 4];
// stack = [2, 12];
// stack = [24];

function evaluatePostfix(expression) {
  {
    const stack = [];

    // expression이 23*4+ 인 경우
    for (let char of expression) {
      // 숫자인 경우 스택에 넣는다.
      if (!isNaN(char)) {
        stack.push(char); // stack=[2, 3]
      } else {
        // 연산자인 경우 스택에서 두 숫자를 꺼낸다.
        const num2 = stack.pop(); // num2 = 3;
        const num1 = stack.pop(); // num1 = 2;

        switch (char) {
          case "+":
            stack.push(num1 + num2); // stack=[5]
            break;
          case "-":
            stack.push(num1 - num2); // -1
            break;
          case "*":
            stack.push(num1 * num2); // 6
          case "/":
            stack.push(num1 / num2); // 1.5
            break;
        }
      }
    }
  }
}

// 사용 예시
console.log(evaluatePostfix("3 4 +")); // 출력: 7
console.log(evaluatePostfix("3 4 2 * +")); // 출력: 11
console.log(evaluatePostfix("3 4 + 2 *")); // 출력: 14
