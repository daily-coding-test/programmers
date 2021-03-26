function solution(n) {
  const divideableMap = [];
  var answer = 0;
  for (let i = 2; i<=n; i++) {
      if (divideableMap[i] === true) {
          continue;
      } 
      answer++;
      for(let multiplier = 2;  i * multiplier <= n; ++multiplier) {
          divideableMap[multiplier * i] = true
      }
  }
  return answer;
}

for (let n = 2; n <= 1000000; n += 10000) {
  const start = Date.now();
  const result = solution(n);
  const end = Date.now();
  console.log(`n = ${n}, result = ${result}, spent ${end - start}ms.`)
}