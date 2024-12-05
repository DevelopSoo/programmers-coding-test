function solution(priorities, location) {
  // 몇 번째 실행되고 있는지 체크
  let executionCount = 0;
  // 내가 원하는 요소의 현재 위치
  let targetLocation = location;

  // priorities가 다 비워지면 멈춘다. (true로 했을 때 무한 루프의 가능성을 염두)
  while (priorities.length > 0) {
    // 하나를 꺼낸다.
    const currentItem = priorities.shift();
    // 내부에 우선순위가 높은 게 있다면?
    const hasHigherPriority = priorities.some(
      (priority) => priority > currentItem
    );

    if (hasHigherPriority) {
      priorities.push(currentItem);
      targetLocation =
        targetLocation === 0 ? priorities.length - 1 : targetLocation - 1;
    } else {
      // 없다면 실행 횟수를 증가시킨다.
      executionCount++;
      // 만약 현재 0 이라면 break;
      if (targetLocation === 0) {
        return executionCount;
      }
      // 아니라면 targetLocation에 1을 제거;
      targetLocation--;
    }
  }

  return executionCount;
}
