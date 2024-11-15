// 문제 설명
// 정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.

// "w" : 수에 1을 더한다.
// "s" : 수에 1을 뺀다.
// "d" : 수에 10을 더한다.
// "a" : 수에 10을 뺀다.
// 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.

// 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 2 ≤ numLog의 길이 ≤ 100,000
// -100,000 ≤ numLog[0] ≤ 100,000
// 1 ≤ i ≤ numLog의 길이인 모든 i에 대해 |numLog[i] - numLog[i - 1]|의 값은 1 또는 10입니다.
// 입출력 예
// numLog	result
// [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]	"wsdawsdassw"
// 입출력 예 설명
// 입출력 예 #1

// result인 "wsdawsdassw"를 따라 numLog[0]에서부터 시작해 조작을 하면 numLog의 값과 순서대로 일치합니다. 따라서 "wsdawsdassw"를 return 합니다.

function solution(numLog) {
  let answer = "";
  for (let i = 0; i < numLog.length; i++) {
    switch (numLog[i] - numLog[i + 1]) {
      case -1:
        answer += "w";
        break;
      case 1:
        answer += "s";
        break;
      case -10:
        answer += "d";
        break;
      case 10:
        answer += "a";
        break;
    }
  }
  return answer;
}

// 오브젝트형 사용
function solution(numLog) {
  const convert = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  return numLog
    .slice(1)
    .map((v, i) => {
      return convert[v - numLog[i]];
    })
    .join("");
}
