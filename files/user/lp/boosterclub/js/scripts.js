$(document).ready(function($) {
	jsMainVisual();
	jsNav();
	scrollFuncs();
	if($(".js-parafilter").get(0)){
		var ULS = new URLSearchParams(window.location.search);
		var parameter = ULS.get('course');
		if(parameter == "d"){
			$('#diamond').show();
		}
		else if(parameter == "p"){
			$('#platinum').show();
		}
		else if(parameter == "g"){
			$('#gold').show();
		}
		else if(parameter == "r"){
			$('#regular').show();
		}
		else if(parameter == "b"){
			$('#beginner').show();
		}
		else if(parameter == "gk"){
			$('#goldkids').show();
		}
		else if(parameter == "k"){
			$('#kids').show();
		}
		else if(parameter == "all"){
			$('#diamond').show();
			$('#platinum').show();
			$('#gold').show();
			$('#regular').show();
			$('#beginner').show();
			$('#goldkids').show();
			$('#kids').show();
		}else{
			$('#regular').show();
		}
	}
	
});//End -> ready method

// mainvisual
function jsMainVisual(){
	var hHeader = $('.header').outerHeight();
	var hSlogan = $('.box-mv__slogan').outerHeight();
	var imgMV = $('.box-mv__main__img img');
	imgMV.css({
		'height' : 'calc(100vh - ' + hHeader + 'px' + ' - ' + hSlogan + 'px)'
	});
}

// Navigation
function jsNav(){
	var btnOpen = $('.header-trigger');
	var btnClose = $('.nav__close');
	var overlay = $('.nav__overlay');
	var content = $('.nav__content');
	var nav = $('.nav');
	
	nav.hide();
	btnOpen.on('click', function() {
		nav.show(200);
		nav.addClass('is-open');
		
	});
	btnClose.on('click', function() {
		nav.removeClass('is-open');
		setTimeout(function(){
			nav.hide();
		}, 400);
	});

	$('.nav__overlay').on('click', function() {
		btnClose.trigger( "click" );
	});
}

// Animation
function scrollFuncs(){
	$(window).bind('scroll', function () {
		var scrollY = $(window).scrollTop();
		var windowHeight = screen.availHeight;
		
		var slideImage = $('.js-animation');
		slideImage.each(function () {
			var slideImageY = $(this).offset().top;

			if (scrollY > slideImageY - windowHeight * 0.6) {
				$(this).addClass('is-animated');
			}
		});
	});
}