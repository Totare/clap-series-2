// INSTRUCTION
// to add this slider on your page write the next line on your page
// <script src="{{path to}}/slider.js"></script>

// Code to insert in your html
// Duplicate the line with {{ img-url }} and remote {{ img-url }} by your owns link to add more elements on slide

/* 
<section id="slider">
	<figure class="slideshow">
		<div class="slide"><img src="{{ img-url }}"></div>
	</figure>
</section> 
*/

// You can modify value on variable

$(function(){
	// ==== Variables =====

	//image can we show in same time on slider
	$imgShow = 3;


	// ==== CSS ====
	$(".slideshow").css("display","flex");
	$(".slideshow").css("flex-wrap", "nowrap");

	$(".slideshow > .slide").css("display", "flex");
	$(".slideshow > .slide").css("justify-content", "center");
	$(".slideshow > .slide").css("width", 100/$imgShow+"%");

	$(".slideshow > .slide > img").css("height", "100%");

	$(".slideshow").css("flex-wrap", "nowrap");


	// ==== SLIDER FUNCTION ====
	$(".slideshow").width("100%");
    setInterval(function(){
        $(".slideshow").animate({marginLeft:'-'+100/$imgShow+'%'},800,function(){
            $(this).css({marginLeft:0}).find("div:last").after($(this).find("div:first"));
        })
    }, 3500);
});