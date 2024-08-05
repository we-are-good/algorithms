function solution(n) {
    var answer = 0;
    const toTrinary = n.toString(3)
    const reverseTrinary = toTrinary.split('').reverse().join('')
    return parseInt(reverseTrinary, 3)
}