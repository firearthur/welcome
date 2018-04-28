// JavaScript File

//color blocks (divs)
var easyDivs = document.getElementsByClassName("easyDiv");
var hardDivs = document.getElementsByClassName("hardDiv");
var colorDivs = document.getElementsByClassName("colorDiv");

//buttons
var easyButton = document.getElementById("easyDifficulty");
var hardButton = document.getElementById("hardDifficulty");
var leftToolButton = document.getElementById("leftTool");

//hard row
var hardRow = document.getElementById("hardRow");

//color value to guess
var colorValue = document.getElementById("colorValue");

//game result
var gameResult = document.getElementById("gameResult");



//main functions

function randomColor()
{
    var rgbColor = "";
    
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    
    rgbColor = "rgb(" + r + ", " + g + ", " + b + ")";
    
    return rgbColor;
}

function makeHard(event)
{
    // for (var i = 0; i < hardDivs.length; i++) {
    //     hardDivs[i].className
    // }
    if(event)
    event.stopPropagation();
    
    hardRow.className = "row";

    easyButton.className ="";

    hardButton.className="activeDifficulty";
    
    newColors();
    
    resetGame();
        
}

function makeEasy(event)
{
    if(event)
    event.stopPropagation();


    hardRow.className = "row invisible";

    easyButton.className ="activeDifficulty";

    hardButton.className="";
    
    newColors();
    
    resetGame();
}

function newColors(event)
{
    if(event)
    event.stopPropagation();
    
    //setting the divs' colors
    for (var i = 0; i < easyDivs.length; i++) {
        easyDivs[i].style.backgroundColor = randomColor();
        hardDivs[i].style.backgroundColor = randomColor();
    }
    
    //setting the color value to guess
    if(easyButton.className=="activeDifficulty")
    {
        colorValue.innerHTML = easyDivs[Math.floor(Math.random()*easyDivs.length)].style.backgroundColor.toUpperCase();
        //console.log("This is the color" + easyDivs[Math.floor(Math.random()*easyDivs.length)].style.backgroundColor);
    }
    else if(hardButton.className=="activeDifficulty")
    {
        colorValue.innerHTML = colorDivs[Math.floor(Math.random()*colorDivs.length)].style.backgroundColor.toUpperCase();
    }
    else
    {
        console.log("Error! there is no game difficulty selected");
    }
}

function winning(event)
{
    if(event)
    event.stopPropagation();
    
    gameResult.innerHTML = "Correct!";
    gameResult.className = " ";
    
    leftToolButton.innerHTML="PLAY AGAIN?";
    
    endOfGame();
}


function resetGame(event)
{
    if(event)
    event.stopPropagation();
    
    console.log("resetGame method was invoked");
    
    
    //adding event listeners to the buttons
    hardButton.addEventListener("click", makeHard);
    easyButton.addEventListener("click", makeEasy);
    leftToolButton.addEventListener("click",newColors);
    
    //adding event listeners to the divs
    for (var index = 0; index < colorDivs.length; index++) {
        colorDivs[index].addEventListener("click",divClicked);
    }
    
    //creating random colors for the first time
    newColors();
    
    //hidding the result
    gameResult.className = "invisible";
    
    //changing the text of the left button
    leftToolButton.innerHTML = "NEW COLORS";
    
    console.log("Im about to get in the loop");
    
    //var allHiddenColorDivs = document.getElementsByClassName("colorDiv invisible");
    
    
    //bringing back the hidden divs
    for (var indx = 0; indx < colorDivs.length; indx++)
    {
        colorDivs[indx].classList.remove("invisible");
        console.log("Im in the loop");
    }    
    
}

function divClicked(event)
{
    if(event)
    event.stopPropagation();
    
    
    if(this.style.backgroundColor===(colorValue.innerHTML.toLowerCase()))
    {
        winning();
    }
    else
    {
        this.classList.add("invisible");
    }
}

function endOfGame()
{
    
    if(event)
    event.stopPropagation();
    
    //removing event listeners from the divs   
    for (var index = 0; index < colorDivs.length; index++) {
    colorDivs[index].removeEventListener("click",divClicked);
    
    //removing event listeners from the buttons
    hardButton.removeEventListener("click", makeHard);
    easyButton.removeEventListener("click", makeEasy);
    leftToolButton.removeEventListener("click",newColors);
    
    //adding event listener to reset the game
    leftToolButton.addEventListener("click", resetGame);
}

}


//adding event listeners to the buttons
hardButton.addEventListener("click", makeHard);
easyButton.addEventListener("click", makeEasy);
leftToolButton.addEventListener("click",newColors);

//adding event listeners to the divs
for (var index = 0; index < colorDivs.length; index++) {
    colorDivs[index].addEventListener("click",divClicked);
}

//creating random colors for the first time
newColors();



// for (var j = 0; j < easyDivs.length; j++) {
//     easyDivs[j].addEventListener("click",function(){
        
//     },{});
//     hardDivs[j].style.backgroundColor = randomColor();
// }
