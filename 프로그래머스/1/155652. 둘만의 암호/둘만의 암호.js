function solution(s, skip, index) {
    var answer = '';
    let skipsplit = skip.split('')
    let ssplit = s.split('')
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (i=0; i<skipsplit.length; i++) {
        alpha = alpha.filter((item)=>item !== skipsplit[i])
    }
    
    for (j=0; j<ssplit.length; j++) {
        let newIndex = alpha.findIndex((t) => t === ssplit[j])+index
        while (newIndex>=alpha.length) {newIndex = newIndex- alpha.length}
        answer = answer + alpha[newIndex]
    }
    
    return answer
}