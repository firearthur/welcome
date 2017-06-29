function printReverse(array) { 

    var returnArray = [];
    
    for(var i = array.length-1; i!== -1; i--)
    {
        returnArray[Math.abs(array.length-1 - i)] = array[i];
    }
  return returnArray; 
}

alert(printReverse(["Banana", "Orange", "Apple", "Mango", "Arthur", "Clinton"]));  


function isUniform(arr)
{
    var identical = false;
    
    for(var j = 0; j < arr.length; j++)
    {
        for(var k = 1; k < arr.length; k++)
        {
            if(arr[j] === arr[k])
            identical = true;
        }
        break;
    }
    
    return identical;
}

alert(isUniform(["Banana", "Banana", "Banana", "Banana"]));


function sumArray(a)
{
    var accumulator = 0;
    for(var ind = 0 ; ind < a.length; ind++)
    {
        accumulator+=a[ind];
    }

    return accumulator;    
}

alert(sumArray([1, 100, 25, 50]));


function max(ar)
{
    var biggest = ar[0];
    for(var inde = 1; inde < ar.length; ar++)
    {
        if(biggest < ar[inde])
        biggest = ar[inde];
    }
    return biggest;
}

alert(max([1, 100, 25, 50]));