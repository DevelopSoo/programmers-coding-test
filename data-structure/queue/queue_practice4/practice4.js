function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((progress, index) => {
    // 각 작업이 완료되는데 필요한 시간 계산
    // 100 - progress : 작업 진도가 100%가 되기 위해 필요한 진도
    // speeds[index] : 작업 속도
    // Math.ceil : 소수점 이하의 수를 올림하여 정수로 만듦 (예: 3.2 -> 4)
    return Math.ceil((100 - progress) / speeds[index]);
  });

  let maxDay = days[0]; // 현재 배포될 작업의 소요일
  let count = 1; // 현재 배포될 작업의 개수

  // 두 번째 작업부터 순회
  for (let i = 1; i < days.length; i++) {
    if (maxDay >= days[i]) {
      // 현재 작업의 소요일이 이전 최대 소요일보다 작거나 같으면
      // 함께 배포 가능하여 count 증가
      count++;
    } else {
      // 현재 작업의 소요일이 이전 최대 소요일보다 크면
      // 이전까지의 작업들을 먼저 배포하고 새로운 maxDay 설정
      answer.push(count);
      maxDay = days[i];
      count = 1;
    }
  }

  // 마지막 그룹 배포
  answer.push(count);
}

solution([93, 30, 55], [1, 30, 5]); // [2, 1]
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]); // [1, 3, 2]
