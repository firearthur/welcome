
var age =  prompt("Please eneter your age");

if(age < 0)
{
    console.log("age can\'t be negative");
}
else if(age== 21)
{
    console.log("happy 21st birthday")
    console.log("your age is odd!")
}
else if(age%2 !== 0 )
{
    console.log("your age is odd!")
}
else if(Math.sqrt(age*age)==age)
{
    console.log("Your age is a perfect square")
}

else
{
    console.log("invalid input")
}