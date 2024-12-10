// 첫 번째 풀이 -> 시간 초과
function solution(participant, completion) {
  // 1. participants를 돌면서 completion에 존재하면 지운다.
  const copy = [...participant];
  console.log(copy);
  for (let person of completion) {
    const index = copy.findIndex((p) => p === person);
    copy.splice(index, 1);
  }

  return copy[0];
}

// 두 번째 풀이 -> 해시 사용
function hashSolution(participant, completion) {
  // 참가자들의 이름과 등장 횟수를 저장할 해시 맵
  const hashMap = new Map();

  // 참가자들을 해시 맵에 추가 (이름: 등장횟수)
  for (let person of participant) {
    hashMap.set(person, (hashMap.get(person) || 0) + 1);
  }

  // 완주자들의 등장 횟수를 감소
  for (let person of completion) {
    hashMap.set(person, hashMap.get(person) - 1);
  }

  // 등장 횟수가 1인 참가자를 찾아 반환
  for (let [person, count] of hashMap) {
    if (count > 0) return person;
  }
}
