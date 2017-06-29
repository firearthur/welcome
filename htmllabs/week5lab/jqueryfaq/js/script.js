$(document).ready(function(){
    $(".q").click(function(){
        // console.log($(this).find("li"));
        $(this).next("li").slideToggle(1000);
        $(this).children("img").toggleClass("rotate");
        // console.log($(this).next("img"));
    });
});

