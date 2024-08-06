function solution(number) {
    var three = 0
    for (i=0; i<number.length; i++) {
        for (j=i+1; j<number.length; j++){
            const two = (number[i]+number[j])*-1
            
            for(k=j+1; k<number.length; k++ ) {
            if(number[k] === two){
            three = three +1}
        }
    }}
return three
}