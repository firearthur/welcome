/* 
 * Complete the functions below to create a functioning tic tac toe game. 
 * Then include the script in the html file and play.
 */


$(function () {

    var squares = [], 
        SIZE = 3,
        EMPTY = "&nbsp;",
        score,
        moves,
        turn = "X";

    /*
     * To determine a win condition, each square is "tagged" from left
     * to right, top to bottom, with successive powers of 2.  Each cell
     * thus represents an individual bit in a 9-bit string, and a
     * player's squares at any given time can be represented as a
     * unique 9-bit value. A winner can thus be easily determined by
     * checking whether the player's current 9 bits have covered any
     * of the eight "three-in-a-row" combinations.
     *
     *     273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     *
     */

    var wins = [84 ,7 ,56 ,448 ,273 ,73,146, 292]; 

    /*
     * Clears the score and move count, erases the board, and makes it
     * X's turn.
     */
    var startNewGame = function () {
        
        //reseting the scores
        score = {X: 0,O:0};
        
        //earse board
        var cells = $(".cell");
        for (var i = 0; i < cells.length; i++) {
            cells[i].html("");
        }
        
        //setting the turn to X
        turn = "X";
    };

    /*
     * Returns whether the given score is a winning score.
     */
    var win = function (score) {
        var winning = false;
        
        // var cells = $(".cell");
        // var xCells = cells.filter(function(currentElement){return currentElement.html()==="X"});
        // var oCells = cells.filter(function(currentElement){return currentElement.html()==="O"});
        for (var i = 0; i < wins.length; i++) {
            if(wins[i]===score)
            winning = true;
        }
        
        return winning;
    };

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cats game.  Also changes the
     * current player.
     */
    var set = function () {
        
    };

    /*
     * Creates and attaches the DOM elements for the board as an
     * HTML table, assigns the indicators for each cell, and starts
     * a new game.
     */
    var play = function ()
    {
        //drawing the board
        $("#tictactoe").append(' <table ><tr border="1"><td id="cell1" value="1" class="cell"></td><td id="cell2" value="2" class="cell"></td><td id="cell3" value="4" class="cell"></td></tr><tr border="1"><td id="cell4" value="8" class="cell"></td><td id="cell5" value="16" class="cell"></td><td id="cell6" value="32" class="cell"></td></tr><tr border="1"><td id="cell7" value="64" class="cell"></td><td id="cell8" value="128" class="cell"></td><td id="cell9" value="256" class="cell"></td></tr></table>');
        
        var clickedCell;
        
        $(".cell").click(function(event)
        {
            event.stopPropagation();
            
            clickedCell = $(this);    
        });
        
        
    };

    play();
});

