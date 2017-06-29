/*

Rock, paper, scissors!

Write a rock paper scissors game. 

Part 1:
Take input from player 1 and player 2.

Write a function that takes two values, one for player 1 and the second for player 2. The function will 
return the winner.

Recall:
Scissors beats paper
Paper beats rock
Rock beats scissors

Examples:

rps('scissors', 'paper') // return 'Player 1 won!'
rps('scissors', 'rock') // return 'Player 2 won!'
rps('paper', 'paper') // return 'Draw!'


Part 2: Modify your program to have player 2 as the computer. Randomly generate their move.

*/
var p1Selection = 0;
var p1Move = "";

do {
    p1Selection = prompt("Enter a selection for Player 1:\n1 for sissors\n2 for paper\n3 for rock");
    p1Selection = Number(p1Selection);
    
    switch (p1Selection) {
        case 1:
            p1Move = "sissors";
            break;
            
        case 2:
            p1Move = "paper";
            break;
        
        case 3:
            p1Move = "rock";
            break;
        default:
        alert("Invalid input");
            break;
    }
    
} while (p1Selection !== 1 && p1Selection !== 2 && p1Selection !== 3 && p1Selection !== 4 );



var p2Selection = 0;
var p2Move = "";

    p2Selection = Math.ceil(Math.random()*3) ;
    switch (p2Selection) {
        case 1:
            p2Move = "sissors";
            break;
                
        case 2:
            p2Move = "paper";
                break;
            
            case 3:
                p2Move = "rock";
                break;
            default:
            alert("Invalid input");
                break;
        }
    
var p1 = new Object();
p1.move = p1Move;
p1.name = "Player 1";

var p2 = new Object();
p2.move = p2Move;
p2.name = "Computer";

var draw = new Object();
draw.name = "Draw";

function rps(player1, player2){
    
    var winner;
    if((player1.move === "sissors" && player2.move ==="paper") || (player1.move === "paper" && player2.move ==="rock") || (player1.move === "rock" && player2.move ==="sissors"))
    {
        winner = player1;
    }
    else if((player1.move === "sissors" && player2.move === "rock")||(player1.move === "paper" && player2.move === "sissors")||(player1.move === "rock" && player2.move === "paper"))
    {
        winner = player2;   
    }
    else
    {
        winner = draw;
    }
    
    return winner;
}

alert("You picked " + p1.move);
alert("Computer picked " + p2.move);
alert(rps(p1,p2).name);