$(document).ready(function(){
    

    //functions
    function markCompleted(element)
    {

        element.toggleClass("completed");
    };
    
    function removeItem(element)
    {
        element.fadeOut(1000);    
    }
    
    function addItem(string)
    {
        
        var addedElement = $('<li><span><i class="fa fa-trash"></i></span>' + string + '</li>');
        $("ul").append(addedElement);
        
        addedElement.click(function(){
            markCompleted(addedElement);
        });
        
        addedElement.find("i").click(function(){
            removeItem(addedElement);
        });
    }
    
    function hideShowInput()
    {
        $("input").fadeToggle(1000);
    }
    
    
    
    //main
    
    $("li").click(function(){
        var clickedItem = $(this);
        
        markCompleted(clickedItem);
    });
    
    $("span").click(function(){
        var clickedTrash = $(this);
        var itemToRemove = clickedTrash.parent("li");
        removeItem(itemToRemove);
    });
    
    $("input").on("keypress",function(event){
        if (event.which===13)
        {
            
            addItem($("input").val());
            $("input").val("");
        }
        
    });
    
    $(".fa-plus").click(function() {
        hideShowInput();
        
    });
    
});