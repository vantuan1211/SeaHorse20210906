// // 一覧に表示するデータを再定義
// var wldata = WLdata;
// var teamlist = Teamist;
// console.log(Teamist);
// // 追加するHTMLを宣言
// var html = "<tr>\
//                 <td>\
//                     <img class=\"logo\" id=\"theImg\" src=\"https://www.bleague.jp/files/user/common/img/logo/s/${Logo}.png\">\
//                     <span class=\"pc\">${TeamNameJ}</span>\
//                     <span class=\"sp\">${TeamShortNameJ}</span>\
//                 </td>\
//                 <td>${WinningCount}</td>\
//                 <td>${LosingCount}</td>\
//                 <td>${RestGameCount}</td>\
//                 <td>${WinningRate}</td>\
//                 <td>${TotalPoints}</td>\
//                 <td>${LosingPoints}</td>\
//                 <td>${GoalDefference}</td>\
//             </tr>";
            
            
// //データ順ソート処理
// wldata.sort(function(data1, data2){
//     if( data1['WinningRate'] > data2['WinningRate'] ) return -1;
//     if( data1['WinningRate'] < data2['WinningRate'] ) return 1;
//     if( data1['WinningCount'] > data2['WinningCount'] ) return -1;
//     if( data1['WinningCount'] < data2['WinningCount'] ) return 1;
//     if( data1['TotalPoints'] > data2['TotalPoints'] ) return -1;
//     if( data1['TotalPoints'] < data2['TotalPoints'] ) return 1;
//     if( data1['GoalDefference'] > data2['GoalDefference'] ) return -1;
//     if( data1['GoalDefference'] < data2['GoalDefference'] ) return 1;
//     return 0;
// });
    
    
// // データを整形して表に追加
// var viewList = [];
// $.each(wldata, function(i, val) {
//     val['Logo'] = teamlist[val['TeamID']][3].toLowerCase();;
//     val['WinningRate'] = val['WinningRate'].toFixed(3);
//     val['GoalDefference'] = val['TotalPoints'] - val['LosingPoints'];
//     $.tmpl(html, val).appendTo("#club_standing_table");

// });


// // 処理実施
// init();