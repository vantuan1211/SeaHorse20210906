$j341(document).ready(function($) {

	$('.js-matchheight02').matchHeight();
	$('.js-matchheight01').matchHeight();

	var imagesMainVisualPc = ['nightgame-pct-main-visual01-pc.jpg', 'nightgame-pct-main-visual02-pc.jpg', 'nightgame-pct-main-visual03-pc.jpg'];
	var imagesMainVisualSp = ['nightgame-pct-main-visual01-sp.jpg', 'nightgame-pct-main-visual02-sp.jpg', 'nightgame-pct-main-visual03-sp.jpg'];
	if(viewport().width > 767){
		$('.js-change-imgPc').children().attr('src', '/files/user/_/game_201909-202004/images/' + imagesMainVisualPc[Math.floor(Math.random() * imagesMainVisualPc.length)])
	} else{
		$('.js-change-imgSp').children().attr('src', '/files/user/_/game_201909-202004/images/' + imagesMainVisualSp[Math.floor(Math.random() * imagesMainVisualSp.length)])
	}

	$('.box-concept__lstimg').infiniteslide({
		'speed': 50,
		'direction': 'left',
		'pauseonhover': false,
		'responsive': true,
		'clone': 5
	});

});//End -> ready method