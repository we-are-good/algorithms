function solution(nums) {
    let halfnums = nums.length/2
    let mynums = [...new Set(nums)]

    return halfnums < mynums.length ? halfnums : mynums.length
    
    }