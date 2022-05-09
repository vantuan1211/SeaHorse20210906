$(document).ready(function($) {
	jsMainVisual();
	jsNav();
	scrollFuncs();
	if($(".js-parafilter").get(0)){
		var ULS = new URLSearchParams(window.location.search);
		var parameter = ULS.get('course');
		$('.lineup-detail-group').each(function(){
			var parameterList = ["d","p","g","r","b","gk","k","all"];
			if(!parameterList.includes(parameter)){
				parameter = "r";
			}
			if(parameter === "all"){
				$(this).show();
			}else{
				var dataCourse = $(this).attr("data-course");
				if(dataCourse == "all"){
					$(this).show();
				}else{
					dataCourseList = dataCourse.split(",");
					if(dataCourseList.includes(parameter)){
						$(this).show();
					}
				}
			}
		});
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