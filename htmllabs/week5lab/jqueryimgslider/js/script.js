$(document).ready(function(){
	//Set options
	var prev = $("#prev");
	var next = $("#next");
	var fadeSpeed = 1000;
	var sliderOption = true;
	var autoSliderSpeed = 1000;
	var currentSlide = $(".slide:first-child");
	var startSliderBtn = $(".btn.start");
	var stopSliderBtn = $(".btn.stop");

	//Add intial active class
	currentSlide.addClass("active");
	
	
	//Hide all slides
	$(".slide:gt(0)").addClass("inactive");

	//Show first slide


	//Add event handlers for next and prev
	
	next.click(switchToNextSlide);
	
	prev.click(switchToPrevSlide);
	
	var slideInterval;


	//Autoslider handler
	startSliderBtn.click(function(){
		slideInterval = setInterval(switchToNextSlide,2000);
	});
	
	stopSliderBtn.click(function(){
		clearInterval(slideInterval);
	});

	//Switch to next slide
	function switchToNextSlide(){
		
		
		if (!(currentSlide.next().hasClass("slide")))
		{
			currentSlide.fadeOut(fadeSpeed);
			currentSlide = $(".slide:first-child");
		
			currentSlide.fadeIn(fadeSpeed);
		}
		else
		{
			
			currentSlide.fadeOut(fadeSpeed);
			currentSlide = currentSlide.next("div");
			
			currentSlide.fadeIn(fadeSpeed);

		}
		
	}

	//Switch to previous slide

	function switchToPrevSlide()
	{
		
		if (!(currentSlide.prev().hasClass("slide")))
		{
			currentSlide.fadeOut(fadeSpeed);
			currentSlide = $(".slide:last-child");
		
			currentSlide.fadeIn(fadeSpeed);

		}
		else
		{

			currentSlide.fadeOut(fadeSpeed);
			currentSlide = currentSlide.prev("div");
			
			currentSlide.fadeIn(fadeSpeed);

		}
	}

});