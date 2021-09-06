// チケットページのリダイレクト先の書き換え
$(function(){
    // aタグ内にhttps://www.bleague-ticket.jpがあるものをhttps://bleague-ticket.psrv.jp/へ変更する
    // クラブ用のチケットページへ遷移するURLをBリーグチケットのトップページへ遷移させる
    var oldDomain = 'www.bleague-ticket.jp';
    var newDomain = 'bleague-ticket.psrv.jp';
    var clubDomain = oldDomain + '/club';
    var newTopUrl = 'https://' + newDomain;
    var regExp = new RegExp(oldDomain, 'gi');
    var regExpClub = new RegExp(clubDomain, 'gi');
    var tickUrl = newTopUrl + '/sales/';

    // aタグのリンク先を置換する
    $('a').each(function() {
        if ($(this).length) {
            // リンク先を取得
            var href = $(this).attr('href');
            if (href) {
                // 旧ドメインを含む遷移先の場合
                if (href.match(oldDomain) || href.match(newDomain)) { 
                    if (href.match(regExpClub)) { // クラブ別チケットサイトの場合
                        $(this).attr('href', newTopUrl);
                    } else {  // それ以外                           
                        var newUrl = href.replace(regExp, newDomain);                            
                        // リンク先を変更
                        var splitUrl = newUrl.split('/');
                        var Fourth = splitUrl[splitUrl.length,4];
                        var Fifth = splitUrl[splitUrl.length,5];
                        //変数mediaIDsはヘッダフッタ(HEADタグなど)で定義
                        if (mediaIDs.indexOf(Fourth) >= 0){
                            // 存在する
                            newUrl = tickUrl + Fourth.toUpperCase() + '/' + Fifth;
                          }
                        $(this).attr('href', newUrl);                                                
                    }
                }
            }
        }
    });
    // aタグクリック時にURLを変更する
    // ※aタグの書き換えができなかった場合の保険
    $('a').on('click',function() {
        if ($(this).length) {
            // リンク先を取得
            var href = $(this).attr('href');
            if (href) {
                // 旧ドメインを含む遷移先の場合
                if (href.match(oldDomain)) { // クラブ別チケットサイトの場合
                    if (href.match(oldDomain) || href.match(newDomain)) { 
                        location.href = newTopUrl;
                    } else { // それ以外
                        var newUrl = href.replace(regExp, newDomain);
                        var splitUrl = newUrl.split('/');
                        var Fourth = splitUrl[splitUrl.length,4];
                        var Fifth = splitUrl[splitUrl.length,5];
                        //変数mediaIDsはヘッダフッタ(HEADタグなど)で定義
                        if (mediaIDs.indexOf(Fourth) >= 0){
                            // 存在する
                            newUrl = tickUrl + Fourth.toUpperCase() + '/' + Fifth;
                          }
                        location.href = newUrl;                           
                    }
                    return false;
                }
            }
        }
    });
});
