// ; 마지막 두 원소
// ; 문제 설명
// ; 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

// ; 제한사항
// ; 2 ≤ num_list의 길이 ≤ 10
// ; 1 ≤ num_list의 원소 ≤ 9
// ; 입출력 예
// ; num_list	result
// ; [2, 1, 6]	[2, 1, 6, 5]
// ; [5, 2, 1, 7, 5]	[5, 2, 1, 7, 5, 10]
// ; 입출력 예 설명
// ; 입출력 예 #1

// ; 마지막 원소인 6이 그전 원소인 1보다 크기 때문에 6 - 1인 5를 추가해 return합니다.
// ; 입출력 예 #2

// ; 마지막 원소인 5가 그전 원소인 7보다 크지 않기 때문에 5의 두 배인 10을 추가해 return합니다.

function solution(num_list) {
  var answer = [...num_list];

  if (num_list.length >= 2) {
    var lastElement = num_list[num_list.length - 1];
    var prevElement = num_list[num_list.length - 2];

    if (lastElement > prevElement) {
      answer.push(lastElement - prevElement);
    } else {
      answer.push(lastElement * 2);
    }
  }

  return answer;
}
