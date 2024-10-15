function solution(arr) {
  let minNum;
  if (arr.length === 1) {
    return [-1];
  }

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      minNum = arr[i];
      continue;
    } else {
      minNum = minNum <= arr[i] ? minNum : arr[i];
    }
  }

  const index = arr.indexOf(minNum);
  arr.splice(index, 1);

  return arr;
}
