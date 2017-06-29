/*

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he 
is known for always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes
from Jaden, but they are not capitalized in the same way he originally typed them.

*/

var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function() {
    
    var array = this.split(" ");
    for(var i = 0; i < array.length; i++)
    {
        var firstLetter = array[i].charAt(0);
        array[i] = array[i].replace(firstLetter,firstLetter.toUpperCase(firstLetter));
    }
    
    var capitalizedString = array.toString().replace(/,/g," ");
    
    return capitalizedString;
};

console.log(str.toJadenCase());