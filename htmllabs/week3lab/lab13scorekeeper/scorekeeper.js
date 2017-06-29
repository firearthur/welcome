/*
Score Keeping App

Recreate the html in the image screenshot and add your script
1. The Default score limit is 5
	The limit can be changed by the input field
2. Everytime player 1 or player 2 button is pressed score
	increments by 1 for player 1 or player 2.
3. When the score limit is reached the game is over
	Change the color to green for the winning player
4. Reset will set scores back to 0 for both players
	and will set the score limit back to the default

Use: event listeners, if/else statements, functions
*/

var p1score = document.getElementById("p1score");
var p2score = document.getElementById("p2score");
var scoreLimit = document.getElementById("scoreLimit");

//setting the default game limit to 5
scoreLimit.innerHTML = 5;

var scoreLimitInput = document.getElementById("scoreLimitInput");
var p1button = document.getElementById("p1button");
var p2button = document.getElementById("p2button");
var resetButton = document.getElementById("resetButton");

var currentScoreLimit = Number(scoreLimit.innerHTML);
var p1Incrementor = 0;
var p2Incrementor = 0;



function checkIfWin(incrementedScore)
{
	var win = false;
	if(incrementedScore === currentScoreLimit)
	win = true;
	
	return win;
}


// score limit input listner

scoreLimitInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13)
    { 
    	
    	
    	if(Number(scoreLimitInput.value))
    	{
			scoreLimit.innerHTML= Number(scoreLimitInput.value);
    		currentScoreLimit = Number(scoreLimitInput.value);    		
    	}

    	
	//test to remove
	alert("Score limit html " + scoreLimit.innerHTML);
	alert("Score limit value" + scoreLimitInput.value);
	
	console.log("This is a test");
    	
    }
	
});

// player 1 button listner

p1button.addEventListener("click",function(){
	p1Incrementor++;
	p1score.innerHTML = p1Incrementor;
	
	//test to remove
	console.log("Value in p1 html " + p1score.innerHTML);
	console.log("Value in p1 incrementor " + p1score.innerHTML);
	
	//test to remove
		console.log("Check if win is " + checkIfWin(p1Incrementor));
	if(checkIfWin(p1Incrementor))
	{
		p1score.className = "winner";
	};
	
});

// player 2 button listner

p2button.addEventListener("click",function(){
	p2Incrementor++;
	p2score.innerHTML = p2Incrementor;
	
	//test to remove
	console.log("Value in p2 html " + p2score.innerHTML);
	console.log("Value in p2 incrementor " + p2score.innerHTML);
	
	if(checkIfWin(p2Incrementor))
	{
		p2score.className = "winner";
	};
	
});

// reset button listner

resetButton.addEventListener("click", function() {
  
  //resetting the limits 
  scoreLimit.innerHTML = currentScoreLimit = 5;
  
  //resetting p1 values		
  p1score.innerHTML = p1Incrementor = 0;
  
  //resetting p2 values
  p2score.innerHTML = p2Incrementor = 0;
  
  //resetting the winner class green color
  p1score.className = p2score.className = "";
    
});

