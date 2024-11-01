function solution(array, commands) {
  const answer = [];
  for (let n = 0; n < commands.length; n++) {
    const [i, j, k] = commands[n];
    const sliced = array.slice(i - 1, j);
    sliced.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
    answer.push(sliced[k - 1]);
  }

  return answer;
}
