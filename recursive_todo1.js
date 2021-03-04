// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

// function rsigma(value){
//     if(value <= 0){
//         return 0
//     }
//     else if(value === 1){
//         return 1
//     }
//     else{
//         return rsigma(Math.floor(value) - 1) + Math.floor(value)
//     }
// }

// console.log(rsigma(2.5))

// Recursive Factoria0l
// Given num, return the product of ints from 1 up to num. If less than zero, 
// treat as zero. If not an integer, truncate. Experts tell us 0! is 1. 
// rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

// function fact(num){
//     if(num <= 0){
//         return 1
//     }
//     else{
//         return fact(Math.floor(num) - 1) * Math.floor(num)
//     }
// }

// console.log(fact(6.5))

function flashFill(canvas2d, startXY, newColor){
    if((startXY[0]===0||startXY[0]===canvas2d.length-1||startXY[1]===0||startXY[1]===canvas2d.length-1)&&startXY){
        return 
    }
    flashFill(canvas2d,[startXY[0]-1,startXY[1]], newColor)//north
    flashFill(canvas2d,[startXY[0]+1,startXY[1]], newColor,)//south
    flashFill(canvas2d,[startXY[0],startXY[1]-1], newColor)//west
    flashFill(canvas2d,[startXY[0],startXY[1]+1], newColor)//easy
    return canvas2d
}

var canvas= [[3,2,3,4,3],
            [2,3,3,4,8],
            [7,3,3,5,3],
            [6,5,3,4,1],
            [1,1,3,3,3]]

var start = [2,2]

console.log(flashFill(canvas, start,1))

