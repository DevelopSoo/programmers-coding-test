function solution(babbling) {
  let count = 0;
  const sounds = ["aya", "ye", "woo", "ma"];
  for (let word of babbling) {
    // 연속된 단어와 비교하기 위해 이전 단어를 저장
    let prevWord = "";
    // 현재 단어
    let currentWord = "";
    let remainedWord = word;

    for (let w of word) {
      // 한 단어씩 합친다.
      currentWord += w; // a -> ay -> aye -> 일치 -> 이전 단어("")와 비교한다 ->
      // -> 이전 단어와 일치하면 return false;

      // 만약 현재 단어가 sounds에 포함되어 있는지 확인
      if (sounds.includes(currentWord)) {
        // 포함되어 있다면 prevWord와 비교한다.

        // prevWord와 currentWord가 일치하지 않으면
        if (prevWord !== currentWord) {
          // currentWord를 prevWord로 업데이트한다.
          remainedWord = remainedWord.replace(currentWord, "");
          prevWord = currentWord;
          // 현재 단어 초기화
          currentWord = "";
        } else {
          break;
        }

        if (remainedWord === "") {
          count++;
          break;
        }
      }
    }
  }
  return count;
}
