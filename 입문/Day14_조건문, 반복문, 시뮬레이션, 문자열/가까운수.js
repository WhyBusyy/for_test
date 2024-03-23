// 문제 설명
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ array의 원소 ≤ 100
// 1 ≤ n ≤ 100
// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
// 입출력 예
// array	n	result
// [3, 10, 28]	20	28
// [10, 11, 12]	13	12
// 입출력 예 설명
// 입출력 예 #1

// 3, 10, 28 중 20과 가장 가까운 수는 28입니다.
// 입출력 예 #2

// 10, 11, 12 중 13과 가장 가까운 수는 12입니다.

function solution(arr, n) {
  arr.push(n);
  arr.sort((a, b) => a - b);
  let i = arr.indexOf(n);

  return i === 0
    ? arr[i + 1]
    : i === arr.length - 1
    ? arr[i - 1]
    : arr[i] - arr[i - 1] > arr[i + 1] - arr[i]
    ? arr[i + 1]
    : arr[i - 1];
}

// 풀이참고 : Math.abs() 절대값 함수
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}
