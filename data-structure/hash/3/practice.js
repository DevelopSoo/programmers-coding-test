/**
	- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
	- 코니가 가진 의상의 수는 1개 이상 30개 이하입니다.
	- 같은 이름을 가진 의상은 존재하지 않습니다.
	- clothes의 모든 원소는 문자열로 이루어져 있습니다.
	- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
 */
function solution(clothes) {
  // 1. 각 의상의 종류별로 몇 개인지 세팅하기 위한 Map
  // ex) Map(2) { 'headgear': 2, 'eyewear': 1 }
  // 객체로 해도 됨
  const newMap = new Map();

  // 2. 각 의상의 종류별로 몇 개인지 세팅
  clothes.forEach(([_, type]) => {
    if (newMap.has(type)) {
      newMap.set(type, newMap.get(type) + 1);
    } else {
      newMap.set(type, 1);
    }
  });

  // 3. 각 의상 종류별로 (선택하지 않는 경우 포함) 경우의 수를 계산
  let combinations = 1;
  // Map(2) {
  // 	'headgear' => 2,  // 모자류 2개
  // 	'eyewear' => 1    // 안경류 1개
  // }

  // headgear
  // - yellow_hat 착용
  // - green_turban 착용
  // - 아무것도 입지 않음
  // 총 2 + 1 = 3가지

  // eyewear
  // - blue_sunglasses 착용
  // - 아무것도 입지 않음
  // 총 1 + 1 = 2가지

  // 총 3 * 2 = 6가지

  newMap.forEach((count) => {
    combinations *= count + 1;
  });

  // 아무것도 입지 않는 경우를 제외
  return combinations - 1;
}

// console.log(
//   solution([
//     ["yellow_hat", "headgear"],
//     ["blue_sunglasses", "eyewear"],
//     ["green_turban", "headgear"],
//   ])
// );

// console.log(
//   solution([
//     ["crow_mask", "face"],
//     ["blue_sunglasses", "face"],
//     ["smoky_makeup", "face"],
//   ])
// );

console.log(
  solution([
    ["black_jean", "pants"],
    ["blue_jean", "pants"],

    ["red_tshirt", "top"],
    ["blue_tshirt", "top"],

    ["white_sneakers", "shoes"],
    ["black_boots", "shoes"],

    ["silver_watch", "accessories"],
    ["gold_necklace", "accessories"],

    ["winter_coat", "outerwear"],
    ["leather_jacket", "outerwear"],
  ])
);
