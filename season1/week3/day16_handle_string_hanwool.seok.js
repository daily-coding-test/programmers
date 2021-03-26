function solution(s) {
  if (s.length !==4 && s.length !== 6 ) {
      return false;
  }
  
  return !s.split('').some(c => {
      return c.charCodeAt(0) < '0'.charCodeAt(0) || '9'.charCodeAt(0) < c.charCodeAt(0);
  })
}