function solution(s, n) {
  let codes = s.split('')
      .map(c => {
          let charCode = c.charCodeAt(0);
          if (charCode === 32) return 32;
          let from = (c.toLowerCase().charCodeAt(0)) - 'a'.charCodeAt(0);
          let to = (from + n) % 26;
          return charCode + (to - from);
      });
  return String.fromCharCode(...codes);
}