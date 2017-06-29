// Array Todo List APP
/*
1. Declare an array
2. Prompt user on what they would like to do from the following options, 
   then assign response to a variable
	- "new" will prompt to enter a new todo item and will then push 
		user entry to the existing array
		Display the newly added todo item in the console to confirm that it has been added
	- "list" will print in console each todo item in the array with its 
		corresponding index 
		Example: 
		-> 0 : Get the milk
		-> 1 : Pick up dry cleaners
		-> 2 : Wash clothes
	- "delete" will prompt the user to enter the index of a todo item they wish to delete
	- "quit" will end the program

Use functions for adding todo, printing the list, and deleting todo
*/

var array = [];

do
{
    var selection = prompt('Please type a selection:\n"new"\n"list"\n"delete"\n"quit"');
    switch (selection) {
        case "new":
            // code
            addElement();
            break;
        case "list":
            // code
            showList();
            break;
        case "delete":
            // code
            removeElement();
            break;
        case "quit":
            // code
            alert("Bye");
            break;    
        
        default:
            // code
            alert("Invalid input");
    }
    
}while(selection !== "quit")

function addElement()
{
    var newElement = prompt("Input your new element: ");
    array.push(newElement);
    console.log(array);
}

function showList()
{
    for(var i = 0;i < array.length; i++)
    {
        console.log(i + " : " + array[i]);
        alert(array[i]);
    }
}

function removeElement()
{
    var removeElementIndex = prompt("Input the index of the item you would like to remove.");
    array.splice(removeElementIndex, 1);
}