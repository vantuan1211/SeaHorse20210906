$j341(document).ready(function($) {
	var boxAbout = {
		$target : $('.js-detail-open'),
		$button : $('.js-detail-button'),
		$modal :  null,
		$parent: null,
		url :  null,
		currentUrl :  null,
		option : {
			expandingAnimationTiming : 500,  // animation timing in millisecs
			collapsingAnimationTiming : 500,  // animation timing in millisecs
			animationEffect : "easeOutQuint",  //animation easing
			collapseAnimationEffect : "easeOutQuint"  //animation easing
		}
	};
	var pjax;

	boxAbout.addLoading = function(){
		if(boxAbout.$parent.find('.box-loading').length == 0){
			boxAbout.$parent.append('<div class="box-loading"><div class="pjax-content"></div><div class="box-line-df"></div><div class="box-line-lgx"></div><div class="box-line-lg"></div></div>');
			new SimpleBar($('.pjax-content')[0]);
			boxAbout.$modal = boxAbout.$parent.find('.box-loading');
			boxAbout.currentUrl = window.location.href;
			boxAbout.$modal.fadeIn(300, function(){
				boxAbout.expandElement(boxAbout.$modal);
			});
		}
	}


	boxAbout.expandElement  = function(elementToExpand) {
		var option = boxAbout.option;
		var elementScrollTop = $(window).scrollTop();
		// Adds class 'open' to help with styling
		elementToExpand.addClass("open");
		// Prevents 'body' scroll
		$("html").addClass("lock");
		$('body').data('ycoord', elementScrollTop);
		elementScrollTop = elementScrollTop * -1;
		$('body').css('position', 'fixed').css('left', '0px').css('right', '0px').css('top', elementScrollTop + 'px');
		// freeze the current scroll position of the background page expand-wrapper
		var expandTop = 0;
		var expandLeft = 0;
		var expandWidth = $("body").outerWidth();
		var expandHeight = $("body").outerHeight();

		// convert the expand-item to fixed position without moving it
		elementToExpand.css({
			top: elementToExpand.offset().top,
			left: elementToExpand.offset().left,
			height: elementToExpand.height(),
			width: elementToExpand.width(),
			"max-width": $("body").width(),
			position: "fixed"
		});

		//start expand-item animation to the expand wrapper
		elementToExpand.animate(
			{
				left: expandLeft,
				top: expandTop,
				height: expandHeight,
				width: expandWidth,
				"max-width": expandWidth
			},
			option.expandingAnimationTiming,
			option.animationEffect,
			function() {
				elementToExpand.addClass("loaded");
				elementToExpand.css({
					right: 0,
					bottom: 0,
					width: "auto",
					height: "auto",
					"max-width": "100%"
				});
				if(boxAbout.url != ''){
					pjax.loadUrl(boxAbout.url);
				}
			}
		);
	}

	boxAbout.collapseElement = function(elementToCollapse) {
		var option = boxAbout.option;
		var elementScrollTop = $(window).scrollTop();

		// find the parent element to collapse
		var elementToCollapseParent = boxAbout.$parent;

		// find the location of the placeholder
		var elementToCollapsePlaceholder = elementToCollapseParent;
		var elementToCollapsePlaceholderTop = elementToCollapsePlaceholder.offset().top - elementScrollTop;
		var elementToCollapsePlaceholderLeft = elementToCollapsePlaceholder.offset().left;
		var elementToCollapsePlaceholderHeight = elementToCollapsePlaceholder.outerHeight();
		var elementToCollapsePlaceholderWidth = elementToCollapsePlaceholder.outerWidth();

		elementToCollapse.animate(
			{
				left: elementToCollapsePlaceholderLeft,
				top: elementToCollapsePlaceholderTop,
				height: elementToCollapsePlaceholderHeight,
				width: elementToCollapsePlaceholderWidth,
				opacity: 0
			},
			option.collapsingAnimationTiming, // animation timing in millisecs
			option.collapseAnimationEffect, //animation easing
			function() {
				// Removes class 'open'
				elementToCollapseParent.removeClass("open");
				elementToCollapse.css({
					position: "absolute",
					top: "auto",
					left: "auto",
					width: "100%",
					height: "100%",
					opacity: 0,
					"max-width": "100%"
				});
				var pjax = new Pjax({
					elements: ".pjax",
					scrollTo: false,
					selectors: ["title", "meta"],
					cacheBust: false
				});
				if(boxAbout.currentUrl != ''){
					pjax.loadUrl(boxAbout.currentUrl);
				}
				boxAbout.$modal.remove();
				boxAbout.$modal = null;
				$('body').css('position', '').css('left', 'auto').css('right', 'auto').css('top', 'auto');
				$(window).scrollTop($('body').data('ycoord'));
				$("html").removeClass("lock");
			}
		);
	}

	boxAbout.touchClose = function(){
		if(isSafari && !isChrome){
			function getTouchPosition(e) {
				return e.originalEvent.touches[0].pageY;
			}
			$(document).on('touchstart', '.box-loading', function(e) {
				e.stopPropagation();
				touchLen = 0;
				touchPosition = getTouchPosition(e);
				touchStart = $(this).find('.simplebar-content-wrapper').scrollTop();
			})
			.on('touchmove', '.box-loading', function(e) {
				e.stopPropagation();
				touchDirection = (touchPosition > getTouchPosition(e)) ? -1 : 1;
				touchLen = Math.abs(getTouchPosition(e) - touchPosition);
			})
			.on('touchend', '.box-loading', function(e) {
				e.stopPropagation();
				if(typeof touchLen != 'undefined' && typeof touchDirection != 'undefined')
				if(touchLen > 20 && touchStart < 10 && touchDirection == 1){
					boxAbout.collapseElement(boxAbout.$modal);
				}
			});
		}
	}

	boxAbout.addEvent= function(){
		this.$target.click(function(e){
			var $this = $(this);
			boxAbout.url = $this.data('detail');
			boxAbout.$parent = $this;
			boxAbout.addLoading();
		});
		this.$button.click(function(e){
			var $this = $(this).closest('.js-detail-open');
			boxAbout.url = $this.data('detail');
			boxAbout.$parent = $this;
			boxAbout.addLoading();
			return false;
		});
		$(this.$target.find('a, input, button')).click(function(e){
			e.stopPropagation();
		});

		boxAbout.touchClose();

		this.$target.on('click', '.js-detail-close, .header', function(e){
			e.preventDefault();
			boxAbout.collapseElement(boxAbout.$modal);
			return false;
		});

		this.$target.on('click', '.js-detail-close a, .header a', function(e){
			e.stopPropagation();
		});

		//ESC key event
		$(document).keyup(function(e) {
			if (e.which == 27 && boxAbout.$modal != null) boxAbout.collapseElement(boxAbout.$modal);
		});

		document.addEventListener("pjax:success", function(){
			if(boxAbout.$modal != null){
				boxAbout.$modal.find(".pjax-content").show().css({
					opacity: 0,
					visibility: 'hidden'
				});
				setTimeout(function(){
					commonScript();
					detailScript();
					boxAbout.$modal.find(".pjax-content").animate({
						opacity: 1,
						visibility: 'visible'
					}, 1000);
					boxAbout.$modal.find('.pjax-content').height($(window).height());
				}, 100);
			}
			$('.pjax-content .header').css('cursor', 'pointer');
		});


		var timerResize = false;
		$(window).resize(function(){
			if(timerResize) clearTimeout(timerResize);
			timerResize = setTimeout(function(){
				if(boxAbout.$modal != null){
					boxAbout.$modal.find('.pjax-content').height($(window).height());
				}
			}, 200);
		});
	}

	boxAbout.noSupported = function(){
		this.$target.click(function(){
			var $this = $(this);
			boxAbout.url = $this.data('detail');
			window.location.href = boxAbout.url;
		});
		this.$button.click(function(e){
			var $this = $(this).closest('.js-detail-open');
			boxAbout.url = $this.data('detail');
			window.location.href = boxAbout.url;
		});
		$(this.$target.find('a, input, button')).click(function(e){
			e.stopPropagation();
		});
	}

	boxAbout.init = function(){
		if(typeof Pjax != 'undefined' && Pjax.isSupported()){
			this.addEvent();
			pjax = new Pjax({
				elements: ".pjax",
				scrollTo: false,
				selectors: ["title", "meta", ".pjax-content"],
				cacheBust: false
			});
		} else{
			boxAbout.noSupported();
		}
	}
	boxAbout.init();


	//detail
	var detailScript = function(){
		$('.detail-nav__item').each(function(){
			$(this).on('click',function(){
				$(this).toggleClass('is-active');
				$(this).parent('li').siblings().find('.detail-nav__item').removeClass('is-active');
			});
		});

		setTimeout(function(){
			$('.js-matchheight01').matchHeight();
			$('.js-matchheight02').matchHeight();
		}, 200);

		// js accordion
		if ($('.js-accordion').get(0)) {
			$('.js-accordion').each(function () {
				var $el = $(this),
					$elTrigger = $el.find('.js-accordion__trigger'),
					$elContent = $el.find('.js-accordion__content'),
					$TxtTrigger = $elTrigger.find('.js-change-txt').text();
				$elContent.hide();
				$elTrigger.click(function () {
					$el.toggleClass('open');
					if ($el.hasClass('open')) {
						$elContent.slideDown();
						$elTrigger.find('.js-change-txt').text('閉じる');
					} else {
						$elContent.slideUp();
						if ($TxtTrigger != '価格表' || $TxtTrigger != '') {
							$elTrigger.find('.js-change-txt').text('価格表');
						}
					}
				});
			});
		}

		// js-tab
		if($('.js-tab').get(0)){
			if($(window).width() < 768){
				$('.js-tab__link').click( function() {
					var tabID = $(this).find('a').attr('href');
					$(this).find('a').click(function(e){
						e.preventDefault();
					})
					$(this).addClass('is-active').siblings().removeClass('is-active');
					$('#tab-'+tabID).addClass('is-active').siblings().removeClass('is-active');
					return false;
				});
			}
		}

		// detail-box__slide
		if($('.detail-box__slide--01').get(0)){
			$('.detail-box__slide--01').on('init reinit', function(event, slick, currentSlide, nextSlide){
				setTimeout(function(){
					$('.js-matchheight01').matchHeight();
					$('.js-matchheight02').matchHeight();
				}, 50);
			});
			$('.detail-box__slide--01').slick({
				infinite: true,
				slidesToShow: 3,
				dots: true,
				prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
				responsive: [
					{
						breakpoint: 768,
						settings: {
							infinite: true,
							slidesToShow: 1,
							dots: true,
							centerMode: true,
							centerPadding: '35px',
						}
					}
				]
			});
		}
		if($('.detail-box__slide--02').get(0)){
			$('.detail-box__slide--01').on('init reinit', function(event, slick, currentSlide, nextSlide){
				setTimeout(function(){
					$('.js-matchheight01').matchHeight();
					$('.js-matchheight02').matchHeight();
				}, 50);
			});
			$('.detail-box__slide--02').slick({
				infinite: true,
				slidesToShow: 4,
				dots: true,
				prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
				responsive: [
					{
						breakpoint: 768,
						settings: {
							infinite: true,
							slidesToShow: 2,
							dots: true,
							centerMode: true,
							centerPadding: '25px',
						}
					}
				]
			});
		}
		var timerResize = false;
		$(window).resize(function() {
			if (timerResize !== false) {
				clearTimeout(timerResize);
			}
			timer = setTimeout(function() {
				$('.js-matchheight01').matchHeight();
				$('.js-matchheight02').matchHeight();
			}, 150);
		});
	};
	detailScript();
});//End -> ready method