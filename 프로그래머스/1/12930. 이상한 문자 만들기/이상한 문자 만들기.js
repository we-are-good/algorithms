function solution(s) {
    const lower = s.toLowerCase().split(' ')
    var newWord = ""

    for(i=0; i<lower.length; i++){
        if (i !== 0) newWord=newWord+' '
            for (j=0; j<lower[i].length; j++){
            if(j%2 === 0) {newWord=newWord+lower[i][j].toUpperCase()}
            else {newWord = newWord+lower[i][j]}
        }         
    }
    return newWord;
}