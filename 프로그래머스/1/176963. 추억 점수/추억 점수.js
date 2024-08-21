function solution(name, yearning, photo) {
    const hash = new Map()
    var answer = [];
    let sum = 0
    
    for(i=0; i<name.length; i++){
        hash.set(name[i], yearning[i])
    }

    for(i=0; i<photo.length; i++) {
        sum=0
        for(j=0; j<photo[i].length; j++){
            let member = hash.get(photo[i][j])
            if (member) {sum = sum + member}
        }
        answer.push(sum)
    }
    
    return answer;
}