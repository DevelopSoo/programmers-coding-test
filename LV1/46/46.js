// 처음 풀이
// function 이진수배열만들기(n, arr) {
//     const 이진수배열 = [];
//     for (let i = 0; i < arr.length; i++) {
//         let result = ""
//         const 이진수 = arr[i].toString(2);
//         const 이진수길이 = 이진수.length;
//         const zeros = "0".repeat(n - 이진수길이);
//         result = zeros + 이진수;
//         이진수배열.push(result);
//     }
//     return 이진수배열;
// }

// function solution(n, arr1, arr2) {
//     var answer = [];
//     let arr1이진수 = 이진수배열만들기(n, arr1);
//     let arr2이진수 = 이진수배열만들기(n, arr2);

//     for (let i = 0; i < n; i++) {
//         let result = "";
//         for (let j = 0; j < n; j++) {
//             let sum = Number(arr1이진수[i][j]) + Number(arr2이진수[i][j]);
//             const value = sum > 0 ? "#" : " ";
//             result = result + value
//         }
//         answer.push(result)
//     }

//     return answer;
// }

// 비트 OR 연산 활용 풀이
function solution(n, arr1, arr2) {
  return arr1.map((v, i) => {
    // 비트 OR 연산 후 2진수 변환
    // 비트 OR 연산은 자동으로 이진수로 변환
    let binary = (v | arr2[i]).toString(2);
    // 이진수 길이가 n보다 작으면 앞에 0 추가
    binary = "0".repeat(n - binary.length) + binary;

    return binary.replace(/1|0/g, (a) => (+a ? "#" : " "));
  });
}
