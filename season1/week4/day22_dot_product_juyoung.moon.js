function solution(a, b) {
  var answer = 1234567890;
  
  answer = a.reduce((accu, value, index) => {
      return accu + (value*b[index]);
  }, 0)
  
  return answer;
}