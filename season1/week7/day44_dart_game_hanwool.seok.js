function solution(dartResult) {
  let chars = dartResult.split('');
  const scores = [];
  const BONUSES = {'S': 1, 'D': 2, 'T': 3};
  const OPTIONS = ['*', '#'];
  while(chars.length > 0) {
      let c = chars.shift();
      if (BONUSES[c]) {
          const power = BONUSES[c];
          let score = scores.pop();
          scores.push(Math.pow(score, power));
      } else if (OPTIONS.includes(c)) {
          if (c === '*') {
              scores[scores.length-2] *= 2;
              scores[scores.length-1] *= 2;
          }
          
          if (c === '#') {
              scores[scores.length-1] *= -1;
          }
      } else {
          while(chars.length > 0 && chars[0].match(/[0-9]/)) {
              c += chars.shift();
          }
          scores.push(parseInt(c));
      }
  }
  return scores.reduce((t, n) => n + t, 0);
}