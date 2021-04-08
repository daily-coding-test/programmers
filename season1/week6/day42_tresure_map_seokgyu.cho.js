// https://programmers.co.kr/learn/courses/30/lessons/17681
// https://github.com/daily-coding-test/programmers/issues/72
function solution(n, arr1, arr2) {
  return arr1.map((a, idx)=>{
    const r = a | arr2[idx]
    let s = ""
    for(let i = 0; i < n; i++) {
      s = (( ((r >> i) & 1) === 1) ? "#" : " ") + s
    }
    return s
  })
}
