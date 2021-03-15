function solution(n) {
  const array = []
  for(let i = 0; i < n; ++i) {
      array.push("수박"[i%2]);
  }
  return array.join('');
}