function solution(n, m) {
    if (m>n) {
        var a = n
        var b = m
    } else {
        var a = m
        var b = n
    }
    var answer = [];
    var j=b
    const min =()=> {
    for (i=a; i>0; i--) {
        if(b%i === 0 && a%i === 0) {
            return answer[0] = i
        }
    }}
    const max =() => {
    while (j) {
        if (j%a === 0 && j%b === 0) {
            return answer[1] = j
        }
        j++
    }}
    min()
    max()
    return answer;
}