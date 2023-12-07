// 올바른 괄호
// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "()()"	true
// "(())()"	true
// ")()("	false
// "(()("	false


//내가 푼 답은 코드 제출시 1,2번 실패, 시간효율 실패,,
function solution(s) {
  const q = s.split("");
  const c = q.filter((e) => e === "(");
  const d = q.filter((e) => e === ")");
  let answer = true;

  for (let i = 1; i < q.length; i++) {
    let n = q.slice(0, i);
    let a = n.filter((e) => e === "(");
    let b = n.filter((e) => e === ")");

    if (q.at(-1) === "(" || q.at(0) === ")" || c.length !== d.length) {
      answer = false;
    } else if (a.length < b.length) {
      answer = false;
    }
    if (answer === false) {
      console.log(n, i);
      console.log(a, i);
      console.log(b, i);
      break;
    }
  }
  return answer;
}


//GPT답안
function solution(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const current = s[i];
  
      if (current === '(') {
        stack.push('(');
      } else if (current === ')') {
        if (stack.pop() !== '(') {
          return false;
        }
      } else {
        return false;
      }
    }
  
    return stack.length === 0;
  }
