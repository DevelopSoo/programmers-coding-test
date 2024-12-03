/*
문제: 히스토그램에서 가장 큰 직사각형의 넓이를 구하는 함수를 작성하세요.
입력: 히스토그램의 높이를 나타내는 배열
출력: 가장 큰 직사각형의 넓이

예시:
[2,1,5,6,2,3] => 10
[1,1,1,1,1] => 5
*/

function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;
  let i = 0;

  while (i < heights.length) {
    if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[i]) {
      stack.push(i++);
    } else {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
  }

  while (stack.length > 0) {
    const height = heights[stack.pop()];
    const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, height * width);
  }

  return maxArea;
}
