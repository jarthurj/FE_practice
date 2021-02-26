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
    console.log(startXY)
    console.log(canvas2d)
    if(canvas2d[startXY[0]-1][startXY[1]]===canvas2d[startXY[0]][startXY[1]]){ //up
        console.log("up")
        if(canvas2d[startXY[0]][startXY[1]-1]===canvas2d[startXY[0]][startXY[1]]){//left
            console.log("up left")
            canvas2d = canvas2d[startXY[0]].slice(0,startXY[1]+1)
            return flashFill(canvas2d,[startXY[0],startXY[1]-1], newColor)
        }
        if(canvas2d[startXY[0]][startXY[1]+1]===canvas2d[startXY[0]][startXY[1]]){//right
            console.log("up right")
            canvas2d = canvas2d.slice(startXY[0]+1,canvas2d.length)
            return flashFill(canvas2d,[startXY[0],startXY[1]+1], newColor)
        }
        
        // canvas2d[startXY[0],startXY[1]] = newColor
        // return canvas2d
        
        return flashFill(canvas2d.slice(0,startXY[0]),[startXY[0]-1,startXY[1]], newColor)
    }
    if(canvas2d[startXY[0]+1][startXY[1]]===canvas2d[startXY[0]][startXY[1]]){//down
        console.log("down")
        if(canvas2d[startXY[0]][startXY[1]-1]===canvas2d[startXY[0]][startXY[1]]){//left
            console.log("down left")
            canvas2d=canvas2d[startXY[0]].slice(0,startXY[1])
            return flashFill(canvas2d,[startXY[0],startXY[1]-1], newColor)
        }
        if(canvas2d[startXY[0]][startXY[1]+1]===canvas2d[startXY[0]][startXY[1]]){//right
            console.log("down right")
            canvas2d=canvas2d.slice(startXY[0]+1,canvas2d.length)
            return flashFill(canvas2d,[startXY[0],startXY[1]+1], newColor)
        }
        // canvas2d[startXY[0],startXY[1]] = newColor
        // return canvas2d
        
        return flashFill(canvas2d.slice(0,startXY[0]),[startXY[0]-1,startXY[1]], newColor)
    }
    canvas2d[startXY[0],startXY[1]] = newColor
    return canvas2d
}

var canvas= [[3,2,3,4,3],
            [2,3,3,4,8],
            [7,3,3,5,3],
            [6,5,3,4,1],
            [1,1,3,3,3]]

var start = [2,2]

console.log(flashFill(canvas, start,1))

