(function(){
    var domain;
   
      domain = 'go-seahorses.jp';
    
    $('body').removeClass('team-an');
    $('body').addClass('team-'+club_code_info[domain]);
 })();
//TAB
/*  (function(){
    var tabbs = $('#js-term-tab-boxscore > *');
    tabbs.eq(0).addClass('show-tab');
    $('.boxscore-wrap > .term-content').hide().eq(0).show().addClass('show-tab-child');
    tabbs.click(function() {
      var index = $(this).parent('.term-tab').children('li').index(this);
      $(this).parent('.term-tab').children('li').removeClass('show-tab');
      $(this).addClass('show-tab');
      $(this).parents('.boxscore-wrap').children('.term-content').hide().removeClass('show-tab-child').eq(index).show().addClass('show-tab-child');
    });
    var tabpbp = $('#js-term-tab-playbyplay > *');
    tabpbp.eq(0).addClass('show-tab');
    $('.playbyplay-wrap > .term-content').hide().eq(0).show().addClass('show-tab-child');
    tabpbp.click(function() {
      var index = $(this).parent('.term-tab').children('li').index(this);
      $(this).parent('.term-tab').children('li').removeClass('show-tab');
      $(this).addClass('show-tab');
      $(this).parents('.playbyplay-wrap').children('.term-content').hide().removeClass('show-tab-child').eq(index).show().addClass('show-tab-child');
    });
  })();
//ゲーム詳細ページ　テキストor グラフ表示　
//-------------------------------------------------------------
(function(){
  $('#game-change-btn a').click(function() {
  	var showGameData = $(this).attr('data-game');
    $('#game-change-btn a').removeClass('selected');
    $(this).addClass('selected');
	
	$('.game-detail-area').removeClass('show');
	$('.game-detail-area').each(function() {
		var detailData = $(this).attr('data-game');
		if(showGameData == detailData){
			$(this).addClass('show');
		}
	});
	return false;
  });
})();

//ゲーム詳細ページ　テキストor グラフ表示　
//-------------------------------------------------------------
(function(){
  $('#game-change-btn a').click(function() {
  	var showGameData = $(this).attr('data-game');
    $('#game-change-btn a').removeClass('selected');
    $(this).addClass('selected');
	
	$('.game-detail-area').removeClass('show');
	$('.game-detail-area').each(function() {
		var detailData = $(this).attr('data-game');
		if(showGameData == detailData){
			$(this).addClass('show');
		}
	});
	return false;
  });
})();

  // 1分更新
  setInterval(
    function () {
      if (autoFlg == 1) {
        selectedTab = $('.js-tab.stats-tab li.show-tab span').text();
        Tab = show_tab_info[selectedTab];
        if (Tab == 'P') {
          tabChild = $(".playbyplay-wrap .term-tab > *");
          selectedChildTab = $(".playbyplay-wrap .term-content");
          tabText = $(".playbyplay-wrap .term-tab .show-tab span").text();
        } else if (Tab == 'B') {
          tabChild = $(".boxscore-wrap .term-tab > *");
          selectedChildTab = $(".boxscore-wrap .term-content");
          tabText = $(".boxscore-wrap .term-tab .show-tab span").text();
        } else if (Tab == 'H') {
          tabChild = $("#player-highlight");
        } else if (Tab == 'R') {
          tabChild = $("#player-report");
        } else {
          selectedChildTab = '';
        }
        $('.game-header').empty();

          //view_game_header.jsのfunctionを呼び出し、GameDetailを更新
          refreshClubGameDetail();

          $('.playbyplay-wrap .term-content').remove();
          $('.boxscore-wrap .term-content').remove();

          //view_play_by_play.jsのfunctionを呼び出し、PlayByPlayを更新
          refreshClubPlayByPlay();

          //view_box_score.jsのfunctionを呼び出し、BoxScoreを更新
          refreshClubBoxScore();
      }
    } , 60000);
*/
function tips() {
  var first = true;
  $('circle').hover(function(e) {
    $('body').append('<div class="tips-wrap fukidashi" style="width:200px;"><div class="tips-inner"><div class="tips-content"><span><p style="font-size:10px;">時間:<span class="time"></span></p><p style="font-size:10px;">得点:<span class="score"></span></p><p style="font-size:10px;">内容:<span class="title"></span></p></span></div></div></div>')
    $('.tips-wrap span .time').html($(this).attr('time'));
    $('.tips-wrap span .score').html($(this).attr('score'));
    $('.tips-wrap span .title').html($(this).attr('playText'));
    var w = $(this).outerWidth(true),
        h = $(this).outerHeight(true),
        y = $(this).offset().top,
        x = $(this).offset().left,
        tipsW = $('.tips-wrap').width() / 2 - w / 2,
        tipsH = $('.tips-wrap').height();
    $('.tips-wrap').css({
      top: y - tipsH - 30,
      left: x - tipsW - 5
    }).show();
  }, function() {
    $('.tips-wrap').remove();
  });
}
function boxtips() {
  
  var first = true;
  $('.tips-parent > * , .tips').hover(function(e) {
    if(first){
      $('body').append('<div class="tips-wrap"><div class="tips-inner"><div class="tips-content"><span></span></div></div></div>')
      first = false;
    }
    var w = $(this).outerWidth(true),
        h = $(this).outerHeight(true),
        y = $(this).offset().top,
        x = $(this).offset().left,
        tipsW = $('.tips-wrap').width() / 2 - w / 2,
        tipsH = $('.tips-wrap').height();
        txt = $(this).data('tips');
        console.log(y);
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
}