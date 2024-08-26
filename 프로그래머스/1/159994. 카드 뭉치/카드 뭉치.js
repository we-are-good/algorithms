function solution(cards1, cards2, goal) {
const cards1hash = new Map()
const cards2hash = new Map()
let incard1 =[]
let incard2=[]
let goalLehgth = goal.length

cards1.forEach((card, index)=> {cards1hash.set(card, index)})
cards2.forEach((card, index)=> {cards2hash.set(card, index)})

    for (i=0; i<goalLehgth; i++) {
        const nthgoal = goal[i]
        const yesincard1 = cards1hash.has(nthgoal)
        const yesincard2 = cards2hash.has(nthgoal)

        if(!yesincard1 && !yesincard2) {return "No"}
        
        else if(yesincard1) {
            let card1element = cards1hash.get(nthgoal)
            if (incard1.at(-1) + 1 === card1element || incard1.length === 0)
            {incard1.push(card1element)
            }
            else {return "No"}
        } else {
            let card2element = cards2hash.get(nthgoal)
            if(incard2.at(-1)+1 === card2element|| incard2.length === 0)
            {incard2.push(card2element)}
            else{return"No"}
        }
                    
    }
    return "Yes"
}