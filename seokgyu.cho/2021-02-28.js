function solution(n, lost, reserve) {
   
    let wears = []
    for (let j = 0; j < n; j++) {
        wears.push(1)
    }
    
    wears = reserve.reduce((w, cur)=>{
        w[cur-1] = w[cur-1] + 1
        return w
    }, wears)
    
    wears = lost.reduce((w, cur)=>{
        w[cur-1] = w[cur-1] - 1
        return w
    }, wears)
    
    let prev, next
    for (let i = 0; i < n; i++) {
        let wc = wears[i]
        if (wc > 0) {
            continue
        }
        
        prev = i-1 < 0 ? 0: i-1     
        if (wears[prev] > 1) {
            wears[prev] = wears[prev] - 1
            wears[i] = 1
            continue
        }
        
        next = i + 1 > n-1 ? n-1 : i+1
        if (wears[next] > 1) {
            wears[next] = wears[next] - 1
            wears[i] = 1
            continue
        }         
    }
    
    return wears.filter(e=>e>0).length;
}
