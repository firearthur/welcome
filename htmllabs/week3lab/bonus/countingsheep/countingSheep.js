/*

Consider an array of boolean values that represent sheep that are currently present in 
their barn. A value of true means the sheep is present in the barn.

Write a function that takes in an array and returns the number of sheep present in the barn.
Console log your results.

*/


//Write the function 

var sh = [true, true, true, false,true, true, true,
true,true, false, true, false,true, false, false,
true,true, true, true, true,false, false, true, true];




function countSheep(sh)
{
    var sheepAvailable = 0;
    for(var i = 0; i < sh.length; i++)
    {
        if(sh[i]===true)
        {
            sheepAvailable++;
        }
    }
    return sheepAvailable;    
}

console.log(countSheep(sh));

