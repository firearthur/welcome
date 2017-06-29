/*
This script finds the repositories of the github username entered. 

1. Attach a "click" event handler for the button.
2. Grab the username from the text input
3. With the username, create the github API url and store it in a variable named APIUrl
	- The completed url will look like this: https://api.github.com/users/myusername/repos
4. Use the AJAX function to call the API. 
	- Be sure to use the loader gif provided while loading the results from the API call. You can find the loader in the index.html 
	- Make sure your code handles the error when no data is returned by the API
5. Loop through the data and append the data to the div with the id of results.
6. Use the empty function to clear previous data from the results div. This should clear the results each time
the button's event is fired.
*/

/* global $ */

$(document).ready(function(){
    var username;
    $("#search").click(function(){
        $("#results").empty();
        username = $("#username").val();
        var APIUrl = "https://api.github.com/users/"+ username + "/repos";
        
        
        
        // $.ajaxStart(function () {
        //     $('#loader').show();  // show loading indicator
        //     console.log("it worked");
        // });
        
        // $.ajaxStop(function() 
        // {
        //     console.log("its done");
        //     $('#loader').hide();  // hide loading indicator
        // });        
        
        // $('#loader').bind('ajaxStart', function(){
        //     $(this).show();
        // }).bind('ajaxStop', function(){
        //     $(this).hide();
        // });

        
        // var promise = $.ajax(
        // {
        //     url:APIUrl,
        //     // type:"GET",
        //     beforeSend: function()
        //     { 
        //         $('#loader').show();
        //         console.log("It worked");
        //     }
            
        // });
        
        var promise = $.ajax(APIUrl,
        {
            
            beforeSend: function()
            { 
                $('#loader').show();
                console.log("It worked");
            }
            
        });

        
        promise.done(function(repos){
  
            for (var i = 0; i < repos.length; i++) {
                $("#results").append('<li>'+repos[i].name+ '</li>');
            }
            
            $('#loader').hide();
        });
        
        promise.fail(function(jqXHR,textStatus,err){
            alert("It failed "+ textStatus);
            $('#loader').hide();
        });
        

        $("#username").val("");
    });
    
    
	
});