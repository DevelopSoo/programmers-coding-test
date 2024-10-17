function solution(price, money, count) {
  let currentMoney = money;
  for (let i = 1; i <= count; i++) {
    currentMoney -= price * i;
  }

  if (currentMoney < 0) return -currentMoney;
  else return 0;
}
