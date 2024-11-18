function solution(answers) {
  var answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let firstScore = 0;
  let secondScore = 0;
  let thirdScore = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % first.length]) {
      firstScore++;
    }

    if (answers[i] === second[i % second.length]) {
      secondScore++;
    }

    if (answers[i] === third[i % third.length]) {
      thirdScore++;
    }
  }

  const maxScore = Math.max(firstScore, secondScore, thirdScore);

  if (firstScore === maxScore) answer.push(1);
  if (secondScore === maxScore) answer.push(2);
  if (thirdScore === maxScore) answer.push(3);

  return answer;
}
