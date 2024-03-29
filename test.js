function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    let a = 0;
    for (let j = 2; j <= i; j++) {
      i % j === 0 ? a++ : a;
    }
    if (a === 1) {
      answer++;
      a = 0;
    } else {
      a = 0;
    }
  }
  return answer;
}
