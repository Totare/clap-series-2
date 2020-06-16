
  
$(function(){
	$n = $( ".slide" ).length;
	console.log($n);
	$(".slideshow").width($n*100 +"%");
    setInterval(function(){
        $(".slideshow").animate({marginLeft:'-100vw'},800,function(){
            $(this).css({marginLeft:0}).find("div:last").after($(this).find("div:first"));
        })
    }, 3500);
});
