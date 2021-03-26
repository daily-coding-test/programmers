function solution(s) { 
    return s.split(" ").map(w=>{
        let r = ""
        for (let i=0; i < w.length; i++) {
            if (i & 1 === 1) {
                //홀
                r += w[i].toLowerCase()
                
            } else {
                //짝
                r += w[i].toUpperCase()
            }
        }
        return r
    }).join(" ")
}