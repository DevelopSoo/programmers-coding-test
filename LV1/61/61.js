function solution(lottos, win_nums) {
  // 점수 객체
  let scoresObj = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  // 일치 개수
  let count = 0;
  // 0의 개수
  const zeroCount = lottos.filter((lottoNum) => lottoNum === 0).length;
  // 돌면서 일치하는 개수 구하기
  lottos.forEach((lottoNum) => {
    const index = win_nums.indexOf(lottoNum);

    if (index > -1) {
      count++;
      // 성능을 위해 하나씩 지우기
      win_nums.splice(index, 1);
    }
  });

  const answer = [scoresObj[count + zeroCount], scoresObj[count]];
  return answer;
}
