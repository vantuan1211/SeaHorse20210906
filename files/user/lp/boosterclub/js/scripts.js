$(document).ready(function($) {
	jsMainVisual();
	jsNav();
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
	
}