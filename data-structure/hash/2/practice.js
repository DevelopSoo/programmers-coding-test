function solution(phone_book) {
  // 1. 모든 전화번호를 해시맵에 저장
  const hashMap = new Set(phone_book);

  // 2. 각 전화번호별로 가능한 모든 접두어를 확인
  for (let phoneNumber of phone_book) {
    // 현재 전화번호의 모든 가능한 접두어를 생성
    for (let i = 1; i < phoneNumber.length; i++) {
      const prefix = phoneNumber.slice(0, i);

      if (hashMap.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}
