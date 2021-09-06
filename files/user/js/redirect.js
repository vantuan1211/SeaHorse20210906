
/***** リダイレクト設定 *****/

// 本番ドメイン
var main_host = "go-seahorses.jp";
// DNS切替前ドメイン
var dns_host = "11-go-seahorses-club-bleague.r-cms.jp";

// アクセスしたURL
var access_url = location.href;
var access_host = location.host;


/*** .htmlを消してアクセスさせる ***/
// 本番又はDNS切替前のドメインかをチェック
if (access_host == main_host || access_host == dns_host ) { 

    // URLに.htmlがついているかチェック
    if(access_url.lastIndexOf('.html') > 0){

        // 例外処理
        // /schedule/を含んでいるときは除く
        if (access_url.lastIndexOf('schedule') < 0) {

            if(access_url.lastIndexOf('/index.html') > 0){
                // URLを置換
                new_url = access_url.replace('/index.html', '/');

            } else {

                // URLを置換
                new_url = access_url.replace('.html', '/');
            }

            // リダイレクトする
            location.href　=new_url;
        }
    }
}
