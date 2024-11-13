function solution(nums) {
  // 포켓몬 종류의 중복을 제거한다.
  const pokemonTypesSize = new Set(nums).size;
  // 선택할 수 있는 포켓몬 수
  const selectableCount = nums.length / 2;

  // 선택할 수 있는 포켓몬 수와 포켓몬 종류의 중복을 제거한 수 중 작은 수를 반환한다.
  return Math.min(pokemonTypesSize, selectableCount);
}
