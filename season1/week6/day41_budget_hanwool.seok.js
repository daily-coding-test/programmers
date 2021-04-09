function solution(d, budget) {
  var answer = 0;
  var sum = 0;
  d.sort((a,b) => a-b)
  for (let r of d) {
      if (sum + r > budget) {
          break;
      }
      
      sum += r;
      ++answer;
  }
  return answer;
}