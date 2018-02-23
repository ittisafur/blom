(function(){
	$('.portfolio-carousel').owlCarousel({
		items:3,
	    loop:true,
	    dots:false,
	    nav:true,
	    margin:5,
	    autoplay:true,
	    autoplayTimeout:2000,
	    navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
	});    

	// $('#my-menu').mmenu();

	$("#my-menu").mmenu({
       "extensions": [
          "pagedim-black"
       ],
       "offCanvas": {
          "position": "right"
       }
    });

    
    // $(".menu-edits").find("a").css({
    // 	"float": "right",
    // 	"margin-top": "10px",
    // 	"font-size": "35px"
    // });

	 
})();

