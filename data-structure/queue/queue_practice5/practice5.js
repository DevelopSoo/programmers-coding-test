// 첫 번째 풀이
// function solution(priorities, location) {
//   // 몇 번째 실행되고 있는지 체크
//   let executionCount = 0;
//   // 내가 원하는 요소의 현재 위치
//   let targetLocation = location;

//   // priorities가 다 비워지면 멈춘다. (true로 했을 때 무한 루프의 가능성을 염두)
//   while (priorities.length > 0) {
//     // 하나를 꺼낸다.
//     const currentItem = priorities.shift();
//     // 내부에 우선순위가 높은 게 있다면?
//     const hasHigherPriority = priorities.some(
//       (priority) => priority > currentItem
//     );

//     if (hasHigherPriority) {
//       priorities.push(currentItem);
//       targetLocation =
//         targetLocation === 0 ? priorities.length - 1 : targetLocation - 1;
//     } else {
//       // 없다면 실행 횟수를 증가시킨다.
//       executionCount++;
//       // 만약 현재 0 이라면 break;
//       if (targetLocation === 0) {
//         return executionCount;
//       }
//       // 아니라면 targetLocation에 1을 제거;
//       targetLocation--;
//     }
//   }

//   return executionCount;
// }

// 두 번째 풀이
function solution(priorities, location) {
  // 1. 큐에 우선순위와 타겟 여부를 담은 객체를 넣는다.
  const queue = priorities.map((priority, index) => ({
    priority,
    isTarget: index === location,
  }));

  let executionCount = 0;

  while (queue.length > 0) {
    // 첫 번째 프로세스를 꺼낸다.
    const currentProcess = queue.shift();

    // 현재 프로세스보다 우선 순위가 높은 프로세스가 있는지 확인한다.
    const hasHigherPriority = queue.some(
      (process) => process.priority > currentProcess.priority
    );

    if (hasHigherPriority) {
      // 더 높은 우선순위가 있다면 현재 프로세스를 뒤로 보냄
      queue.push(currentProcess);
    } else {
      // 현재 프로세스가 가장 높은 우선순위라면 실행
      executionCount++;

      // 찾고있던 프로세스라면 결과 반환
      if (currentProcess.isTarget) {
        return executionCount;
      }
    }
  }
}
