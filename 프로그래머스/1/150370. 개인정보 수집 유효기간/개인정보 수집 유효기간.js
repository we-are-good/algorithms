function solution(today, terms, privacies) {
    var answer = [];
    
    for(i=0; i<privacies.length; i++) {
        let thispolicy = privacies[i].charAt(11) //i번째 프라이버시 약관
        let termsmonth = terms.find((i) => i.charAt(0) === thispolicy).split(' ')[1] //약관 찾기
        let inday = privacies[i].substr(0, 10) //i번째 날짜
        
        let year = today.substr(0,4)-inday.substr(0,4)
        let month = today.substr(5,2)-inday.substr(5,2)
        let day = today.substr(8,2)-inday.substr(8,2)
        
        if (day>=0) {
            if((year*12+month)>=termsmonth) {answer.push(i+1)}}
        else{
        if((year*12+month-1)>=termsmonth) {answer.push(i+1)}}
    }
    return answer;
}