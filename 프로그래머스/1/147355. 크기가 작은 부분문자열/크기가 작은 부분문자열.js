function solution(t, p) {
    var answer = 0;
    
    for(i=0; i<=t.length-p.length; i++) {
        const slicedt = t.slice(i, i+p.length)
        if (slicedt<=p) {answer += 1}
    }
    return answer
}