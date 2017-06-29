/*

Write a function called calculate that accepts three values. The first and third values are numbers.
The second value is a character. If the character is "+", "-", "*", or "/", the function will return the result 
of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters,
the function should return null.

calculate(2, "+", 4) // return 6
calculate(6, "-", 1.5) // return 4.5
calculate(4, "/", 0) // return null
calculate(8, "m", 2) // return null

Keep in mind you cannot divide by zero. If an attempt to divide by zero is made, return null.

*/

function calculate(num1, sign, num2)
{
    switch (sign)
    {
        case '+':
            
            return Number(num1) + Number(num2);
            break;
            
        case '-':
            return Number(num1) - Number(num2);
            break;
            
        case '*':
            return Number(num1) * Number(num2);
            break;
        case '/':
            return Number(num1) / Number(num2);
            break;            
        default:
            return null;
    }
}

console.log(calculate(2, "+", 4),calculate(6, "-", 1.5),calculate(4, "/", 0),calculate(8, "m", 2));