// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".


// var str = " Pl ayTha tF u nkyM usi c "
// var arr = str.split(" ")
//     str = arr.join("")
// console.log(str)


// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

// function digits(str){
//     var arr = str.split("")
//     var nums = "0123456789"
//     var new_arr = []
//     for(var i=0; i< arr.length; i++){
//         if( nums.includes(arr[i])){
//             new_arr.push(arr[i])
//         }
//     }
//     if(new_arr[0] === '0'){
//         return new_arr.slice(1,).join("")
//     }
//     else{
//         return new_arr.join("")
//     }

// }

// var str = "0s1a3y5w7h9a2t4?6!8?0"
// console.log(digits(str))


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

// function acronym(str){
//     var arr = str.split(" ")
//     var new_arr = []
//     for(var i=0; i<arr.length;i++){
//         new_arr.push(arr[i][0].toUpperCase())
//     }
//     return new_arr.join("")
// }
// var new_str = "there's no free lunch - gotta pay yer way";
// var new_str2 = "Live from New York, it's Saturday Night!";

// console.log(acronym(new_str))
// console.log(acronym(new_str2))


// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
// function countChar(str){
//     return str.split(" ").join("").length
// }
// var new_str = "Honey pie, you are driving me crazy"
// console.log(countChar(new_str))


// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.
function filter1(arr, num){
    return arr.filter(function(word){return word.length < num})
}

var new_arr = ['astrophysics','cat','food', 'pizza', 'disbar', 'as', 'bookkeepper',"keyboards","keyboard"]
console.log(filter1(new_arr,5))