function solution1(s) {
  return s.split('').sort((a, b) => a >= b ? -1 : 1).join('');
}

function solution2(s) {
  return s.split('').sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join('');
}

function solution_error(s) {
  return s.split('').sort((a, b) => b - a).join('');
}