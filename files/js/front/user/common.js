// ============================================================
// jQuery functions
// ============================================================

// 試合に紐づいたニュースを取得
function gameNewsLink(team_media_id, game_date){
  // 試合情報不在モーダルhtmlを生成
  game_news_not_exist_modal_html =
    "<div class='lightbox-inner' style='display: block;'>" +
    "<p class='lightbox-title'>試合情報はありません。</p>" +
    "</div>"

  if (!!team_media_id && !!game_date) { // チームID, 試合日が存在しない場合
    gameNewsApiUrl = shirasagi_uri + "/article/news/" + team_media_id + "/" + game_date.replace( /[^0-9]/g , "" ).slice(0,8)
    $.ajax({
      type: 'GET',
      dataType: 'json',
      async: false,
      url: gameNewsApiUrl
    }).done(function(response){
      if (response.data.exists) {
        game_news_url = 'https://' + club_url_info[response.data.team_media_id] + response.data.path
        window.location.href = game_news_url;
      } else {
        // 試合情報不在モーダルを展開
        $.colorbox({
          html:game_news_not_exist_modal_html,
          maxWidth:"90%",
          maxHeight:"90%"
        });
      }
    })
  } else {  // チームID, 試合日が存在する場合
    // 試合情報不在モーダルを展開
    $.colorbox({
      html:game_news_not_exist_modal_html,
      maxWidth:"90%",
      maxHeight:"90%"
    });
  }
}

//スクロール禁止用関数
function no_scroll(){
//PC用
var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
$(document).on(scroll_event,function(e){e.preventDefault();});
//SP用
$(document).on('touchmove.noScroll', function(e) {e.preventDefault();});
}

//スクロール復活用関数
function return_scroll(){
//PC用
var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
$(document).off(scroll_event);
//SP用
$(document).off('.noScroll');
}

//UserAgent
var getDevice = (function(){
  //tablet & android2.3
  var ua = navigator.userAgent;
  var ver = window.navigator.appVersion.toLowerCase();
  if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
      $('body').addClass("tablet");
  }
  if( ua.search(/Android 2.3/) != -1 ){
      $('body').addClass("old-android");
  }
  //IE9 ～ IE11 
  if (ua.indexOf("MSIE") != -1){
    if(ver.indexOf('msie 9.') != -1){
        $('body').addClass("ie9");
    }else if(ver.indexOf('msie 10.') != -1){
        $('body').addClass("ie10");
    }
  }else if(ua.indexOf('Trident/7.0') != -1){
      $('body').addClass("ie11");
  }
  //PC or SP
  var egwidth = $(window).width();
  if (egwidth <= 767) {
    $('body').removeClass('desktop').addClass('smartphone');
  } else if (egwidth >= 768) {
    $('body').addClass('desktop').removeClass('smartphone');
  }
})();
$(function(){
  //PAGE TOP
  $('#pagetop').click(function() {
    $("html, body").animate({scrollTop:0}, 500, "swing");
    return false;
  });
  //SMOOTH SCROLL (ADD CLASS'scroll')
  $('a.scroll').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
  //ACCORDION
  $('.js-accordion').next('*').hide();
  $('.js-accordion').click(function() {
    if($(this).hasClass('show-accordion')){
      $(this).addClass('show-accordion').next('*').slideUp();
    } else {
      $(this).removeClass('show-accordion').next('*').slideDown();
    }
  });
  //TAB
  var tab = $('.js-tab > *'),
      tabChild = $('.js-tab-child > *'),
      url = location.href,
      hash = [];
      hash = new Array();
      hash = url.split('#');

  if(hash[1]){
    var indexId = tab.index($('.' + hash[1]));
    tab.eq(indexId).addClass('show-tab');
    tabChild.hide().eq(indexId).show().addClass('show-tab-child');
  } else {
    if (!['game','YMD=','TAB='].every(function(reg){ return location.href.match(reg) })) {
      // 速報ページでない場合
      tab.eq(0).addClass('show-tab');
      tabChild.hide().eq(0).show().addClass('show-tab-child');
    }
  }
  tab.click(function() {
    var index = tab.index(this);
    tab.removeClass('show-tab');
    $(this).addClass('show-tab');
    tabChild.hide().removeClass('show-tab-child').eq(index).show().addClass('show-tab-child');
  });
})
// ============================================================
// 共通
// ============================================================

//レスポンシブ判定
//-------------------------------------------------------------
var desktop,smartphone;
function responsive(){
  if ($('#responsive').is(':visible')) {
    desktop = true;
    smartphone = false;
  } else {
    desktop = false;
    smartphone = true;
  }
}
responsive();
$(window).on('resize', function(){
  responsive();
});

var start = new Date();
function d() {
  var end = new Date();
  var diff = end.getTime() - start.getTime();
  alert(diff);
}
//読込判定
//-------------------------------------------------------------
$(window).on('load', function(event) {
  $('body').addClass('loaded');
  // d();
});

//.layout-mainの幅を可変
//-------------------------------------------------------------
function setLayoutMainWidth (){
  if(desktop){
    if (side_off == '1') {
	$('.layout-side').css('display', 'none');
      var layoutMain = $('body').innerWidth() -.5;
    } else {
      var layoutMain = $('body').innerWidth() - $('.layout-side').width() -.5;
    }
  } else {
    var layoutMain = 'inherit';
  }
  $('.layout-main').css('width', layoutMain);
}
setLayoutMainWidth ();
$(window).on('load resize', function(){
  setLayoutMainWidth ();
});

//サブページの画像ヘッダー部分の文字のデコレーション
//-------------------------------------------------------------
$('#js-subpage-title-deco').children().andSelf().contents().each(function() {
  if (this.nodeType == 3) {
    $(this).replaceWith($(this).text().replace(/(\w)/g, "<span>$&</span>"));
  }
});
$(document).ready(function($) {
  $('#js-subpage-title-deco span').eq(1).addClass('txt-main');
});

//サブページのサイドナビを下にコピー
//-------------------------------------------------------------
$('#js-sidenav-sp').html($('.component-sidenav').html());


//選手名鑑などのポイントをバーで表現している箇所の長さを決定
//-------------------------------------------------------------
(function(){
  $('.progress').each(function() {
    var num = $(this).data('num');
    $(this).css('width', num + '%');
  });
})();

//選手詳細ページ MOREボタン クリック毎テキスト処理
//-------------------------------------------------------------
$('#fifthgames > tr:eq(4)').nextAll().hide();

function player_detail_games_toggle(){
    $('#fifthgames > tr:eq(4)').nextAll().toggle(); //toggle_row: 4
}
$(function(){
    $('#btn-game-more').on('click', function(){
            $(this).toggleClass('active');
            
            $("html,body").animate({scrollTop : $("#fifthgames").parents(".divide").offset().top}, {queue : false}, (function(){
                player_detail_games_toggle();
            })());
    });
});

//ツールチップ
//-------------------------------------------------------------
(function(){
  
  var first = true;
  $('.tips-parent > * , .tips').hover(function(e) {
    if(first){
      $('body').append('<div class="tips-wrap" style="z-index:5;"><div class="tips-inner"><div class="tips-content"><span></span></div></div></div>')
      first = false;
    }
    var w = $(this).outerWidth(true),
        h = $(this).outerHeight(true),
        y = $(this).offset().top,
        x = $(this).offset().left,
        tipsW = $('.tips-wrap').width() / 2 - w / 2,
        tipsH = $('.tips-wrap').height();
        txt = $(this).data('tips');
        //console.log(y);
    $('.tips-wrap span').html(txt);
    if($('.boxscore').length){
      $('.tips-wrap').css({
        top: y - tipsH / 2 ,
        left: x - tipsW / 2 
      }).show();
    }else{
      $('.tips-wrap').css({
        top: y - tipsH,
        left: x - tipsW
      }).show();
    }
  }, function() {
    $('.tips-wrap').hide();
  });
})();

//プルダウン
//-------------------------------------------------------------

          $('.js-pulldown').click(function() {
            if($(this).hasClass('show')){
              //別処理でhrefの中身が上書きされる為、ローカル変数でhrefを定義
              var href = window.location.href.split('/');
        
               //pc-club-schedule-listを例外(月2度押しで消える対応)
              if(!desktop || (href.indexOf("schedule")==-1 || href.indexOf("list.html")==-1)){
                 $('.pulldown',this).slideUp('fast');
              }
              $(this).removeClass('show');
            } else {
              if($('body').hasClass('smartphone') || smartphone){
                $('.js-pulldown .pulldown').slideUp('fast');
                $('.js-pulldown').removeClass('show');
              }
              $('.pulldown',this).slideDown('fast');
              $(this).addClass('show');
            }
          });


//.team-nav-innerのサイズを変更
//-------------------------------------------------------------
$(window).on('load resize', function(event) {
  if(desktop){
    $('.team-nav-inner').css('width', 'auto');
  } else {
    $('.team-nav-inner').css('width', $('.team-nav-inner .tnav-wrap').width() + 100);
  }
});

//Ratina 判定
//-------------------------------------------------------------
var retinaSwitch = window.devicePixelRatio;
var retinaFlag = false;
if(retinaSwitch == 1) {
    retinaFlag = false;
} else if(retinaSwitch == 2) {
    retinaFlag = true;
}
//console.log(retinaFlag);

// ============================================================
// メニュートリガー類
// ============================================================


//チームヘッダーのMENUを押した時
//-------------------------------------------------------------
(function(){
  var _tnavList = $('.layout-popup-tnav .tnav-wrap li');
      length = _tnavList.length,
      listHeight = [];
  //PC
  if(desktop){
    //各リストの高さを取得[ANIMATION]
    for (var i = 0; i < length; i++) {
      listHeight.push(_tnavList.eq(i).height());
    }
    //各リストの高さを0に変更[ANIMATION]
    _tnavList.css('height', '0');

    //MENUを押した時
      //console.log(length);
    $('.js-popup-tnav-open').on('click', function(event) {
      //console.log(length);
      //console.log(listHeight);

      $('.team-nav-scroll .second-nav').css({
        'opacity': 0,
        'height': 0
      });

      $('.layout-popup-tnav').css({'opacity': '1','z-index': '5000'}); //.layout-popup-tnavを表示
      $('body').addClass('is-layout-popup-tnav-show');                 //CSSアニメーショントリガー

      //メニューのリストのアニメーション指定
      setTimeout(function() {
        for (var i = 0; i < length; i++) {
          $('.layout-popup-tnav .tnav-wrap li').eq(i).animate({'height': listHeight[i]},300);
          //console.log(listHeight[i]);
        }
      }, 400);
      // Ratina ディスプレイ対応にleft rightを一旦削除後、再度追加
      if(retinaFlag){
        $('.is-layout-popup-tnav-show .layout-popup-tnav .left, .is-layout-popup-tnav-show .layout-popup-tnav .right').remove();
        $('.is-layout-popup-tnav-show .layout-popup-tnav').prepend('<div class="left"></div><div class="right"></div>');
      }
      

    });
  //SP
  } else {
    //MENUを押した時
    $('.js-popup-tnav-open').on('click', function(event) {
      $('.layout-popup-tnav').css({'opacity': '1','z-index': '5000'}); //.layout-popup-tnavを表示
      $('body').addClass('is-layout-popup-tnav-show');                 //CSSアニメーショントリガー
    });
  }

  //MENUを閉じる処理
  $('#js-popup-tnav-close').on('click', function(event) {
    $('body').removeClass('is-layout-popup-tnav-show');

    if(desktop){
      _tnavList.animate({'height': '0'}, 300);
      // Ratina ディスプレイ対応にleft rightを削除
      if(retinaFlag){
        $('.is-layout-popup-tnav-show .layout-popup-tnav .left, .is-layout-popup-tnav-show .layout-popup-tnav .right').remove();
      }
    }
    setTimeout(function() {
      $('.layout-popup-tnav').css({'opacity': '0','z-index': '-1'});
    }, 500);
  });
})();

//スクロールバーを生成
$('.layout-popup-tnav .content').perfectScrollbar('update');

//チームナビの右、横を押した時
//-------------------------------------------------------------
(function(){
  $('.side-btn').on('click', function(event) {
    //各メニューの位置を取得する際に一時的にrelativeに変更
    $('.team-nav .tnav-wrap').css('position', 'relative');

    //現在のスクロール位置を取得
    var value = $('.team-nav-scroll').scrollLeft();
    //console.log('現在のスクロール位置：' + value);

    //各メニューの位置を取得
    var position = [];
    $('.team-nav-inner .tnav-wrap li').each(function() {
      position.push(Math.floor($(this).position().left));
    });
    position.pop();
    //console.log('初期配列：' + position);

    position.push(value);

    //配列を昇順でソート
    position.sort(function(position,b){
      if( position < b ) return -1;
      if( position > b ) return 1;
      return 0;
    });

    //現在のスクロール位置が何番目かを取得
    for(var i = 0 ; i < position.length ; i++){
      if(value === position[i]){
        var num = i ;
      }
    }
    //console.log('配列最終' + position);
    if($(this).hasClass('side-next')){
      var result = position[num + 1];
    } else {
      var result = position[num - 2];
    }
    $('.team-nav-scroll').animate({scrollLeft: result}, 200)
    //console.log('ポイント：' + result);

    //各メニューの位置を取得する際に一時的にrelativeに解除 ※サブメニューを表示する時にrelativeだとおかしくなるため。
    $('.team-nav .tnav-wrap').css('position', 'inherit');
  });
})();

//検索アイコンを押した時
//-------------------------------------------------------------
(function(){
  $('.js-top-search-open').on('click', function(event) {
    $('body').addClass('is-top-search-show');
    return false;
  });
  $('#js-top-search-close').on('click', function(event) {
    $('body').removeClass('is-top-search-show');
  });
})();

//スマートフォンのポップアップナビの＋メニューを押した時
//-------------------------------------------------------------
(function(){
  if(smartphone){
    // スマホハンバーガーメニュー Aタグは生かしてSPAN タグにトリガーを変更
    $('.layout-popup-tnav .tnav-wrap .has-2ndnav a').each(function(e){
        $(this).append('<span class="open-triger"></span>');
    });
    $('.layout-popup-tnav .tnav-wrap .has-2ndnav .open-triger').click(function(e) {
      e.preventDefault();
      if($(this).parent('a').parent('li').hasClass('selected')){
        $(this).parent('a').parent('li').removeClass('selected').find('.second-nav').slideUp('fast');
      } else {
        $('.layout-popup-tnav .tnav-wrap .has-2ndnav').removeClass('selected');
        $('.second-nav').slideUp('fast');
        $(this).parent('a').parent('li').addClass('selected').find('.second-nav').slideDown('fast');
      }
      return false;
    });

    // スマホグローバルメニューにサブメニューがあった場合
    $('.team-nav .tnav-wrap .has-2ndnav').click(function(e) {
      e.preventDefault();
      if($(this).hasClass('selected')){
        $(this).removeClass('selected').find('.second-nav').slideUp('fast');
      } else {
        $('.team-nav .tnav-wrap .has-2ndnav').removeClass('selected');
        $('.team-nav .second-nav').slideUp('fast');
        $(this).addClass('selected').find('.second-nav').slideDown('fast');
      }
      return false;
    });
    // ハンバーガー、グローバル　サブメニューのリンク先へ飛ばす
  $('.second-nav a').click(function() {
    var linktype = $(this).attr('target');
    if ( linktype == "_blank" ) {
      window.open( $(this).attr('href') );
    } else {
      location.href = $(this).attr('href');
    }
  });

  }
})();

//ホバーを補助するjs
if(desktop) {
  var hideHv = function() {
    $('.team-nav-scroll .second-nav').css({
      'opacity': 0,
      'height': 0
    });
  };
  $('.team-nav-scroll .tnav-wrap li').mouseover(function(e) {
    var cts = $(this).children('.second-nav');
    var count = cts.find('a').length;
    var aWidhtPlus = 0;
    var htmlWidth = $('body').outerWidth(true)*0.9;
    //下層あったとき
    if($(this).hasClass('has-2ndnav')) {
      hideHv();
      //サブメニュー Aタグ横幅の合計を変数に代入する。
      cts.find('a').each(function(){
        var aWidth = $(this).outerWidth(true);
        aWidhtPlus += aWidth;
      });
    
     if(aWidhtPlus < htmlWidth) {
        //ウィンドウ幅がサブメニューのAタグ合計幅より小さい場合
        cts.css({
          'opacity': 1,
          'height': '50px'
        });
      } else if(aWidhtPlus > htmlWidth) {
        //ウィンドウ幅がサブメニューのAタグ合計幅より大きい場合（高さ2倍）
        cts.css({
          'opacity': 1,
          'height': '100px'
        });
      }
    //下層なかったとき
    } 
    else if($(this).hasClass('team-nav-trigger')){
      hideHv();
    }

  });
  var leaves = '.top-main-visual-outer, .layout-global-header, .layout-subpage-header, .team-logo';
  $(leaves).mouseover(function(e) {
      hideHv();
  });
  $('.team-logo-wrap .en').mouseover(function(e) {
      setTimeout(function(){
      hideHv();
      }, 400);
  });
}



// ============================================================
// NEWS LIST
// ============================================================

//ニュース下部の MOREボタン をクリックした場合の挙動
//---------------------------------------------------------

(function(){
  //設定
  var show = 9; // ボタンを押した時に出したい数

  //要素を変数化
  var _newsMoreBtn = $('#js-news-more'),
      _newsList = $('.component-news-card > li');

  //ニュースの総数を取得
  var length = _newsList.length;

  function btnHiddenCheck(){
    //表示されている数を取得
    var visible = 0;
    for (var i = 0; i < length; i++) {
      if(_newsList.eq(i).is(':visible')){
        visible = visible + 1;
      }
    }

    //総数と表示されているものが同じであれば、MOREボタンを非表示
    if(length == visible){
      _newsMoreBtn.fadeOut();
    }
  }
  btnHiddenCheck();

  //MOREボタンを押した時の処理
  $('#js-news-more').click(function(event) {
    //非表示の数を数える
    var hidden = 0;
    for (var i = 0; i < length; i++) {
      if(_newsList.eq(i).is(':hidden')){
        hidden = hidden + 1;
      }
    }
    if(hidden > 0){
      if(desktop){
        _newsList.css({
          opacity: 0,
          display: 'inline-block'
        }).animate({opacity:1},500);
      } else {
        _newsList.css({
          opacity: 0,
          display: 'block'
        }).animate({opacity:1},500);
      }
      btnHiddenCheck();
    }
    //console.log(hidden);
    return false;
  });
})();


//該当のカテゴリーにいる場合、メニューをアクティブにする
//---------------------------------------------------------
(function(){
  //bodyのidを取得して、 [body--news-FANCLUB-index] "FANCLUB" のみを取得する　※FANCLUBのカテゴリーにいる場合
  var id = $('body').attr('id');
  if(id){
    id = id.split('-');
    cat = id[3];
//    console.log(cat);
    //サイドナビのaタグのhrefを取得して、FANCLUBがあればactive用クラス"bg-main"を付加する
    $('.component-sidenav-inner a').each(function() {
      var href = $(this).attr('href');
      var slug = href.split('/');
      //console.log(slug);
      $(this).addClass(slug[slug.length-2]);
    });
    if(cat == 'index'){
      $('.component-sidenav-inner .news').addClass('bg-main');
    } else {
      $('.component-sidenav-inner a.' + cat).addClass('bg-main');
    }
  }
})();

// ============================================================
// PLAYER LIST
// ============================================================

$(window).on('load', function(){
    $('.players-list .player .detail-wrap .detail').matchHeight();
});

// ============================================================
// PLAYER DETAIL
// ============================================================
$(window).on('load', function(event) {
  $('#js-player-slide').bxSlider({
    controls: false
  });
});

$(window).on('load', function(event) {
  if(desktop){
  }else {
    $('#js-goods-slide-sp').bxSlider({
      auto: true
    });
  }
});

// ============================================================
// SCEDULE
// ============================================================
// カレンダー　高さ揃える
  $(window).on('load', function(){
      $('.schedule-ul li .schedule-detail').matchHeight();
  });
//  $('.schedule-contents-wrap .component-month-selector ul li a').on('click', function(){
//      $('.schedule-ul li .schedule-detail').matchHeight();
//  });

// ゲームデーがない場合
$(".no_match").on('click', function() {
  match_not_exist_modal_html =
  "<div class='lightbox-inner' style='display: block;'>" +
  "<p class='lightbox-title'>ゲームデーはありません。</p>" +
  "</div>";

  // ゲームデー不在モーダルを展開
  $.colorbox({
      html: match_not_exist_modal_html,
      maxWidth: "90%",
      maxHeight: "90%"
  });

});

//日程　スマートフォン 
if(smartphone){
  //RESULTのクリック処理
  $('.result-selector > .txt-main').click(function() {
    var parent = $(this).parent();
    parent.toggleClass('selected');
    return false;
  });
  // カレンダー詳細ポップアップ処理
  $('.schedule-ul li').click(function() {
    var thisClass = $(this).attr('class');
      if(thisClass === undefined){
        thisClass = 'notclass';
      }
    if (thisClass.indexOf("selected") != -1 ){
      $(this).removeClass("selected");
    }else{
      $(this).addClass("selected");
    }
    
    $('.schedule-ul li').not(this).each(function (i) {
      var nowClass = $(this).attr('class');
      if(nowClass === undefined){
        nowClass = 'notclass';
      }
      if (nowClass.indexOf("selected") != -1 ){
        $(this).removeClass("selected");
      }
    });
  });
  // カレンダースマートフォンでの詳細表示したままフッターまで移動した場合は詳細を非表示にする
  $(window).load(function () {
    $(window).bind("scroll", function() {
      bodyHeight = $('body').outerHeight();
      footerHeight = $('footer').outerHeight();
      winHeight = window.innerHeight;
      footerStartPoint = bodyHeight - footerHeight;
      scrollPosition = $(window).scrollTop();
      scrollPositionPlus = scrollPosition + winHeight;
      if (footerStartPoint < scrollPositionPlus) {
        //スクロールの位置がフッターの範囲に来た場合
        $('.schedule-ul li').removeClass('selected');
      }
    });
  });

}

// ============================================================
// 各クラブ一式処理系
// ============================================================
// 
$(document).ready(function(){
  // 画像置換処理
  // リーグ公式チケット画像に変更する場合
   var ticketImgUrl = 'https://www.bleague.jp/common/img/img-blg-ticket.png';
  var ticketDefaultImg =  $('.side-ticket-wrap').find('img').attr("src");
  //個々で変更している場合はリネームしない
  if(ticketDefaultImg ==='/common/img/img-blg-ticket.png'){
    $('.side-ticket-wrap').find('img').attr("src", ticketImgUrl);
  }
  

  // スポンサーバナー一括追加
  var addBanner = '<li class="sponavi-banner"><a href="http://ckantan.jp/dm/mob/dm_comfirm.jsp?cmcd=4100051099" target="_blank"><img src="https://www.bleague.jp/common/img/logo-sponavi.png" alt="softbank"></a></li>';
  $('.global-sponsor').append(addBanner);
  
  // リーグロゴ画像にaタグつける
  $('.b-logo img').wrap('<a href="http://www.bleague.jp/">')
  

});

//LEADING ページ　
//-------------------------------------------------------------
(function(){
  
  if(desktop){
    if($('.leading-contents-wrap').length){
      // 固定ナビのアクティブクラス
      $('.leading-contents-wrap .cat-link li a').click(function() {
        
        $('.leading-contents-wrap .cat-link li a').removeClass('active');
        $(this).addClass('active');
        
      });   
      
      }else if(smartphone){

    }
  }

})();



//EVENT ページ　
//-------------------------------------------------------------
(function(){
  // イベント詳細ページで複数の日付の横並びにする為の処理
  if($('.event-area').length){

    do {
      $('.event-date').children("span:lt(2)").wrapAll('<p class="event-detail-date"></p>')
    }while($('.event-date').children("span").length);

    // var str = jQuery.trim($('.event-date ').html);
    // console.log(str);
    var setElm = $('.event-date p');
    $('.title-wrap').prepend('<div class="event-clone"></div>');
    $(window).load(function(){
      setElm.each(function(){
        var self = $(this);
        // 複製したDIVにappend
        $('.event-clone').append(self);
      });
      // 元のevent-data 削除　cloneにaddclass
      $('.event-date').remove();
      $('.event-clone').addClass('event-date');

    });


  }

})();





//縦スクロール系の一括処理
//-------------------------------------------------------------
(function(){
  if(desktop){
    var areaUl = $('.area-ul').offset();

    // スクロールイベント
    window.addEventListener( "scroll", function() {
      // スクロール量を取得
      var x = window.pageXOffset;
      var y = window.pageYOffset;
      

      //  ページ　にページ内メニューがあれば発火
      if($('.leading-contents-wrap').length){

        if( y > 800 ){
          $('.leading-nav').addClass('fixed');
                
        }else if( y < 800 ){
          $('.leading-nav').removeClass('fixed');
                
        }
      }
      
      
    });
}
})();