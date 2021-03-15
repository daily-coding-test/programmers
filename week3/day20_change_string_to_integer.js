// 스스로 구현해본 방법
function solution(s) {
  let result = s.split('').reverse().reduce((result, c, i) => {
      if (c === '-') return -result;
      if (c === '+') return result;
      return (c.charCodeAt(0) - 48) * Math.pow(10, i) + result;
  }, 0)
  return result;
}

// 내장 함수를 사용하는 방법
function solution2(s) {
  return parseInt(s);
}