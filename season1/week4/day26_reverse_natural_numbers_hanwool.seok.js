function solution(n) {
  return (n + '').split('').reverse().map(c => parseInt(c));
}