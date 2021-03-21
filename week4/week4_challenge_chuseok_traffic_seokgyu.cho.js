// 정렬된 기준점에서 시작해야 함
// Sweeping Algorithm 참조
// http://courses.csail.mit.edu/6.854/17/Scribe/s25-sweepline.html

// Sweep a line across problem plane.
// 문제를 평면에 놓고 줄을 긋는다

// As the line sweeps across the plane, events of interest occur, keep track of these events.
// 줄이 평면에 그어지면서 뭔가 사건이 생기면 그걸 추적한다.

// Deal with events that occur at the line leaving a solved problem behind.
// 일어난 문제를 해결하면서 해결된 문제는 뒤에 둔다(더 이상 신경쓰지 않는다) 

// 로그에 적용하면,
// 종료시간 기준으로 오름차순 정렬이 되어 있고 시작시간이 비정렬되어 있으므로 180도 뒤집어서 생각하면 편하다
// 종료시간이 왼쪽에 오고 내림차순 정렬되어 있는 다음과 같은 형태를 생각한다. 

// 표 1
// 1:========
// 2:  ====
// 3:   ====
// 4:          ====
// 5:             ====
// 각 로그를 순서대로(내림차순->이미지 상으로는 위에서 아래) 살펴본다
// 각 행의 왼쪽 끝(실제로는 endTime)에서 1초 이전을 기준으로 수직선을 긋는다. 여기서부터 로그 처리가 시작된다.
// 수직선과 만난 이전 행(위쪽)은 모두 현재까지 겹쳐져 있는 것으로 간주한다.
// 로그가 시작하면(실제로는 endTime) 지금 겹쳐진(=떨어지지 않은 모든 이전 로그 갯수와 동일, 현재 로그의 endTime=>왼쪽 끝 + 999 < startTime이 라면 떨어진 상태. 표1의 4라인 참고)로그 갯수를 구한다.
// 최대 갯수와 비교하여 기록하고 계속 진행한다.
// 오른쪽 끝을 비교하지 않는 이유는 왼쪽끝 점을 기준으로 정렬되어 있으므로 그 점을 벗어나는 선분은 존재하지 않기 때문이다.
// 그래서 정렬된 데이터를 가지고 작업해야 한다.

function solution(lines) {
    let maxCount = 1
    if (!lines) {
        return 0
    }
    if (lines.length < 2) {
        return 1
    }
    
    let upperLines = []
    
    // 180도 뒤집어서 생각하므로 일단 뒤집어서 내림차순으로 배열한다
    for (let i = lines.length - 1; i >= 0; i--) {
        // 시작, 종료시간을 얻어온다
        const row = parseTime(lines[i])
        const { from, to } = row
        
        // 이전 라인을 기록한다
        upperLines.push(row)
        
        // 떨어지지 않은 것만 체크
        const v = upperLines.filter(r=> !(r.from > 999 + to)).length
        if (v > maxCount) {
            maxCount = v
        }        
    }
    
    return maxCount
}

// 시간 파싱 - 내부 함수로 해도 된다. float의 해상도가 신경쓰여서 직접 구현함
function parseTime(el) {
    const a = el.split(" ")
    const time = a[1]
    const hour = parseInt(time.slice(0, 2))
    const minute = parseInt(time.slice(3, 5))
    const second = parseInt(time.slice(6, 8))
    const mil = parseInt(time.slice(9, 12))
        
    const f = a[2].replace("s", "").split(".")
        
    let duration = parseInt(f[0]) * 1000
                
    if (f.length > 1) {
        duration = duration + parseInt(f[1])
    }
        
    const completeTime = hour * 3600 * 1000 + minute * 60 * 1000 + second * 1000 + mil
    const startTime = completeTime - duration + 1
    return {
        from: startTime,
        to: completeTime
    }
}