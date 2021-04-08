// https://github.com/daily-coding-test/programmers/issues/70
// https://programmers.co.kr/learn/courses/30/lessons/12982
const solution = (d, budget) => d.sort((a, b)=>a-b).reduce((acc, cur)=>((budget-=cur) < 0 ? acc: acc+1), 0)

// 0. 가장 많은 부서에 지원해 줄 수 있는 방법을 찾는다.
// 1. 가장 많은 부서에 지원해 줄 수 있는 방법은 필요 예산이 작은 것부터 지원해 주는 것이다.
// 2. 그러므로 작은 순으로 정렬한다.
// 3. 필요 예산이 0이하가 되기 전까지 배분한 부서 수를 구한다.
