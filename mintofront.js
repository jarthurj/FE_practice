// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, 
// do this without using built-in functions.

var arr1 = [4,2,1,3,5];


function minFront(arr){
    var min = arr[0];
    var min_index = 0
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
            min_index = i
        }
    }
    for(var i = min_index; i > 0 ; i--){
        temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
    }
    // return arr
}

minFront(arr1)
console.log(arr1)