/* 
Color Changer

Toggle the body's background color between Purple
and white, when a button is clicked.
*/

// Select the button and assign to a variable

// Attach an event listener to the button when it is clicked
// the callback function will use if/else statement
// check if it's purple- if it's purple change the background style to white
// otherwise it will change style to purple.

//Bonus: use the toggle method instead

var button = document.getElementsByTagName("button")[0];
var body =document.getElementsByTagName("body")[0];

button.addEventListener("click",function(){
    if(body.style.backgroundColor === "purple")
    body.style.backgroundColor = "white";
    else
    body.style.backgroundColor = "purple";
});