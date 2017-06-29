/*

Write a function that can take any non-negative integer as an argument and return it with it's digits
in descending order. Descending order means that you take the highest digit and place the next highest digit 
immediately after it.

Example:
Input: 145263
Output: 654321

*/
var input = "145263";


function decendingSort(input)
{
  var inputArray = input.split("");
    
    alert(inputArray);    
    inputArray = inputArray.sort(function(a, b){return b-a});
    console.log("This is inside the function: " + inputArray);
    var stuck = inputArray.toString();
    return stuck.replace(/,/g,"");
};

console.log(decendingSort(input));