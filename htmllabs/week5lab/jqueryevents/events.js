$(document).ready(function() {
	$('button').click(function(){
	    $(this).css("background-color", "pink");
	    alert($(this).text());
	});	
	
	// $('input').keypress(function(){
		
	// 	console.log("A key just got pressed");
	// });
	
	$('h1').on('click',function(){
		
	    $(this).css("background-color", "purple");
	   		
	});
	
	$("input").on("keypress", function(event){
		
		console.log("A key just got pressed and it is");
		console.log(event.which);
		
	});
    
});