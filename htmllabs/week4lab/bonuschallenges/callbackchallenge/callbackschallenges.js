// Type JavaScript here and check the console
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {

return (num+2)
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
return (word + "s");
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    var newArray = [];
    
    for (var i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i]);
    }
    
    return newArray;
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
    
    return array;
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    var newArray = [];
    
    newArray = forEach(array,callback);    

    return newArray;    

}

console.log(mapWith([1, 2, 3], addTwo));



//Extension 2
function reduce(array, callback, initialValue) {
    var accumulator = initialValue;
    for (var i = 0; i < array.length; i++) {
        accumulator = callback(accumulator,array[i]);
    }
    
    return accumulator;
}

var nums = [4, 1, 3];

var add = function(a, b) { return a + b; }

console.log(reduce(nums, add, 0));


//Extension 3
function intersection(arrays) {
    console.log(arrays);
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));

function mytest(arrays) {
    console.log(arrays);
}

mytest([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]);

// should log: [15, 5]

//Extension 4
function union(arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]
