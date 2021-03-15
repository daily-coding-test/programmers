
// 시간을 입력할때 이진 탐색을 이용하면 더 빠를것 같다.
function insert(time, map) {
  const i = map.findIndex(v => v < time);
  if (i === -1) {
      map.push(time);
  } else {
      map.splice(i, 0, time);
  }
}

// 해당 시간을 벗어난 것들은 지운다.
function dequeueAfter(time, map) {
  const i = map.findIndex(v => v < time);
  map.splice(0, i);
} 

function solution(lines) {
  const orderedStartMap = [];
  let max = 0;
  for(let i = lines.length -1; i >= 0; --i) {
      const dateStrings = lines[i].split(' ');
      const spentTimeString = dateStrings.pop();
      // console.log(dateStrings, spentTimeString);
      const endTimeStamp = new Date(dateStrings.join(' ')).getTime() - new Date('2016-09-15 00:00:00.000').getTime() + 3000;
      
      const spentMiliSeconds = parseFloat(spentTimeString.substring(0, spentTimeString.length-1)) * 1000;
      const startTimestamp = endTimeStamp - spentMiliSeconds;
      // console.log(`${startTimestamp} ~ ${endTimeStamp}`, spentMiliSeconds);
      // enqueue(endTimeStamp, startTime);
      insert(startTimestamp, orderedStartMap);
      dequeueAfter(endTimeStamp + 999, orderedStartMap);
      // console.log(orderedStartMap, `${endTimeStamp} ~ ${endTimeStamp + 999}`);
      max = Math.max(max, orderedStartMap.length);
  }
  return max;
}

// 범위 구하기
// 범위 목록이 있으면 몇개가 겹치는지 구하기

// 1. 시작을 기준으로 정렬.
// 2. 끝을 기준으로 정렬하면서 큐를 유지.

// 3. 큐에 넣을때 마다 범위를 벗어나는 녀석을 제거. 
// 4. 큐에 넣고 제거를 마친 다음에는 최대 갯수 갱신.