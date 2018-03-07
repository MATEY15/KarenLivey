$(document).ready(function() {

	$('.yourelements').equalHeights();
	$(window).resize(function(){
		$('.yourelements').height('auto');
		$('.yourelements').equalHeights();
	});
	$('.about-wrapper .col-md-6').equalHeights();
	$(window).resize(function(){
		$('.about-wrapper .col-md-6').height('auto');
		$('.about-wrapper .col-md-6').equalHeights();
	});
	/* Main Menu */

	$('.mobile-menu__open').click(function(){
		if ($('.header-nav').css('display') == 'none') { 
			$('.header-nav').animate({height: 'show'}, 300);
		} 
		else {     
			$('.header-nav').animate({height: 'hide'}, 300); 
		}
	});
	$('.menu-item-has-children').prepend('<span class="open-sub"></span>');

	if(matchMedia){
		var screen = window.matchMedia("(max-width:767px)");
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen){
		if(screen.matches){
			$('.header-nav').addClass('mobileMenu');
			$('ul.sub-menu').removeClass('sub-menu');
		}
		else{
			$('.header-nav').removeClass('mobileMenu');

			if ($('.menu-item-has-children ul').hasClass('sub-menu') == false) {
				$('.menu-item-has-children ul').addClass('sub-menu');
			}
		}
	}
	$('.header-nav li.active').addClass('open').children('ul').show();
	$('.header-nav li.menu-item-has-children>span').on('click', function(){
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

	/* Main Menu End */

	/* Popup Window */

	// $(".popup").magnificPopup({
	// 	removalDelay: 150,
	// 	mainClass: 'mfp-fade'
	// });

	/* Popup Window End */

	// $('.log-in__name').click(function(e){
	// 	e.preventDefault();
	// 	$('.log-in__info').toggleClass('active');
	// });

	// $(document).mouseup(function (e) {
	// 	var container = $(".log-in");
	// 	if (container.has(e.target).length === 0){
	// 		$('.log-in__info').removeClass('active');
	// 	}
	// });

	// $('.slide-section').owlCarousel({
	// 	loop: false,
	// 	singleItem:true,
	// 	nav:true,
	// 	margin: 1,
	// 	autoplayTimeout: 1500,
	// 	navText : ['',''],
	// 	autoplayHoverPause:true,
	// 	smartSpeed: 300,
	// 	items:1,
	// 	responsive:{
	// 		0:{
	// 			items:1
	// 		},
	// 		600:{
	// 			items:1
	// 		},
	// 		640:{
	// 			items:1
	// 		},
	// 		900:{
	// 			items:1
	// 		},
	// 		1000:{
	// 			items:1
	// 		}
	// 	}
	// });

});