function solution(number, limit, power) {
    var answer = 0;
    var divisorArray =[]
    
    for (i=1; i<=number; i++) {
        var divisor = 0
        var sqrtnumber = Math.sqrt(i)
        for (j=1; j<=sqrtnumber; j++) {
            if (divisor === 'over') {break}
            else if (i%j === 0) {
                if(i/j === j) {divisor += 1}
                else if (i%j !== j) {divisor += 2}
                if(divisor > limit) {
                divisor = 'over'
            }
            }
        }
        divisorArray.push(divisor)
    }
    divisorArray.forEach((i) => {if(i === 'over') {answer += power} else {answer += i}})
    
    return answer;
}