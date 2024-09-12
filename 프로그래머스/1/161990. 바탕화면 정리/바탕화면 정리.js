function solution(wallpaper) {
    var answer = [];
    let xs = []
    let ys = []
    
    for (i=0; i<wallpaper.length; i++) {
        for (j=0; j<wallpaper[0].length; j++) {
            if (wallpaper[i][j] === '#') {
                xs.push(i)
                ys.push(j)
            }
        }
    }

    xs.sort((a, b) => a-b)
    ys.sort((a, b) => a-b)
    answer.push(xs[0])
    answer.push(ys[0])
    answer.push(xs[xs.length-1]+1)
    answer.push(ys[ys.length-1]+1)

    return answer;
}