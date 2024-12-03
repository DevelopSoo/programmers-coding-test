/*
문제: 크기가 k인 슬라이딩 윈도우가 배열을 왼쪽에서 오른쪽으로 이동할 때,
각 윈도우에서의 최대값을 구하는 함수를 작성하세요.

입력: 
- nums: 숫자 배열
- k: 윈도우 크기

출력: 
- 각 윈도우의 최대값으로 구성된 배열

예시:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]

설명:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7     3
 1 [3  -1  -3] 5  3  6  7     3
 1  3 [-1  -3  5] 3  6  7     5
 1  3  -1 [-3  5  3] 6  7     5
 1  3  -1  -3 [5  3  6] 7     6
 1  3  -1  -3  5 [3  6  7]    7
*/

function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = []; // 인덱스를 저장할 deque

  for (let i = 0; i < nums.length; i++) {
    // 윈도우를 벗어난 값 제거
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // 현재 값보다 작은 값들은 제거
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // 첫 번째 윈도우가 완성된 후부터 결과 추가
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
