// TOP ページかどうかのFLAG追加
var BodyId = $('body').attr('id');
var topBodyId = 'page_top';
var nowTopFlag = false;
//if(BodyId == topBodyId){
if(BodyId.indexOf(topBodyId) !== -1){
	nowTopFlag = true;
}
//console.log(nowTopFlag);

if(nowTopFlag){

//console.time('timer_top');

//---------------------------
//  トップのスライダー関連
//---------------------------
$(function(){

  //PICK UP & GOODS LISTを2つずつにulで囲う
  do {
    $("#js-pickup-slider").children("li:lt(2)").wrapAll('<ul class=""></ul>')
  }while($("#js-pickup-slider").children("li").length);

  if($('body').hasClass('desktop')){
    do {
      $("#js-goodslist").children("li:lt(5)").wrapAll('<ul class=""></ul>')
    }while($("#js-goodslist").children("li").length);
  } else {
    $("#js-goodslist").children("li").wrapAll('<ul class=""></ul>');
  }

  //メインスライダー
  $(window).on('load', function() {

    //PICK UP
    var pickUpSlideLength = $('#js-pickup-slider li').length;
    //画像が2枚以下の場合はスワイプ処理させない
    if(pickUpSlideLength < 3){
      $('#js-pickup-slider').bxSlider({
        touchEnabled: false
  		});
    //それ以外はスワイプ処理実行
    }else{
      $('#js-pickup-slider').bxSlider({
        touchEnabled: false
      });
    }

    //GOODS LIST
    if(desktop){
      $('#js-goodslist').bxSlider({});
    }

    //STATS
    //if(desktop){
      $('#js-stats-list').bxSlider({});
    //}
  });

});


//トップスライダー　文字制限
//-------------------------------------------------------------
$(function(){
    // var $setElm = $('.main-visual-inner .main-visual-card .title .txt');
    // var cutFigure = '10'; // カットする文字数
    // var afterTxt = ' …'; // 文字カット後に表示するテキスト

    // $setElm.each(function(){
    //     var textLength = $(this).text().length;
    //     var textTrim = $(this).text().substr(0,(cutFigure))

    //     if(cutFigure < textLength) {
    //         $(this).html(textTrim + afterTxt).css({visibility:'visible'});
    //     } else if(cutFigure >= textLength) {
    //         $(this).css({visibility:'visible'});
    //     }
    // });
});

//---------------------------
//  試合情報の縦スライド
//---------------------------
$(window).on('load', function(event) {
  //試合情報の縦幅を決定
  function gameScheduleHeight(){
    if(desktop){
      var height = $('.main-visual-inner').outerHeight() - 20;
    } else {
			// SP 最初の高さを3個分で表示（結果が出ている場合は高さが変動するので処理変更）
      var height = $('#js-game-list li:nth-child(1)').outerHeight();
			height += $('#js-game-list li:nth-child(2)').outerHeight();
      height += $('#js-game-list li:nth-child(3)').outerHeight();
    }
    $('.game-list .bx-viewport').css('max-height', height);
  }
  //ウィンドウ幅をリサイズ時にbx-viewportの高さを変更
  $(window).resize(function(event) {
    gameScheduleHeight();
  });
  if(desktop){
    slider = $('#js-game-list').bxSlider({
      mode: 'vertical',
      pager: false,
      slideMargin: 0,
      infiniteLoop: false,
      controls: false,
      touchEnabled: false,
      onSliderLoad: function(){
        gameScheduleHeight();
      }
    });
  } else {
    slider = $('#js-game-list').bxSlider({
      mode: 'vertical',
      pager: false,
      hideControlOnEnd:true,
      slideMargin: 0,
      infiniteLoop: false,
      adaptiveHeight: true,
      nextText:'',
      prevText:'',
      touchEnabled: false,
      onSliderLoad: function(){
        gameScheduleHeight();
      }
    });
  }
  //次へ前へ
  $('#slider-next').click(function(){
    slider.goToNextSlide();
    return false;
  });
  $('#slider-prev').click(function(){
    slider.goToPrevSlide();
    return false;
  });
  //読み込み後.todayの1番目に移動
  setTimeout(function() {
    $('.today').eq(0).addClass('first');
    if( $('.game_now').index('#js-game-list li') == 2 ) {
      var index = $('.game_now').index('#js-game-list li');
    } else {
      var index = $('.end').index('#js-game-list li');
    }
    if (typeof slider.goToSlide === "function") {
      slider.goToSlide(index);
    }
  }, 500);
  //試合情報あたりをホバーした際に、次へ前へが表示する
  $('.game-list-controller').hover( () => {
    $('.game-list-controller').stop().fadeTo('fast',1);
　　$('.sidetop_s').css('z-index','111111');
 }, function() {
    $('.game-list-controller').stop().fadeTo('fast',0);
    $('.sidetop_s').css('z-index',''); 
  });
   $('.bx-viewport').hover( () => {
    $('.game-list-controller').stop().fadeTo('fast',1);
    $('.sidetop_s').css('z-index','111111');
  }, function() {
    $('.game-list-controller').stop().fadeTo('fast',0);
    $('.sidetop_s').css('z-index',''); 
  });  
});

//---------------------------
//  ニュースのMOREを押した時
//---------------------------
(function(){

  //設定
  var show = 6; // ボタンを押した時に出したい数

  count_moreBtn = $('.js-top-more').length;
  if(count_moreBtn > 0){
    for (var i = 0; i < count_moreBtn; i++){

      //要素を変数化
      _articleMoreBtn = $('.js-top-more:eq(' + i + ')');
      _articleList = $('.component-news-card:eq(' + i + ') > li');

      //記事の総数を取得
      _article_length = _articleList.length;

      function article_btnHiddenCheck(){
        //表示されている数を取得
        article_visible = 0;
        for (var j = 0; j < _article_length; j++) {
          if(_articleList.eq(j).is(':visible')){
            article_visible = article_visible + 1;
          }
        }

        //総数と表示されているものが同じであれば、MOREボタンを非表示
        if(_article_length == article_visible){
          _articleMoreBtn.fadeOut();
        }
      }
    }
  }
  //MOREボタンを押した時の処理
  $('.js-top-more').click(function () {
    index = $('.js-top-more').index(this);
    //要素を変数化
    _articleMoreBtn = $('.js-top-more:eq(' + index + ')');
    _articleList = $('.component-news-card:eq(' + index + ') > li');
    //記事の総数を取得
    _article_length = _articleList.length;

    //非表示の数を数える
    article_hidden = 0;
    for (var i = 0; i < _article_length; i++) {
      if(_articleList.eq(i).is(':hidden')){
        article_hidden = article_hidden + 1;
      }
    }
    if(article_hidden > 0){
      if(desktop){
        _articleList.css({
          opacity: 0,
          display: 'inline-block'
        }).animate({opacity:1},500);
      } else {
        _articleList.css({
          opacity: 0,
          display: 'block'
        }).animate({opacity:1},500);
      }
      article_btnHiddenCheck();
    }
    //console.log(article_hidden);
    return false;
  });
})();

// console.timeEnd('timer_top');


}