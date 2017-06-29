function isEven(number)
{
    if(number % 2 === 0)
    return true;
    else
    return false;
};

alert(isEven(8));

function factorial(num)
{
    var result = 1;
    for(var i = 1; i !== (num +1) ; i++ )
    {
        result *= i;
    }
    return result;
}

var test =  factorial(4);
alert(test);

function kebabToSnake(str)
{
    if(str.search(/-/))
    {
        str = str.replace("-","_");
        return str;    
    }
    else
    {
        return "String doesnt have a kebab";
    }
    
}

alert(kebabToSnake("hello-world"));

