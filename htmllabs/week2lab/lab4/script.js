
var seceretNumber = 15;

var guess =  prompt("Please eneter a guess for the seceret number I have in mind.");

if(guess == seceretNumber)
{
    console.log("you got it!");
}
else if(guess > seceretNumber)
{
    console.log("too high");
}
else if(guess < seceretNumber )
{
    console.log("too low");
}
else
{
    console.log("invalid input");
}