/* -----------------------------------------------
Table of Contents (common js)
--------------------------------------------------
1. userAgent判別
2. URL判別
3. 設定
4. JSファイル読み込み時即実行(Execute JavaScript when the page loaded.)
5. DOM構築後実行(Execute JavaScript when the DOM is fully loaded.)
6. 画像など含めてページ読込み完了後に実行(Execute JavaScript when the Window Object is fully loaded.)
7. 動的コンテンツに対してイベントを設定
8. その他のイベントを設定
9. 関数(プラグイン)複数

// require jQuery JavaScript Library v3.4.1
*/

/* ============================================================
 * defineFoundationVariable
 * ============================================================ */

/* ------------------------------------------------------------
 * [ userAgent ] http://www.useragentstring.com/pages/useragentstring.php
 * ------------------------------------------------------------ */
var ua                   = window.navigator.userAgent;
var appVer               = window.navigator.appVersion;

//PC
var isIE                 = ua.indexOf('MSIE') != -1 || ua.indexOf('Trident') != -1;
var isIE6                = isIE && appVer.indexOf('MSIE 6') != -1;
var isIE7                = isIE && appVer.indexOf('MSIE 7.') != -1;
var isIE8                = isIE && ua.indexOf('Trident/4.') != -1;
var isIE9                = isIE && ua.indexOf('Trident/5.') != -1;
var isIE10               = isIE && ua.indexOf('Trident/6.') != -1;
var isIE11               = ua.indexOf('Trident/7.') != -1;

var isFirefox            = ua.indexOf('Firefox') != -1;
var isChrome             = ua.indexOf('Chrome') != -1;
var isSafari             = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                           navigator.userAgent &&
                           navigator.userAgent.indexOf('CriOS') == -1 &&
                           navigator.userAgent.indexOf('FxiOS') == -1;

//Mobile (smartphone + tablet)
var isMobileSafari       = ua.match(/iPhone|iPad|iPod/i) ? true : false;
var isMobileSafariTypeT  = ua.match(/ipad/i) ? true : false;
var isMobileSafariTypeS  = ua.match(/iphone|ipod/i) ? true : false;
var isAndroid            = ua.indexOf('Android') != -1;
var isMobileAndroidTypeT = isAndroid && ua.indexOf('Mobile') == -1;
var isMobileAndroidTypeS = isAndroid && ua.indexOf('Mobile') != -1;
var isAndroidChrome      = isChrome && isAndroid;
var isAndroidFirefox     = isFirefox && isAndroid;
var isMobileFirefox      = isFirefox && ua.indexOf('Mobile') != -1;
var isTabletFirefox      = isFirefox && ua.indexOf('Tablet') != -1;

//PC or Mobile
var isTablet             = isMobileSafariTypeT || isMobileAndroidTypeT || isTabletFirefox;
var isSmartPhone         = isMobileSafariTypeS || isMobileAndroidTypeS || isMobileFirefox;
var isMobile             = isTablet || isSmartPhone || isAndroidChrome || isAndroidFirefox;
var isPC                 = !isMobile;



/* ------------------------------------------------------------
 * [ Location ]
 * ------------------------------------------------------------ */
var  locationHref     = window.location.href,     // http://www.google.com:80/search?q=demo#test
	 locationProtocol = window.location.protocol, // http:
	 locationHostname = window.location.hostname, // www.google.com
	 locationHost     = window.location.host,     // www.google.com:80
	 locationPort     = window.location.port,     // 80
	 locationPath     = window.location.pathname, // /search
	 locationSearch   = window.location.search,   // ?q=demo
	 locationHash     = window.location.hash;     // #test

/* ------------------------------------------------------------
 * [ motionConfig ]
 * ------------------------------------------------------------ */
var animateInterval = 500;
var commonScript;
$j341 = jQuery.noConflict();
/* ============================================================
 * Execute JavaScript when the DOM is fully loaded.
 * ============================================================ */
$j341(document).ready(function($) {
	commonScript = function(){
		$j341('.js-pagetop').click(function(){$j341('html, body').animate({scrollTop: 0}, 800);return false;});
		$j341('.pjax-content .js-pagetop').click(function(){$j341('.simplebar-content-wrapper').animate({scrollTop: 0}, 800);return false;});

		setHeightDetailBox();
		$j341('.js_fullbg').jsFullBackground();

		//表示したページをURL別にシェアする
		$j341('.js_sns').shareSNS();

		//View on map appを押した際にマップアプリの起動
		$j341('.js_map-link').onOpenMapAPP();

		$j341('.js_sticky_top').stickyTop();

		$j341('.js_sticky_bottom').stickyBottom();
	}
	commonScript();

	initScheduleSlide();
	initScheduleSticky();
	backToURL();
	cloneItem();
	addGA_ID();
});//End -> ready method

// ブロックごとにJSでIDを付与する
function addGA_ID(){
	$j341('.box-about').each(function(){
		var $el = $j341(this);
		if($el.find('.box-about__description__date').length){
			$el.attr('id', $j341.trim($el.find('.box-about__description__date').first().text().replace(/\s/g, '').replace(/~/g, '-')));
		}
	});
}

function cloneItem(){
	if($j341('.js-clone').get(0)){
		$j341('.js-clone-item').each(function(){
			var $el = $j341(this),
				$elParent = $j341(this).closest('.js-clone'),
				dataIndex = $j341(this).parent().data('clone-index');
				$elClone = $el.clone(true,true);
			if(viewport().width > 767){
				$elParent.find('[data-clone-index="' + dataIndex + '"][data-clone-mode="PC"]').append($elClone);
				$el.remove();
			} else{
				$elParent.find('[data-clone-index="' + dataIndex + '"][data-clone-mode="SP"]').append($elClone);
				$el.remove();
			}
		});
	}
}
function setHeightDetailBox(){
	if(viewport().width > 767){
		var _maxHeight = 0;
		$j341('.js-equalHeight').removeAttr('style');
		$j341('.js-equalHeight').each(function(){
			if(_maxHeight < $j341(this).height()){
				_maxHeight = $j341(this).height();
			}
		});
		if(_maxHeight > 0 && _maxHeight > 350){
			$j341('.js-equalHeight').height(_maxHeight);
		}else{
			$j341('.js-equalHeight').height(350);
		}
	}else{
		$j341('.js-equalHeight').removeAttr('style');
	}
}
function backToURL(){
	if($j341('.pjax-content').get(0)){
		var _url = $j341('.pjax-content').attr('data-URL');
		$j341('.js-detail-close, .header').click(function(e){
			if($j341('.box-loading').get(0)){
				return;
			}else{
				window.location.href = _url;
			}
		});
		$j341('.js-detail-close a, .header a').click(function(e){
			e.stopPropagation();
		});
		$j341('.pjax-content .header').css('cursor', 'pointer');
	}
}
function initScheduleSlide(){
	if($j341('.js-schedule-slide').get(0)){
		var currentMonth = $j341('.box-main-visual__head .box-main-visual__schedule__list .is-active .box-main-visual__schedule__number').text();
		$j341('.box-main-visual__tittle .box-main-visual__tittle__number').text(currentMonth);
		if(viewport().width > 767){
			if($j341('.js-schedule-slide').hasClass('slick-initialized')){
				$j341('.js-schedule-slide').slick('unslick');
				$j341('.box-main-visual__schedule .box-main-visual__schedule__group').removeAttr('style');
			}
		}else{
			if(!$j341('.js-schedule-slide').hasClass('slick-initialized')){
				$j341('.js-schedule-slide').slick({
					infinite: false,
					slidesToShow: 1,
					variableWidth: true,
					prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-caret-left"></i></button>',
					nextArrow: '<button type="button" class="slick-next"><i class="fas fa-caret-right"></i></button>'
				});
				var dataCurrent = $j341('.box-main-visual__head .box-main-visual__schedule__list .is-active').closest('.box-main-visual__schedule__group').attr('data-slick-index');
				$j341('.js-schedule-slide').slick('slickGoTo', parseInt(dataCurrent), true);
			}
			if(!$j341('.box-main-visual__schedule').hasClass('is-sticky')){
				if(viewport().width < 375){
					$j341('.box-main-visual__schedule .box-main-visual__schedule__group').css('width',$j341(window).width() - 80);
				}else{
					$j341('.box-main-visual__schedule .box-main-visual__schedule__group').css('width',$j341(window).width() - 115);
				}
				$j341('.slider').slick('slickSetOption', {}, true);
				$j341('.js-schedule-slide').slick('slickGoTo', $j341('.js-schedule-slide').slick('slickCurrentSlide'), true);
			}else{
				$j341('.box-main-visual__schedule.is-sticky .box-main-visual__schedule__group').css('width',$j341(window).width());
				$j341('.slider').slick('slickSetOption', {}, true);
				$j341('.js-schedule-slide').slick('slickGoTo', $j341('.js-schedule-slide').slick('slickCurrentSlide'), true);
			}
		}
	}
}

// scroll
$j341(window).scroll(function(){
	initScheduleSticky();
	initScheduleSlide();
});
function initScheduleSticky(){
	if($j341('.box-main-visual__schedule').get(0)){
		var _scrollTop = $j341(window).scrollTop(),
			_elPosition = $j341('.box-main-visual__head').offset().top + $j341('.box-main-visual__head').outerHeight(),
			_parentPosition = $j341('.box-main-visual').offset().top + $j341('.box-main-visual').outerHeight();
			$j341('.box-main-visual__head').height($j341('.box-main-visual__schedule').height());
		if(_scrollTop > _elPosition){
			$j341('.box-main-visual__head').find('.box-main-visual__schedule').addClass('is-sticky');
		}else{
			$j341('.box-main-visual__head').find('.box-main-visual__schedule').removeClass('is-sticky');
		}
		if(_scrollTop > _parentPosition){
			$j341('.box-main-visual__schedule').addClass('is-show');
		}else{
			$j341('.box-main-visual__schedule').removeClass('is-show');
		}
	}
}
function viewport(){
	var e = window, a = 'inner';
	if ( !( 'innerWidth' in window ) ){
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
}
// resize
var timer = false;
$j341(window).resize(function() {
	if (timer !== false) {
		clearTimeout(timer);
	}
	timer = setTimeout(function() {
		initScheduleSticky();
		initScheduleSlide();
		setHeightDetailBox();
		$j341('.js_fullbg').jsFullBackground();
		cloneItem();
	}, 200);
});
/* ============================================================
 * Plugin
 * ============================================================ */

$j341.fn.stickyTop = function(config){
	var defaults = {
	};
	var config = $j341.extend({}, defaults, config);
	return this.each(function() {
		var $this = $j341(this);
		var $container = $j341('.pjax-content');
		var $container2 = $j341('.pjax-content');
		if($container.data('simplebar') != undefined){
			$container = $j341('.simplebar-content-wrapper');
		}
		var $thisOffset = $this.offset().top + $container.scrollTop();
		if(!$this.data('inited')){
			$this.data('inited', true);
			var $clone = $this.clone().addClass("clone is-hide");
			$clone.css({
				position: 'fixed',
				width: '100%',
				top: 0,
				left: 0
			})
			$container2.after($clone)
			$container.scroll(function(){
				var $thisOffset = $this.offset().top + $container.scrollTop();
				var topOffset = $container.scrollTop();
				if(topOffset >= $thisOffset){
					$clone.removeClass('is-hide');
				} else{
					$clone.addClass('is-hide');
				}
			});
		}
	});
}

$j341.fn.stickyBottom = function(config){
	var defaults = {
	};
	var config = $j341.extend({}, defaults, config);
	return this.each(function() {
		var $this = $j341(this);
		var $container = $j341('.pjax-content');
		var $container2 = $j341('.pjax-content');
		if($container.data('simplebar') != undefined){
			$container = $j341('.pjax-content').find('.simplebar-content-wrapper');
		}
		if(!$this.data('inited')){
			$this.data('inited', true);
			var $clone = $this.clone().addClass("clone");
			var $thisOffset = $this.offset().top + $container.scrollTop();
			var topOffset =$container.scrollTop() + $j341(window).height() -  $this.outerHeight();
			if(topOffset < $thisOffset){
				$clone.removeClass('is-hide');
			} else{
				$clone.addClass('is-hide');
			}
			$clone.css({
				position: 'fixed',
				width: '100%',
				bottom: 0,
				left: 0
			})
			$container2.after($clone)
			$container.scroll(function(){
				var $thisOffset = $this.offset().top + $container.scrollTop();
				var topOffset = $container.scrollTop() + $j341(window).height() -  $this.outerHeight();
				if(topOffset < $thisOffset){
					$clone.removeClass('is-hide');
				} else{
					$clone.addClass('is-hide');
				}
			});
		}
	});
}

$j341.fn.jsFullBackground = function(config){
	var defaults = {
		position : 'center center',
		bgsize: 'cover',
		repeat: 'no-repeat'
	};
	var config = $j341.extend({}, defaults, config);
	return this.each(function() {
		var $this = $j341(this);
		var $img = $this.children('img').first();
		if ($img.length){
			var src = $img.attr('src');
			var position = config.position;
			var bgsize = config.bgsize;
			var repeat = config.repeat;
			if ($this.data('position')) {
				position = $this.data('position');
			}
			if ($this.data('bgsize')) {
				bgsize = $this.data('bgsize');
			}
			if ($this.data('repeat')) {
				repeat = $this.data('repeat');
			}
			$this.css({
				backgroundSize: bgsize,
				backgroundImage: 'url(' + src + ')',
				backgroundRepeat: repeat,
				backgroundPosition: position
			});
			$img.hide();
		}
	});
}

$j341.fn.shareSNS = function(){
	function isURL(str) {
		var pattern = new RegExp('^((ft|htt)ps?:\\/\\/)?'+ // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
		'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
		'(\\:\\d+)?'+ // port
		'(\\/[-a-z\\d%@_.~+&:]*)*'+ // path
		'(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ // query string
		'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
		return pattern.test(str);
	}
	function setSNS($el, url, titleElemText, hashTags){
		if(!isURL(url) && window.location.hostname !== "localhost"){
			url = window.location.protocol + '//' + window.location.host + url;
		}
		titleElemText = encodeURI(titleElemText.replace(/\s/g,''));
		var facebook = $el.find('.facebook');
		facebook.attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + titleElemText).attr('target', '_blank');
		var twitter =  $el.find('.twitter');
		if(hashTags == ""){
			twitter.attr('href', '//twitter.com/intent/tweet?url=' + url + '&text=[' + titleElemText + ']').attr('target', '_blank');
		}else{
			twitter.attr('href', '//twitter.com/intent/tweet?url=' + url + '&text=[' + titleElemText + ']&hashtags=' + hashTags).attr('target', '_blank');
		}
		var line =  $el.find('.line');
		line.attr('href', '//line.me/R/msg/text/?[' + titleElemText + ']  ' + url).attr('target', '_blank');
	}
	return this.each(function() {
		var $this = $j341(this);
		var deferredAjax = false;
		if($this.data('init')) return;
		$this.data('init', true);
		var titleElemText = window.document.title;
		var url = location.href;
		var isDetail = false;
		var hashTags = ""; //Twitterで使用
		_url = $j341('meta[property="og:url"]').attr('content');
		url = _url != undefined &&  _url != '' ? _url : url;

		is_detail = $this.closest('.box-about').length;
		if(is_detail){
			var href = $this.closest('.box-about').data('detail');
			if(href !== "" && href !== undefined){
				deferredAjax = $j341.get(href);
			}
			var hashTagsCount = 0;
			$this.closest('.box-about').find('.lst-detail-txt .lst-detail-txt__item').each(function(){
				if(hashTagsCount < 3){
					hashTagsCount++;
					hashTags += $j341(this).html().replace("#", ",");
				}
			});
			hashTags = hashTags.substring(1);
		}
		if($j341('.pjax-content').get(0)){
			hashTags = "";
			var hashTagsCount = 0;
			$j341('.pjax-content').find('.lst-detail-txt .lst-detail-txt__item').each(function(){
				if(hashTagsCount < 3){
					hashTagsCount++;
					hashTags += $j341(this).html().replace("#", ",");
				}
			});
			hashTags = hashTags.substring(1);
		}
		if(deferredAjax){
			$j341.when(deferredAjax).done(function ( data ) {
				var _dataResponse = data;
				var _parseHTML = $j341('<div></div>');
					_parseHTML.html(_dataResponse);
				var _title = _parseHTML.find('title').text(),
					_desc = _parseHTML.find('meta[name="description"]').attr('content'),
					_url = _parseHTML.find('meta[property="og:url"]').attr('content');
					titleElemText = _title != undefined &&  _title != '' ? _title : titleElemText;
					url = _url != undefined &&  _url != '' ? _url : url;
				setSNS($this, url, titleElemText, hashTags);
			});
		} else{
			setSNS($this, url, titleElemText, hashTags);
		}
	});
}

$j341.fn.onOpenMapAPP = function(){
	return this.each(function() {
		$j341(this).on('click', function (e) {
			e.preventDefault();
			var address = $j341(this).data('query');
			if (address != undefined && address != '') {
				address = address.replace(/\s\s+/g, " ");
				address = encodeURIComponent(address);
				if ((navigator.platform.indexOf('iPhone') != -1) || (navigator.platform.indexOf('iPad') != -1) || (navigator.platform.indexOf('iPod') != -1)) { // if iOS, open in Apple Maps
					window.open('http://maps.apple.com/?q=' + address);
				}
				else { // else use Google
					window.open('https://maps.google.com/maps?q=' + address);
				}
			}
			return false;
		});
	});
};


/* ------------------------------------------------------------
 * [ jQuery Easing v1.3 ] http://gsgd.co.uk/sandbox/jQuery/easing/
 * ------------------------------------------------------------
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 * ------------------------------------------------------------ */
$j341.easing['jswing']=$j341.easing['swing'];$j341.extend($j341.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return $j341.easing[$j341.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if (t==0)return b;if (t==d)return b+c;if ((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if ((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d)==1)return b+c;if (!p)p=d*.3;if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d)==1)return b+c;if (!p)p=d*.3;if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d/2)==2)return b+c;if (!p)p=d*(.3*1.5);if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if (t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;if ((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-$j341.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if ((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if (t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if (t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if (t<d/2)return $j341.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return $j341.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});
