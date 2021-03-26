function solution(n) {
  return parseInt((n + '').split('').sort().reverse().join(''));
}