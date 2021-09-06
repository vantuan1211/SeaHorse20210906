// API取得先_開発環境
//const api_uri = "https://dev-api.bleague.jp/1.0";

// API取得先_本番環境
//const api_uri = "http://localhost/1.0";

// 共通ドメイン
const common_uri = "http://www.bleague.jp";

// 現在のシーズン年度
const now_season_year = 2017;
const now_season = now_season_year + "-" + (now_season_year+1-2000);

// ロゴ画像取得先
//const logo_uri = "https://www.bleague.jp/common/img/logo/s/";
//const logo_uri = "http://hot-factory.bleague.jp//common/img/logo/s/";

//const logo_m_uri = "https://www.bleague.jp/common/img/logo/m/";

//ロゴ画像取得先ロゴ画像用
const logo_club_uri = "/gadget/img/clublogo/" + now_season + "/";

//ロゴ背景黒画像取得先
//const logo_s_uri_bg_black = "https://www.bleague.jp/common/img/logo/bg-black/s/";
//const logo_m_uri_bg_black = "https://www.bleague.jp/common/img/logo/bg-black/m/";

// チケットサイトリンク_開発環境 {1}:clubCd, {2}:yyyyMMdd
// const ticket_site_uri = "http://btk-staging-1694978240.ap-northeast-1.elb.amazonaws.com/sales/{1}/{2}"

// チケットサイトリンク_本番環境 {1}:clubCd, {2}:yyyyMMdd
const ticket_site_uri = "https://bleague-ticket.jp/sales/{1}/{2}";

// 2017シーズンのチームデータ
const team_data_2017 =
{
  0: {  "TeamNameJ" : "レバンガ北海道",  "TeamID" : "rh",  "EventCode" : "2",  "League" : "B1",  "Area" : "東地区",  "Order1" : "1",  "Order2" : "1",  "Order3" : "1",  },
  1: {  "TeamNameJ" : "栃木ブレックス",  "TeamID" : "rt",  "EventCode" : "2",  "League" : "B1",  "Area" : "東地区",  "Order1" : "1",  "Order2" : "1",  "Order3" : "2",  },
  2: {  "TeamNameJ" : "千葉ジェッツ",  "TeamID" : "cj",  "EventCode" : "2",  "League" : "B1",  "Area" : "東地区",  "Order1" : "1",  "Order2" : "1",  "Order3" : "3",  },
  3: {  "TeamNameJ" : "アルバルク東京",  "TeamID" : "tt",  "EventCode" : "2",  "League" : "B1",  "Area" : "東地区",  "Order1" : "1",  "Order2" : "1",  "Order3" : "4",  },
  4: {  "TeamNameJ" : "サンロッカーズ渋谷",  "TeamID" : "ht",  "EventCode" : "2",  "League" : "B1",  "Area" : "東地区",  "Order1" : "1",  "Order2" : "1",  "Order3" : "5",  },
  5: {  "TeamNameJ" : "川崎ブレイブサンダース",  "TeamID" : "tk",  "EventCode" : "2",  "League" : "B1",  "Area" : "東地区",  "Order1" : "1",  "Order2" : "1",  "Order3" : "6",  },
  6: {  "TeamNameJ" : "横浜ビー・コルセアーズ",  "TeamID" : "yb",  "EventCode" : "2",  "League" : "B1",  "Area" : "中地区",  "Order1" : "1",  "Order2" : "2",  "Order3" : "1",  },
  7: {  "TeamNameJ" : "新潟アルビレックスBB",  "TeamID" : "na",  "EventCode" : "2",  "League" : "B1",  "Area" : "中地区",  "Order1" : "1",  "Order2" : "2",  "Order3" : "2",  },
  8: {  "TeamNameJ" : "富山グラウジーズ",  "TeamID" : "tg",  "EventCode" : "2",  "League" : "B1",  "Area" : "中地区",  "Order1" : "1",  "Order2" : "2",  "Order3" : "3",  },
  9: {  "TeamNameJ" : "三遠ネオフェニックス",  "TeamID" : "hh",  "EventCode" : "2",  "League" : "B1",  "Area" : "中地区",  "Order1" : "1",  "Order2" : "2",  "Order3" : "4",  },
  10: {  "TeamNameJ" : "シーホース三河",  "TeamID" : "am",  "EventCode" : "2",  "League" : "B1",  "Area" : "中地区",  "Order1" : "1",  "Order2" : "2",  "Order3" : "5",  },
  11: {  "TeamNameJ" : "名古屋ダイヤモンドドルフィンズ",  "TeamID" : "mn",  "EventCode" : "2",  "League" : "B1",  "Area" : "中地区",  "Order1" : "1",  "Order2" : "2",  "Order3" : "6",  },
  12: {  "TeamNameJ" : "滋賀レイクスターズ",  "TeamID" : "sl",  "EventCode" : "2",  "League" : "B1",  "Area" : "西地区",  "Order1" : "1",  "Order2" : "3",  "Order3" : "1",  },
  13: {  "TeamNameJ" : "京都ハンナリーズ",  "TeamID" : "kh",  "EventCode" : "2",  "League" : "B1",  "Area" : "西地区",  "Order1" : "1",  "Order2" : "3",  "Order3" : "2",  },
  14: {  "TeamNameJ" : "大阪エヴェッサ",  "TeamID" : "oe",  "EventCode" : "2",  "League" : "B1",  "Area" : "西地区",  "Order1" : "1",  "Order2" : "3",  "Order3" : "3",  },
  15: {  "TeamNameJ" : "西宮ストークス",  "TeamID" : "ns",  "EventCode" : "7",  "League" : "B1",  "Area" : "西地区",  "Order1" : "1",  "Order2" : "3",  "Order3" : "4",  },
  16: {  "TeamNameJ" : "島根スサノオマジック",  "TeamID" : "ss",  "EventCode" : "7",  "League" : "B1",  "Area" : "西地区",  "Order1" : "1",  "Order2" : "3",  "Order3" : "5",  },
  17: {  "TeamNameJ" : "琉球ゴールデンキングス",  "TeamID" : "rg",  "EventCode" : "2",  "League" : "B1",  "Area" : "西地区",  "Order1" : "1",  "Order2" : "3",  "Order3" : "6",  },
  18: {  "TeamNameJ" : "青森ワッツ",  "TeamID" : "aw",  "EventCode" : "7",  "League" : "B2",  "Area" : "東地区",  "Order1" : "2",  "Order2" : "1",  "Order3" : "1",  },
  19: {  "TeamNameJ" : "岩手ビッグブルズ",  "TeamID" : "ib",  "EventCode" : "7",  "League" : "B2",  "Area" : "東地区",  "Order1" : "2",  "Order2" : "1",  "Order3" : "2",  },
  20: {  "TeamNameJ" : "仙台89ERS",  "TeamID" : "se",  "EventCode" : "2",  "League" : "B2",  "Area" : "東地区",  "Order1" : "2",  "Order2" : "1",  "Order3" : "3",  },
  21: {  "TeamNameJ" : "秋田ノーザンハピネッツ",  "TeamID" : "an",  "EventCode" : "2",  "League" : "B2",  "Area" : "東地区",  "Order1" : "2",  "Order2" : "1",  "Order3" : "4",  },
  22: {  "TeamNameJ" : "山形ワイヴァンズ",  "TeamID" : "py",  "EventCode" : "7",  "League" : "B2",  "Area" : "東地区",  "Order1" : "2",  "Order2" : "1",  "Order3" : "5",  },
  23: {  "TeamNameJ" : "福島ファイヤーボンズ",  "TeamID" : "ff",  "EventCode" : "7",  "League" : "B2",  "Area" : "東地区",  "Order1" : "2",  "Order2" : "1",  "Order3" : "6",  },
  24: {  "TeamNameJ" : "茨城ロボッツ",  "TeamID" : "ct",  "EventCode" : "7",  "League" : "B2",  "Area" : "中地区",  "Order1" : "2",  "Order2" : "2",  "Order3" : "1",  },
  25: {  "TeamNameJ" : "群馬クレインサンダーズ",  "TeamID" : "gc",  "EventCode" : "7",  "League" : "B2",  "Area" : "中地区",  "Order1" : "2",  "Order2" : "2",  "Order3" : "2",  },
  26: {  "TeamNameJ" : "アースフレンズ東京Z",  "TeamID" : "ez",  "EventCode" : "7",  "League" : "B2",  "Area" : "中地区",  "Order1" : "2",  "Order2" : "2",  "Order3" : "3",  },
  27: {  "TeamNameJ" : "金沢武士団",  "TeamID" : "ks",  "EventCode" : "7",  "League" : "B2",  "Area" : "中地区",  "Order1" : "2",  "Order2" : "2",  "Order3" : "4",  },
  28: {  "TeamNameJ" : "信州ブレイブウォリアーズ",  "TeamID" : "sw",  "EventCode" : "7",  "League" : "B2",  "Area" : "中地区",  "Order1" : "2",  "Order2" : "2",  "Order3" : "5",  },
  29: {  "TeamNameJ" : "Fイーグルス名古屋",  "TeamID" : "tn",  "EventCode" : "7",  "League" : "B2",  "Area" : "中地区",  "Order1" : "2",  "Order2" : "2",  "Order3" : "6",  },
  30: {  "TeamNameJ" : "バンビシャス奈良",  "TeamID" : "bn",  "EventCode" : "7",  "League" : "B2",  "Area" : "西地区",  "Order1" : "2",  "Order2" : "3",  "Order3" : "1",  },
  31: {  "TeamNameJ" : "広島ドラゴンフライズ",  "TeamID" : "hd",  "EventCode" : "7",  "League" : "B2",  "Area" : "西地区",  "Order1" : "2",  "Order2" : "3",  "Order3" : "2",  },
  32: {  "TeamNameJ" : "香川ファイブアローズ",  "TeamID" : "tf",  "EventCode" : "7",  "League" : "B2",  "Area" : "西地区",  "Order1" : "2",  "Order2" : "3",  "Order3" : "3",  },
  33: {  "TeamNameJ" : "愛媛オレンジバイキングス",  "TeamID" : "oh",  "EventCode" : "7",  "League" : "B2",  "Area" : "西地区",  "Order1" : "2",  "Order2" : "3",  "Order3" : "4",  },
  34: {  "TeamNameJ" : "ライジングゼファー福岡",  "TeamID" : "rf",  "EventCode" : "7",  "League" : "B2",  "Area" : "西地区",  "Order1" : "2",  "Order2" : "3",  "Order3" : "5",  },
  35: {  "TeamNameJ" : "熊本ヴォルターズ",  "TeamID" : "kv",  "EventCode" : "7",  "League" : "B2",  "Area" : "西地区",  "Order1" : "2",  "Order2" : "3",  "Order3" : "6",  },
  36: {  "TeamNameJ" : "東京サンレーヴス",  "TeamID" : "cr",  "EventCode" : "14",  "League" : "B3",  "Area" : "B3ファーストステージ",  "Order1" : "1",  "Order2" : "1",  "Order3" : "1",  },
  37: {  "TeamNameJ" : "大塚商会アルファーズ",  "TeamID" : "oa",  "EventCode" : "14",  "League" : "B3",  "Area" : "B3ファーストステージ",  "Order1" : "1",  "Order2" : "1",  "Order3" : "2",  },
  38: {  "TeamNameJ" : "鹿児島レブナイズ",  "TeamID" : "rk",  "EventCode" : "14",  "League" : "B3",  "Area" : "B3ファーストステージ",  "Order1" : "1",  "Order2" : "1",  "Order3" : "4",  },
  39: {  "TeamNameJ" : "埼玉ブロンコス",  "TeamID" : "sb",  "EventCode" : "14",  "League" : "B3",  "Area" : "B3ファーストステージ",  "Order1" : "1",  "Order2" : "1",  "Order3" : "5",  },
  40: {  "TeamNameJ" : "東京エクセレンス",  "TeamID" : "te",  "EventCode" : "14",  "League" : "B3",  "Area" : "B3ファーストステージ",  "Order1" : "1",  "Order2" : "2",  "Order3" : "1",  },
  41: {  "TeamNameJ" : "東京八王子トレインズ",  "TeamID" : "tr",  "EventCode" : "14",  "League" : "B3",  "Area" : "B3ファーストステージ",  "Order1" : "1",  "Order2" : "2",  "Order3" : "2",  },
  42: {  "TeamNameJ" : "東京サンレーヴス",  "TeamID" : "cr",  "EventCode" : "15",  "League" : "B3",  "Area" : "B3レギュラーシーズン",  "Order1" : "1",  "Order2" : "1",  "Order3" : "1",  },
  43: {  "TeamNameJ" : "大塚商会アルファーズ",  "TeamID" : "oa",  "EventCode" : "15",  "League" : "B3",  "Area" : "B3レギュラーシーズン",  "Order1" : "1",  "Order2" : "1",  "Order3" : "2",  },
  44: {  "TeamNameJ" : "アイシン・エィ・ダブリュ アレイオンズ安城",  "TeamID" : "aa",  "EventCode" : "15",  "League" : "B3",  "Area" : "B3レギュラーシーズン",  "Order1" : "1",  "Order2" : "1",  "Order3" : "3",  },
  45: {  "TeamNameJ" : "鹿児島レブナイズ",  "TeamID" : "rk",  "EventCode" : "15",  "League" : "B3",  "Area" : "B3レギュラーシーズン",  "Order1" : "1",  "Order2" : "1",  "Order3" : "4",  },
  46: {  "TeamNameJ" : "埼玉ブロンコス",  "TeamID" : "sb",  "EventCode" : "15",  "League" : "B3",  "Area" : "B3レギュラーシーズン",  "Order1" : "1",  "Order2" : "1",  "Order3" : "5",  },
  47: {  "TeamNameJ" : "東京海上日動ビッグブルー",  "TeamID" : "tb",  "EventCode" : "15",  "League" : "B3",  "Area" : "B3レギュラーシーズン",  "Order1" : "1",  "Order2" : "1",  "Order3" : "6",  },
  48: {  "TeamNameJ" : "東京エクセレンス",  "TeamID" : "te",  "EventCode" : "15",  "League" : "B3",  "Area" : "B3レギュラーシーズン",  "Order1" : "1",  "Order2" : "2",  "Order3" : "1",  },
  49: {  "TeamNameJ" : "東京八王子トレインズ",  "TeamID" : "tr",  "EventCode" : "15",  "League" : "B3",  "Area" : "B3レギュラーシーズン",  "Order1" : "1",  "Order2" : "2",  "Order3" : "2",  },
  50: {  "TeamNameJ" : "豊田合成スコーピオンズ",  "TeamID" : "ts",  "EventCode" : "15",  "League" : "B3",  "Area" : "B3レギュラーシーズン",  "Order1" : "1",  "Order2" : "2",  "Order3" : "3",  },
  51: {  "TeamNameJ" : "東京サンレーヴス",  "TeamID" : "cr",  "EventCode" : "16",  "League" : "B3",  "Area" : "B3ファイナルステージ",  "Order1" : "1",  "Order2" : "1",  "Order3" : "1",  },
  52: {  "TeamNameJ" : "大塚商会アルファーズ",  "TeamID" : "oa",  "EventCode" : "16",  "League" : "B3",  "Area" : "B3ファイナルステージ",  "Order1" : "1",  "Order2" : "1",  "Order3" : "2",  },
  53: {  "TeamNameJ" : "鹿児島レブナイズ",  "TeamID" : "rk",  "EventCode" : "16",  "League" : "B3",  "Area" : "B3ファイナルステージ",  "Order1" : "1",  "Order2" : "1",  "Order3" : "4",  },
  54: {  "TeamNameJ" : "埼玉ブロンコス",  "TeamID" : "sb",  "EventCode" : "16",  "League" : "B3",  "Area" : "B3ファイナルステージ",  "Order1" : "1",  "Order2" : "1",  "Order3" : "5",  },
  55: {  "TeamNameJ" : "東京エクセレンス",  "TeamID" : "te",  "EventCode" : "16",  "League" : "B3",  "Area" : "B3ファイナルステージ",  "Order1" : "1",  "Order2" : "2",  "Order3" : "1",  },
  56: {  "TeamNameJ" : "東京八王子トレインズ",  "TeamID" : "tr",  "EventCode" : "16",  "League" : "B3",  "Area" : "B3ファイナルステージ",  "Order1" : "1",  "Order2" : "2",  "Order3" : "2",  },
};

// クラブコード
const club_code_info = {
    "www.bleague.jp" : "bl",                 // B.LEAGUE公式
    "bleague.jp" : "bl",                 // B.LEAGUE公式
    "levanga.com" : "rh",              // レバンガ北海道
    "www.levanga.com" : "rh",              // レバンガ北海道
    "89ers.jp" : "se",                // 仙台89ERS
    "www.89ers.jp" : "se",                // 仙台89ERS
    "northern-happinets.com" : "an",            // 秋田ノーザンハピネッツ
    "www.northern-happinets.com" : "an",            // 秋田ノーザンハピネッツ
    "www.tochigibrex.jp" : "rt",      // 栃木ブレックス
    "tochigibrex.jp" : "rt",      // 栃木ブレックス
    "chibajets.jp" : "cj",            // 千葉ジェッツ
    "www.alvark-tokyo.jp" : "tt",                // アルバルク東京
    "alvark-tokyo.jp" : "tt",                // アルバルク東京
    "www.hitachi-sunrockers.co.jp" : "ht",              // サンロッカーズ渋谷
    "hitachi-sunrockers.co.jp" : "ht",              // サンロッカーズ渋谷
    "kawasaki-bravethunders.com" : "tk",              // 川崎ブレイブサンダース
    "b-corsairs.com" : "yb",           // 横浜ビー・コルセアーズ
    "albirex.com" : "na",              // 新潟アルビレックスBB
    "www.albirex.com" : "na",              // 新潟アルビレックスBB
    "grouses.jp" : "tg",              // 富山グラウジーズ
    "www.grouses.jp" : "tg",              // 富山グラウジーズ
    "www.neophoenix.jp" : "hh",           // 三遠ネオフェニックス
    "go-seahorses.jp" : "am",       // シーホース三河
    "www.go-seahorses.jp" : "am",       // シーホース三河
    "nagoya-dolphins.jp" : "mn",   // 名古屋ダイヤモンドドルフィンズ
    "www.nagoya-dolphins.jp" : "mn",   // 名古屋ダイヤモンドドルフィンズ
    "lakestars.net" : "sl",            // 滋賀レイクスターズ
    "www.lakestars.net" : "sl",            // 滋賀レイクスターズ
    "hannaryz.jp" : "kh",             // 京都ハンナリーズ
    "evessa.com" : "oe",               // 大阪エヴェッサ
    "www.evessa.com" : "oe",               // 大阪エヴェッサ
    "goldenkings.jp" : "rg",          // 琉球ゴールデンキングス
    "www.goldenkings.jp" : "rg",          // 琉球ゴールデンキングス
    "aomori-wats.jp" : "aw",          // 青森ワッツ
    "www.aomori-wats.jp" : "aw",          // 青森ワッツ
    "bigbulls.jp" : "ib",             // 岩手ビッグブルズ
    "www.bigbulls.jp" : "ib",             // 岩手ビッグブルズ
    "www.wyverns.jp" : "py",              // 山形ワイヴァンズ
    "firebonds.jp" : "ff",            // 福島ファイヤーボンズ
    "www.firebonds.jp" : "ff",            // 福島ファイヤーボンズ
    "ibarakirobots.win" : "ct",        // 茨城ロボッツ
    "www.ibarakirobots.win" : "ct",        // 茨城ロボッツ
    "g-crane-thunders.jp" : "gc",     // 群馬クレインサンダーズ
    "www.g-crane-thunders.jp" : "gc",     // 群馬クレインサンダーズ
    "tokyo-excellence.jp" : "te",     // 東京エクセレンス
    "www.tokyo-excellence.jp" : "te",     // 東京エクセレンス
    "www.eftokyo-z.jp" : "ez",            // アースフレンズ東京Z
    "eftokyo-z.jp" : "ez",            // アースフレンズ東京Z
    "b-warriors.net" : "sw",           // 信州ブレイブウォリアーズ
    "www.b-warriors.net" : "sw",           // 信州ブレイブウォリアーズ
    "fightingeagles.jp" : "tn",       // Fイーグルス名古屋
    "www.fightingeagles.jp" : "tn",       // Fイーグルス名古屋
    "storks.jp" : "ns",               // 西宮ストークス
    "www.storks.jp" : "ns",               // 西宮ストークス
    "www.bambitious.jp" : "bn",           // バンビシャス奈良
    "bambitious.jp" : "bn",           // バンビシャス奈良
    "susanoo-m.com" : "ss",            // 島根スサノオマジック
    "www.susanoo-m.com" : "ss",            // 島根スサノオマジック
    "hiroshimadragonflies.com" : "hd", // 広島ドラゴンフライズ
    "www.hiroshimadragonflies.com" : "hd", // 広島ドラゴンフライズ
    "fivearrows.jp" : "tf",           // 香川ファイブアローズ
    "www.fivearrows.jp" : "tf",           // 香川ファイブアローズ
    "orangevikings.jp" : "oh",           // 愛媛オレンジバイキングス
    "www.orangevikings.jp" : "oh",           // 愛媛オレンジバイキングス
    "www.volters.jp" : "kv",              // 熊本ヴォルターズ
    "volters.jp" : "kv",              // 熊本ヴォルターズ
    "rebnise.jp" : "rk",             // 鹿児島レブナイズ
    "www.rebnise.jp" : "rk",             // 鹿児島レブナイズ
    "samuraiz.jp" : "ks",  //金沢武士団
    "www.samuraiz.jp" : "ks", //金沢武士団
    "r-zephyr.com" : "rf", //ライジングゼファーフクオカ
    "www.r-zephyr.com" : "rf",//ライジングゼファーフクオカ
    "www.saitamabroncos.com":"sb",
    "saitamabroncos.com":"sb",
    "www.otsuka-alphas.net":"oa",
    "otsuka-alphas.net":"oa",
    "bigblue-tokyo.com":"tb",
    "www.bigblue-tokyo.com":"tb",
    "www.tokyo-cinq-reves.jp":"cr",
    "tokyo-cinq-reves.jp":"cr",
    "trains.co.jp":"tr",
    "www.trains.co.jp":"tr",
    "www.aisin-aw.co.jp/sports/areions/":"aa",
    "aisin-aw.co.jp/sports/areions/":"aa",
    "www.toyoda-gosei.co.jp/sports/scorpions/":"ts",
    "toyoda-gosei.co.jp/sports/scorpions/":"ts",
    "hot-factory.bleague.jp" : "oe",             //テスト
    ".s1" : "bl",  // B.LEAGUE公式
    ".s4" : "rh",  // レバンガ北海道
    ".s5" : "se",  // 仙台89ERS
    ".s6" : "an",  // 秋田ノーザンハピネッツ
    ".s7" : "rt",  // 栃木ブレックス
    ".s8" : "cj",  // 千葉ジェッツ
    ".s9" : "tt",  // アルバルク東京
    ".s10" : "ht", // サンロッカーズ渋谷
    ".s11" : "tk", // 川崎ブレイブサンダース
    ".s12" : "yb", // 横浜ビー・コルセアーズ
    ".s13" : "na", // 新潟アルビレックスBB
    ".s14" : "tg", // 富山グラウジーズ
    ".s15" : "hh", // 三遠ネオフェニックス
    ".s16" : "am", // シーホース三河
    ".s17" : "mn", // 名古屋ダイヤモンドドルフィンズ
    ".s18" : "sl", // 滋賀レイクスターズ
    ".s19" : "kh", // 京都ハンナリーズ
    ".s20" : "oe", // 大阪エヴェッサ
    ".s21" : "rg", // 琉球ゴールデンキングス
    ".s22" : "aw", // 青森ワッツ
    ".s23" : "ib", // 岩手ビッグブルズ
    ".s24" : "py", // 山形ワイヴァンズ
    ".s25" : "ff", // 福島ファイヤーボンズ
    ".s26" : "ct", // 茨城ロボッツ
    ".s27" : "gc", // 群馬クレインサンダーズ
    ".s28" : "te", // 東京エクセレンス
    ".s29" : "ez", // アースフレンズ東京Z
    ".s30" : "sw", // 信州ブレイブウォリアーズ
    ".s31" : "tn", // Fイーグルス名古屋
    ".s32" : "ns", // 西宮ストークス
    ".s33" : "bn", // バンビシャス奈良
    ".s34" : "ss", // 島根スサノオマジック
    ".s35" : "hd", // 広島ドラゴンフライズ
    ".s36" : "tf", // 香川ファイブアローズ
    ".s37" : "oh", // 愛媛オレンジバイキングス
    ".s38" : "kv", // 熊本ヴォルターズ
    ".s39" : "rk",  // 鹿児島レブナイズ
    ".s40" : "oe",  // テスト
    ".s42" : "ks", //金沢武士団
    ".s43" : "rf" //ライジングゼファー福岡
  }

// typekit
const typekit_info =
  {
    "www.bleague.jp" : "https://use.typekit.net/jjz3fpm.js",                 // B.LEAGUE公式
    "levanga.com" : "https://use.typekit.net/jjz3fpm.js",              // レバンガ北海道
    "www.levanga.com" : "https://use.typekit.net/jjz3fpm.js",              // レバンガ北海道
    "89ers.jp" : "https://use.typekit.net/jjz3fpm.js",                // 仙台89ERS
    "www.89ers.jp" : "https://use.typekit.net/jjz3fpm.js",                // 仙台89ERS
    "northern-happinets.com" : "https://use.typekit.net/jjz3fpm.js",            // 秋田ノーザンハピネッツ
    "www.northern-happinets.com" : "https://use.typekit.net/jjz3fpm.js",            // 秋田ノーザンハピネッツ
    "tochigibrex.jp" : "https://use.typekit.net/jjz3fpm.js",      // 栃木ブレックス
    "www.tochigibrex.jp" : "https://use.typekit.net/jjz3fpm.js",      // 栃木ブレックス
    "chibajets.jp" : "https://use.typekit.net/jjz3fpm.js",            // 千葉ジェッツ
    "alvark-tokyo.jp" : "https://use.typekit.net/jjz3fpm.js",                // アルバルク東京
    "www.alvark-tokyo.jp" : "https://use.typekit.net/jjz3fpm.js",                // アルバルク東京
    "hitachi-sunrockers.co.jp" : "https://use.typekit.net/xlz7lgi.js",              // サンロッカーズ渋谷
    "www.hitachi-sunrockers.co.jp" : "https://use.typekit.net/xlz7lgi.js",              // サンロッカーズ渋谷
    "kawasaki-bravethunders.com" : "https://use.typekit.net/xlz7lgi.js",              // 川崎ブレイブサンダース
    "b-corsairs.com" : "https://use.typekit.net/xlz7lgi.js",           // 横浜ビー・コルセアーズ
    "albirex.com" : "https://use.typekit.net/xlz7lgi.js",              // 新潟アルビレックスBB
    "www.albirex.com" : "https://use.typekit.net/xlz7lgi.js",              // 新潟アルビレックスBB
    "grouses.jp" : "https://use.typekit.net/xlz7lgi.js",              // 富山グラウジーズ
    "www.grouses.jp" : "https://use.typekit.net/xlz7lgi.js",              // 富山グラウジーズ
    "www.neophoenix.jp" : "https://use.typekit.net/xlz7lgi.js",           // 三遠ネオフェニックス
    "go-seahorses.jp" : "https://use.typekit.net/tpc8qnh.js",       // シーホース三河
    "www.go-seahorses.jp" : "https://use.typekit.net/tpc8qnh.js",       // シーホース三河
    "nagoya-dolphins.jp" : "https://use.typekit.net/tpc8qnh.js",   // 名古屋ダイヤモンドドルフィンズ
    "www.nagoya-dolphins.jp" : "https://use.typekit.net/tpc8qnh.js",   // 名古屋ダイヤモンドドルフィンズ
    "lakestars.net" : "https://use.typekit.net/tpc8qnh.js",            // 滋賀レイクスターズ
    "www.lakestars.net" : "https://use.typekit.net/tpc8qnh.js",            // 滋賀レイクスターズ
    "hannaryz.jp" : "https://use.typekit.net/tpc8qnh.js",             // 京都ハンナリーズ
    "evessa.com" : "https://use.typekit.net/tpc8qnh.js",               // 大阪エヴェッサ
    "www.evessa.com" : "https://use.typekit.net/tpc8qnh.js",               // 大阪エヴェッサ
    "goldenkings.jp" : "https://use.typekit.net/tpc8qnh.js",          // 琉球ゴールデンキングス
    "www.goldenkings.jp" : "https://use.typekit.net/tpc8qnh.js",          // 琉球ゴールデンキングス
    "aomori-wats.jp" : "https://use.typekit.net/vtw4sjd.js",          // 青森ワッツ
    "www.aomori-wats.jp" : "https://use.typekit.net/vtw4sjd.js",          // 青森ワッツ
    "bigbulls.jp" : "https://use.typekit.net/vtw4sjd.js",             // 岩手ビッグブルズ
    "www.bigbulls.jp" : "https://use.typekit.net/vtw4sjd.js",             // 岩手ビッグブルズ
    "www.wyverns.jp" : "https://use.typekit.net/vtw4sjd.js",              // 山形ワイヴァンズ
    "firebonds.jp" : "https://use.typekit.net/vtw4sjd.js",            // 福島ファイヤーボンズ
    "www.firebonds.jp" : "https://use.typekit.net/vtw4sjd.js",            // 福島ファイヤーボンズ
    "ibarakirobots.win" : "https://use.typekit.net/vtw4sjd.js",        // 茨城ロボッツ
    "www.ibarakirobots.win" : "https://use.typekit.net/vtw4sjd.js",        // 茨城ロボッツ
    "g-crane-thunders.jp" : "https://use.typekit.net/vtw4sjd.js",     // 群馬クレインサンダーズ
    "www.g-crane-thunders.jp" : "https://use.typekit.net/vtw4sjd.js",     // 群馬クレインサンダーズ
    "tokyo-excellence.jp" : "https://use.typekit.net/gqq3rqv.js",     // 東京エクセレンス
    "www.tokyo-excellence.jp" : "https://use.typekit.net/gqq3rqv.js",     // 東京エクセレンス
    "www.eftokyo-z.jp" : "https://use.typekit.net/gqq3rqv.js",            // アースフレンズ東京Z
    "eftokyo-z.jp" : "https://use.typekit.net/gqq3rqv.js",            // アースフレンズ東京Z
    "b-warriors.net" : "https://use.typekit.net/gqq3rqv.js",           // 信州ブレイブウォリアーズ
    "www.b-warriors.net" : "https://use.typekit.net/gqq3rqv.js",           // 信州ブレイブウォリアーズ
    "fightingeagles.jp" : "https://use.typekit.net/gqq3rqv.js",       // Fイーグルス名古屋
    "www.fightingeagles.jp" : "https://use.typekit.net/gqq3rqv.js",       // Fイーグルス名古屋
    "storks.jp" : "https://use.typekit.net/gqq3rqv.js",               // 西宮ストークス
    "www.storks.jp" : "https://use.typekit.net/gqq3rqv.js",               // 西宮ストークス
    "bambitious.jp" : "https://use.typekit.net/gqq3rqv.js",           // バンビシャス奈良
    "www.bambitious.jp" : "https://use.typekit.net/gqq3rqv.js",           // バンビシャス奈良
    "susanoo-m.com" : "https://use.typekit.net/vbf5lps.js",            // 島根スサノオマジック
    "www.susanoo-m.com" : "https://use.typekit.net/vbf5lps.js",            // 島根スサノオマジック
    "hiroshimadragonflies.com" : "https://use.typekit.net/vbf5lps.js", // 広島ドラゴンフライズ
    "www.hiroshimadragonflies.com" : "https://use.typekit.net/vbf5lps.js", // 広島ドラゴンフライズ
    "fivearrows.jp" : "https://use.typekit.net/vbf5lps.js",           // 香川ファイブアローズ
    "www.fivearrows.jp" : "https://use.typekit.net/vbf5lps.js",           // 香川ファイブアローズ
    "orangevikings.jp" : "https://use.typekit.net/vbf5lps.js",           // 愛媛オレンジバイキングス
    "www.orangevikings.jp" : "https://use.typekit.net/vbf5lps.js",           // 愛媛オレンジバイキングス
    "volters.jp" : "https://use.typekit.net/vbf5lps.js",              // 熊本ヴォルターズ
    "www.volters.jp" : "https://use.typekit.net/vbf5lps.js",              // 熊本ヴォルターズ
    "rebnise.jp" : "https://use.typekit.net/vbf5lps.js",             // 鹿児島レブナイズ
    "www.rebnise.jp" : "https://use.typekit.net/vbf5lps.js",             // 鹿児島レブナイズ
    ".s1" : "https://use.typekit.net/jjz3fpm.js",  // B.LEAGUE公式
    ".s4" : "https://use.typekit.net/jjz3fpm.js",  // レバンガ北海道
    ".s5" : "https://use.typekit.net/jjz3fpm.js",  // 仙台89ERS
    ".s6" : "https://use.typekit.net/jjz3fpm.js",  // 秋田ノーザンハピネッツ
    ".s7" : "https://use.typekit.net/jjz3fpm.js",  // 栃木ブレックス
    ".s8" : "https://use.typekit.net/jjz3fpm.js",  // 千葉ジェッツ
    ".s9" : "https://use.typekit.net/jjz3fpm.js",  // アルバルク東京
    ".s10" :"https://use.typekit.net/xlz7lgi.js", // サンロッカーズ渋谷
    ".s11" : "https://use.typekit.net/xlz7lgi.js", // 川崎ブレイブサンダース
    ".s12" : "https://use.typekit.net/xlz7lgi.js", // 横浜ビー・コルセアーズ
    ".s13" : "https://use.typekit.net/xlz7lgi.js", // 新潟アルビレックスBB
    ".s14" : "https://use.typekit.net/xlz7lgi.js", // 富山グラウジーズ
    ".s15" : "https://use.typekit.net/xlz7lgi.js", // 三遠ネオフェニックス
    ".s16" : "https://use.typekit.net/tpc8qnh.js", // シーホース三河
    ".s17" : "https://use.typekit.net/tpc8qnh.js", // 名古屋ダイヤモンドドルフィンズ
    ".s18" : "https://use.typekit.net/tpc8qnh.js", // 滋賀レイクスターズ
    ".s19" : "https://use.typekit.net/tpc8qnh.js", // 京都ハンナリーズ
    ".s20" : "https://use.typekit.net/tpc8qnh.js", // 大阪エヴェッサ
    ".s21" : "https://use.typekit.net/tpc8qnh.js", // 琉球ゴールデンキングス
    ".s22" : "https://use.typekit.net/vtw4sjd.js", // 青森ワッツ
    ".s23" : "https://use.typekit.net/vtw4sjd.js", // 岩手ビッグブルズ
    ".s24" : "https://use.typekit.net/vtw4sjd.js", // 山形ワイヴァンズ
    ".s25" : "https://use.typekit.net/vtw4sjd.js", // 福島ファイヤーボンズ
    ".s26" : "https://use.typekit.net/vtw4sjd.js", // 茨城ロボッツ
    ".s27" : "https://use.typekit.net/vtw4sjd.js", // 群馬クレインサンダーズ
    ".s28" : "https://use.typekit.net/gqq3rqv.js", // 東京エクセレンス
    ".s29" : "https://use.typekit.net/gqq3rqv.js", // アースフレンズ東京Z
    ".s30" : "https://use.typekit.net/gqq3rqv.js", // 信州ブレイブウォリアーズ
    ".s31" : "https://use.typekit.net/gqq3rqv.js", // Fイーグルス名古屋
    ".s32" : "https://use.typekit.net/gqq3rqv.js", // 西宮ストークス
    ".s33" : "https://use.typekit.net/gqq3rqv.js", // バンビシャス奈良
    ".s34" : "https://use.typekit.net/vbf5lps.js", // 島根スサノオマジック
    ".s35" : "https://use.typekit.net/vbf5lps.js", // 広島ドラゴンフライズ
    ".s36" : "https://use.typekit.net/vbf5lps.js", // 香川ファイブアローズ
    ".s37" : "https://use.typekit.net/vbf5lps.js", // 愛媛オレンジバイキングス
    ".s38" : "https://use.typekit.net/vbf5lps.js", // 熊本ヴォルターズ
    ".s39" : "https://use.typekit.net/vbf5lps.js", // 鹿児島レブナイズ
    ".s40" : "https://use.typekit.net/vbf5lps.js" // テスト

  }

// 曜日
const weekDays = {
    "0" : "SUN",
    "1" : "MON",
    "2" : "TUE",
    "3" : "WED",
    "4" : "THU",
    "5" : "FRI",
    "6" : "SAT"
};

// 年：プルダウン
const yearList = [2019, 2018, 2017, 2016];

const season_list = {
    "2016" : {"name" : "2016-17シーズン", "value" : "2016"},
    "2017" : {"name" : "2017-18シーズン", "value" : "2017"},
    "2018" : {"name" : "2018-19シーズン", "value" : "2018"},
    "2019" : {"name" : "2019-20シーズン", "value" : "2019"},
    "2020" : {"name" : "2020-21シーズン", "value" : "2020"},
    "2021" : {"name" : "2021-22シーズン", "value" : "2021"},
    "2022" : {"name" : "2022-23シーズン", "value" : "2022"},
    "2023" : {"name" : "2023-24シーズン", "value" : "2023"},
    "2024" : {"name" : "2024-25シーズン", "value" : "2024"},
    "2025" : {"name" : "2025-26シーズン", "value" : "2025"}
};

// 祝日情報
const publicHolidayDateList = [
  "20160101",
  "20160111",
  "20160211",
  "20160320",
  "20160321",
  "20160429",
  "20160503",
  "20160504",
  "20160505",
  "20160718",
  "20160811",
  "20160919",
  "20160922",
  "20161010",
  "20161103",
  "20161123",
  "20161223",
  "20170101",
  "20170102",
  "20170109",
  "20170211",
  "20170320",
  "20170429",
  "20170503",
  "20170504",
  "20170505",
  "20170717",
  "20170811",
  "20170717",
  "20170811",
  "20170918",
  "20170923",
  "20171103",
  "20171123",
  "20171223",
  "20180101",
  "20180108",
  "20180211",
  "20180212",
  "20180321",
  "20180429",
  "20180430",
  "20180503",
  "20180504",
  "20180505",
  "20180716",
  "20180811",
  "20180917",
  "20180923",
  "20180924",
  "20181008",
  "20181103",
  "20181123",
  "20181223",
  "20181224"
];

// ボックススコアソートキー
const sort_key_info = {
    1 : "PLAYERNO",
    2 : "STARTINGFLG",
    3 : "PLAYER",
    4 : "PO",
    5 : "PTS",
    6 : "3FGM",
    7 : "3FGA",
    8 : "3FGR",
    9 : "2FGM",
    10 : "2FGA",
    11 : "2FGR",
    12 : "FTM",
    13 : "FTA",
    14 : "FTR",
    15 : "F",
    16 : "FO",
    17 : "OR",
    18 : "DR",
    19 : "TOT",
    20 : "TO",
    21 : "AS",
    22 : "ST",
    23 : "BS",
    24 : "BSON",
    25 : "EFF",
    26 : "MIN",
    27 : "DUNK"
}

// タブ保持情報
const show_tab_info = {
  "PLAY BY PLAY" : "P",
  "BOX SCORE" : "B",
  "HIGHLIGHT" : "H",
  "GAME REPORT" : "R"
}

// スケジュール取得情報
const club_convention_info = {
    "levanga.com" : 2,                     // レバンガ北海道
    "www.levanga.com" : 2,                 // レバンガ北海道
    "89ers.jp" : 2,                        // 仙台89ERS
    "www.89ers.jp" : 2,                    // 仙台89ERS
    "northern-happinets.com" : 2,          // 秋田ノーザンハピネッツ
    "www.northern-happinets.com" : 2,      // 秋田ノーザンハピネッツ
    "tochigibrex.jp" : 2,                  // 栃木ブレックス
    "www.tochigibrex.jp" : 2,              // 栃木ブレックス
    "chibajets.jp" : 2,                    // 千葉ジェッツ
    "www.chibajets.jp" : 2,                // 千葉ジェッツ
    "alvark-tokyo.jp" : 2,                 // アルバルク東京
    "www.alvark-tokyo.jp" : 2,             // アルバルク東京
    "hitachi-sunrockers.co.jp" : 2,        // サンロッカーズ渋谷
    "www.hitachi-sunrockers.co.jp" : 2,    // サンロッカーズ渋谷
    "kawasaki-bravethunders.com" : 2,      // 川崎ブレイブサンダース
    "www.kawasaki-bravethunders.com" : 2,  // 川崎ブレイブサンダース
    "b-corsairs.com" : 2,                  // 横浜ビー・コルセアーズ
    "www.b-corsairs.com" : 2,              // 横浜ビー・コルセアーズ
    "albirex.com" : 2,                     // 新潟アルビレックスBB
    "www.albirex.com" : 2,                 // 新潟アルビレックスBB
    "grouses.jp" : 2,                      // 富山グラウジーズ
    "www.grouses.jp" : 2,                  // 富山グラウジーズ
    "neophoenix.jp" : 2,                   // 三遠ネオフェニックス
    "www.neophoenix.jp" : 2,               // 三遠ネオフェニックス
    "go-seahorses.jp" : 2,                 // シーホース三河
    "www.go-seahorses.jp" : 2,             // シーホース三河
    "nagoya-dolphins.jp" : 2,              // 名古屋ダイヤモンドドルフィンズ
    "www.nagoya-dolphins.jp" : 2,          // 名古屋ダイヤモンドドルフィンズ
    "lakestars.net" : 2,                   // 滋賀レイクスターズ
    "www.lakestars.net" : 2,               // 滋賀レイクスターズ
    "hannaryz.jp" : 2,                     // 京都ハンナリーズ
    "www.hannaryz.jp" : 2,                 // 京都ハンナリーズ
    "evessa.com" : 2,                      // 大阪エヴェッサ
    "www.evessa.com" : 2,                  // 大阪エヴェッサ
    "goldenkings.jp" : 2,                  // 琉球ゴールデンキングス
    "www.goldenkings.jp" : 2,              // 琉球ゴールデンキングス
    "aomori-wats.jp" : 7,                  // 青森ワッツ
    "www.aomori-wats.jp" : 7,              // 青森ワッツ
    "bigbulls.jp" : 7,                     // 岩手ビッグブルズ
    "www.bigbulls.jp" : 7,                 // 岩手ビッグブルズ
    "wyverns.jp" : 7,                      // 山形ワイヴァンズ
    "www.wyverns.jp" : 7,                  // 山形ワイヴァンズ
    "firebonds.jp" : 7,                    // 福島ファイヤーボンズ
    "www.firebonds.jp" : 7,                // 福島ファイヤーボンズ
    "ibarakirobots.win" : 7,               // 茨城ロボッツ
    "www.ibarakirobots.win" : 7,           // 茨城ロボッツ
    "g-crane-thunders.jp" : 7,             // 群馬クレインサンダーズ
    "www.g-crane-thunders.jp" : 7,         // 群馬クレインサンダーズ
    "tokyo-excellence.jp" : 7,             // 東京エクセレンス
    "www.tokyo-excellence.jp" : 7,         // 東京エクセレンス
    "eftokyo-z.jp" : 7,                    // アースフレンズ東京Z
    "www.eftokyo-z.jp" : 7,                // アースフレンズ東京Z
    "b-warriors.net" : 7,                  // 信州ブレイブウォリアーズ
    "www.b-warriors.net" : 7,              // 信州ブレイブウォリアーズ
    "fightingeagles.jp" : 7,               // Fイーグルス名古屋
    "www.fightingeagles.jp" : 7,           // Fイーグルス名古屋
  　"storks.jp" : 7,                       // 西宮ストークス
    "www.storks.jp" : 7,                   // 西宮ストークス
    "bambitious.jp" : 7,                   // バンビシャス奈良
    "www.bambitious.jp" : 7,               // バンビシャス奈良
    "susanoo-m.com" : 7,                   // 島根スサノオマジック
    "www.susanoo-m.com" : 7,               // 島根スサノオマジック
    "hiroshimadragonflies.com" : 7,        // 広島ドラゴンフライズ
    "www.hiroshimadragonflies.com" : 7,    // 広島ドラゴンフライズ
    "fivearrows.jp" : 7,                   // 香川ファイブアローズ
    "www.fivearrows.jp" : 7,               // 香川ファイブアローズ
    "orangevikings.jp" : 7,                // 愛媛オレンジバイキングス
    "www.orangevikings.jp" : 7,            // 愛媛オレンジバイキングス
    "volters.jp" : 7,                      // 熊本ヴォルターズ
  　"www.volters.jp" : 7,                  // 熊本ヴォルターズ
    "rebnise.jp" : 7,                      // 鹿児島レブナイズ
    "www.rebnise.jp" : 7,                  // 鹿児島レブナイズ
    "hot-factory.bleague.jp" : 2,          // テスト
    "www.hot-factory.bleague.jp" : 2,      // テスト
    ".s4" : 2,  // レバンガ北海道
    ".s5" : 2,  // 仙台89ERS
    ".s6" : 2,  // 秋田ノーザンハピネッツ
    ".s7" : 2,  // 栃木ブレックス
    ".s8" : 2,  // 千葉ジェッツ
    ".s9" : 2,  // アルバルク東京
    ".s10" : 2, // サンロッカーズ渋谷
    ".s11" : 2, // 川崎ブレイブサンダース
    ".s12" : 2, // 横浜ビー・コルセアーズ
    ".s13" : 2, // 新潟アルビレックスBB
    ".s14" : 2, // 富山グラウジーズ
    ".s15" : 2, // 三遠ネオフェニックス
    ".s16" : 2, // シーホース三河
    ".s17" : 2, // 名古屋ダイヤモンドドルフィンズ
    ".s18" : 2, // 滋賀レイクスターズ
    ".s19" : 2, // 京都ハンナリーズ
    ".s20" : 2, // 大阪エヴェッサ
    ".s21" : 2, // 琉球ゴールデンキングス
    ".s22" : 7, // 青森ワッツ
    ".s23" : 7, // 岩手ビッグブルズ
    ".s24" : 7, // 山形ワイヴァンズ
    ".s25" : 7, // 福島ファイヤーボンズ
    ".s26" : 7, // 茨城ロボッツ
    ".s27" : 7, // 群馬クレインサンダーズ
    ".s28" : 7, // 東京エクセレンス
    ".s29" : 7, // アースフレンズ東京Z
    ".s30" : 7, // 信州ブレイブウォリアーズ
    ".s31" : 7, // Fイーグルス名古屋
    ".s32" : 7, // 西宮ストークス
    ".s33" : 7, // バンビシャス奈良
    ".s34" : 7, // 島根スサノオマジック
    ".s35" : 7, // 広島ドラゴンフライズ
    ".s36" : 7, // 香川ファイブアローズ
    ".s37" : 7, // 愛媛オレンジバイキングス
    ".s38" : 7, // 熊本ヴォルターズ
    ".s39" : 7, // 鹿児島レブナイズ
    ".s40" : 2  // テスト
}

// スケジュール取得情報
const club_reague_area_info = {
    "levanga.com" : 2,              // レバンガ北海道
    "www.levanga.com" : 2,              // レバンガ北海道
    "89ers.jp" : 2,                // 仙台89ERS
    "www.89ers.jp" : 2,                // 仙台89ERS
    "northern-happinets.com" : 2,            // 秋田ノーザンハピネッツ
    "www.tochigibrex.jp" : 2,      // 栃木ブレックス
    "chibajets.jp" : 2,            // 千葉ジェッツ
    "www.alvark-tokyo.jp" : 2,                // アルバルク東京
    "www.hitachi-sunrockers.co.jp" : 2,              // サンロッカーズ渋谷
    "hitachi-sunrockers.co.jp" : 2,              // サンロッカーズ渋谷
    "kawasaki-bravethunders.com" : 2,              // 川崎ブレイブサンダース
    "b-corsairs.com" : 2,           // 横浜ビー・コルセアーズ
    "albirex.com" : 2,              // 新潟アルビレックスBB
    "www.albirex.com" : 2,              // 新潟アルビレックスBB
    "grouses.jp" : 2,              // 富山グラウジーズ
    "www.grouses.jp" : 2,              // 富山グラウジーズ
    "www.neophoenix.jp" : 2,           // 三遠ネオフェニックス
    "go-seahorses.jp" : 2,       // シーホース三河
    "nagoya-dolphins.jp" : 2,   // 名古屋ダイヤモンドドルフィンズ
    "www.nagoya-dolphins.jp" : 2,   // 名古屋ダイヤモンドドルフィンズ
    "www.lakestars.net" : 2,            // 滋賀レイクスターズ
    "hannaryz.jp" : 2,             // 京都ハンナリーズ
    "evessa.com" : 2,               // 大阪エヴェッサ
    "www.evessa.com" : 2,               // 大阪エヴェッサ
    "goldenkings.jp" : 2,          // 琉球ゴールデンキングス
    "www.goldenkings.jp" : 2,          // 琉球ゴールデンキングス
    "aomori-wats.jp" : 7,          // 青森ワッツ
    "www.aomori-wats.jp" : 7,          // 青森ワッツ
    "bigbulls.jp" : 7,             // 岩手ビッグブルズ
    "www.bigbulls.jp" : 7,             // 岩手ビッグブルズ
    "www.wyverns.jp" : 7,              // 山形ワイヴァンズ
    "firebonds.jp" : 7,            // 福島ファイヤーボンズ
    "www.firebonds.jp" : 7,            // 福島ファイヤーボンズ
    "ibarakirobots.win" : 7,        // 茨城ロボッツ
    "www.ibarakirobots.win" : 7,        // 茨城ロボッツ
    "g-crane-thunders.jp" : 7,     // 群馬クレインサンダーズ
    "tokyo-excellence.jp" : 7,     // 東京エクセレンス
    "eftokyo-z.jp" : 7,            // アースフレンズ東京Z
    "www.b-warriors.net" : 7,           // 信州ブレイブウォリアーズ
    "www.fightingeagles.jp" : 7,       // Fイーグルス名古屋
    "www.storks.jp" : 7,               // 西宮ストークス
    "www.bambitious.jp" : 7,           // バンビシャス奈良
    "bambitious.jp" : 7,           // バンビシャス奈良
    "www.susanoo-m.com" : 7,            // 島根スサノオマジック
    "hiroshimadragonflies.com" : 7, // 広島ドラゴンフライズ
    "www.hiroshimadragonflies.com" : 7, // 広島ドラゴンフライズ
    "fivearrows.jp" : 7,           // 香川ファイブアローズ
    "www.fivearrows.jp" : 7,           // 香川ファイブアローズ
    "orangevikings.jp" : 7,           // 愛媛オレンジバイキングス
    "www.orangevikings.jp" : 7,           // 愛媛オレンジバイキングス
    "www.volters.jp" : 7,              // 熊本ヴォルターズ
    "volters.jp" : 7,              // 熊本ヴォルターズ
    "www.rebnise.jp" : 7,             // 鹿児島レブナイズ
    "rebnise.jp" : 7,             // 鹿児島レブナイズ
    "www.northern-happinets.com" : 2,   // 秋田ノーザンハピネッツ
    "www.chibajets.jp" : 2,                 // 千葉ジェッツ
    "www.kawasaki-bravethunders.com" : 2,   // 川崎ブレイブサンダース
    "www.b-corsairs.com" : 2,                   // 横浜ビー・コルセアーズ
    "www.go-seahorses.jp" : 2,              // シーホース三河
    "www.hannaryz.jp" : 2,                   // 京都ハンナリーズ
    "www.g-crane-thunders.jp" : 7,          // 群馬クレインサンダーズ
    "www.tokyo-excellence.jp" : 7,          // 東京エクセレンス
    "www.eftokyo-z.jp" : 7,                 // アースフレンズ東京Z
    "tochigibrex.jp" : 2,      // 栃木ブレックス
    "alvark-tokyo.jp" : 2,                // アルバルク東京
    "neophoenix.jp" : 2,           // 三遠ネオフェニックス
    "lakestars.net" : 2,            // 滋賀レイクスターズ
   "wyverns.jp" : 7,              // 山形ワイヴァンズ
   "b-warriors.net" : 7,           // 信州ブレイブウォリアーズ
    "fightingeagles.jp" : 7,       // Fイーグルス名古屋
    "storks.jp" : 7,               // 西宮ストークス
    "susanoo-m.com" : 7,            // 島根スサノオマジック
    ".s4" : 2,  // レバンガ北海道
    ".s5" : 2,  // 仙台89ERS
    ".s6" : 2,  // 秋田ノーザンハピネッツ
    ".s7" : 2,  // 栃木ブレックス
    ".s8" : 2,  // 千葉ジェッツ
    ".s9" : 2,  // アルバルク東京
    ".s10" : 2, // サンロッカーズ渋谷
    ".s11" : 2, // 川崎ブレイブサンダース
    ".s12" : 2, // 横浜ビー・コルセアーズ
    ".s13" : 2, // 新潟アルビレックスBB
    ".s14" : 2, // 富山グラウジーズ
    ".s15" : 2, // 三遠ネオフェニックス
    ".s16" : 2, // シーホース三河
    ".s17" : 2, // 名古屋ダイヤモンドドルフィンズ
    ".s18" : 2, // 滋賀レイクスターズ
    ".s19" : 2, // 京都ハンナリーズ
    ".s20" : 2, // 大阪エヴェッサ
    ".s21" : 2, // 琉球ゴールデンキングス
    ".s22" : 7, // 青森ワッツ
    ".s23" : 7, // 岩手ビッグブルズ
    ".s24" : 7, // 山形ワイヴァンズ
    ".s25" : 7, // 福島ファイヤーボンズ
    ".s26" : 7, // 茨城ロボッツ
    ".s27" : 7, // 群馬クレインサンダーズ
    ".s28" : 7, // 東京エクセレンス
    ".s29" : 7, // アースフレンズ東京Z
    ".s30" : 7, // 信州ブレイブウォリアーズ
    ".s31" : 7, // Fイーグルス名古屋
    ".s32" : 7, // 西宮ストークス
    ".s33" : 7, // バンビシャス奈良
    ".s34" : 7, // 島根スサノオマジック
    ".s35" : 7, // 広島ドラゴンフライズ
    ".s36" : 7, // 香川ファイブアローズ
    ".s37" : 7, // 愛媛オレンジバイキングス
    ".s38" : 7, // 熊本ヴォルターズ
    ".s39" : 7,  // 鹿児島レブナイズ
    ".s40" : 2,  // テスト
    "dev-club.bleague.jp" : 10,  // 開発環境公開用テストサイト
    "hot-factory.bleague.jp" : 2 //　テスト
}

// 地区
const league_area_info = {
  "levanga.com" : "東地区",
  "www.levanga.com" : "東地区",
  "89ers.jp" : "東地区",
  "www.89ers.jp" : "東地区",
  "northern-happinets.com" : "東地区",
  "www.northern-happinets.com" : "東地区",
  "tochigibrex.jp" : "東地区",
  "www.tochigibrex.jp" : "東地区",
  "chibajets.jp" : "東地区",
  "www.chibajets.jp" : "東地区",
  "alvark-tokyo.jp" : "東地区",
  "www.alvark-tokyo.jp" : "東地区",
  "hitachi-sunrockers.co.jp" : "中地区",
  "www.hitachi-sunrockers.co.jp" : "中地区",
  "kawasaki-bravethunders.com" : "中地区",
  "www.kawasaki-bravethunders.com" : "中地区",
  "b-corsairs.com" : "中地区",
  "www.b-corsairs.com" : "中地区",
  "albirex.com" : "中地区",
  "www.albirex.com" : "中地区",
  "grouses.jp" : "中地区",
  "www.grouses.jp" : "中地区",
  "neophoenix.jp" : "中地区",
  "www.neophoenix.jp" : "中地区",
  "go-seahorses.jp" : "西地区",
  "www.go-seahorses.jp" : "西地区",
  "nagoya-dolphins.jp" : "西地区",
  "www.nagoya-dolphins.jp" : "西地区",
  "lakestars.net" : "西地区",
  "www.lakestars.net" : "西地区",
  "hannaryz.jp" : "西地区",
  "www.hannaryz.jp" : "西地区",
  "evessa.com" : "西地区",
  "www.evessa.com" : "西地区",
  "goldenkings.jp" : "西地区",
  "www.goldenkings.jp" : "西地区",
  "aomori-wats.jp" : "東地区",
  "www.aomori-wats.jp" : "東地区",
  "bigbulls.jp" : "東地区",
  "www.bigbulls.jp" : "東地区",
  "wyverns.jp" : "東地区",
  "www.wyverns.jp" : "東地区",
  "firebonds.jp" : "東地区",
  "www.firebonds.jp" : "東地区",
  "ibarakirobots.win" : "東地区",
  "www.ibarakirobots.win" : "東地区",
  "g-crane-thunders.jp" : "東地区",
  "www.g-crane-thunders.jp" : "東地区",
  "tokyo-excellence.jp" : "中地区",
  "www.tokyo-excellence.jp" : "中地区",
  "eftokyo-z.jp" : "中地区",
  "www.eftokyo-z.jp" : "中地区",
  "b-warriors.net" : "中地区",
  "www.b-warriors.net" : "中地区",
  "fightingeagles.jp" : "中地区",
  "www.fightingeagles.jp" : "中地区",
  "storks.jp" : "中地区",
  "www.storks.jp" : "中地区",
  "bambitious.jp" : "中地区",
  "www.bambitious.jp" : "中地区",
  "hiroshimadragonflies.com" : "西地区",
  "www.hiroshimadragonflies.com" : "西地区",
  "susanoo-m.com" : "西地区",
  "www.susanoo-m.com" : "西地区",
  "fivearrows.jp" : "西地区",
  "www.fivearrows.jp" : "西地区",
  "orangevikings.jp" : "西地区",
  "www.orangevikings.jp" : "西地区",
  "volters.jp" : "西地区",
  "www.volters.jp" : "西地区",
  "rebnise.jp" : "西地区",
  "www.rebnise.jp" : "西地区",
  "rebnise.jp" : "西地区",
  "www.rebnise.jp" : "西地区",
  "dev-club.bleague.jp" : "中地区",
  "hot-factory.bleague.jp" : "中地区", //　テスト
  ".s40" : "中地区"  // テスト
}

//リーグコード
const club_league =
  {
    "levanga.com" : "b1",                      // レバンガ北海道
    "www.levanga.com" : "b1",                  // レバンガ北海道
    "89ers.jp" : "b1",                         // 仙台89ERS
    "www.89ers.jp" : "b1",                     // 仙台89ERS
    "northern-happinets.com" : "b1",           // 秋田ノーザンハピネッツ
    "www.northern-happinets.com" : "b1",       // 秋田ノーザンハピネッツ
    "tochigibrex.jp" : "b1",                   // 栃木ブレックス
    "www.tochigibrex.jp" : "b1",               // 栃木ブレックス
    "chibajets.jp" : "b1",                     // 千葉ジェッツ
    "www.chibajets.jp" : "b1",                 // 千葉ジェッツ
    "alvark-tokyo.jp" : "b1",                  // アルバルク東京
    "www.alvark-tokyo.jp" : "b1",              // アルバルク東京
    "hitachi-sunrockers.co.jp" : "b1",         // サンロッカーズ渋谷
    "www.hitachi-sunrockers.co.jp" : "b1",     // サンロッカーズ渋谷
    "kawasaki-bravethunders.com" : "b1",       // 川崎ブレイブサンダース
    "www.kawasaki-bravethunders.com" : "b1",   // 川崎ブレイブサンダース
    "b-corsairs.com" : "b1",                   // 横浜ビー・コルセアーズ
    "www.b-corsairs.com" : "b1",               // 横浜ビー・コルセアーズ
    "albirex.com" : "b1",                      // 新潟アルビレックスBB
    "www.albirex.com" : "b1",                  // 新潟アルビレックスBB
    "grouses.jp" : "b1",                       // 富山グラウジーズ
    "www.grouses.jp" : "b1",                   // 富山グラウジーズ
    "neophoenix.jp" : "b1",                    // 三遠ネオフェニックス
    "www.neophoenix.jp" : "b1",                // 三遠ネオフェニックス
    "go-seahorses.jp" : "b1",                  // シーホース三河
    "www.go-seahorses.jp" : "b1",              // シーホース三河
    "nagoya-dolphins.jp" : "b1",               // 名古屋ダイヤモンドドルフィンズ
    "www.nagoya-dolphins.jp" : "b1",           // 名古屋ダイヤモンドドルフィンズ
    "lakestars.net" : "b1",                    // 滋賀レイクスターズ
    "www.lakestars.net" : "b1",                // 滋賀レイクスターズ
    "hannaryz.jp" : "b1",                      // 京都ハンナリーズ
    "www.hannaryz.jp" : "b1",                  // 京都ハンナリーズ
    "evessa.com" : "b1",                       // 大阪エヴェッサ
    "www.evessa.com" : "b1",                   // 大阪エヴェッサ
    "goldenkings.jp" : "b1",                   // 琉球ゴールデンキングス
    "www.goldenkings.jp" : "b1",               // 琉球ゴールデンキングス
    "aomori-wats.jp" : "b2",                   // 青森ワッツ
    "www.aomori-wats.jp" : "b2",               // 青森ワッツ
    "bigbulls.jp" : "b2",                      // 岩手ビッグブルズ
    "www.bigbulls.jp" : "b2",                  // 岩手ビッグブルズ
    "wyverns.jp" : "b2",                       // 山形ワイヴァンズ
    "www.wyverns.jp" : "b2",                   // 山形ワイヴァンズ
    "firebonds.jp" : "b2",                     // 福島ファイヤーボンズ
    "www.firebonds.jp" : "b2",                 // 福島ファイヤーボンズ
    "ibarakirobots.win" : "b2",                // 茨城ロボッツ
    "www.ibarakirobots.win" : "b2",            // 茨城ロボッツ
    "g-crane-thunders.jp" : "b2",              // 群馬クレインサンダーズ
    "www.g-crane-thunders.jp" : "b2",          // 群馬クレインサンダーズ
    "tokyo-excellence.jp" : "b2",              // 東京エクセレンス
    "www.tokyo-excellence.jp" : "b2",          // 東京エクセレンス
    "eftokyo-z.jp" : "b2",                     // アースフレンズ東京Z
    "www.eftokyo-z.jp" : "b2",                 // アースフレンズ東京Z
    "b-warriors.net" : "b2",                   // 信州ブレイブウォリアーズ
    "www.b-warriors.net" : "b2",               // 信州ブレイブウォリアーズ
    "fightingeagles.jp" : "b2",                // Fイーグルス名古屋
    "www.fightingeagles.jp" : "b2",            // Fイーグルス名古屋
    "storks.jp" : "b2",                        // 西宮ストークス
    "www.storks.jp" : "b2",                    // 西宮ストークス
    "bambitious.jp" : "b2",                    // バンビシャス奈良
    "www.bambitious.jp" : "b2",                // バンビシャス奈良
    "susanoo-m.com" : "b2",                    // 島根スサノオマジック
    "www.susanoo-m.com" : "b2",                // 島根スサノオマジック
    "hiroshimadragonflies.com" : "b2",         // 広島ドラゴンフライズ
    "www.hiroshimadragonflies.com" : "b2",     // 広島ドラゴンフライズ
    "fivearrows.jp" : "b2",                    // 香川ファイブアローズ
    "www.fivearrows.jp" : "b2",                // 香川ファイブアローズ
    "orangevikings.jp" : "b2",                 // 愛媛オレンジバイキングス
    "www.orangevikings.jp" : "b2",             // 愛媛オレンジバイキングス
    "volters.jp" : "b2",                       // 熊本ヴォルターズ
    "www.volters.jp" : "b2",                   // 熊本ヴォルターズ
    "rebnise.jp" : "b2",                       // 鹿児島レブナイズ
    "www.rebnise.jp" : "b2",                   // 鹿児島レブナイズ
    ".s4" : "b1",  // レバンガ北海道
    ".s5" : "b1",  // 仙台89ERS
    ".s6" : "b1",  // 秋田ノーザンハピネッツ
    ".s7" : "b1",  // 栃木ブレックス
    ".s8" : "b1",  // 千葉ジェッツ
    ".s9" : "b1",  // アルバルク東京
    ".s10" : "b1", // サンロッカーズ渋谷
    ".s11" : "b1", // 川崎ブレイブサンダース
    ".s12" : "b1", // 横浜ビー・コルセアーズ
    ".s13" : "b1", // 新潟アルビレックスBB
    ".s14" : "b1", // 富山グラウジーズ
    ".s15" : "b1", // 三遠ネオフェニックス
    ".s16" : "b1", // シーホース三河
    ".s17" : "b1", // 名古屋ダイヤモンドドルフィンズ
    ".s18" : "b1", // 滋賀レイクスターズ
    ".s19" : "b1", // 京都ハンナリーズ
    ".s20" : "b1", // 大阪エヴェッサ
    ".s21" : "b1", // 琉球ゴールデンキングス
    ".s22" : "b2", // 青森ワッツ
    ".s23" : "b2", // 岩手ビッグブルズ
    ".s24" : "b2", // 山形ワイヴァンズ
    ".s25" : "b2", // 福島ファイヤーボンズ
    ".s26" : "b2", // 茨城ロボッツ
    ".s27" : "b2", // 群馬クレインサンダーズ
    ".s28" : "b2", // 東京エクセレンス
    ".s29" : "b2", // アースフレンズ東京Z
    ".s30" : "b2", // 信州ブレイブウォリアーズ
    ".s31" : "b2", // Fイーグルス名古屋
    ".s32" : "b2", // 西宮ストークス
    ".s33" : "b2", // バンビシャス奈良
    ".s34" : "b2", // 島根スサノオマジック
    ".s35" : "b2", // 広島ドラゴンフライズ
    ".s36" : "b2", // 香川ファイブアローズ
    ".s37" : "b2", // 愛媛オレンジバイキングス
    ".s38" : "b2", // 熊本ヴォルターズ
    ".s39" : "b2",  // 鹿児島レブナイズ
    ".s40" : "b2"   // テスト
  }

// トラックラベル
const TRACK_LABELS = {
  "hh" : [
    {url:'/schedule', track_label:'hh_game'},
    {url:'/ticket', track_label:'hh_ticket'},
    {url:'/club', track_label:'hh_club'},
    {url:'/roster/players', track_label:'hh_playerlist'},
    {url:'/roster/tatsuya_suzuki.html', track_label:'tatsuya_suzuki'},
    {url:'/roster/shinnosuke_ohishi.html', track_label:'shinnosuke_ohishi'},
    {url:'/roster/atsuya_ota.html', track_label:'atsuya_ota'},
    {url:'/roster/junki_kano.html', track_label:'junki_kano'},
    {url:'/roster/robert_dozier.html', track_label:'robert_dozier'},
    {url:'/fanclub', track_label:'hh_funclub'},
    {url:'/standings', track_label:'hh_standing'},
    {url:'/news', track_label:'hh_news'},
    {url:'/game', track_label:'hh_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'hh_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'hh_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'hh_top'},
  ],
  "tt" : [ // A東京
    {url:'/schedule', track_label:'tt_game'},
    {url:'/ticket', track_label:'tt_ticket'},
    {url:'/club', track_label:'tt_club'},
    {url:'/roster/players', track_label:'tt_playerlist'},
    {url:'/roster/joji_takeuchi.html', track_label:'joji_takeuchi'},
    {url:'/roster/zack_baranski.html', track_label:'zack_baranski'},
    {url:'/roster/daiki_tanaka.html', track_label:'daiki_tanaka'},
    {url:'/roster/diante_garrett.html', track_label:'diante_garrett'},
    {url:'/roster/shohei_kikuchi.html', track_label:'shohei_kikuchi'},
    {url:'/fanclub', track_label:'tt_funclub'},
    {url:'/standings', track_label:'tt_standing'},
    {url:'/news', track_label:'tt_news'},
    {url:'/game', track_label:'tt_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'tt_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'tt_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'tt_top'},
  ],
  "rt" : [ // 栃木
    {url:'/schedule', track_label:'rt_game'},
    {url:'/ticket', track_label:'rt_ticket'},
    {url:'/club', track_label:'rt_club'},
    {url:'/roster/players', track_label:'rt_playerlist'},
    {url:'/roster/yuta_tabuse.html', track_label:'yuta_tabuse'},
    {url:'/roster/yusuke_endo.html', track_label:'yusuke_endo'},
    {url:'/roster/kosuke_takeuchi.html', track_label:'kosuke_takeuchi'},
    {url:'/roster/hironori_watanabe.html', track_label:'hironori_watanabe'},
    {url:'/roster/naoya_kumagae.html', track_label:'naoya_kumagae'},
    {url:'/fanclub', track_label:'rt_funclub'},
    {url:'/standings', track_label:'rt_standing'},
    {url:'/news', track_label:'rt_news'},
    {url:'/game', track_label:'rt_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'rt_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'rt_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'rt_top'},
  ],
  "cj" : [ // 千葉
    {url:'/schedule', track_label:'cj_game'},
    {url:'/ticket', track_label:'cj_ticket'},
    {url:'/club', track_label:'cj_club'},
    {url:'/roster/players', track_label:'cj_playerlist'},
    {url:'/roster/tomokazu_abe.html', track_label:'tomokazu_abe'},
    {url:'/roster/yuki_togashi.html', track_label:'yuki_togashi'},
    {url:'/roster/kosuke_ishii.html', track_label:'kosuke_ishii'},
    {url:'/roster/michael_parker.html', track_label:'michael_parker'},
    {url:'/roster/ryumo_ono.html', track_label:'ryumo_ono'},
    {url:'/fanclub', track_label:'cj_funclub'},
    {url:'/standings', track_label:'cj_standing'},
    {url:'/news', track_label:'cj_news'},
    {url:'/game', track_label:'cj_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'cj_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'cj_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'cj_top'},
  ],
  "tk" : [ // 川崎
    {url:'/schedule', track_label:'tk_game'},
    {url:'/ticket', track_label:'tk_ticket'},
    {url:'/club', track_label:'tk_club'},
    {url:'/roster/players', track_label:'tk_playerlist'},
    {url:'/roster/yuma_fujii.html', track_label:'yuma_fujii'},
    {url:'/roster/ryusei_shinoyama.html', track_label:'ryusei_shinoyama'},
    {url:'/roster/naoto_tsuji.html', track_label:'naoto_tsuji'},
    {url:'/roster/nick_fazekas.html', track_label:'nick_fazekas'},
    {url:'/roster/yuya_nagayoshi.html', track_label:'yuya_nagayoshi'},
    {url:'/fanclub', track_label:'tk_funclub'},
    {url:'/standings', track_label:'tk_standing'},
    {url:'/news', track_label:'tk_news'},
    {url:'/game', track_label:'tk_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'tk_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'tk_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'tk_top'},
  ],
  "am" : [ // 三河
    {url:'/schedule', track_label:'am_game'},
    {url:'/ticket', track_label:'am_ticket'},
    {url:'/club', track_label:'am_club'},
    {url:'/roster/players', track_label:'am_playerlist'},
    {url:'/roster/ryoma_hashimoto.html', track_label:'ryoma_hashimoto'},
    {url:'/roster/isaac_butts.html', track_label:'isaac_butts'},
    {url:'/roster/makoto_hiejima.html', track_label:'makoto_hiejima'},
    {url:'/roster/kosuke_kanamaru.html', track_label:'kosuke_kanamaru'},
    {url:'/roster/gavin_edwards.html', track_label:'gavin_edwards'},
    {url:'/fanclub', track_label:'am_funclub'},
    {url:'/standings', track_label:'am_standing'},
    {url:'/news', track_label:'am_news'},
    {url:'/game', track_label:'am_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'am_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'am_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'am_top'},
  ],
  "ht" : [ // 渋谷
    {url:'/schedule', track_label:'ht_game'},
    {url:'/ticket', track_label:'ht_ticket'},
    {url:'/club', track_label:'ht_club'},
    {url:'/roster/players', track_label:'ht_playerlist'},
    {url:'/roster/yuki_mitsuhara.html', track_label:'yuki_mitsuhara'},
    {url:'/roster/robert_sacre.html', track_label:'robert_sacre'},
    {url:'/roster/ira_brown.html', track_label:'ira_brown'},
    {url:'/roster/leo_vendrame.html', track_label:'leo_vendrame'},
    {url:'/roster/kenta_hirose.html', track_label:'kenta_hirose'},
    {url:'/fanclub', track_label:'ht_funclub'},
    {url:'/standings', track_label:'ht_standing'},
    {url:'/news', track_label:'ht_news'},
    {url:'/game', track_label:'ht_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'ht_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'ht_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'ht_top'},
  ],
  "na" : [ // 新潟
    {url:'/schedule', track_label:'na_game'},
    {url:'/ticket', track_label:'na_ticket'},
    {url:'/club', track_label:'na_club'},
    {url:'/roster/players', track_label:'na_playerlist'},
    {url:'/roster/tenyoku_you.html', track_label:'tenyoku_you'},
    {url:'/roster/kei_igarashi.html', track_label:'kei_igarashi'},
    {url:'/roster/kimitake_sato.html', track_label:'kimitake_sato'},
    {url:'/roster/clint_chapman.html', track_label:'clint_chapman'},
    {url:'/roster/davante_gardner.html', track_label:'davante_gardner'},
    {url:'/fanclub', track_label:'na_funclub'},
    {url:'/standings', track_label:'na_standing'},
    {url:'/news', track_label:'na_news'},
    {url:'/game', track_label:'na_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'na_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'na_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'na_top'},
  ],
  "mn" : [ // 名古屋
    {url:'/schedule', track_label:'mn_game'},
    {url:'/ticket', track_label:'mn_ticket'},
    {url:'/club', track_label:'mn_club'},
    {url:'/roster/players', track_label:'mn_playerlist'},
    {url:'/roster/jerome_tillman.html', track_label:'jerome_tillman'},
    {url:'/roster/tenketsu_harimoto.html', track_label:'tenketsu_harimoto'},
    {url:'/roster/taito_nakahigashi.html', track_label:'taito_nakahigashi'},
    {url:'/roster/takaya_sasayama.html', track_label:'takaya_sasayama'},
    {url:'/roster/justin_burrell.html', track_label:'justin_burrell'},
    {url:'/fanclub', track_label:'mn_funclub'},
    {url:'/standings', track_label:'mn_standing'},
    {url:'/news', track_label:'mn_news'},
    {url:'/game', track_label:'mn_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'mn_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'mn_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'mn_top'},
  ],
  "oe" : [ // 大阪
    {url:'/schedule', track_label:'oe_game'},
    {url:'/ticket', track_label:'oe_ticket'},
    {url:'/club', track_label:'oe_club'},
    {url:'/roster/players', track_label:'oe_playerlist'},
    {url:'/roster/shota_konno.html', track_label:'shota_konno'},
    {url:'/roster/takuya_hashimoto.html', track_label:'takuya_hashimoto'},
    {url:'/roster/josh_harrellson.html', track_label:'josh_harrellson'},
    {url:'/roster/shun_watanuki.html', track_label:'shun_watanuki'},
    {url:'/roster/hiroyuki_kinoshita.html', track_label:'hiroyuki_kinoshita'},
    {url:'/fanclub', track_label:'oe_funclub'},
    {url:'/standings', track_label:'oe_standing'},
    {url:'/news', track_label:'oe_news'},
    {url:'/game', track_label:'oe_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'oe_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'oe_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'oe_top'},
  ],
  "kh" : [ // 京都
    {url:'/schedule', track_label:'kh_game'},
    {url:'/ticket', track_label:'kh_ticket'},
    {url:'/club', track_label:'kh_club'},
    {url:'/roster/players', track_label:'kh_playerlist'},
    {url:'/roster/genki_kojima.html', track_label:'genki_kojima'},
    {url:'/roster/hayato_kawashima.html', track_label:'hayato_kawashima'},
    {url:'/roster/sunao_murakami.html', track_label:'sunao_murakami'},
    {url:'/roster/yusuke_okada.html', track_label:'yusuke_okada'},
    {url:'/roster/shingo_utsumi.html', track_label:'shingo_utsumi'},
    {url:'/fanclub', track_label:'kh_funclub'},
    {url:'/standings', track_label:'kh_standing'},
    {url:'/news', track_label:'kh_news'},
    {url:'/game', track_label:'kh_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'kh_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'kh_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'kh_top'},
  ],
  "rg" : [ // 琉球
    {url:'/schedule', track_label:'rg_game'},
    {url:'/ticket', track_label:'rg_ticket'},
    {url:'/club', track_label:'rg_club'},
    {url:'/roster/players', track_label:'rg_playerlist'},
    {url:'/roster/anthony_mchenry.html', track_label:'anthony_mchenry'},
    {url:'/roster/shigeyuki_kinjo.html', track_label:'shigeyuki_kinjo'},
    {url:'/roster/ryuichi_kishimoto.html', track_label:'ryuichi_kishimoto'},
    {url:'/roster/lamont_hamilton.html', track_label:'lamont_hamilton'},
    {url:'/roster/shuhei_kitagawa.html', track_label:'shuhei_kitagawa'},
    {url:'/fanclub', track_label:'rg_funclub'},
    {url:'/standings', track_label:'rg_standing'},
    {url:'/news', track_label:'rg_news'},
    {url:'/game', track_label:'rg_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'rg_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'rg_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'rg_top'},
  ],
  "rh" : [ // 北海道
    {url:'/schedule', track_label:'rh_game'},
    {url:'/ticket', track_label:'rh_ticket'},
    {url:'/club', track_label:'rh_club'},
    {url:'/roster/players', track_label:'rh_playerlist'},
    {url:'/roster/daniel_miller.html', track_label:'daniel_miller'},
    {url:'/roster/asahi_tajima.html', track_label:'asahi_tajima'},
    {url:'/roster/takehiko_orimo.html', track_label:'takehiko_orimo'},
    {url:'/roster/ryota_sakurai.html', track_label:'ryota_sakurai'},
    {url:'/roster/takanobu_nishikawa.html', track_label:'takanobu_nishikawa'},
    {url:'/fanclub', track_label:'rh_funclub'},
    {url:'/standings', track_label:'rh_standing'},
    {url:'/news', track_label:'rh_news'},
    {url:'/game', track_label:'rh_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'rh_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'rh_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'rh_top'},
  ],
  "se" : [ // 仙台
    {url:'/schedule', track_label:'se_game'},
    {url:'/ticket', track_label:'se_ticket'},
    {url:'/club', track_label:'se_club'},
    {url:'/roster/players', track_label:'se_playerlist'},
    {url:'/roster/kaito_ishikawa.html', track_label:'kaito_ishikawa'},
    {url:'/roster/takehiko_shimura.html', track_label:'takehiko_shimura'},
    {url:'/roster/takayuki_kumagai.html', track_label:'takayuki_kumagai'},
    {url:'/roster/tshilidzi_nephawe.html', track_label:'tshilidzi_nephawe'},
    {url:'/roster/masaharu_kataoka.html', track_label:'masaharu_kataoka'},
    {url:'/fanclub', track_label:'se_funclub'},
    {url:'/standings', track_label:'se_standing'},
    {url:'/news', track_label:'se_news'},
    {url:'/game', track_label:'se_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'se_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'se_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'se_top'},
  ],
  "an" : [ // 秋田
    {url:'/schedule', track_label:'an_game'},
    {url:'/ticket', track_label:'an_ticket'},
    {url:'/club', track_label:'an_club'},
    {url:'/roster/players', track_label:'an_playerlist'},
    {url:'/roster/deshawn_stephens.html', track_label:'deshawn_stephens'},
    {url:'/roster/scott_morrison.html', track_label:'scott_morrison'},
    {url:'/roster/ryosuke_shirahama.html', track_label:'ryosuke_shirahama'},
    {url:'/roster/seiya_ando.html', track_label:'seiya_ando'},
    {url:'/roster/shigehiro_taguchi.html', track_label:'shigehiro_taguchi'},
    {url:'/fanclub', track_label:'an_funclub'},
    {url:'/standings', track_label:'an_standing'},
    {url:'/news', track_label:'an_news'},
    {url:'/game', track_label:'an_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'an_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'an_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'an_top'},
  ],
  "yb" : [ // 横浜
    {url:'/schedule', track_label:'yb_game'},
    {url:'/ticket', track_label:'yb_ticket'},
    {url:'/club', track_label:'yb_club'},
    {url:'/roster/players', track_label:'yb_playerlist'},
    {url:'/roster/masashi_hosoya.html', track_label:'masashi_hosoya'},
    {url:'/roster/takuya_kawamura.html', track_label:'takuya_kawamura'},
    {url:'/roster/kazutaka_takashima.html', track_label:'kazutaka_takashima'},
    {url:'/roster/jeffrey_parmer.html', track_label:'jeffrey_parmer'},
    {url:'/roster/jason_washburn.html', track_label:'jason_washburn'},
    {url:'/fanclub', track_label:'yb_funclub'},
    {url:'/standings', track_label:'yb_standing'},
    {url:'/news', track_label:'yb_news'},
    {url:'/game', track_label:'yb_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'yb_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'yb_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'yb_top'},
  ],
  "tg" : [ // 富山
    {url:'/schedule', track_label:'tg_game'},
    {url:'/ticket', track_label:'tg_ticket'},
    {url:'/club', track_label:'tg_club'},
    {url:'/roster/players', track_label:'tg_playerlist'},
    {url:'/roster/takeshi_mito.html', track_label:'takeshi_mito'},
    {url:'/roster/naoki_uto.html', track_label:'naoki_uto'},
    {url:'/roster/ryo_yamazaki.html', track_label:'ryo_yamazaki'},
    {url:'/roster/masashi_joho.html', track_label:'masashi_joho'},
    {url:'/roster/sam_willard.html', track_label:'sam_willard'},
    {url:'/fanclub', track_label:'tg_funclub'},
    {url:'/standings', track_label:'tg_standing'},
    {url:'/news', track_label:'tg_news'},
    {url:'/game', track_label:'tg_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'tg_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'tg_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'tg_top'},
  ],
  "sl" : [ // 滋賀
    {url:'/schedule', track_label:'sl_game'},
    {url:'/ticket', track_label:'sl_ticket'},
    {url:'/club', track_label:'sl_club'},
    {url:'/roster/players', track_label:'sl_playerlist'},
    {url:'/roster/tomonobu_hasegawa.html', track_label:'tomonobu_hasegawa'},
    {url:'/roster/yutaka_yokoe.html', track_label:'yutaka_yokoe'},
    {url:'/roster/narito_namizato.html', track_label:'narito_namizato'},
    {url:'/roster/julian_mavunga.html', track_label:'julian_mavunga'},
    {url:'/roster/yusuke_karino.html', track_label:'yusuke_karino'},
    {url:'/fanclub', track_label:'sl_funclub'},
    {url:'/standings', track_label:'sl_standing'},
    {url:'/news', track_label:'sl_news'},
    {url:'/game', track_label:'sl_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'sl_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'sl_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'sl_top'},
  ],
  "aw" : [ // 青森
    {url:'/schedule', track_label:'aw_game'},
    {url:'/ticket', track_label:'aw_ticket'},
    {url:'/club', track_label:'aw_club'},
    {url:'/roster/players', track_label:'aw_playerlist'},
    {url:'/roster/alan_wiggins.html', track_label:'alan_wiggins'},
    {url:'/roster/kenta_tateyama.html', track_label:'kenta_tateyama'},
    {url:'/roster/daichi_shimoyama.html', track_label:'daichi_shimoyama'},
    {url:'/roster/keitaro_kimura.html', track_label:'keitaro_kimura'},
    {url:'/roster/toshio_kan.html', track_label:'toshio_kan'},
    {url:'/fanclub', track_label:'aw_funclub'},
    {url:'/standings', track_label:'aw_standing'},
    {url:'/news', track_label:'aw_news'},
    {url:'/game', track_label:'aw_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'aw_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'aw_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'aw_top'},
  ],
  "ib" : [ // 岩手
    {url:'/schedule', track_label:'ib_game'},
    {url:'/ticket', track_label:'ib_ticket'},
    {url:'/club', track_label:'ib_club'},
    {url:'/roster/players', track_label:'ib_playerlist'},
    {url:'/roster/donald_lawson.html', track_label:'donald_lawson'},
    {url:'/roster/nicchaeus_doaks.html', track_label:'nicchaeus_doaks'},
    {url:'/roster/makoto_sawaguchi.html', track_label:'makoto_sawaguchi'},
    {url:'/roster/shota_onodera.html', track_label:'shota_onodera'},
    {url:'/roster/koji_nagata.html', track_label:'koji_nagata'},
    {url:'/fanclub', track_label:'ib_funclub'},
    {url:'/standings', track_label:'ib_standing'},
    {url:'/news', track_label:'ib_news'},
    {url:'/game', track_label:'ib_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'ib_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'ib_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'ib_top'},
  ],
  "py" : [ // 山形
    {url:'/schedule', track_label:'py_game'},
    {url:'/ticket', track_label:'py_ticket'},
    {url:'/club', track_label:'py_club'},
    {url:'/roster/players', track_label:'py_playerlist'},
    {url:'/roster/yuji_takahashi.html', track_label:'yuji_takahashi'},
    {url:'/roster/masanari_sato.html', track_label:'masanari_sato'},
    {url:'/roster/shunto_murakami.html', track_label:'shunto_murakami'},
    {url:'/roster/yuta_kojima.html', track_label:'yuta_kojima'},
    {url:'/roster/markhuri_sanders_frison.html', track_label:'markhuri_sanders_frison'},
    {url:'/fanclub', track_label:'py_funclub'},
    {url:'/standings', track_label:'py_standing'},
    {url:'/news', track_label:'py_news'},
    {url:'/game', track_label:'py_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'py_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'py_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'py_top'},
  ],
  "ff" : [ // 福島
    {url:'/schedule', track_label:'ff_game'},
    {url:'/ticket', track_label:'ff_ticket'},
    {url:'/club', track_label:'ff_club'},
    {url:'/roster/players', track_label:'ff_playerlist'},
    {url:'/roster/shota_kanno.html', track_label:'shota_kanno'},
    {url:'/roster/shinya_murakami.html', track_label:'shinya_murakami'},
    {url:'/roster/kenya_tomori.html', track_label:'kenya_tomori'},
    {url:'/roster/cedric_bozeman.html', track_label:'cedric_bozeman'},
    {url:'/roster/nigel_spikes.html', track_label:'nigel_spikes'},
    {url:'/fanclub', track_label:'ff_funclub'},
    {url:'/standings', track_label:'ff_standing'},
    {url:'/news', track_label:'ff_news'},
    {url:'/game', track_label:'ff_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'ff_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'ff_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'ff_top'},
  ],
  "ct" : [ // 茨城
    {url:'/schedule', track_label:'ct_game'},
    {url:'/ticket', track_label:'ct_ticket'},
    {url:'/club', track_label:'ct_club'},
    {url:'/roster/players', track_label:'ct_playerlist'},
    {url:'/roster/shota_isshiki.html', track_label:'shota_isshiki'},
    {url:'/roster/rick_rickert.html', track_label:'rick_rickert'},
    {url:'/roster/josei_maniwai.html', track_label:'josei_maniwai'},
    {url:'/roster/yosuke_maeda.html', track_label:'yosuke_maeda'},
    {url:'/roster/seiji_kouno.html', track_label:'seiji_kouno'},
    {url:'/fanclub', track_label:'ct_funclub'},
    {url:'/standings', track_label:'ct_standing'},
    {url:'/news', track_label:'ct_news'},
    {url:'/game', track_label:'ct_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'ct_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'ct_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'ct_top'},
  ],
  "gc" : [ // 群馬
    {url:'/schedule', track_label:'gc_game'},
    {url:'/ticket', track_label:'gc_ticket'},
    {url:'/club', track_label:'gc_club'},
    {url:'/roster/players', track_label:'gc_playerlist'},
    {url:'/roster/masashi_obuchi.html', track_label:'masashi_obuchi'},
    {url:'/roster/thomas_kennedy.html', track_label:'thomas_kennedy'},
    {url:'/roster/abdullahi_kuso.html', track_label:'abdullahi_kuso'},
    {url:'/roster/hirotaka_kondo.html', track_label:'hirotaka_kondo'},
    {url:'/roster/shota_kurihara.html', track_label:'shota_kurihara'},
    {url:'/fanclub', track_label:'gc_funclub'},
    {url:'/standings', track_label:'gc_standing'},
    {url:'/news', track_label:'gc_news'},
    {url:'/game', track_label:'gc_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'gc_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'gc_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'gc_top'},
  ],
  "te" : [ // 東京EX
    {url:'/schedule', track_label:'te_game'},
    {url:'/ticket', track_label:'te_ticket'},
    {url:'/club', track_label:'te_club'},
    {url:'/roster/players', track_label:'te_playerlist'},
    {url:'/roster/hiroaki_tobita.html', track_label:'hiroaki_tobita'},
    {url:'/roster/tatsuya_nishiyama.html', track_label:'tatsuya_nishiyama'},
    {url:'/roster/ryan_stephan.html', track_label:'ryan_stephan'},
    {url:'/roster/luke_evans.html', track_label:'luke_evans'},
    {url:'/roster/takaki_ishida.html', track_label:'takaki_ishida'},
    {url:'/fanclub', track_label:'te_funclub'},
    {url:'/standings', track_label:'te_standing'},
    {url:'/news', track_label:'te_news'},
    {url:'/game', track_label:'te_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'te_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'te_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'te_top'},
  ],
  "ez" : [ // 東京Z
    {url:'/schedule', track_label:'ez_game'},
    {url:'/ticket', track_label:'ez_ticket'},
    {url:'/club', track_label:'ez_club'},
    {url:'/roster/players', track_label:'ez_playerlist'},
    {url:'/roster/shota_watanabe.html', track_label:'shota_watanabe'},
    {url:'/roster/shimon_takayama.html', track_label:'shimon_takayama'},
    {url:'/roster/shinji_akiba.html', track_label:'shinji_akiba'},
    {url:'/roster/takumi_masuko.html', track_label:'takumi_masuko'},
    {url:'/roster/katsushi_irabu.html', track_label:'katsushi_irabu'},
    {url:'/fanclub', track_label:'ez_funclub'},
    {url:'/standings', track_label:'ez_standing'},
    {url:'/news', track_label:'ez_news'},
    {url:'/game', track_label:'ez_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'ez_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'ez_top'},
  ],
  "sw" : [ // 信州
    {url:'/schedule', track_label:'sw_game'},
    {url:'/ticket', track_label:'sw_ticket'},
    {url:'/club', track_label:'sw_club'},
    {url:'/roster/players', track_label:'sw_playerlist'},
    {url:'/roster/yosuke_saito.html', track_label:'yosuke_saito'},
    {url:'/roster/dai_suzuki.html', track_label:'dai_suzuki'},
    {url:'/roster/sho_uesugi.html', track_label:'sho_uesugi'},
    {url:'/roster/hiroki_furuhashi.html', track_label:'hiroki_furuhashi'},
    {url:'/roster/yasuhiko_wada.html', track_label:'yasuhiko_wada'},
    {url:'/fanclub', track_label:'sw_funclub'},
    {url:'/standings', track_label:'sw_standing'},
    {url:'/news', track_label:'sw_news'},
    {url:'/game', track_label:'sw_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'sw_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'sw_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'sw_top'},
  ],
  "tn" : [ // FE名古屋
    {url:'/schedule', track_label:'tn_game'},
    {url:'/ticket', track_label:'tn_ticket'},
    {url:'/club', track_label:'tn_club'},
    {url:'/roster/players', track_label:'tn_playerlist'},
    {url:'/roster/solomon_alabi.html', track_label:'solomon_alabi'},
    {url:'/roster/kohei_fukuzawa.html', track_label:'kohei_fukuzawa'},
    {url:'/roster/yuto_otsuka.html', track_label:'yuto_otsuka'},
    {url:'/roster/kei_sugimoto.html', track_label:'kei_sugimoto'},
    {url:'/roster/satoshi_kawai.html', track_label:'satoshi_kawai'},
    {url:'/fanclub', track_label:'tn_funclub'},
    {url:'/standings', track_label:'tn_standing'},
    {url:'/news', track_label:'tn_news'},
    {url:'/game', track_label:'tn_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'tn_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'tn_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'tn_top'},
  ],
  "ns" : [ // 西宮
    {url:'/schedule', track_label:'ns_game'},
    {url:'/ticket', track_label:'ns_ticket'},
    {url:'/club', track_label:'ns_club'},
    {url:'/roster/players', track_label:'ns_playerlist'},
    {url:'/roster/naoki_tani.html', track_label:'naoki_tani'},
    {url:'/roster/tadahiro_yanagawa.html', track_label:'tadahiro_yanagawa'},
    {url:'/roster/larry_owens.html', track_label:'larry_owens'},
    {url:'/roster/noriaki_douhara.html', track_label:'noriaki_douhara'},
    {url:'/roster/jun_taniguchi.html', track_label:'jun_taniguchi'},
    {url:'/fanclub', track_label:'ns_funclub'},
    {url:'/standings', track_label:'ns_standing'},
    {url:'/news', track_label:'ns_news'},
    {url:'/game', track_label:'ns_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'ns_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'ns_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'ns_top'},
  ],
  "bn" : [ // 奈良
    {url:'/schedule', track_label:'bn_game'},
    {url:'/ticket', track_label:'bn_ticket'},
    {url:'/club', track_label:'bn_club'},
    {url:'/roster/players', track_label:'bn_playerlist'},
    {url:'/roster/atsunobu_hirao.html', track_label:'atsunobu_hirao'},
    {url:'/roster/shuhei_komatsu.html', track_label:'shuhei_komatsu'},
    {url:'/roster/daiki_terashita.html', track_label:'daiki_terashita'},
    {url:'/roster/jumpei_honda.html', track_label:'jumpei_honda'},
    {url:'/roster/andy_ogide.html', track_label:'andy_ogide'},
    {url:'/fanclub', track_label:'bn_funclub'},
    {url:'/standings', track_label:'bn_standing'},
    {url:'/news', track_label:'bn_news'},
    {url:'/game', track_label:'bn_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'bn_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'bn_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'bn_top'},
  ],
  "ss" : [ // 島根
    {url:'/schedule', track_label:'ss_game'},
    {url:'/ticket', track_label:'ss_ticket'},
    {url:'/club', track_label:'ss_club'},
    {url:'/roster/players', track_label:'ss_playerlist'},
    {url:'/roster/tatsuhiro_yokoo.html', track_label:'tatsuhiro_yokoo'},
    {url:'/roster/edward_yamamoto.html', track_label:'edward_yamamoto'},
    {url:'/roster/jun_abe.html', track_label:'jun_abe'},
    {url:'/roster/josh_davis.html', track_label:'josh_davis'},
    {url:'/roster/keisuke_takabatake.html', track_label:'keisuke_takabatake'},
    {url:'/fanclub', track_label:'ss_funclub'},
    {url:'/standings', track_label:'ss_standing'},
    {url:'/news', track_label:'ss_news'},
    {url:'/game', track_label:'ss_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'ss_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'ss_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'ss_top'},
  ],
  "hd" : [ // 広島
    {url:'/schedule', track_label:'hd_game'},
    {url:'/ticket', track_label:'hd_ticket'},
    {url:'/club', track_label:'hd_club'},
    {url:'/roster/players', track_label:'hd_playerlist'},
    {url:'/roster/seiji_ikaruga.html', track_label:'seiji_ikaruga'},
    {url:'/roster/seiya_tanaka.html', track_label:'seiya_tanaka'},
    {url:'/roster/connor_lammert.html', track_label:'connor_lammert'},
    {url:'/roster/daiji_yamada.html', track_label:'daiji_yamada'},
    {url:'/roster/shogo_asayama.html', track_label:'shogo_asayama'},
    {url:'/fanclub', track_label:'hd_funclub'},
    {url:'/standings', track_label:'hd_standing'},
    {url:'/news', track_label:'hd_news'},
    {url:'/game', track_label:'hd_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'hd_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'hd_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'hd_top'},
  ],
  "tf" : [ // 香川
    {url:'/schedule', track_label:'tf_game'},
    {url:'/ticket', track_label:'tf_ticket'},
    {url:'/club', track_label:'tf_club'},
    {url:'/roster/players', track_label:'tf_playerlist'},
    {url:'/roster/rintaro_tokunaga.html', track_label:'rintaro_tokunaga'},
    {url:'/roster/chehales_tapscott.html', track_label:'chehales_tapscott'},
    {url:'/roster/shuto_mizoguchi.html', track_label:'shuto_mizoguchi'},
    {url:'/roster/shinobu_kon.html', track_label:'shinobu_kon'},
    {url:'/roster/adrian_forbes.html', track_label:'adrian_forbes'},
    {url:'/fanclub', track_label:'tf_funclub'},
    {url:'/standings', track_label:'tf_standing'},
    {url:'/news', track_label:'tf_news'},
    {url:'/game', track_label:'tf_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'tf_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'tf_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'tf_top'},
  ],
  "oh" : [ // 愛媛
    {url:'/schedule', track_label:'oh_game'},
    {url:'/ticket', track_label:'oh_ticket'},
    {url:'/club', track_label:'oh_club'},
    {url:'/roster/players', track_label:'oh_playerlist'},
    {url:'/roster/tatsuhiko_toshino.html', track_label:'tatsuhiko_toshino'},
    {url:'/roster/yoshihiko_toshino.html', track_label:'yoshihiko_toshino'},
    {url:'/roster/taishi_kasahara.html', track_label:'taishi_kasahara'},
    {url:'/roster/yoshihumi_nakajima.html', track_label:'yoshihumi_nakajima'},
    {url:'/roster/joshua_crawford.html', track_label:'joshua_crawford'},
    {url:'/fanclub', track_label:'oh_funclub'},
    {url:'/standings', track_label:'oh_standing'},
    {url:'/news', track_label:'oh_news'},
    {url:'/game', track_label:'oh_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'oh_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'oh_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'oh_top'},
  ],
  "kv" : [ // 熊本
    {url:'/schedule', track_label:'kv_game'},
    {url:'/ticket', track_label:'kv_ticket'},
    {url:'/club', track_label:'kv_club'},
    {url:'/roster/players', track_label:'kv_playerlist'},
    {url:'/roster/takumi_furuno.html', track_label:'takumi_furuno'},
    {url:'/roster/mao_fukuda.html', track_label:'mao_fukuda'},
    {url:'/roster/shintaro_kobayashi.html', track_label:'shintaro_kobayashi'},
    {url:'/roster/joel_james.html', track_label:'joel_james'},
    {url:'/roster/yuji_kanbara.html', track_label:'yuji_kanbara'},
    {url:'/fanclub', track_label:'kv_funclub'},
    {url:'/standings', track_label:'kv_standing'},
    {url:'/news', track_label:'kv_news'},
    {url:'/game', track_label:'kv_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'kv_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'kv_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'kv_top'},
  ],
  "rk" : [ // 鹿児島
    {url:'/schedule', track_label:'rk_game'},
    {url:'/ticket', track_label:'rk_ticket'},
    {url:'/club', track_label:'rk_club'},
    {url:'/roster/players', track_label:'rk_playerlist'},
    {url:'/roster/kazuto_sameshima.html', track_label:'kazuto_sameshima'},
    {url:'/roster/chukwudiebere_maduabum.html', track_label:'chukwudiebere_maduabum'},
    {url:'/roster/ryuichiro_nakazono.html', track_label:'ryuichiro_nakazono'},
    {url:'/roster/keisuke_matsuzaki.html', track_label:'keisuke_matsuzaki'},
    {url:'/roster/tymell_murphy.html', track_label:'tymell_murphy'},
    {url:'/fanclub', track_label:'rk_funclub'},
    {url:'/standings', track_label:'rk_standing'},
    {url:'/news', track_label:'rk_news'},
    {url:'/game', track_label:'rk_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'rk_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'rk_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'rk_top'},
  ],
  "ks" : [ // 金沢
    {url:'/schedule', track_label:'ks_game'},
    {url:'/ticket', track_label:'ks_ticket'},
    {url:'/club', track_label:'ks_club'},
    {url:'/roster/players', track_label:'ks_playerlist'},
    {url:'/fanclub', track_label:'ks_funclub'},
    {url:'/standings', track_label:'ks_standing'},
    {url:'/news', track_label:'ks_news'},
    {url:'/game', track_label:'ks_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'ks_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'ks_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'ks_top'},
  ],
  "rf" : [ // 福岡
    {url:'/schedule', track_label:'rf_game'},
    {url:'/ticket', track_label:'rf_ticket'},
    {url:'/club', track_label:'rf_club'},
    {url:'/roster/players', track_label:'rf_playerlist'},
    {url:'/fanclub', track_label:'rf_funclub'},
    {url:'/standings', track_label:'rf_standing'},
    {url:'/news', track_label:'rf_news'},
    {url:'/game', track_label:'rf_flash', params:'TAB=P'},  // PLAY BY PLAY
    {url:'/game', track_label:'rf_flash', params:'TAB=B'},  // BOX SCORE
    {url:'/game', track_label:'rf_report', params:'TAB=R'},  // GAME REPORT
    {url:'/', track_label:'rf_top'},
  ],
};

//クラブURL
/*const club_url_info =
  {
    "bl" : "www.bleague.jp" ,                 // B.LEAGUE公式
    "rh" : "www.levanga.com",               // レバンガ北海道
    "se" : "www.89ers.jp",                 // 仙台89ERS
    "an" : "northern-happinets.com",             // 秋田ノーザンハピネッツ
    "rt" : "www.tochigibrex.jp",       // 栃木ブレックス
    "cj" : "chibajets.jp",             // 千葉ジェッツ
    "tt" : "www.alvark-tokyo.jp",                 // アルバルク東京
    "ht" : "www.hitachi-sunrockers.co.jp",               // サンロッカーズ渋谷
    "tk" : "kawasaki-bravethunders.com",               // 川崎ブレイブサンダース
    "yb" : "b-corsairs.com",            // 横浜ビー・コルセアーズ
    "na" : "www.albirex.com",               // 新潟アルビレックスBB
    "tg" : "grouses.jp",               // 富山グラウジーズ
    "hh" : "www.neophoenix.jp",            // 三遠ネオフェニックス
    "am" : "go-seahorses.jp",        // シーホース三河
    "mn" : "nagoya-dolphins.jp",    // 名古屋ダイヤモンドドルフィンズ
    "sl" : "www.lakestars.net",             // 滋賀レイクスターズ
    "kh" : "hannaryz.jp",              // 京都ハンナリーズ
    "oe" : "www.evessa.com",                // 大阪エヴェッサ
    "rg" : "goldenkings.jp",           // 琉球ゴールデンキングス
    "aw" : "aomori-wats.jp",           // 青森ワッツ
    "ib" : "www.bigbulls.jp",              // 岩手ビッグブルズ
    "py" : "www.wyverns.jp",               // 山形ワイヴァンズ
    "ff" : "firebonds.jp",             // 福島ファイヤーボンズ
    "ct" : "www.ibarakirobots.win",         // 茨城ロボッツ
    "gc" : "g-crane-thunders.jp",      // 群馬クレインサンダーズ
    "te" : "www.tokyo-excellence.jp",      // 東京エクセレンス
    "ez" : "eftokyo-z.jp",             // アースフレンズ東京Z
    "sw" : "www.b-warriors.net",            // 信州ブレイブウォリアーズ
//    "sw" : "b-warriors.net",            // 信州ブレイブウォリアーズ
    "tn" : "www.fightingeagles.jp",        // Fイーグルス名古屋
    "ns" : "www.storks.jp",                // 西宮ストークス
    "bn" : "bambitious.jp",            // バンビシャス奈良
    "ss" : "www.susanoo-m.com",             // 島根スサノオマジック
    "hd" : "hiroshimadragonflies.com",  // 広島ドラゴンフライズ
    "tf" : "www.fivearrows.jp",            // 香川ファイブアローズ
    "oh" : "orangevikings.jp",            // 愛媛オレンジバイキングス
    "kv" : "www.volters.jp",               // 熊本ヴォルターズ
    "rk" : "www.rebnise.jp",              // 鹿児島レブナイズ
    "ks" : "samuraiz.jp",              //金沢武士団
    "rf" : "r-zephyr.com",             //ライジングゼファー福岡
    "tr" : "trains.co.jp/",   //東京八王子ビートレインズ
    "ho" : "hot-factory.bleague.jp",   //hot-factory
    "lh" : "www.levanga.com",               // レバンガ北海道
    "ub" : "www.utsunomiyabrex.com",       // 宇都宮ブレックス
    "at" : "www.alvark-tokyo.jp",                 // アルバルク東京
    "sr" : "www.hitachi-sunrockers.co.jp",               // サンロッカーズ渋谷
    "kb" : "kawasaki-bravethunders.com",               // 川崎ブレイブサンダース
    "sn" : "www.neophoenix.jp",            // 三遠ネオフェニックス
    "sm" : "go-seahorses.jp",        // シーホース三河
    "dd" : "nagoya-dolphins.jp",    // 名古屋ダイヤモンドドルフィンズ
    "ls" : "www.lakestars.net",             // 滋賀レイクスターズ
    "yw" : "www.wyverns.jp",               // 山形ワイヴァンズ
    "ir" : "www.ibarakirobots.win",         // 茨城ロボッツ
    "ex" : "tokyo-excellence.jp",      // 東京エクセレンス
    "bw" : "www.b-warriors.net",            // 信州ブレイブウォリアーズ
    "fe" : "www.fightingeagles.jp",        // Fイーグルス名古屋
    "fa" : "www.fivearrows.jp",            // 香川ファイブアローズ
    "eo" : "orangevikings.jp",            // 愛媛オレンジバイキングス
    "hb" : "trains.co.jp",   //東京八王子ビートレインズ
  }*/