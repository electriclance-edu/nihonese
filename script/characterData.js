/*
Hello! To anyone looking through the source code, this is just data storing the japanese symbols + their equivalent in english.
Currently, this is only being used to generate the reference tables seen in sections 2 and 3 of page1.html. As to why I didn't just manually make the tables, it's because in the future I will need a list of all the japanese characters for the exercises games. Since it'll take just as much effort manually making the character tables as making this data set, I just decided to make the data set and kill two birds with one stone.
Maybe a bit overcomplicated, but it was fun.
*/
var characterData = {
  katakana: [
    [
      ["n","ン","n is one of the exceptions to the consonant-vowel convention of the Japanese syllabary. <br>:)"], //n
      ["wa","ワ"], //wa
      ["wi","","SKIP"], //wa
      ["wu","","SKIP"], //wa
      ["we","","SKIP"], //wa
      ["wo","","SKIP"], //wo


      ["ra","ラ","Here's a guide on how to read the japanese r. <br><a href='https://www.youtube.com/watch?v=PS0svLNkrb8'> Video Link </a>"],
      ["ri","リ","Here's a guide on how to read the japanese r. <br><a href='https://www.youtube.com/watch?v=PS0svLNkrb8'> Video Link </a>"],
      ["ru","ル","Here's a guide on how to read the japanese r. <br><a href='https://www.youtube.com/watch?v=PS0svLNkrb8'> Video Link </a>"], //r
      ["re","レ","Here's a guide on how to read the japanese r. <br><a href='https://www.youtube.com/watch?v=PS0svLNkrb8'> Video Link </a>"],
      ["ro","ロ","Here's a guide on how to read the japanese r. <br><a href='https://www.youtube.com/watch?v=PS0svLNkrb8'> Video Link </a>"],

      ["ya","ヤ"],
      ["yi","","SKIP"],
      ["yu","ユ"], //y
      ["ye","","イェ"],
      ["yo","ヨ","This symbol is rarely ever used."],

      ["ka","カ"],
      ["ki","キ"],
      ["ku","ク"], //k
      ["ke","ケ"],
      ["ko","コ"],

      ["sa","サ"],
      ["shi","シ",":)"],
      ["su","ス"], //s
      ["se","セ"],
      ["so","ソ",":)"],

      ["ta","タ"],
      ["chi","チ","'Ti' can be written as 'chi' and 'ti', though is always read as 'chi'."],
      ["tsu","ツ","'Tu' can be written as 'tsu' and 'tu', though is always read as 'tsu'. <br>:)"], //t
      ["te","テ"],
      ["to","ト"],

      ["na","ナ"],
      ["ni","ニ"],
      ["nu","ヌ"], //n
      ["ne","ネ"],
      ["no","ノ",":)"],

      ["ma","マ"],
      ["mi","ミ"],
      ["mu","ム"], //m
      ["me","メ"],
      ["mo","モ"],

      ["ha","ハ"],
      ["hi","ヒ"],
      ["fu","フ","'フ' is read like a softer 'fu' and is usually labeled as fu."], //h
      ["he","ヘ"],
      ["ho","ホ"],

      ["a","ア"],
      ["i","イ"],
      ["u","ウ"],
      ["e","エ"],
      ["o","オ"]
    ],
    [
      ["cha","チャ"],
      ["chi","チ"],
      ["chu","チュ"],
      ["che","チェ"],
      ["cho","チョ"],

      ["ja","ジャ"],
      ["ji","ジ"],
      ["ju","ジュ"],
      ["je","ジェ"],
      ["jo","ジョ"],

      ["sha","シャ"],
      ["shi","シ"],
      ["shu","シュ"],
      ["she","シェ"],
      ["sho","ショ"],

      ["fa","ファ"],
      ["fi","フィ"],
      ["fu","フ"], //f
      ["fe","フェ"],
      ["fo","フォ"],

      ["va","ヴァ"],
      ["vi","ヴィ"],
      ["vu","ヴ"], //v
      ["ve","ヴェ"],
      ["vo","ヴォ"],

      ["tsa","ツァ"],
      ["tsi","ツィ"],
      ["tsu","ツ"], //ts
      ["tse","ツェ"],
      ["tso","ツォ"]
    ],
    [
      ["ga","ガ"],
      ["gi","ギ"],
      ["gu","グ"], //g
      ["ge","ゲ"],
      ["go","ゴ"],

      ["za","ザ"],
      ["ji","ジ"],
      ["zu","ズ"], //z
      ["ze","ゼ"],
      ["zo","ゾ"],

      ["da","ダ"],
      ["ji","ジ"],
      ["du","ヅ"], //d
      ["de","デ"],
      ["do","ド"],

      ["ba","バ"],
      ["bi","ビ"],
      ["bu","ブ"], //b
      ["be","ベ"],
      ["bo","ボ"],

      ["pa","パ"],
      ["pi","ピ"],
      ["pu","プ"], //p
      ["pe","ペ"],
      ["po","ポ"]
    ],
    [
      ["gya","ぎゃ"],
      ["gyu","ぎゅ"],
      ["gyo","ぎょ"],
      ["kya","きゃ"],
      ["kyu","きゅ"],
      ["kyo","きょ"],
      ["rya","りゃ"],
      ["ryu","りゅ"],
      ["ryo","りょ"],
      ["mya","みゃ"],
      ["myu","みゅ"],
      ["myo","みょ"],
      ["pya","ぴゃ"],
      ["pyu","みゅ"],
      ["pyo","みょ"],
      ["bya","びゃ"],
      ["byu","びゅ"],
      ["byo","びょ"],
      ["hya","ひゃ"],
      ["hyu","ひゅ"],
      ["hyo","ひょ"],
      ["nya","にゃ"],
      ["nyu","にゅ"],
      ["nyo","にょ"]
    ]
  ],
  hiragana: [
    [
      ["n","ん","n is one of the exceptions to the consonant-vowel convention of the Japanese syllabary."], //n
      ["wa","わ"], //wa
      ["wi","","SKIP"], //wa
      ["wu","","SKIP"], //wa
      ["we","","SKIP"], //wa
      ["wo","を"], //wo


      ["ra","ら","Here's a guide on how to read the japanese r. <br><a href='https://www.youtube.com/watch?v=PS0svLNkrb8'> Video Link </a>"],
      ["ri","り","Here's a guide on how to read the japanese r. <br><a href='https://www.youtube.com/watch?v=PS0svLNkrb8'> Video Link </a>"],
      ["ru","る","Here's a guide on how to read the japanese r. <br><a href='https://www.youtube.com/watch?v=PS0svLNkrb8'> Video Link </a>"], //r
      ["re","れ","Here's a guide on how to read the japanese r. <br><a href='https://www.youtube.com/watch?v=PS0svLNkrb8'> Video Link </a>"],
      ["ro","ろ","Here's a guide on how to read the japanese r. <br><a href='https://www.youtube.com/watch?v=PS0svLNkrb8'> Video Link </a>"],

      ["ya","や"],
      ["yi","",""],
      ["yu","ゆ"], //y
      ["ye","","SKIP"],
      ["yo","よ"],

      ["ka","か"],
      ["ki","き"],
      ["ku","く"], //k
      ["ke","け"],
      ["ko","こ"],

      ["sa","さ"],
      ["shi","し"],
      ["su","す"], //s
      ["se","せ"],
      ["so","そ"],

      ["ta","た"],
      ["chi","ち","'Ti' can be written as 'chi' and 'ti', though is always read as 'chi'."],
      ["tsu","つ","'Tu' can be written as 'tsu' and 'tu', though is always read as 'tsu'."], //t
      ["te","て"],
      ["to","と"],

      ["na","な"],
      ["ni","に"],
      ["nu","ぬ"], //n
      ["ne","ね"],
      ["no","の"],

      ["ma","ま"],
      ["mi","み"],
      ["mu","む"], //m
      ["me","め"],
      ["mo","も"],

      ["ha","は"],
      ["hi","ひ"],
      ["fu","ふ","'hu' is read like a softer 'fu' and is usually labeled as fu."], //h
      ["he","へ"],
      ["ho","ほ"],

      ["a","あ"],
      ["i","い"],
      ["u","う"],
      ["e","え"],
      ["o","お"]
    ],
    [
      ["cha","チャ"],
      ["chi","チ"],
      ["chu","チュ"],
      ["che","チェ"],
      ["cho","チョ"],

      ["ja","ジャ"],
      ["ji","ジ"],
      ["ju","ジュ"],
      ["je","ジェ"],
      ["jo","ジョ"],

      ["sha","シャ"],
      ["shi","シ"],
      ["shu","シュ"],
      ["she","シェ"],
      ["sho","ショ"],

      ["fa","ファ"],
      ["fi","フィ"],
      ["fu","フ"], //f
      ["fe","フェ"],
      ["fo","フォ"],

      ["va","ヴァ"],
      ["vi","ヴィ"],
      ["vu","ヴ"], //v
      ["ve","ヴェ"],
      ["vo","ヴォ"],

      ["tsa","ツァ"],
      ["tsi","ツィ"],
      ["tsu","ツ"], //ts
      ["tse","ツェ"],
      ["tso","ツォ"]
    ],
    [
      ["ga","が"],
      ["gi","ぎ"],
      ["gu","ぐ"], //g
      ["ge","げ"],
      ["go","ご"],

      ["za","ざ"],
      ["ji","じ"],
      ["zu","ず"], //z
      ["ze","ぜ"],
      ["zo","ぞ"],

      ["da","だ"],
      ["ji","ぢ"],
      ["du","づ"], //d
      ["de","で"],
      ["do","ど"],

      ["ba","ば"],
      ["bi","び"],
      ["bu","ぶ"], //b
      ["be","べ"],
      ["bo","ぼ"],

      ["pa","ぱ"],
      ["pi","ぴ"],
      ["pu","ぷ"], //p
      ["pe","ぺ"],
      ["po","ぽ"]
    ],
    [
      ["gya","ぎゃ"],
      ["gyu","ぎゅ"],
      ["gyo","ぎょ"],
      ["kya","きゃ"],
      ["kyu","きゅ"],
      ["kyo","きょ"],
      ["rya","りゃ"],
      ["ryu","りゅ"],
      ["ryo","りょ"],
      ["mya","みゃ"],
      ["myu","みゅ"],
      ["myo","みょ"],
      ["pya","ぴゃ"],
      ["pyu","ぴゅ"],
      ["pyo","ぴょ"],
      ["bya","びゃ"],
      ["byu","びゅ"],
      ["byo","びょ"],
      ["hya","ひゃ"],
      ["hyu","ひゅ"],
      ["hyo","ひょ"],
      ["nya","にゃ"],
      ["nyu","にゅ"],
      ["nyo","にょ"]
    ]
  ]
}
var wordList = []; //autogenerated from rawWordList by processWords();
var rawWordList = "あそこ,あそこ,,there (far away from speaker and listener),,pronoun,,\nあの,あの,,that ,,basic,,\nあまり,あまり,,not really/infrequently,,basic,,\nある,ある　,,to be/to exist (inanimate),,basic,,\nあれ,あれ,,that thing,,basic,,\nあんな,あんな,,that sort of/that kind of   ,,basic,,no\nいただきます,いただきます,,thank you/i recieve (this meal),,expression,,\nいっしょに,いっしょに,,to do something together,,adverb,,\nいつも,いつも,,always/habitually/usually,(combined with neg. verb) never,adverb,,\nいる,いる,,to be/to exist (animate),,basic,,\nうるさい,うるさい,,noisy/loud,shut up!,i adj,,\nおいしい,おいしい,,delicious,,i adj,,\nおかしい,おかしい,,funny/amusing/ridiculous,weird/strange/odd,i adj,,ho\nお前,おまえ,,you (masculine),,pronoun,,\nお腹,おなか,,stomach,,noun,,no\nお菓子,おかし,,confections/sweets/candy/cake,,noun,,no\nお金,おかね,,money,,noun,,\nお願い,おねがい,,wish (polite),please,noun/suru verb,,no\nか,か,,turns a sentence into a question,question particle,particle,,\nかっこいい,かっこいい,,cool,,i adj,,\nから,から,,shows the reason for an action,from,basic/particle,,\nかわいい,かわいい,,cute,,i adj,,\nきれい,きれい,,pretty,,na adj,,\nこいつ,こいつ,,this person/he/she,,pronoun,derogatory/familiar language,no\nこの,この,,this,,basic,,\nこれ,これ,,this thing,,basic,,\nこんな,こんな,,this sort of/this kind of,,basic,,no\nご飯,ごはん,,meal/boiled rice,,noun,,\nそこ,そこ,,there (near listener),,pronoun,,\nそして,そして,,thus,,conjunction/basic,,\nそな,そちら,そちら,that way,there,pronoun,,no\nその,その,,that (near second person),,basic,,\nそば,そば,,beside/nearby,,,,eh\nそれ,それ,,that thing (near second person),,basic,,\nそんな,そんな,,that sort of/that kind of (near to listener),,basic,,no\nだから,だから,,so/therefore/consequently/that is why,,conjunction/basic,,\nだろう,だろう,,i think/it seems/probably/right?,i thought you'd say that,expression ,,\nで　,で,,in/at/on/with/via,context particle,particle,,\nでしょう,でしょう,,it seems/i think/i wonder,,expression,,\nでも,でも,,but/however/nevertheless (conjunction),,basic,,\nどうして,どうして,,why/how/for what reason,,basic,,\nどうやって,どうやって,,how/in what way/through what means,,basic,,\nどこ,どこ,,where,,basic,,\nとても,とても,,truly/really,,adverb,,\nとりあえず,とりあえず,,for now/for the time being,first of all/right away/at once,adverb,,no\nどれ,どれ,,which one (of three or more),,pronoun,,no\nどんな,どんな,,what sort of/what kind of,,basic,,no\nなぜ,なぜ,,why,,basic,,\nなど,など,,etcetera/and the like/and so forth,,particle,,no\nなる,なる,,to become,,verb,,\nなんか,なんか,,something like.../things like...,,basic/particle,,\nに,に,,shows reasons for things,,particle,,no\nニ,に,,two,,number,,\nにんじん,にんじん,,carrot,,noun,,eh\nばかり,ばかり,,only/merely/nothing but/no more,just (eg. started/begun/finished),particle,,no\nパン,パン,,bread,,noun,,\nビックリ,びっくり,,to be surprised/to be amazed,,suru verb/adverb,,eh\nぶらぶら,ぶらぶら,,wandering/aimlessly,,suru verb/adverb,,\nほしい,ほしい,,want/in need of/desire,,basic,,\nほど,ほど,,extent/degree/measure,limits/bounds,noun,,no\nほとんど,ほとんど,,almost/mostly,,,,eh\nまさか,まさか,,by no means/never/certainly not,emergency/unexpected,noun,,no\nまだ,まだ,,more/still,still/as yet/only,adverb,,no\nめがね,めがね,,glasses,,noun,,\nめんどくさい,めんどくさい,,bothersome/troublesome,,i adj,,\nもっと,もっと,,more  ,,adverb,,\n一,いち,,one,,number,,\n一人,ひとり,,alone,,na adj,,\n一番,いちばん,,the best,,noun,,ho\n七,なな,,seven,,number,,\n万,まん,,ten thousand,,number,,no\n三,さん,,three,,number,,\n上手,じょうず,,skilled/proficient,,noun/na adj,,no\n上着,うわ.ぎ,,coat,,noun,,no\n世界,せかい,,world,,noun,,\n九,きゅう,,nine,,number,,\n五,ご,,five,,number,,\n人,ひと,,people,,noun,,\n今,いま,,now,,noun,,\n今年,ことし,,this year,,noun,,eh\n今日,きょう,,today,,noun,,\n今月,こんげつ,,this month,,noun,,\n今週,こんしゅう,,this week,,noun,,\n仕事,しごと,,job,,noun,,\n仕様がない,しょうがない,,it can't be helped,there's no other way,expression/i adj,,hm\n付く,つく　,,to be connected to,to be acquired,verb,,ho\n仮面,かめん,,mask,,noun,,no\n会う,あう,,to meet,,verb,,\n伝える,つたえる,,to bequeath/to teach/to convey,,verb,,\n体,からだ,,body,,pronoun,,\n何,なに,,what,,basic,,\n作る,つくる,,to make,,verb,,\n使う,つかう,,to use/to make use of,to manipulate/to employ (people),verb,,\n俺,おれ,,me (masculine),,pronoun,,eh\n偉い,えらい,,great/excellent,terrible (written with kana),i adj,,\n億,おく,,hundred million,,number,,eh\n先月,せんげつ,,last month,,noun,,\n先生,せんせい,,teacher/expert,,noun,,\n先週,せんしゅう,,last week,,noun,,\n光,ひかり,,light,,noun,,\n光る,ひかる,,to shine,,verb,,\n全部,ぜんぶ,,everything,,noun,,\n八,はち,,eight,,number,,\n六,ろく,,six,,number,,\n出す,だす,,to take out,,verb,,\n出る,でる,,to leave/exit,,verb,,\n分かる,わかる,,to understand,,verb,,\n切ない,せつない,,painful,miserable/suffocating,i adj,,\n動物,どうぶつ,,animal,,noun,,no\n勝ち,かち,,victory,,noun,,no\n十,じゅう,,ten,,number,,\n千,せん,,thousand,,number,,\n危ない,あぶない,,dangerous,,i adj,,\n卵,たまご,,egg,,noun,,\n去年,きょねん,,last year,,noun,,\n友達,ともだち,,friend,,noun,,\n口,くち,,mouth,,noun,,\n古い,ふるい,,old,,i adj,,\n各,かく,,each/every/all,,basic,,no\n同じ,おなじ,,the same,,noun,,no\n命,いのち,,life,,noun,,\n咲く,さく,,to bloom,,verb,,eh\n問題,もんだい,,problem,,noun,,\n噓,うそ,,lie,,noun,,\n噓つき,うそつき,,liar,,noun,,\n四,し,,four,,number,,\n図書館,としょかん,,library,,noun,,no\n国,くに,,land/nation,,noun,,\n土,つち,,dirt/earth,,noun,,\n地震,じしん,,earthquake,,noun,,\n場所,ばしょ,,place/position,,noun,,\n塩辛い,しおからい,,salty,,i adj,,\n声,こえ,,voice,sound,noun,,no\n変,へん,,weird,,na adj,,\n変わる,かわる,,to be changed,,verb,,\n多く,おおく,,many (noun),mostly/usually/often (adverb),noun/adverb,,\n夢,ゆめ,,dream,,noun,,no\n大きい,おおきい,,large,,i adj,,\n大丈夫,だいじょうぶ,,safe/secure/alright/OK,no thanks/i'm good (colloquial),na adj/adverb,,no\n大学,だいがく,,college,,noun,,\n大空,おおぞら,,heavens/sky,,noun,,\n天使,てんし,,angel,,noun,,\n天国,てんごく,,heaven/paradise/Kingdom of Heaven,,noun,,\n天才,てんさい,,genius,,i adj,,\n天気,てんき,お天気,weather,,noun,,ho\n失敗,しっぱい,,failure,to fail,noun/suru verb,,no\n好き,すき,,liked/well liked/favorite,in love with/romantically interested,na adj,,\n娘,むすめ,,daughter,girl/young woman,noun,,no\n嫌い,きらい,,disgusting,,na adj,,eh\n嬉しい,うれしい,,happy/glad/pleased/delighted,delightful/gratifying,i adj,,no\n子供,こども,,child,,noun,,\n子犬,こいぬ,,puppy,,noun,,\n学校,がっこう,,school,,noun,,eh\n学生,がくせい,,student,,noun,,\n宝石,ほうせき,,gemstone,,noun,,\n家,いえ,,house,,noun,,\n家族,かぞく,,family ,,noun,,\n寂しい,さびしい/さみしい,,lonely/solitary,,i adj,,ho\n富士山,ふじさん,,Mount Fuji,,proper noun,,\n寝る,ねる,,to sleep,,verb,,\n尋ねる,たずねる,,to ask/to inquire,to investigate/to look into,verb,,no\n小さい,ちいさい,,small,,i adj ,,\n山,やま,,mountain,,noun,,\n川,かわ,,river,,noun,,hm\n市立,しりつ,,city,,noun,,\n席,せき,,seat,location/place (of a gathering/etc.),noun,,no\n帰る,かえる,,to go home,,verb,,no\n強い,つよい,,strong,,noun,,\n彼,かれ,,him,,pronoun,,\n彼ら,かれら,,they,,pronoun,,\n彼女,かのじょ,,her/girlfriend,,pronoun,,\n待つ,まつ,,to wait,,verb,,no\n後で,あと,,behind/rear,after/later,noun,,no\n微笑み,ほほえみ,,smile,,noun,,no\n心,こころ,,heart,,noun,,\n心臓,しんぞう,,heart,guts/nerve/cheek/gall,noun/no adj,,no\n悪,あく,,evil,,noun,,\n悪い,わるい,,terrible,,i adj,,\n悲しい,かなしい,,sad,,i adj,,\n慣れる,なれる,,to get used to/to become familiar with,to become skilled in,verb,,no\n戸,と,,door,,noun,,\n所,ところ,,place/spot,point/aspect (kana alone),noun,,no\n手,て,,hand,,noun,,\n手,て,,hand,,noun,,\n指,ゆび,,finger,,noun,,\n揺らす,ゆらす,,to rock/to shake,,verb,,no\n教える,おしえる,,to teach,,verb,,no\n新しい,あたらしい,,new/novel/fresh/modern,,i adj,,\n方,かた,,verb form (masu verb - masu + kata),the way of doing something (eg. tabekata = how to eat/tsukaikata = how to use),basic,,\n旅行,りゅこう,,travel/trip/journey,,noun/suru verb,,no\n日,ひ,,day,,noun,,\n日本,にほん,,Japan,,proper noun,,\n日本語,にほんご,,Japanese,,noun ,,\n旨味,うまみ,,umami,good taste/good flavor/deliciousness,noun,,no\n明かり,あかるい,,lamp/light,light/illumination,noun,,eh\n明るい,あかるい,,well lit/lighted,,i adj,,\n星,ほし,,star,,noun,,\n昨日,きのう,,yesterday,,noun,,\n時,とき,,time/hour/moment,,noun,,no\n時間,じかん,,time,,basic,,\n晴れる,はれる,,to clear up/to become sunny,to be cleared,verb,,\n暗い,くらい,,dark,,i adj,,eh\n書く,かく,,to write,,verb,,\n最近,さいきん,,recently,,expression,,\n月,つき,,moon,,noun,,\n服,ふく,,clothes,,noun,,no\n朝,あさ,,morning,,noun,,\n木,き,,tree,,noun,,\n未来,みらい,,future,,noun,,\n本,ほん,,book,,noun,,\n本当に,ほんとうに,,really,,adverb,,\n机,つくえ,,table/desk,,noun,,\n来年,らいねん,,next year,,noun,,\n来月,らいげつ,,next month,,noun,,\n来週,らいしゅう,,next week,,noun,,\n林檎,りんご,,apple,,noun,,\n柔らかい,やわらかい,,soft/tender/limp,gentle/mild,i adj,,no\n森,もり,,forest,,noun,,no\n植物,しょくぶつ,,plant,,noun,,\n楽しい,たのしい,,enjoyable/fun/pleasant/delightful,,i adj,,\n横,よこ,,horizontal,side to side/side/beside,noun,,eh\n橋,はし,,bridge,,noun,,no\n歌,うた,,song,,noun,,\n歌う,うたう,,to sing,,verb,,\n歩く,あるく,,to walk,,verb,,\n歯,は,,tooth,,noun,,ho\n死,し,,death,,noun,,\n死ぬ,しぬ,,to die,,verb,,\n残酷,ざんこく,,cruel,,na adj,,\n殺す,ころす,,to kill,,noun,,\n母,はは,,mom,,noun,,hm\n毎日,まいにち,,everyday,,noun ,,\n水,みず,,water,,noun,,\n水色,みずいろ,,aqua (color),,noun,,\n氷,こおり,,ice,,noun,,\n沢,さわ,,swamp/mountain stream,,noun,,\n沢山,たくさん,,many,,noun/adjective,,\n泳ぐ,およぐ,,to swim,,verb,,hm\n洗い,あらい,,wash,,noun,,no\n浴びる,あびる,,to bathe in/to be covered in/to be flooded with/to take (eg. a shower),to suffer (eg. an attack) to draw (eg. criticism/praise),verb,,no\n海,うみ,,sea,,noun,,\n深い,ふかい,,deep/profound/intense/strong/thick,close (relationship),i adj,,no\n漢字,かんじ,,kanji (chinese characters),,noun,,no\n火,ひ,,fire,,noun,,\n灰色,はいいろ,,grey,,noun,,\n無力,むりょく,,powerlessness/helplessness/incompetent,,noun/na adj,,no\n父,ちち,,father,,noun,,\n牛,うし,,cow,,noun,,\n物,もの,,thing,,basic,,\n物語,ものがたり,,story,,noun,,\n犬,いぬ,,dog,,noun,,\n狼,おおかみ,,wolf,,noun,,eh\n猫,ねこ,,cat,,noun,,\n猿,さる,,monkey,,noun,,\n琴,こと,,koto instrument,,noun,,\n甘い,あまい,,sweet,,i adj,,\n生き物,いきもの,,lifeform,,noun,,\n生まれる,う.まれる,,to be born,,verb,,ho\n田,た,,rice field,,noun,,no\n疲れ,つかれ,,tired,,noun,,\n痛い,いたい,,hurt,,i adj,,eh\n白,しろ,,white,,noun,,\n百,ひゃく,,hundred,,number,,\n皆,みんあ,,everyone/everybody,,noun,,no\n目,め,,eyes,,noun,,\n眉,まゆ,,eyebrow,,noun,,\n真ん中,まんなか,,middle/center/midpoint/heart,,noun,,no\n眩しい,まぶしい,,dazzling/radiant,,i adj,,\n着く,つく　,,to arrive at,to sit on/to sit at,verb,,ho\n石,いし,,stone,,noun,,\n砂糖,さとう,,sugar,,noun,,no\n祈る,いのる,,to pray/to wish,,verb,,no\n私,わたし,,I ,,pronoun,,\n積む,つむ,,to acquire,to pile up,verb,,no\n空,そら,,sky,,noun,,\n窓,まど,,window,,noun,,\n笑顔,えがお,,smile,,noun/suru verb,,no\n箱,はこ,,box,,noun,,ho\n箸,はし,,chopsticks,,noun,,no\n約束,やくそく,,promise,,noun,,eh\n紫色,むらさきいろ,,violet,,noun,,\n終わり,おわり,,the end,,noun,,no\n絶望,ぜつぼう,,despair,,noun/suru verb,,\n続く,つづく,,to continue/to last,to occur repeatedly,verb,,hm\n緑,みどり,,green,,noun,,\n罰ゲーム,ばつ.ゲーム,,punishment given to loser of a game,,noun,,no\n羊,ひつじ,,sheep,,noun,,\n美しい,うつくしい,,beautiful,,i adj ,,\n習う,ならう,,to learn,,verb,,ho\n考える,かんがえる,,to think,,verb,,\n耳,みみ,,ears,,noun,,\n聞く,きく,,hear,,verb,,\n肉,にく,,meat,,noun,,\n脳,のう,,mind/brain,,noun,,\n自転車,じてんしゃ,,bicycle,,noun,,no\n船,ふね,,boat,,noun,,\n色,いろ,,color,,noun,,\n花,はな,,flower,,noun,,\n英語,えいご,,english,,noun,,\n茶碗,ちゃ.わん,,rice bowl,,noun,,no\n虫,むし,,bug,,noun,,\n螺旋,らせん,,spiral,,noun,,\n血,ち,,blood,,noun,,\n行く,いく,,to go,,verb,,\n見つかる,みつける,,to discover/to find,to be familiar with,verb,,hm\n見る,みる,,to see,,verb,,\n親切,しんせつ,,friendly,,na adj,,eh\n角,かご,,corner/edge,,noun,,no\n言う,いう,,to say,,verb,,\n言葉,ことば,,language,,noun,,ho\n言葉,ことば,,language,words/phrases/expression/remark,noun,,no\n訓読み,くにょみ,,native japanese reading of kanji,,noun,,ho\n読み方,よみかた,,reading of a kanji,reading of a text,noun,,no\n読む,よむ,,to read,,verb,,\n誰,だれ,,who,,basic,,\n赤,あか,,red,,noun,,\n車,くるま,,car,,noun,,\n辛い,からい,,spicy,,i adj,,hm\n退屈,たいくつ,,boredom/dullness,to be bored of/to feel bored,noun/suru verb,,no\n道具,どうぐ,,tool/device/instrument/implement,means,noun,,no\n部屋,へや,,room,,noun,,\n酒,さけ,お酒,alcohol/sake,,noun,,\n酷く,ひどく,,terrible,,adverb,,\n酸っぱい,すっぱい,,sour,,i adj,,ho\n野菜,やさい,,vegetable,,noun,,\n鉛筆,えんぴつ,,pencil,,noun,,\n鐘,かね,,bell,,noun,,no\n間違い,まちがい,,mistake,,noun,,ho\n間違える,まちがえる,,to make a mistake,,verb,,ho\n雨,あめ,,rain,,noun,,\n雷,かみなり,,lightning/thunder,,noun,,eh\n青,あお,,blue,,noun,,\n静か,しずか,,quiet,,na adj,,\n面,めん,,face,,noun,,ho\n面白い,おもしろい,,funny/delightful/interesting,,i adj,,\n音読み,おにょみ,,original chinese reading of kanji,,noun,,ho\n頂く,いただく,,to recieve/to accept (kenjougo),to eat/to drink (kenjougo/teineigo),verb,,no\n頭,あたま,,head,,noun,,\n風,かぜ,,wind,,noun,,\n飛ぶ,とぶ,,to fly,,verb,,\n食べる,たべる,,to eat,,verb,,\n食べ物,たべもの,,food,,noun,,\n飲み物,の.み.もの,,drink/beverage,,noun,,\n飲む,のむ,,to drink,,verb,,\n飴,あめ,,hard candy,,noun,,no\n香り,かおり,,aroma/fragrance/smell/scent,,noun,,no\n駄目,だめ,,no good/broken/useless,hopeless/wasted/in vain,noun/na adj,,no\n高い,たか.い,,expensive,tall/high,i adj,,\n髪,かみ,,head hair,,noun,,\n魚,さかな,,fish,,noun,,\n鮮やか,あざやか,,vibrant,,na adj,,eh\n鯉,こい,,koi fish,,noun,,\n鳥,とり,,bird,,noun,,\n黄色,きいろ,,yellow,,noun,,\n黒,くろ,,black,,noun,,\n鼻,はな,,nose,,noun,,ho";
