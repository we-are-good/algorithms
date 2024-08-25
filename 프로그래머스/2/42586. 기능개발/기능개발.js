function solution(progresses, speeds) {
    var answer = [];
    let small = Math.ceil((100-progresses[0])/speeds[0])
    let count = 0
    const len = progresses.length
    
    for (i=0; i<len; i++) {
        if (progresses[i]+speeds[i]*small >=100) {
            count++
            if(i === len-1) {answer.push(count)}
        } else {
            answer.push(count)
            if(i === len-1) {answer.push(1)}
            small = Math.ceil((100-progresses[i])/speeds[i])
            count = 1
        }
    }
    
    
    return answer;
}