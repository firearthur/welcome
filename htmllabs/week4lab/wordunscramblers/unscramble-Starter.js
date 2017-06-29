/*
Word Unscramble

Create a function that will take a string and an array of letters
The array will contain all of the same letters as the string but will be scrambled
Example:  "hello" and ["l","e","h","o","l"] 

The function will move the indices and sort it until it equals the string.
*/

function unscramble(array, string)
{
    
    for (var i = 0; i < array.length; i++)
    {
        var currentCharIndex = i;
        var currentChar = array[currentCharIndex];
        
        var matchedCharIndex = array.indexOf(string.charAt(i));
        var matchedChar = array[matchedCharIndex];
        
        array[currentCharIndex] = matchedChar;
        array[matchedCharIndex] = currentChar;
    }
    console.log(array);
};




unscramble(["l","e","h","o","l"], "hello");