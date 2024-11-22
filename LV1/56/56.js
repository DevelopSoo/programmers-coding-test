// 첫 번째 풀이
// function 소수구하기(num) {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function solution(nums) {
//   var answer = 0;

//   for (let i = 0; i < nums.length - 2; i++) {
//     for (j = i + 1; j < nums.length - 1; j++) {
//       for (k = j + 1; k < nums.length; k++) {
//         const sum = nums[i] + nums[j] + nums[k];

//         if (소수구하기(sum)) answer++;
//       }
//     }
//   }

//   return answer;
// }

// 새로운 풀이
// 소수인지 구하는 함수
function isPrime(num) {
  // 숫자가 2보다 작으면 소수가 아님
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let count = 0;
  const len = nums.length;

  // 3개의 수를 뽑는 조합 함수
  const getCombinations = (currentCombination, start) => {
    // 이미 3개를 조합했다면 더하기
    if (currentCombination.length === 3) {
      const sum = current.reduce((acc, cur) => acc + cur, 0);
      // 3개의 수를 더한 후 소수라면 +1
      if (isPrime(sum)) count++;
      // 3개 더했으면 끝내기
      return;
    }

    for (let i = start; i < len; i++) {
      // 기존 배열에서 새로운 요소를 추가 & start 숫자를 하나씩 더함
      getCombinations([...currentCombination, nums[i]], i + 1);
    }
  };
  getCombinations([], 0);
  return count;
}
