$(document).ready(function($) {
	jsMainVisual();
	jsNav();
	if($(".js-parafilter").get(0)){
		var ULS = new URLSearchParams(window.location.search);
		var parameter = ULS.get('course');
		var notAllows = ["d","p","g","r","b","gk","k","all"];
		if (notAllows.indexOf($(this).val()) < 0) {
			$('#regular').show();
		}else{
			if(parameter == "d"){
				$('#diamond').show();
			}
			if(parameter == "p"){
				$('#platinum').show();
			}
			if(parameter == "g"){
				$('#gold').show();
			}
			if(parameter == "r"){
				$('#regular').show();
			}
			if(parameter == "b"){
				$('#beginner').show();
			}
			if(parameter == "gk"){
				$('#goldkids').show();
			}
			if(parameter == "k"){
				$('#kids').show();
			}
			if(parameter == "all"){
				$('#diamond').show();
				$('#platinum').show();
				$('#gold').show();
				$('#regular').show();
				$('#beginner').show();
				$('#goldkids').show();
				$('#kids').show();
			}
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
	
}