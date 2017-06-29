/*

Write a function that accepts an array of integers as an argument and finds and returns the smallest
integer.

Given an array of [34, 15, 88, 2], your function should return 2.


*/

function findSmallest(array)
{
    var smallest = array.sort(function(a, b){return a-b})[0];
    return smallest;
}

alert(findSmallest([34, 15, 88, 2]));