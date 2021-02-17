// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, 
// with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that
//  you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

// arr1 = [1,2,3,4,5]
// function reverse(arr){
//     for(var i = 0; i< Math.floor(arr.length/2); i++){
//         temp = arr[i];
//         arr[i] = arr[arr.length-1-i];
//         arr[arr.length-1-i] = temp;
//     }

// }
// reverse(arr1)
// console.log(arr1)
// console.log(Math.floor(5/2))



// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. 
// ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: 
// given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.


// function rotate(arr, shiftBy){
//     for(var i = 0; i < shiftBy; i++){
//         temp = arr[i];
//         arr[i] = arr[arr.length - 1];
//         arr[arr.length - 1] = temp;
//         for(var n = i + 1; n < arr.length - 1; n++){
//             temp = arr[n];
//             arr[n] = arr[arr.length - 1];
//             arr[arr.length - 1] = temp;
//         };
//     };
// };
// var arr1 = [1,2,10,4,5];
// var bigarr = [];
// for(var i = 1; i <= 1000000 ; i++){
//     bigarr.push(i);
// }

// rotate(bigarr, 10000);
// for(var i = 0; i < bigarr.length; i++){
//     console.log(bigarr[i]);
// };
// rotate(arr1,1)
// console.log(arr1)

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, 
// with values in original order. No built-in array functions.



// function filter(arr, min, max){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i]<min || max<arr[i]){
//             for(var n=i;n<arr.length - 1;n++){
//                 [arr[n],arr[n+1]] = [arr[n+1], arr[n]];
//             };
//             arr.length--;
//             i--;
//         };
//     };
// };

// var arr1 = []
// for(var i = 10; i <= 40; i++){
//     arr1.push(i)
// }
// console.log(arr1)
// filter(arr1, 20, 30)
// console.log(arr1)



// Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. 
// Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concat(arr1, arr2){
    newarr = []
    for(var i=0; i<arr1.length; i++){
        newarr.length++
        newarr[i] = arr1[i]
        console.log(newarr)
    }
    for(var i=0; i<arr2.length; i++){
        newarr.length++
        newarr[i + arr1.length] = arr2[i]
    }
    return newarr
}

var arrr1 = [1,2,3]
var arrr2 = [10,9,8]
console.log(concat(arrr1,arrr2))