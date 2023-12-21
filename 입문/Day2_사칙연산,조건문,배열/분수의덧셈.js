// 분수의 덧셈
// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000
// 입출력 예
// numer1	denom1	numer2	denom2	result
// 1	2	3	4	[5, 4]
// 9	2	1	3	[29, 6]
// 입출력 예 설명
// 입출력 예 #1

// 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
// 입출력 예 #2

// 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.


//최대 공약수(Greatest Common Divisor, GCD)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    // 두 분수의 분모를 통일하기 위해 최소 공배수를 계산합니다.
    const commonDenom = denom1 * denom2 / gcd(denom1, denom2);

    // 통일된 분모에 따라 분자를 갱신합니다.
    const newNumer1 = numer1 * (commonDenom / denom1);
    const newNumer2 = numer2 * (commonDenom / denom2);

    // 두 분수를 더한 분자를 계산합니다.
    const resultNumer = newNumer1 + newNumer2;

    // 결과 분수를 기약 분수로 만들기 위해 최대 공약수를 계산합니다.
    const commonFactor = gcd(resultNumer, commonDenom);

    // 기약 분수의 분자와 분모를 계산합니다.
    const simplifiedNumer = resultNumer / commonFactor;
    const simplifiedDenom = commonDenom / commonFactor;

    return [simplifiedNumer, simplifiedDenom];
}