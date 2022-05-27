$(document).ready(function($) {
	jsMainVisual();
	jsNav();
	scrollFuncs();
	/* scroll */
	$('.js-scroll:not(.no-scroll)').click(function(){
		var speed = 300;
		var href= $(this).attr("href");
		var target = $(href === "#" || href === "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "easeOutCubic");
		return false;
	});
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
	$('.box-slid__images').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 600,
		focusOnSelect: false,
		pauseOnHover: false,
		asNavFor: '.box-slid__title'
	});
	$('.box-slid__title').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.box-slid__images',
		infinite: false,
		dots: false,
		arrows: false,
		centerMode: true,
		speed: 300,
		focusOnSelect: false,
		pauseOnHover: false,
		variableWidth: true
	});
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

/* ------------------------------------------------------------
 * [ jQuery Easing v1.3 ] http://gsgd.co.uk/sandbox/jquery/easing/
 * ------------------------------------------------------------
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 * ------------------------------------------------------------ */
 jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if (t==0)return b;if (t==d)return b+c;if ((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if ((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d)==1)return b+c;if (!p)p=d*.3;if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d)==1)return b+c;if (!p)p=d*.3;if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d/2)==2)return b+c;if (!p)p=d*(.3*1.5);if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if (t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;if ((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if ((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if (t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if (t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if (t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});
