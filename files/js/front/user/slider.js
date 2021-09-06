(function(){
  if(desktop){
    //固定要素
    var _element = $('#js-main-visual'),
        _slide = $('.slide' , _element),
        length = _slide.length;

    //設定
    var speed = 5000,　            //スライドの間
        transitionSpeed = 600,    //animationに要する時間
        animation = true,         //自動スライドの判断
        clickGuard = true;        //次へ前への連続クリックを防ぐ


    //-------------------
    // 読み込み後のDOM操作
    //-------------------

    //1枚目にnowを追加
    _slide.eq(0).addClass('now');

    //スライドの画像の横、縦幅を設定
    $(window).on('load resize', function(event) {
      var w = $('.top-slide-guard').width(),
          h = $('.top-slide-guard').height();
      $('#js-main-visual img').css({
        width: w
      });
    });

    //VIEWを作成
    var view = '';
    $('#js-main-visual .slide').each(function() {
      var href = $('a' , this).attr('href');
      if (typeof href !== "undefined") {
        view += '<a href="' + href + '">VIEW</a>';
      }else{
        view += '<a tabindex="-1">VIEW</a>';
      }
    });
    $('#js-slide-view-wrap').append(view);

    //PAGERを作成
    var pager = '';
    for (var i = 0; i < length; i++) {
      pager += '<span data-pager="' + i + '" class="pager"></span>';
    }
    $('#js-slide-pager').append(pager);

    //VIEWの1枚目にfrontを追加
    $('#js-slide-view-wrap a').eq(0).addClass('now');

    //PAGERの1枚目にfrontを追加
    $('#js-slide-pager span').eq(0).addClass('now');

    //文言カードの1枚目にfrontを追加
    $('.main-visual-card-wrap li').addClass('back').eq(0).addClass('front').removeClass('back');

    //-------------------
    // スライド
    //-------------------
    //次へを押した時
    // $('#js-slide-next').on('click', function(event) {
    //   clearInterval(timerId);
    //   if(clickGuard){
    //     slideNext();
    //   }
    //   clickGuard =false;
    //   return false;
    // });

    //前へを押した時
    // $('#js-slide-prev').on('click', function(event) {
    //   clearInterval(timerId);
    //   if(clickGuard){
    //     slidePrev();
    //   }
    //   clickGuard =false;
    //   return false;
    // });

    //自動スライドスタート
    var timerId = setInterval(function() {
      slideNext();
    }, speed);

    //次へ
    function slideNext(){
      var now = $('#js-main-visual .slide').index($('.now'));
      var nowPlus = now + 1;
      //全てのクラスをRESET
      _slide.removeClass('now').removeClass('in animate').removeClass('out');

      _slide.eq(now).addClass('out');
      _slide.eq(nowPlus).addClass('in animate');
      if(now == length - 1){
        _slide.eq(length).addClass('out');
        _slide.eq(0).addClass('in animate');
        nowPlus = 0;
      }
      setTimeout(function() {
        _slide.removeClass('in animate').removeClass('out').eq(nowPlus).addClass('now');
      }, transitionSpeed);
      setTimeout(function() {
        var count = $('#js-main-visual div').index($('.now'));
        clickGuard =true;
      }, 600);
      //VIEW 入れ替え
      $('#js-slide-view-wrap a').removeClass('now').eq(nowPlus).addClass('now');

      //Pager 入れ替え
      $('#js-slide-pager span').removeClass('now').eq(nowPlus).addClass('now');

      //文言カードの入れ替え
      $('.main-visual-card-wrap li').removeClass('front').addClass('back').eq(nowPlus).addClass('front').removeClass('back');
    }


// 2016.6.20 スライド画像の挙動調整 HF MORIMOTO
    $('#js-slide-pager span').click(function() {
      if(clickGuard){
        clickGuard = false;
        var now = $('#js-slide-pager span').index(this);
        var nowPlus = now + 1;
        //全てのクラスをRESET
        _slide.removeClass('now').removeClass('in animate').removeClass('out');

        _slide.eq(nowPlus).addClass('out');
        _slide.eq(now).addClass('in animate');
        if(now == length - 1){
          _slide.eq(length).addClass('out');
          _slide.eq(0).addClass('in animate');
          nowPlus = 0;
        }
        setTimeout(function() {
//      	_slide.removeClass('in animate').removeClass('out').eq(nowPlus).addClass('now');
          _slide.removeClass('in animate').removeClass('out').eq(now).addClass('now');

        }, transitionSpeed);
        setTimeout(function() {
          var count = $('#js-main-visual div').index($('.now'));
          clickGuard =true;
        }, 600);
        //VIEW 入れ替え
        $('#js-slide-view-wrap a').removeClass('now').eq(now).addClass('now');

        //Pager 入れ替え
        $('#js-slide-pager span').removeClass('now').eq(now).addClass('now');

        //文言カードの入れ替え
        $('.main-visual-card-wrap li').removeClass('front').addClass('back').eq(now).addClass('front').removeClass('back');
        setTimeout(function() {
          clickGuard = true;
        }, 300);
      }
    });
  } else {

    $('#js-main-visual div').hide().eq(0).show();
    $(window).on('load', function() {
      $('#js-main-visual div').show();
      //TOP SLIDER
      var current;
      var topslider = $('#js-main-visual').bxSlider({
        controls:false,
        auto: true,
        onSlideBefore: function() {
         current = topslider.getCurrentSlide();
         $('.main-visual-card-wrap > li').addClass('back').removeClass('front').eq(current).addClass('front').removeClass('back')
       }
      });
      $('.main-visual-card-wrap > li').addClass('back').eq(0).addClass('front').removeClass('back');
    });
    
  }
})();