function solution(food) {
  const myArr = [];
  var answer = "0";
  for (let i = 1; i < food.length; i++) {
    // 현재 순서의 음식 개수
    const foodCount = food[i];
    // 해당 음식으로 몇 번 대결할 수 있는지
    const settingCount = Math.floor(foodCount / 2);
    // 배열 앞에 대결할 숫자 넣기
    myArr.unshift(settingCount);
  }

  for (let i = 0; i < myArr.length; i++) {
    let n = "";
    for (let j = 0; j < myArr[i]; j++) {
      n += myArr.length - i;
    }
    answer = n + answer + n;
  }

  return answer;
}
