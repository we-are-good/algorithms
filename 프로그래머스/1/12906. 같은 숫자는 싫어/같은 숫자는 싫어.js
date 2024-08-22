function solution(arr)
{
    let stack =[arr[0]]
    
    for(i=0; i<arr.length-1; i++) {
    if(arr[i] !== arr[i+1]) {stack.push(arr[i+1])}
    }
    return stack;
}