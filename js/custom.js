$(document).ready(function(){
	/*===== Owl Carousel =====*/
	$('.owl-carousel').owlCarousel({
		autoplay:true,
		autoplayTimeout:1500,
		autoplayHoverPause:true,
		nav:true,
		loop:true,
		margin:10,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
	$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
	$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
	
	
	/*===== Upper Button Scroll Start =====*/
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		
		if(x > 500){
			$('#upper').fadeIn(500);
		}else{
			$('#upper').fadeOut(500);
		}
	});
	
	$('#upper').click(function(){
		$('html').animate({'scrollTop': 0},1500);
	});
	

});

