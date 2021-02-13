// To Do 1
// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.


function addfront(val, arr){
    newarr = [val, ...arr]
    return newarr
}

var arr = [1,2,3,4,5]

var val = 0
console.log('addfront')
console.log(addfront(val, arr))

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popfront(arr){
    var newarr = []
    for(var i = arr.length - 1; i > 0; i--){
        newarr = addfront(arr[i], newarr)
        arr.pop()
    }
    return newarr
}

var arr = [1,2,3,4,5]
console.log('popfront')
console.log(popfront(arr))
// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertat(x, index, arg){
    for(let i = arg.length; i > index; i--){
        arg[i] = arg[i-1];
    }
    arg[index] = x;
}

var arr = [1,2,3,4,5];
var i = 3;
var num = 6;
insertat(num, i, arr);
console.log('insertat');
console.log(arr);


// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(index, arg){
    for(let i=index;i<arg.length-1;i++){
        [arg[i],arg[i+1]] =[arg[i+1],arg[i]] 
    }
    arg.pop()
};
var arr = [1,2,3,4,5];
var i = 2;
removeAt(i, arr);
console.log('removeat')
console.log(arr)
// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPair(arg){
    for(let i=0;i<arg.length-1;i+=2){
        [arg[i],arg[i+1]] =[arg[i+1],arg[i]];
    }
}

var arr = [1,2,3,4,5];
swapPair(arr)
console.log('swappair')
console.log(arr)
// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
var arr = [1,1,1,1,1,1,1,1,2,2,3,4,4,5,5];
function removeDupe(arg){
    for(let i=0;i<=arg.length-1;i++){
        if(arg[i] === arg[i+1]){
            removeAt(i+1,arg);
            i--;
        }
    }
}
removeDupe(arr)
console.log('removeDupe')
console.log(arr)
// Second: Solve this without using any nested loops.
var arr = [1,1,1,1,1,1,1,1,2,2,3,4,4,5,5];

function removeDupe2(arg){
    var newarr = []
    for(let i=0; i<arg.length;i++){
        if(arg[i] !== arg[i+1]){
            newarr.push(arg[i])
        }
    }
    return newarr
}


removeDupe2(arr)
console.log('removeDope2')
console.log(removeDupe2(arr))