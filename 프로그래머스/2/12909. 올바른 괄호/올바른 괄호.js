function solution(s){
    var answer = true;
    let list = []
    for (i=0; i< s.length; i++) {
        if (s[i] === '(') {
            list.push('open')
        }
        if (s[i] === ')') {
            if(list.length === 0) {return answer= false}
            list.pop()
        }
    }
    if (list.length !== 0) {return answer=false}
    return answer;
}