const questionBank = [
  {
    "id": 1,
    "type": "sentence",
    "text": "Motoki Ohmori bought some fresh (    ) to cook pasta.",
    "options": [
      "instruments",
      "instructions",
      "insects",
      "ingredients"
    ],
    "answer": 3,
    "translation": "大森元貴はパスタを作るために新鮮な材料をいくつか買いました。",
    "explanation": "ingredient（材料、食材）。料理に関する文脈で使われます。 / その他の選択肢: instruments（楽器）、instructions（指示）、insects（昆虫）。"
  },
  {
    "id": 2,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, he ordered new (    ) for the home studio.",
    "options": [
      "equipment",
      "employment",
      "experiment",
      "environment"
    ],
    "answer": 0,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼は自宅スタジオのために新しい機材を注文しました。",
    "explanation": "equipment（機材、設備）。不可算名詞であることに注意。 / その他の選択肢: experiment（実験）、environment（環境）、employment（雇用）。"
  },
  {
    "id": 3,
    "type": "sentence",
    "text": "Ryoka Fujisawa fell asleep as a (    ) on the train.",
    "options": [
      "messenger",
      "manager",
      "stranger",
      "passenger"
    ],
    "answer": 3,
    "translation": "藤澤涼架は電車の乗客として眠ってしまいました。",
    "explanation": "passenger（乗客）。 / その他の選択肢: messenger（使者）、manager（マネージャー）、stranger（見知らぬ人）。"
  },
  {
    "id": 4,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE finally arrived at the (    ) after a long drive.",
    "options": [
      "description",
      "decision",
      "destination",
      "department"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは長時間のドライブの末、ついに目的地に到着しました。",
    "explanation": "destination（目的地、行き先）。 / その他の選択肢: description（説明）、decision（決定）、department（部門）。"
  },
  {
    "id": 5,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE listens to a wide (    ) of music genres.",
    "options": [
      "variety",
      "safety",
      "society",
      "anxiety"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは幅広いジャンルの音楽を聴きます。",
    "explanation": "a wide variety of ~（幅広い種類の〜）。 / その他の選択肢: society（社会）、safety（安全）、anxiety（不安）。"
  },
  {
    "id": 6,
    "type": "sentence",
    "text": "One (    ) of living in Tokyo are that The members of Mrs. GREEN APPLE can easily go to many concerts.",
    "options": [
      "adventure",
      "advice",
      "advance",
      "advantage"
    ],
    "answer": 3,
    "translation": "東京に住む一つの利点は、ミセスグリーンアップルのメンバーがたくさんのコンサートに簡単に行けることです。",
    "explanation": "advantage（利点、有利な点）。 / その他の選択肢: adventure（冒険）、advance（前進）、advice（助言）。"
  },
  {
    "id": 7,
    "type": "sentence",
    "text": "Motoki Ohmori missed the (    ) to take a walk in the park because of the rain.",
    "options": [
      "opinion",
      "opposition",
      "operation",
      "opportunity"
    ],
    "answer": 3,
    "translation": "大森元貴は雨のせいで公園を散歩する機会を逃しました。",
    "explanation": "opportunity（機会、チャンス）。 / その他の選択肢: opposition（反対）、operation（手術・操作）、opinion（意見）。"
  },
  {
    "id": 8,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, The (    ) cheered loudly when he appeared on stage.",
    "options": [
      "attendance",
      "absence",
      "audience",
      "appearance"
    ],
    "answer": 2,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼がステージに現れた時、観客は大きな声で歓声を上げました。",
    "explanation": "audience（観客、聴衆）。 / その他の選択肢: attendance（出席）、absence（欠席）、appearance（外見・出現）。"
  },
  {
    "id": 9,
    "type": "sentence",
    "text": "Ryoka Fujisawa often takes pictures while walking around the (    ).",
    "options": [
      "neighborhood",
      "childhood",
      "livelihood",
      "brotherhood"
    ],
    "answer": 0,
    "translation": "藤澤涼架は近所を散歩しながらよく写真を撮ります。",
    "explanation": "neighborhood（近所、地域）。 / その他の選択肢: childhood（子供時代）、livelihood（生計）、brotherhood（兄弟の縁）。"
  },
  {
    "id": 10,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE felt a certain (    ) of nervousness before the live broadcast.",
    "options": [
      "degree",
      "decree",
      "agree",
      "disagree"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは生放送の前に、ある程度の緊張を感じました。",
    "explanation": "degree（程度、度合い）。a certain degree of ~ で「ある程度の〜」。 / その他の選択肢: decree（法令）、agree（同意する）、disagree（同意しない）。"
  },
  {
    "id": 11,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE caught a cold because the (    ) dropped suddenly.",
    "options": [
      "temperature",
      "creature",
      "feature",
      "literature"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは気温が急に下がったため風邪をひきました。",
    "explanation": "temperature（温度、気温、体温）。 / その他の選択肢: literature（文学）、creature（生き物）、feature（特徴）。"
  },
  {
    "id": 12,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were deeply moved by the beautiful (    ) of the mountains.",
    "options": [
      "science",
      "scenery",
      "screen",
      "scene"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルのメンバーは山の美しい風景に深く感動しました。",
    "explanation": "scenery（風景、景色）。 / その他の選択肢: scene（場面）、science（科学）、screen（画面）。"
  },
  {
    "id": 13,
    "type": "sentence",
    "text": "Motoki Ohmori eats healthy food to prevent (    ).",
    "options": [
      "decrease",
      "deceive",
      "desire",
      "disease"
    ],
    "answer": 3,
    "translation": "大森元貴は病気を防ぐために健康的な食べ物を食べます。",
    "explanation": "disease（病気）。 / その他の選択肢: decrease（減少する）、deceive（だます）、desire（欲望）。"
  },
  {
    "id": 14,
    "type": "sentence",
    "text": "It is a (    ) for Hiroto Wakai to drink coffee every morning.",
    "options": [
      "customer",
      "castle",
      "costume",
      "custom"
    ],
    "answer": 3,
    "translation": "毎朝コーヒーを飲むのが若井滉斗の習慣です。",
    "explanation": "custom（習慣、風習）。 / その他の選択肢: costume（衣装）、customer（客）、castle（城）。"
  },
  {
    "id": 15,
    "type": "sentence",
    "text": "Ryoka Fujisawa spent a large (    ) of money on new clothes.",
    "options": [
      "amount",
      "announce",
      "allowance",
      "account"
    ],
    "answer": 0,
    "translation": "藤澤涼架は新しい服に多額のお金を使いました。",
    "explanation": "a large amount of ~（多量の〜、多額の〜）。 / その他の選択肢: account（口座・説明）、announce（発表する）、allowance（小遣い）。"
  },
  {
    "id": 16,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE worked hard to (    ) the goal of making a great album.",
    "options": [
      "deceive",
      "achieve",
      "receive",
      "believe"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは素晴らしいアルバムを作るという目標を達成するために一生懸命働きました。",
    "explanation": "achieve（達成する）。 / その他の選択肢: believe（信じる）、receive（受け取る）、deceive（だます）。"
  },
  {
    "id": 17,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE never (    )s about being too busy.",
    "options": [
      "contain",
      "explain",
      "remain",
      "complain"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは忙しすぎることについて決して不平を言いません。",
    "explanation": "complain about ~（〜について不平を言う）。 / その他の選択肢: explain（説明する）、remain（残る）、contain（含む）。"
  },
  {
    "id": 18,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE's smile always (    )s the fans.",
    "options": [
      "discourage",
      "engage",
      "encourage",
      "enlarge"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルのメンバーの笑顔はいつもファンを勇気づけます。",
    "explanation": "encourage（勇気づける、励ます）。 / その他の選択肢: discourage（落胆させる）、engage（従事する）、enlarge（拡大する）。"
  },
  {
    "id": 19,
    "type": "sentence",
    "text": "Motoki Ohmori practices every day to (    ) guitar skills.",
    "options": [
      "approve",
      "prove",
      "remove",
      "improve"
    ],
    "answer": 3,
    "translation": "大森元貴はギターのスキルを向上させるために毎日練習しています。",
    "explanation": "improve（向上させる、改善する）。 / その他の選択肢: prove（証明する）、remove（取り除く）、approve（承認する）。"
  },
  {
    "id": 20,
    "type": "sentence",
    "text": "Hiroto Wakai (    )ed that they should go eat ramen after the rehearsal.",
    "options": [
      "digest",
      "suggest",
      "invest",
      "request"
    ],
    "answer": 1,
    "translation": "若井滉斗はリハーサルの後にラーメンを食べに行くべきだと提案しました。",
    "explanation": "suggest（提案する）。 / その他の選択肢: digest（消化する）、request（要求する）、invest（投資する）。"
  },
  {
    "id": 21,
    "type": "sentence",
    "text": "Ryoka Fujisawa needs to (    ) the broken strings on the guitar.",
    "options": [
      "replace",
      "place",
      "reduce",
      "relax"
    ],
    "answer": 0,
    "translation": "藤澤涼架はギターの切れた弦を交換する必要があります。",
    "explanation": "replace（交換する、取り替える）。 / その他の選択肢: place（場所）、reduce（減らす）、relax（リラックスする）。"
  },
  {
    "id": 22,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they was easily (    )d by fans while shopping at the mall.",
    "options": [
      "memorize",
      "recognize",
      "realize",
      "organize"
    ],
    "answer": 1,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らはショッピングモールで買い物中にファンにすぐ気付かれました。",
    "explanation": "recognize（気付く、認識する）。 / その他の選択肢: organize（組織する）、realize（気付く）、memorize（暗記する）。"
  },
  {
    "id": 23,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE will (    ) in a charity marathon next month.",
    "options": [
      "anticipate",
      "calculate",
      "participate",
      "hesitate"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは来月チャリティーマラソンに参加します。",
    "explanation": "participate in ~（〜に参加する）。 / その他の選択肢: anticipate（予想する）、hesitate（ためらう）、calculate（計算する）。"
  },
  {
    "id": 24,
    "type": "sentence",
    "text": "Writing a good song (    )s a lot of concentration for The members of Mrs. GREEN APPLE.",
    "options": [
      "inquire",
      "retire",
      "require",
      "acquire"
    ],
    "answer": 2,
    "translation": "良い曲を書くことはミセスグリーンアップルのメンバーにとって多くの集中力を必要とします。",
    "explanation": "require（必要とする）。 / その他の選択肢: acquire（獲得する）、inquire（尋ねる）、retire（引退する）。"
  },
  {
    "id": 25,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, he doesn't like to (    ) themselves with others.",
    "options": [
      "repair",
      "compare",
      "declare",
      "prepare"
    ],
    "answer": 1,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、彼は自分自身を他人と比較するのが好きではありません。",
    "explanation": "compare A with B（AをBと比較する）。 / その他の選択肢: prepare（準備する）、repair（修理する）、declare（宣言する）。"
  },
  {
    "id": 26,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, he wants to (    ) fans with unforgettable memories.",
    "options": [
      "decide",
      "guide",
      "divide",
      "provide"
    ],
    "answer": 3,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼はファンに忘れられない思い出を提供したいと思っています。",
    "explanation": "provide A with B（AにBを提供する）。 / その他の選択肢: divide（分割する）、decide（決定する）、guide（案内する）。"
  },
  {
    "id": 27,
    "type": "sentence",
    "text": "Ryoka Fujisawa can always (    ) on the other members when things get tough.",
    "options": [
      "rely",
      "apply",
      "supply",
      "reply"
    ],
    "answer": 0,
    "translation": "困難な時、藤澤涼架はいつも他のメンバーに頼ることができます。",
    "explanation": "rely on ~（〜に頼る）。 / その他の選択肢: reply（返事する）、apply（適用する・申し込む）、supply（供給する）。"
  },
  {
    "id": 28,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE couldn't (    ) to buy that expensive instrument years ago.",
    "options": [
      "effort",
      "reward",
      "record",
      "afford"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは何年も前はあの高価な楽器を買う余裕がありませんでした。",
    "explanation": "afford to do（〜する余裕がある）。 / その他の選択肢: effort（努力）、record（記録）、reward（報酬）。"
  },
  {
    "id": 29,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they wore a warm coat to (    ) catching a cold.",
    "options": [
      "prevent",
      "invent",
      "present",
      "event"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは風邪をひくのを防ぐために暖かいコートを着ました。",
    "explanation": "prevent（防ぐ、妨げる）。 / その他の選択肢: invent（発明する）、event（出来事）、present（提示する・プレゼント）。"
  },
  {
    "id": 30,
    "type": "sentence",
    "text": "A simple meal of rice and miso soup are enough to (    ) The members of Mrs. GREEN APPLE.",
    "options": [
      "satisfy",
      "terrify",
      "qualify",
      "modify"
    ],
    "answer": 0,
    "translation": "ご飯と味噌汁のシンプルな食事でミセスグリーンアップルのメンバーを満足させるのに十分です。",
    "explanation": "satisfy（満足させる）。 / その他の選択肢: modify（修正する）、qualify（資格を与える）、terrify（怖がらせる）。"
  },
  {
    "id": 31,
    "type": "sentence",
    "text": "The melody of that song is very (    ) to Motoki Ohmori.",
    "options": [
      "familiar",
      "popular",
      "regular",
      "similar"
    ],
    "answer": 0,
    "translation": "その曲のメロディーは大森元貴にとってとても馴染みがあります。",
    "explanation": "be familiar to ~（〜にとって馴染みがある）。 / その他の選択肢: similar（似ている）、popular（人気の）、regular（規則的な）。"
  },
  {
    "id": 32,
    "type": "sentence",
    "text": "Living near the station is very (    ) for Hiroto Wakai.",
    "options": [
      "convenient",
      "confident",
      "excellent",
      "current"
    ],
    "answer": 0,
    "translation": "駅の近くに住むことは若井滉斗にとってとても便利です。",
    "explanation": "convenient（便利な）。 / その他の選択肢: confident（自信がある）、current（現在の）、excellent（優れた）。"
  },
  {
    "id": 33,
    "type": "sentence",
    "text": "Ryoka Fujisawa has been very (    ) since moving out of the parents' house.",
    "options": [
      "independent",
      "confident",
      "dependent",
      "silent"
    ],
    "answer": 0,
    "translation": "藤澤涼架は実家を出て以来、とても自立しています。",
    "explanation": "independent（自立した、独立した）。 / その他の選択肢: dependent（依存している）、confident（自信がある）、silent（静かな）。"
  },
  {
    "id": 34,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they likes to cook dishes from (    ) countries.",
    "options": [
      "various",
      "curious",
      "serious",
      "obvious"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは様々な国の料理を作るのが好きです。",
    "explanation": "various（様々な）。 / その他の選択肢: serious（深刻な）、obvious（明らかな）、curious（好奇心が強い）。"
  },
  {
    "id": 35,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE is always (    ) about new fashion trends.",
    "options": [
      "nervous",
      "furious",
      "serious",
      "curious"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルはいつも新しいファッショントレンドに好奇心を持っています。",
    "explanation": "be curious about ~（〜について好奇心が強い、気になる）。 / その他の選択肢: serious（深刻な）、furious（激怒した）、nervous（緊張した）。"
  },
  {
    "id": 36,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were not (    ) of the time and stayed up late playing games.",
    "options": [
      "awake",
      "away",
      "aware",
      "alike"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルのメンバーは時間に気付かず、夜遅くまでゲームをして起きていました。",
    "explanation": "be aware of ~（〜に気付いている）。 / その他の選択肢: awake（起きている）、away（離れて）、alike（似ている）。"
  },
  {
    "id": 37,
    "type": "sentence",
    "text": "That is (    ) what Motoki Ohmori wanted to say.",
    "options": [
      "mostly",
      "nearly",
      "hardly",
      "exactly"
    ],
    "answer": 3,
    "translation": "それはまさに大森元貴が言いたかったことです。",
    "explanation": "exactly（まさに、正確に）。 / その他の選択肢: mostly（主に）、hardly（ほとんど～ない）、nearly（ほとんど）。"
  },
  {
    "id": 38,
    "type": "sentence",
    "text": "Hiroto Wakai (    ) visits that small cafe in the afternoon.",
    "options": [
      "recently",
      "suddenly",
      "rarely",
      "frequently"
    ],
    "answer": 3,
    "translation": "若井滉斗は午後によくその小さなカフェを訪れます。",
    "explanation": "frequently（頻繁に）。 / その他の選択肢: recently（最近）、rarely（めったに～ない）、suddenly（突然）。"
  },
  {
    "id": 39,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he's singing voice (    ) became stronger over the years.",
    "options": [
      "actually",
      "naturally",
      "usually",
      "gradually"
    ],
    "answer": 3,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼の歌声は年月を経て徐々に力強くなりました。",
    "explanation": "gradually（徐々に）。 / その他の選択肢: usually（普通は）、naturally（自然に）、actually（実は）。"
  },
  {
    "id": 40,
    "type": "sentence",
    "text": "When Mrs. GREEN APPLE heard the news, they (    ) called their family.",
    "options": [
      "completely",
      "extremely",
      "immediately",
      "unfortunately"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルはそのニュースを聞いた時、すぐに家族に電話しました。",
    "explanation": "immediately（すぐに、直ちに）。 / その他の選択肢: completely（完全に）、unfortunately（残念ながら）、extremely（極端に）。"
  },
  {
    "id": 41,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE loves all animals, but (    ) dogs.",
    "options": [
      "eventually",
      "specially",
      "especially",
      "specifically"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルはすべての動物が好きですが、特に犬が好きです。",
    "explanation": "especially（特に）。 / その他の選択肢: specially（特別に）、specifically（明確に）、eventually（最終的に）。"
  },
  {
    "id": 42,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE feel (    ) for making the fans happy.",
    "options": [
      "possible",
      "flexible",
      "responsible",
      "terrible"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルのメンバーはファンを幸せにすることに責任を感じています。",
    "explanation": "be responsible for ~（〜に対して責任がある）。 / その他の選択肢: possible（可能な）、terrible（ひどい）、flexible（柔軟な）。"
  },
  {
    "id": 43,
    "type": "sentence",
    "text": "Motoki Ohmori was not (    ) for the interview yesterday.",
    "options": [
      "capable",
      "available",
      "valuable",
      "suitable"
    ],
    "answer": 1,
    "translation": "大森元貴は昨日のインタビューには対応できませんでした（都合がつきませんでした）。",
    "explanation": "available（利用できる、手が空いている）。 / その他の選択肢: valuable（価値のある）、suitable（適した）、capable（能力がある）。"
  },
  {
    "id": 44,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, he finally managed to (    ) how to use the new synthesizer.",
    "options": [
      "turn out",
      "figure out",
      "point out",
      "carry out"
    ],
    "answer": 1,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼はついに新しいシンセサイザーの使い方を理解することができました。",
    "explanation": "figure out（〜を理解する、解決する）。 / その他の選択肢: point out（指摘する）、turn out（判明する）、carry out（実行する）。"
  },
  {
    "id": 45,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, The song he wrote casually (    ) to be a massive hit.",
    "options": [
      "break out",
      "turn out",
      "run out",
      "find out"
    ],
    "answer": 1,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼が何気なく書いた曲が、大ヒットであることが判明しました。",
    "explanation": "turn out to be ~（〜であることが判明する）。 / その他の選択肢: break out（勃発する）、run out（尽きる）、find out（見つけ出す）。"
  },
  {
    "id": 46,
    "type": "sentence",
    "text": "The success of the live tour will (    ) teamwork, according to Mrs. GREEN APPLE.",
    "options": [
      "depend on",
      "rely on",
      "insist on",
      "focus on"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルによると、ライブツアーの成功はチームワークにかかっているとのことです。",
    "explanation": "depend on ~（〜次第である、〜に頼る）。 / その他の選択肢: insist on（主張する）、focus on（集中する）、rely on（頼る）。"
  },
  {
    "id": 47,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE booked the flight tickets (    ) for the trip.",
    "options": [
      "in particular",
      "in general",
      "in advance",
      "in detail"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは旅行のために航空券を事前に予約しました。",
    "explanation": "in advance（前もって、事前に）。 / その他の選択肢: in detail（詳細に）、in general（一般的に）、in particular（特に）。"
  },
  {
    "id": 48,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE thought the lyrics didn't (    ) at first, but later understood the deep meaning.",
    "options": [
      "make sense",
      "make up",
      "make sure",
      "make progress"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルのメンバーは最初、その歌詞は意味が通らないと思いましたが、後になって深い意味を理解しました。",
    "explanation": "make sense（意味をなす、理にかなう）。 / その他の選択肢: make up（構成する・化粧する）、make sure（確かめる）、make progress（進歩する）。"
  },
  {
    "id": 49,
    "type": "sentence",
    "text": "Motoki Ohmori noticed that they had (    ) milk while making breakfast.",
    "options": [
      "run out of",
      "get out of",
      "stay out of",
      "keep out of"
    ],
    "answer": 0,
    "translation": "大森元貴は朝食を作っている時に牛乳を切らしてしまったことに気付きました。",
    "explanation": "run out of ~（〜を使い果たす、切らす）。 / その他の選択肢: get out of（抜け出す）、stay out of（関わらない）、keep out of（立ち入らない）。"
  },
  {
    "id": 50,
    "type": "sentence",
    "text": "The music festival where Hiroto Wakai will perform is going to (    ) in August.",
    "options": [
      "take care",
      "take part",
      "take place",
      "take pride"
    ],
    "answer": 2,
    "translation": "若井滉斗が出演する音楽フェスは8月に開催される予定です。",
    "explanation": "take place（開催される、起こる）。 / その他の選択肢: take part（参加する）、take pride（誇りを持つ）、take care（世話をする）。"
  },
  {
    "id": 51,
    "type": "sentence",
    "text": "Ryoka Fujisawa is really (    ) meeting the fans again.",
    "options": [
      "look out for",
      "look up to",
      "look forward to",
      "look down on"
    ],
    "answer": 2,
    "translation": "藤澤涼架はまたファンに会えるのを本当に楽しみにしています。",
    "explanation": "look forward to ~（〜を楽しみに待つ）。toの後は名詞か動名詞が来ます。 / その他の選択肢: look up to（尊敬する）、look down on（見下す）、look out for（気をつける）。"
  },
  {
    "id": 52,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE advised the members to (    ) the small details in the sound.",
    "options": [
      "get rid of",
      "pay attention to",
      "take advantage of",
      "catch sight of"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルはメンバーたちに、音の細部に注意を払うようにアドバイスしました。",
    "explanation": "pay attention to ~（〜に注意を払う）。 / その他の選択肢: catch sight of（見つける）、get rid of（取り除く）、take advantage of（利用する）。"
  },
  {
    "id": 53,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE knows how to politely (    ) difficult situations.",
    "options": [
      "come up with",
      "keep up with",
      "put up with",
      "deal with"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは困難な状況に丁寧に対処する方法を知っています。",
    "explanation": "deal with ~（〜を処理する、〜に対処する）。 / その他の選択肢: come up with（思いつく）、keep up with（遅れずについていく）、put up with（我慢する）。"
  },
  {
    "id": 54,
    "type": "sentence",
    "text": "It have become a (    ) for The members of Mrs. GREEN APPLE to visit a shrine on New Year's Day.",
    "options": [
      "transition",
      "tradition",
      "transportation",
      "translation"
    ],
    "answer": 1,
    "translation": "元旦に神社を訪れることがミセスグリーンアップルのメンバーの伝統（恒例行事）になっています。",
    "explanation": "tradition（伝統、慣習）。 / その他の選択肢: translation（翻訳）、transition（移行）、transportation（交通機関）。"
  },
  {
    "id": 55,
    "type": "sentence",
    "text": "Motoki Ohmori was mentioned as a strong (    ) for the music award.",
    "options": [
      "celebration",
      "candidate",
      "certificate",
      "customer"
    ],
    "answer": 1,
    "translation": "大森元貴はその音楽賞の有力な候補者として言及されました。",
    "explanation": "candidate（候補者）。 / その他の選択肢: certificate（証明書）、celebration（お祝い）、customer（客）。"
  },
  {
    "id": 56,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, he always treats the concert staff and every (    ) with great respect.",
    "options": [
      "employee",
      "manager",
      "employer",
      "engineer"
    ],
    "answer": 0,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼はコンサートスタッフやすべての従業員に大きな敬意を持って接します。",
    "explanation": "employee（従業員）。 / その他の選択肢: employer（雇用主）、engineer（エンジニア）、manager（マネージャー）。"
  },
  {
    "id": 57,
    "type": "sentence",
    "text": "Ryoka Fujisawa discovered a new (    ) to relieve stress after a long tour.",
    "options": [
      "record",
      "period",
      "department",
      "method"
    ],
    "answer": 3,
    "translation": "藤澤涼架は長いツアーの後にストレスを和らげる新しい方法を発見しました。",
    "explanation": "method（方法、方式）。 / その他の選択肢: period（期間）、record（記録）、department（部門）。"
  },
  {
    "id": 58,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they used their first (    ) to buy a gift for their parents.",
    "options": [
      "society",
      "sympathy",
      "salary",
      "safety"
    ],
    "answer": 2,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは初任給を使って両親にプレゼントを買いました。",
    "explanation": "salary（給料）。 / その他の選択肢: safety（安全）、sympathy（同情）、society（社会）。"
  },
  {
    "id": 59,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE had to (    ) that they forgot the lyrics for a moment during the live.",
    "options": [
      "admit",
      "submit",
      "permit",
      "commit"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルはライブ中、一瞬歌詞を忘れたことを認めなければなりませんでした。",
    "explanation": "admit（〜を認める）。 / その他の選択肢: permit（許可する）、submit（提出する）。"
  },
  {
    "id": 60,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE never (    )s others when a mistake happens in the studio.",
    "options": [
      "blame",
      "frame",
      "claim",
      "flame"
    ],
    "answer": 0,
    "translation": "スタジオでミスが起きた時、ミセスグリーンアップルのメンバーは決して他人を責めません。",
    "explanation": "blame（〜を責める）。 / その他の選択肢: frame（枠・枠組み）、flame（炎）。"
  },
  {
    "id": 61,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, he had to (    ) the dinner reservation because the recording took longer.",
    "options": [
      "channel",
      "cancel",
      "panel",
      "tunnel"
    ],
    "answer": 1,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、レコーディングが長引いたため、彼は夕食の予約を取り消さなければなりませんでした。",
    "explanation": "cancel（取り消す、キャンセルする）。 / その他の選択肢: channel（チャンネル）、panel（パネル）。"
  },
  {
    "id": 62,
    "type": "sentence",
    "text": "Hiroto Wakai tries to (    ) negative comments on the internet.",
    "options": [
      "ignore",
      "restore",
      "store",
      "explore"
    ],
    "answer": 0,
    "translation": "若井滉斗はインターネット上の否定的なコメントを無視しようと努めています。",
    "explanation": "ignore（無視する）。 / その他の選択肢: explore（探検する）、restore（修復する）。"
  },
  {
    "id": 63,
    "type": "sentence",
    "text": "Ryoka Fujisawa used a ruler to (    ) the size of the new guitar case.",
    "options": [
      "measure",
      "treasure",
      "leisure",
      "pleasure"
    ],
    "answer": 0,
    "translation": "藤澤涼架は新しいギターケースのサイズを測るために定規を使いました。",
    "explanation": "measure（〜を測る）。 / その他の選択肢: treasure（宝物）、pleasure（喜び）。"
  },
  {
    "id": 64,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE donated money to an organization that (    )s stray animals.",
    "options": [
      "rescue",
      "continue",
      "argue",
      "value"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは迷子の動物を救助する団体に寄付をしました。",
    "explanation": "rescue（救助する）。 / その他の選択肢: argue（議論する）、continue（続ける）。"
  },
  {
    "id": 65,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE will (    ) for the best ramen shop in the city tonight.",
    "options": [
      "teach",
      "catch",
      "reach",
      "search"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは今夜、この街で一番美味しいラーメン屋を探すつもりです。",
    "explanation": "search for ~（〜を探す）。 / その他の選択肢: reach（到達する）、teach（教える）。"
  },
  {
    "id": 66,
    "type": "sentence",
    "text": "The staff (    )ed The members of Mrs. GREEN APPLE not to run on the slippery stage.",
    "options": [
      "warn",
      "burn",
      "turn",
      "learn"
    ],
    "answer": 0,
    "translation": "スタッフはミセスグリーンアップルのメンバーに、滑りやすいステージの上を走らないよう警告しました。",
    "explanation": "warn A not to do（Aに〜しないよう警告する）。 / その他の選択肢: burn（燃える）、turn（回る）。"
  },
  {
    "id": 67,
    "type": "sentence",
    "text": "Due to a (    ) of sleep, Motoki Ohmori drank three cups of coffee.",
    "options": [
      "rock",
      "lack",
      "lock",
      "luck"
    ],
    "answer": 1,
    "translation": "睡眠不足のため、大森元貴はコーヒーを3杯飲みました。",
    "explanation": "a lack of ~（〜の不足）。 / その他の選択肢: luck（幸運）、lock（鍵）。"
  },
  {
    "id": 68,
    "type": "sentence",
    "text": "Hiroto Wakai paid the entrance (    ) to visit the art museum.",
    "options": [
      "tree",
      "flee",
      "fee",
      "free"
    ],
    "answer": 2,
    "translation": "若井滉斗は美術館を訪れるために入場料を支払いました。",
    "explanation": "fee（料金、手数料、入場料）。 / その他の選択肢: free（無料）、flee（逃げる）。"
  },
  {
    "id": 69,
    "type": "sentence",
    "text": "Ryoka Fujisawa believes that good (    ) is much more important than money.",
    "options": [
      "health",
      "death",
      "stealth",
      "wealth"
    ],
    "answer": 3,
    "translation": "藤澤涼架はお金よりも健康のほうがはるかに重要だと信じています。",
    "explanation": "health（健康）。wealth（富）の対義的。 / その他の選択肢: health（健康）、death（死）。"
  },
  {
    "id": 70,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, Once they starts writing a song, they enter a deep concentration (    ).",
    "options": [
      "tone",
      "zone",
      "bone",
      "stone"
    ],
    "answer": 1,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、一度曲を書き始めると、彼らは深い集中のゾーンに入ります。",
    "explanation": "zone（地帯、領域）。 / その他の選択肢: bone（骨）、tone（音色）。"
  },
  {
    "id": 71,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they cannot (    ) the fact that their fans are the best in the world.",
    "options": [
      "deny",
      "defy",
      "reply",
      "rely"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは自分たちのファンが世界一であるという事実を否定できません。",
    "explanation": "deny（〜を否定する）。 / その他の選択肢: rely（頼る）、reply（返事する）。"
  },
  {
    "id": 72,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE love to (    ) with friends and play board games.",
    "options": [
      "bother",
      "father",
      "gather",
      "weather"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルのメンバーは友達と集まってボードゲームをするのが好きです。",
    "explanation": "gather（集める、集まる）。 / その他の選択肢: bother（悩ます）、father（父親）。"
  },
  {
    "id": 73,
    "type": "sentence",
    "text": "The agency decided to (    ) more security guards for Motoki Ohmori's concert.",
    "options": [
      "tire",
      "wire",
      "fire",
      "hire"
    ],
    "answer": 3,
    "translation": "事務所は大森元貴のコンサートのために警備員をさらに雇うことを決定しました。",
    "explanation": "hire（雇う）。 / その他の選択肢: fire（火・解雇する）、tire（疲れさせる）。"
  },
  {
    "id": 74,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, he thinks people should not (    ) others based solely on appearance.",
    "options": [
      "edge",
      "judge",
      "bridge",
      "pledge"
    ],
    "answer": 1,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼は、人は見た目だけで他人を判断するべきではないと考えています。",
    "explanation": "judge（判断する）。 / その他の選択肢: bridge（橋）、edge（端）。"
  },
  {
    "id": 75,
    "type": "sentence",
    "text": "In winter, Ryoka Fujisawa often wears a cozy (    ) sweater.",
    "options": [
      "hit",
      "sit",
      "knit",
      "fit"
    ],
    "answer": 2,
    "translation": "冬には、藤澤涼架はよく着心地の良いニット（編まれた）セーターを着ます。",
    "explanation": "knit（編む、編まれた）。 / その他の選択肢: hit（打つ）、fit（合う）。"
  },
  {
    "id": 76,
    "type": "sentence",
    "text": "Tired after the live, Mrs. GREEN APPLE tried to (    ) against the wall.",
    "options": [
      "clean",
      "lean",
      "mean",
      "bean"
    ],
    "answer": 1,
    "translation": "ライブの後で疲れていたので、ミセスグリーンアップルは壁に寄りかかろうとしました。",
    "explanation": "lean against ~（〜に寄りかかる）。 / その他の選択肢: mean（意味する）、clean（掃除する）。"
  },
  {
    "id": 77,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they uses a special case to (    ) the condition of the vintage guitar.",
    "options": [
      "preserve",
      "deserve",
      "reserve",
      "observe"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らはヴィンテージギターの状態を保存するために特別なケースを使用しています。",
    "explanation": "preserve（保存する、保護する）。 / その他の選択肢: reserve（予約する）、deserve（値する）。"
  },
  {
    "id": 78,
    "type": "sentence",
    "text": "When The members of Mrs. GREEN APPLE started playing, all the nervousness seemed to (    ).",
    "options": [
      "vanish",
      "punish",
      "finish",
      "banish"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルのメンバーが演奏し始めると、すべての緊張が消え去ったように見えました。",
    "explanation": "vanish（消える、見えなくなる）。 / その他の選択肢: punish（罰する）、finish（終える）。"
  },
  {
    "id": 79,
    "type": "sentence",
    "text": "Motoki Ohmori bought some fresh (    ) to cook pasta.",
    "options": [
      "ingredients",
      "insects",
      "instructions",
      "instruments"
    ],
    "answer": 0,
    "translation": "大森元貴はパスタを作るために新鮮な材料をいくつか買いました。",
    "explanation": "ingredient（材料、食材）。料理に関する文脈で使われます。 / その他の選択肢: instruments（楽器）、instructions（指示）、insects（昆虫）。"
  },
  {
    "id": 80,
    "type": "sentence",
    "text": "Hiroto Wakai ordered new (    ) for the home studio.",
    "options": [
      "environment",
      "equipment",
      "experiment",
      "employment"
    ],
    "answer": 1,
    "translation": "若井滉斗は自宅スタジオのために新しい機材を注文しました。",
    "explanation": "equipment（機材、設備）。不可算名詞であることに注意。 / その他の選択肢: experiment（実験）、environment（環境）、employment（雇用）。"
  },
  {
    "id": 81,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he fell asleep as a (    ) on the train.",
    "options": [
      "passenger",
      "messenger",
      "stranger",
      "manager"
    ],
    "answer": 0,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼は電車の乗客として眠ってしまいました。",
    "explanation": "passenger（乗客）。 / その他の選択肢: messenger（使者）、manager（マネージャー）、stranger（見知らぬ人）。"
  },
  {
    "id": 82,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE finally arrived at the (    ) after a long drive.",
    "options": [
      "decision",
      "department",
      "description",
      "destination"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは長時間のドライブの末、ついに目的地に到着しました。",
    "explanation": "destination（目的地、行き先）。 / その他の選択肢: description（説明）、decision（決定）、department（部門）。"
  },
  {
    "id": 83,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE listens to a wide (    ) of music genres.",
    "options": [
      "variety",
      "anxiety",
      "safety",
      "society"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは幅広いジャンルの音楽を聴きます。",
    "explanation": "a wide variety of ~（幅広い種類の〜）。 / その他の選択肢: society（社会）、safety（安全）、anxiety（不安）。"
  },
  {
    "id": 84,
    "type": "sentence",
    "text": "One (    ) of living in Tokyo are that The members of Mrs. GREEN APPLE can easily go to many concerts.",
    "options": [
      "advance",
      "advantage",
      "adventure",
      "advice"
    ],
    "answer": 1,
    "translation": "東京に住む一つの利点は、ミセスグリーンアップルのメンバーがたくさんのコンサートに簡単に行けることです。",
    "explanation": "advantage（利点、有利な点）。 / その他の選択肢: adventure（冒険）、advance（前進）、advice（助言）。"
  },
  {
    "id": 85,
    "type": "sentence",
    "text": "Motoki Ohmori missed the (    ) to take a walk in the park because of the rain.",
    "options": [
      "opposition",
      "opinion",
      "operation",
      "opportunity"
    ],
    "answer": 3,
    "translation": "大森元貴は雨のせいで公園を散歩する機会を逃しました。",
    "explanation": "opportunity（機会、チャンス）。 / その他の選択肢: opposition（反対）、operation（手術・操作）、opinion（意見）。"
  },
  {
    "id": 86,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, The (    ) cheered loudly when he appeared on stage.",
    "options": [
      "audience",
      "attendance",
      "appearance",
      "absence"
    ],
    "answer": 0,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼がステージに現れた時、観客は大きな声で歓声を上げました。",
    "explanation": "audience（観客、聴衆）。 / その他の選択肢: attendance（出席）、absence（欠席）、appearance（外見・出現）。"
  },
  {
    "id": 87,
    "type": "sentence",
    "text": "Ryoka Fujisawa often takes pictures while walking around the (    ).",
    "options": [
      "livelihood",
      "neighborhood",
      "childhood",
      "brotherhood"
    ],
    "answer": 1,
    "translation": "藤澤涼架は近所を散歩しながらよく写真を撮ります。",
    "explanation": "neighborhood（近所、地域）。 / その他の選択肢: childhood（子供時代）、livelihood（生計）、brotherhood（兄弟の縁）。"
  },
  {
    "id": 88,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE felt a certain (    ) of nervousness before the live broadcast.",
    "options": [
      "decree",
      "degree",
      "agree",
      "disagree"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは生放送の前に、ある程度の緊張を感じました。",
    "explanation": "degree（程度、度合い）。a certain degree of ~ で「ある程度の〜」。 / その他の選択肢: decree（法令）、agree（同意する）、disagree（同意しない）。"
  },
  {
    "id": 89,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE caught a cold because the (    ) dropped suddenly.",
    "options": [
      "temperature",
      "literature",
      "feature",
      "creature"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは気温が急に下がったため風邪をひきました。",
    "explanation": "temperature（温度、気温、体温）。 / その他の選択肢: literature（文学）、creature（生き物）、feature（特徴）。"
  },
  {
    "id": 90,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were deeply moved by the beautiful (    ) of the mountains.",
    "options": [
      "scene",
      "scenery",
      "screen",
      "science"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルのメンバーは山の美しい風景に深く感動しました。",
    "explanation": "scenery（風景、景色）。 / その他の選択肢: scene（場面）、science（科学）、screen（画面）。"
  },
  {
    "id": 91,
    "type": "sentence",
    "text": "Motoki Ohmori eats healthy food to prevent (    ).",
    "options": [
      "desire",
      "deceive",
      "disease",
      "decrease"
    ],
    "answer": 2,
    "translation": "大森元貴は病気を防ぐために健康的な食べ物を食べます。",
    "explanation": "disease（病気）。 / その他の選択肢: decrease（減少する）、deceive（だます）、desire（欲望）。"
  },
  {
    "id": 92,
    "type": "sentence",
    "text": "It is a (    ) for Hiroto Wakai to drink coffee every morning.",
    "options": [
      "costume",
      "custom",
      "customer",
      "castle"
    ],
    "answer": 1,
    "translation": "毎朝コーヒーを飲むのが若井滉斗の習慣です。",
    "explanation": "custom（習慣、風習）。 / その他の選択肢: costume（衣装）、customer（客）、castle（城）。"
  },
  {
    "id": 93,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he spent a large (    ) of money on new clothes.",
    "options": [
      "allowance",
      "account",
      "announce",
      "amount"
    ],
    "answer": 3,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼は新しい服に多額のお金を使いました。",
    "explanation": "a large amount of ~（多量の〜、多額の〜）。 / その他の選択肢: account（口座・説明）、announce（発表する）、allowance（小遣い）。"
  },
  {
    "id": 94,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE worked hard to (    ) the goal of making a great album.",
    "options": [
      "achieve",
      "believe",
      "deceive",
      "receive"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは素晴らしいアルバムを作るという目標を達成するために一生懸命働きました。",
    "explanation": "achieve（達成する）。 / その他の選択肢: believe（信じる）、receive（受け取る）、deceive（だます）。"
  },
  {
    "id": 95,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE never (    )s about being too busy.",
    "options": [
      "explain",
      "complain",
      "remain",
      "contain"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは忙しすぎることについて決して不平を言いません。",
    "explanation": "complain about ~（〜について不平を言う）。 / その他の選択肢: explain（説明する）、remain（残る）、contain（含む）。"
  },
  {
    "id": 96,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, they's smile always (    )s the fans.",
    "options": [
      "encourage",
      "enlarge",
      "discourage",
      "engage"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、彼らの笑顔はいつもファンを勇気づけます。",
    "explanation": "encourage（勇気づける、励ます）。 / その他の選択肢: discourage（落胆させる）、engage（従事する）、enlarge（拡大する）。"
  },
  {
    "id": 97,
    "type": "sentence",
    "text": "Motoki Ohmori practices every day to (    ) guitar skills.",
    "options": [
      "approve",
      "prove",
      "remove",
      "improve"
    ],
    "answer": 3,
    "translation": "大森元貴はギターのスキルを向上させるために毎日練習しています。",
    "explanation": "improve（向上させる、改善する）。 / その他の選択肢: prove（証明する）、remove（取り除く）、approve（承認する）。"
  },
  {
    "id": 98,
    "type": "sentence",
    "text": "Hiroto Wakai (    )ed that they should go eat ramen after the rehearsal.",
    "options": [
      "suggest",
      "digest",
      "invest",
      "request"
    ],
    "answer": 0,
    "translation": "若井滉斗はリハーサルの後にラーメンを食べに行くべきだと提案しました。",
    "explanation": "suggest（提案する）。 / その他の選択肢: digest（消化する）、request（要求する）、invest（投資する）。"
  },
  {
    "id": 99,
    "type": "sentence",
    "text": "Ryoka Fujisawa needs to (    ) the broken strings on the guitar.",
    "options": [
      "reduce",
      "replace",
      "place",
      "relax"
    ],
    "answer": 1,
    "translation": "藤澤涼架はギターの切れた弦を交換する必要があります。",
    "explanation": "replace（交換する、取り替える）。 / その他の選択肢: place（場所）、reduce（減らす）、relax（リラックスする）。"
  },
  {
    "id": 100,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE was easily (    )d by fans while shopping at the mall.",
    "options": [
      "memorize",
      "organize",
      "recognize",
      "realize"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルはショッピングモールで買い物中にファンにすぐ気付かれました。",
    "explanation": "recognize（気付く、認識する）。 / その他の選択肢: organize（組織する）、realize（気付く）、memorize（暗記する）。"
  },
  {
    "id": 101,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE will (    ) in a charity marathon next month.",
    "options": [
      "anticipate",
      "participate",
      "hesitate",
      "calculate"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは来月チャリティーマラソンに参加します。",
    "explanation": "participate in ~（〜に参加する）。 / その他の選択肢: anticipate（予想する）、hesitate（ためらう）、calculate（計算する）。"
  },
  {
    "id": 102,
    "type": "sentence",
    "text": "Writing a good song (    )s a lot of concentration for The members of Mrs. GREEN APPLE.",
    "options": [
      "retire",
      "acquire",
      "inquire",
      "require"
    ],
    "answer": 3,
    "translation": "良い曲を書くことはミセスグリーンアップルのメンバーにとって多くの集中力を必要とします。",
    "explanation": "require（必要とする）。 / その他の選択肢: acquire（獲得する）、inquire（尋ねる）、retire（引退する）。"
  },
  {
    "id": 103,
    "type": "sentence",
    "text": "Motoki Ohmori doesn't like to (    ) themselves with others.",
    "options": [
      "repair",
      "compare",
      "prepare",
      "declare"
    ],
    "answer": 1,
    "translation": "大森元貴は自分自身を他人と比較するのが好きではありません。",
    "explanation": "compare A with B（AをBと比較する）。 / その他の選択肢: prepare（準備する）、repair（修理する）、declare（宣言する）。"
  },
  {
    "id": 104,
    "type": "sentence",
    "text": "Hiroto Wakai wants to (    ) fans with unforgettable memories.",
    "options": [
      "divide",
      "decide",
      "provide",
      "guide"
    ],
    "answer": 2,
    "translation": "若井滉斗はファンに忘れられない思い出を提供したいと思っています。",
    "explanation": "provide A with B（AにBを提供する）。 / その他の選択肢: divide（分割する）、decide（決定する）、guide（案内する）。"
  },
  {
    "id": 105,
    "type": "sentence",
    "text": "Ryoka Fujisawa can always (    ) on the other members when things get tough.",
    "options": [
      "supply",
      "apply",
      "reply",
      "rely"
    ],
    "answer": 3,
    "translation": "困難な時、藤澤涼架はいつも他のメンバーに頼ることができます。",
    "explanation": "rely on ~（〜に頼る）。 / その他の選択肢: reply（返事する）、apply（適用する・申し込む）、supply（供給する）。"
  },
  {
    "id": 106,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE couldn't (    ) to buy that expensive instrument years ago.",
    "options": [
      "record",
      "afford",
      "reward",
      "effort"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは何年も前はあの高価な楽器を買う余裕がありませんでした。",
    "explanation": "afford to do（〜する余裕がある）。 / その他の選択肢: effort（努力）、record（記録）、reward（報酬）。"
  },
  {
    "id": 107,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE wore a warm coat to (    ) catching a cold.",
    "options": [
      "invent",
      "event",
      "present",
      "prevent"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは風邪をひくのを防ぐために暖かいコートを着ました。",
    "explanation": "prevent（防ぐ、妨げる）。 / その他の選択肢: invent（発明する）、event（出来事）、present（提示する・プレゼント）。"
  },
  {
    "id": 108,
    "type": "sentence",
    "text": "A simple meal of rice and miso soup are enough to (    ) The members of Mrs. GREEN APPLE.",
    "options": [
      "modify",
      "terrify",
      "satisfy",
      "qualify"
    ],
    "answer": 2,
    "translation": "ご飯と味噌汁のシンプルな食事でミセスグリーンアップルのメンバーを満足させるのに十分です。",
    "explanation": "satisfy（満足させる）。 / その他の選択肢: modify（修正する）、qualify（資格を与える）、terrify（怖がらせる）。"
  },
  {
    "id": 109,
    "type": "sentence",
    "text": "The melody of that song is very (    ) to Motoki Ohmori.",
    "options": [
      "popular",
      "familiar",
      "similar",
      "regular"
    ],
    "answer": 1,
    "translation": "その曲のメロディーは大森元貴にとってとても馴染みがあります。",
    "explanation": "be familiar to ~（〜にとって馴染みがある）。 / その他の選択肢: similar（似ている）、popular（人気の）、regular（規則的な）。"
  },
  {
    "id": 110,
    "type": "sentence",
    "text": "Living near the station is very (    ) for Hiroto Wakai.",
    "options": [
      "confident",
      "excellent",
      "convenient",
      "current"
    ],
    "answer": 2,
    "translation": "駅の近くに住むことは若井滉斗にとってとても便利です。",
    "explanation": "convenient（便利な）。 / その他の選択肢: confident（自信がある）、current（現在の）、excellent（優れた）。"
  },
  {
    "id": 111,
    "type": "sentence",
    "text": "Ryoka Fujisawa has been very (    ) since moving out of the parents' house.",
    "options": [
      "confident",
      "silent",
      "independent",
      "dependent"
    ],
    "answer": 2,
    "translation": "藤澤涼架は実家を出て以来、とても自立しています。",
    "explanation": "independent（自立した、独立した）。 / その他の選択肢: dependent（依存している）、confident（自信がある）、silent（静かな）。"
  },
  {
    "id": 112,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE likes to cook dishes from (    ) countries.",
    "options": [
      "various",
      "obvious",
      "curious",
      "serious"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは様々な国の料理を作るのが好きです。",
    "explanation": "various（様々な）。 / その他の選択肢: serious（深刻な）、obvious（明らかな）、curious（好奇心が強い）。"
  },
  {
    "id": 113,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE is always (    ) about new fashion trends.",
    "options": [
      "curious",
      "serious",
      "furious",
      "nervous"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルはいつも新しいファッショントレンドに好奇心を持っています。",
    "explanation": "be curious about ~（〜について好奇心が強い、気になる）。 / その他の選択肢: serious（深刻な）、furious（激怒した）、nervous（緊張した）。"
  },
  {
    "id": 114,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, they were not (    ) of the time and stayed up late playing games.",
    "options": [
      "alike",
      "aware",
      "awake",
      "away"
    ],
    "answer": 1,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、彼らは時間に気付かず、夜遅くまでゲームをして起きていました。",
    "explanation": "be aware of ~（〜に気付いている）。 / その他の選択肢: awake（起きている）、away（離れて）、alike（似ている）。"
  },
  {
    "id": 115,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, That is (    ) what he wanted to say.",
    "options": [
      "nearly",
      "exactly",
      "hardly",
      "mostly"
    ],
    "answer": 1,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、それはまさに彼が言いたかったことです。",
    "explanation": "exactly（まさに、正確に）。 / その他の選択肢: mostly（主に）、hardly（ほとんど～ない）、nearly（ほとんど）。"
  },
  {
    "id": 116,
    "type": "sentence",
    "text": "Hiroto Wakai (    ) visits that small cafe in the afternoon.",
    "options": [
      "rarely",
      "suddenly",
      "frequently",
      "recently"
    ],
    "answer": 2,
    "translation": "若井滉斗は午後によくその小さなカフェを訪れます。",
    "explanation": "frequently（頻繁に）。 / その他の選択肢: recently（最近）、rarely（めったに～ない）、suddenly（突然）。"
  },
  {
    "id": 117,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he's singing voice (    ) became stronger over the years.",
    "options": [
      "gradually",
      "usually",
      "naturally",
      "actually"
    ],
    "answer": 0,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼の歌声は年月を経て徐々に力強くなりました。",
    "explanation": "gradually（徐々に）。 / その他の選択肢: usually（普通は）、naturally（自然に）、actually（実は）。"
  },
  {
    "id": 118,
    "type": "sentence",
    "text": "When Mrs. GREEN APPLE heard the news, they (    ) called their family.",
    "options": [
      "unfortunately",
      "extremely",
      "completely",
      "immediately"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルはそのニュースを聞いた時、すぐに家族に電話しました。",
    "explanation": "immediately（すぐに、直ちに）。 / その他の選択肢: completely（完全に）、unfortunately（残念ながら）、extremely（極端に）。"
  },
  {
    "id": 119,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE loves all animals, but (    ) dogs.",
    "options": [
      "specifically",
      "specially",
      "eventually",
      "especially"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルはすべての動物が好きですが、特に犬が好きです。",
    "explanation": "especially（特に）。 / その他の選択肢: specially（特別に）、specifically（明確に）、eventually（最終的に）。"
  },
  {
    "id": 120,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE feel (    ) for making the fans happy.",
    "options": [
      "flexible",
      "terrible",
      "responsible",
      "possible"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルのメンバーはファンを幸せにすることに責任を感じています。",
    "explanation": "be responsible for ~（〜に対して責任がある）。 / その他の選択肢: possible（可能な）、terrible（ひどい）、flexible（柔軟な）。"
  },
  {
    "id": 121,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, he was not (    ) for the interview yesterday.",
    "options": [
      "capable",
      "valuable",
      "suitable",
      "available"
    ],
    "answer": 3,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、彼は昨日のインタビューには対応できませんでした（都合がつきませんでした）。",
    "explanation": "available（利用できる、手が空いている）。 / その他の選択肢: valuable（価値のある）、suitable（適した）、capable（能力がある）。"
  },
  {
    "id": 122,
    "type": "sentence",
    "text": "Hiroto Wakai finally managed to (    ) how to use the new synthesizer.",
    "options": [
      "figure out",
      "point out",
      "turn out",
      "carry out"
    ],
    "answer": 0,
    "translation": "若井滉斗はついに新しいシンセサイザーの使い方を理解することができました。",
    "explanation": "figure out（〜を理解する、解決する）。 / その他の選択肢: point out（指摘する）、turn out（判明する）、carry out（実行する）。"
  },
  {
    "id": 123,
    "type": "sentence",
    "text": "The song Ryoka Fujisawa wrote casually (    ) to be a massive hit.",
    "options": [
      "run out",
      "break out",
      "find out",
      "turn out"
    ],
    "answer": 3,
    "translation": "藤澤涼架が何気なく書いた曲が、大ヒットであることが判明しました。",
    "explanation": "turn out to be ~（〜であることが判明する）。 / その他の選択肢: break out（勃発する）、run out（尽きる）、find out（見つけ出す）。"
  },
  {
    "id": 124,
    "type": "sentence",
    "text": "The success of the live tour will (    ) teamwork, according to Mrs. GREEN APPLE.",
    "options": [
      "insist on",
      "focus on",
      "depend on",
      "rely on"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルによると、ライブツアーの成功はチームワークにかかっているとのことです。",
    "explanation": "depend on ~（〜次第である、〜に頼る）。 / その他の選択肢: insist on（主張する）、focus on（集中する）、rely on（頼る）。"
  },
  {
    "id": 125,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE booked the flight tickets (    ) for the trip.",
    "options": [
      "in particular",
      "in detail",
      "in advance",
      "in general"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは旅行のために航空券を事前に予約しました。",
    "explanation": "in advance（前もって、事前に）。 / その他の選択肢: in detail（詳細に）、in general（一般的に）、in particular（特に）。"
  },
  {
    "id": 126,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE thought the lyrics didn't (    ) at first, but later understood the deep meaning.",
    "options": [
      "make up",
      "make progress",
      "make sure",
      "make sense"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルのメンバーは最初、その歌詞は意味が通らないと思いましたが、後になって深い意味を理解しました。",
    "explanation": "make sense（意味をなす、理にかなう）。 / その他の選択肢: make up（構成する・化粧する）、make sure（確かめる）、make progress（進歩する）。"
  },
  {
    "id": 127,
    "type": "sentence",
    "text": "Motoki Ohmori noticed that they had (    ) milk while making breakfast.",
    "options": [
      "run out of",
      "stay out of",
      "keep out of",
      "get out of"
    ],
    "answer": 0,
    "translation": "大森元貴は朝食を作っている時に牛乳を切らしてしまったことに気付きました。",
    "explanation": "run out of ~（〜を使い果たす、切らす）。 / その他の選択肢: get out of（抜け出す）、stay out of（関わらない）、keep out of（立ち入らない）。"
  },
  {
    "id": 128,
    "type": "sentence",
    "text": "The music festival where Hiroto Wakai will perform is going to (    ) in August.",
    "options": [
      "take part",
      "take pride",
      "take care",
      "take place"
    ],
    "answer": 3,
    "translation": "若井滉斗が出演する音楽フェスは8月に開催される予定です。",
    "explanation": "take place（開催される、起こる）。 / その他の選択肢: take part（参加する）、take pride（誇りを持つ）、take care（世話をする）。"
  },
  {
    "id": 129,
    "type": "sentence",
    "text": "Ryoka Fujisawa is really (    ) meeting the fans again.",
    "options": [
      "look down on",
      "look forward to",
      "look up to",
      "look out for"
    ],
    "answer": 1,
    "translation": "藤澤涼架はまたファンに会えるのを本当に楽しみにしています。",
    "explanation": "look forward to ~（〜を楽しみに待つ）。toの後は名詞か動名詞が来ます。 / その他の選択肢: look up to（尊敬する）、look down on（見下す）、look out for（気をつける）。"
  },
  {
    "id": 130,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE advised the members to (    ) the small details in the sound.",
    "options": [
      "take advantage of",
      "pay attention to",
      "catch sight of",
      "get rid of"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルはメンバーたちに、音の細部に注意を払うようにアドバイスしました。",
    "explanation": "pay attention to ~（〜に注意を払う）。 / その他の選択肢: catch sight of（見つける）、get rid of（取り除く）、take advantage of（利用する）。"
  },
  {
    "id": 131,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE knows how to politely (    ) difficult situations.",
    "options": [
      "come up with",
      "keep up with",
      "put up with",
      "deal with"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは困難な状況に丁寧に対処する方法を知っています。",
    "explanation": "deal with ~（〜を処理する、〜に対処する）。 / その他の選択肢: come up with（思いつく）、keep up with（遅れずについていく）、put up with（我慢する）。"
  },
  {
    "id": 132,
    "type": "sentence",
    "text": "It have become a (    ) for The members of Mrs. GREEN APPLE to visit a shrine on New Year's Day.",
    "options": [
      "transition",
      "tradition",
      "translation",
      "transportation"
    ],
    "answer": 1,
    "translation": "元旦に神社を訪れることがミセスグリーンアップルのメンバーの伝統（恒例行事）になっています。",
    "explanation": "tradition（伝統、慣習）。 / その他の選択肢: translation（翻訳）、transition（移行）、transportation（交通機関）。"
  },
  {
    "id": 133,
    "type": "sentence",
    "text": "Motoki Ohmori was mentioned as a strong (    ) for the music award.",
    "options": [
      "candidate",
      "certificate",
      "celebration",
      "customer"
    ],
    "answer": 0,
    "translation": "大森元貴はその音楽賞の有力な候補者として言及されました。",
    "explanation": "candidate（候補者）。 / その他の選択肢: certificate（証明書）、celebration（お祝い）、customer（客）。"
  },
  {
    "id": 134,
    "type": "sentence",
    "text": "Hiroto Wakai always treats the concert staff and every (    ) with great respect.",
    "options": [
      "engineer",
      "employee",
      "manager",
      "employer"
    ],
    "answer": 1,
    "translation": "若井滉斗はコンサートスタッフやすべての従業員に大きな敬意を持って接します。",
    "explanation": "employee（従業員）。 / その他の選択肢: employer（雇用主）、engineer（エンジニア）、manager（マネージャー）。"
  },
  {
    "id": 135,
    "type": "sentence",
    "text": "Ryoka Fujisawa discovered a new (    ) to relieve stress after a long tour.",
    "options": [
      "department",
      "period",
      "record",
      "method"
    ],
    "answer": 3,
    "translation": "藤澤涼架は長いツアーの後にストレスを和らげる新しい方法を発見しました。",
    "explanation": "method（方法、方式）。 / その他の選択肢: period（期間）、record（記録）、department（部門）。"
  },
  {
    "id": 136,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE used their first (    ) to buy a gift for their parents.",
    "options": [
      "safety",
      "salary",
      "society",
      "sympathy"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは初任給を使って両親にプレゼントを買いました。",
    "explanation": "salary（給料）。 / その他の選択肢: safety（安全）、sympathy（同情）、society（社会）。"
  },
  {
    "id": 137,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they had to (    ) that they forgot the lyrics for a moment during the live.",
    "options": [
      "admit",
      "commit",
      "permit",
      "submit"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らはライブ中、一瞬歌詞を忘れたことを認めなければなりませんでした。",
    "explanation": "admit（〜を認める）。 / その他の選択肢: permit（許可する）、submit（提出する）。"
  },
  {
    "id": 138,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE never (    )s others when a mistake happens in the studio.",
    "options": [
      "blame",
      "claim",
      "frame",
      "flame"
    ],
    "answer": 0,
    "translation": "スタジオでミスが起きた時、ミセスグリーンアップルのメンバーは決して他人を責めません。",
    "explanation": "blame（〜を責める）。 / その他の選択肢: frame（枠・枠組み）、flame（炎）。"
  },
  {
    "id": 139,
    "type": "sentence",
    "text": "Motoki Ohmori had to (    ) the dinner reservation because the recording took longer.",
    "options": [
      "cancel",
      "channel",
      "panel",
      "tunnel"
    ],
    "answer": 0,
    "translation": "レコーディングが長引いたため、大森元貴は夕食の予約を取り消さなければなりませんでした。",
    "explanation": "cancel（取り消す、キャンセルする）。 / その他の選択肢: channel（チャンネル）、panel（パネル）。"
  },
  {
    "id": 140,
    "type": "sentence",
    "text": "Hiroto Wakai tries to (    ) negative comments on the internet.",
    "options": [
      "explore",
      "ignore",
      "restore",
      "store"
    ],
    "answer": 1,
    "translation": "若井滉斗はインターネット上の否定的なコメントを無視しようと努めています。",
    "explanation": "ignore（無視する）。 / その他の選択肢: explore（探検する）、restore（修復する）。"
  },
  {
    "id": 141,
    "type": "sentence",
    "text": "Ryoka Fujisawa used a ruler to (    ) the size of the new guitar case.",
    "options": [
      "measure",
      "pleasure",
      "leisure",
      "treasure"
    ],
    "answer": 0,
    "translation": "藤澤涼架は新しいギターケースのサイズを測るために定規を使いました。",
    "explanation": "measure（〜を測る）。 / その他の選択肢: treasure（宝物）、pleasure（喜び）。"
  },
  {
    "id": 142,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE donated money to an organization that (    )s stray animals.",
    "options": [
      "continue",
      "argue",
      "rescue",
      "value"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは迷子の動物を救助する団体に寄付をしました。",
    "explanation": "rescue（救助する）。 / その他の選択肢: argue（議論する）、continue（続ける）。"
  },
  {
    "id": 143,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they will (    ) for the best ramen shop in the city tonight.",
    "options": [
      "teach",
      "catch",
      "reach",
      "search"
    ],
    "answer": 3,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは今夜、この街で一番美味しいラーメン屋を探すつもりです。",
    "explanation": "search for ~（〜を探す）。 / その他の選択肢: reach（到達する）、teach（教える）。"
  },
  {
    "id": 144,
    "type": "sentence",
    "text": "The staff (    )ed The members of Mrs. GREEN APPLE not to run on the slippery stage.",
    "options": [
      "burn",
      "turn",
      "warn",
      "learn"
    ],
    "answer": 2,
    "translation": "スタッフはミセスグリーンアップルのメンバーに、滑りやすいステージの上を走らないよう警告しました。",
    "explanation": "warn A not to do（Aに〜しないよう警告する）。 / その他の選択肢: burn（燃える）、turn（回る）。"
  },
  {
    "id": 145,
    "type": "sentence",
    "text": "Due to a (    ) of sleep, Motoki Ohmori drank three cups of coffee.",
    "options": [
      "lack",
      "lock",
      "luck",
      "rock"
    ],
    "answer": 0,
    "translation": "睡眠不足のため、大森元貴はコーヒーを3杯飲みました。",
    "explanation": "a lack of ~（〜の不足）。 / その他の選択肢: luck（幸運）、lock（鍵）。"
  },
  {
    "id": 146,
    "type": "sentence",
    "text": "Hiroto Wakai paid the entrance (    ) to visit the art museum.",
    "options": [
      "fee",
      "tree",
      "flee",
      "free"
    ],
    "answer": 0,
    "translation": "若井滉斗は美術館を訪れるために入場料を支払いました。",
    "explanation": "fee（料金、手数料、入場料）。 / その他の選択肢: free（無料）、flee（逃げる）。"
  },
  {
    "id": 147,
    "type": "sentence",
    "text": "Ryoka Fujisawa believes that good (    ) is much more important than money.",
    "options": [
      "stealth",
      "death",
      "health",
      "wealth"
    ],
    "answer": 3,
    "translation": "藤澤涼架はお金よりも健康のほうがはるかに重要だと信じています。",
    "explanation": "health（健康）。wealth（富）の対義的。 / その他の選択肢: health（健康）、death（死）。"
  },
  {
    "id": 148,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, Once they starts writing a song, they enter a deep concentration (    ).",
    "options": [
      "bone",
      "zone",
      "tone",
      "stone"
    ],
    "answer": 1,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、一度曲を書き始めると、彼らは深い集中のゾーンに入ります。",
    "explanation": "zone（地帯、領域）。 / その他の選択肢: bone（骨）、tone（音色）。"
  },
  {
    "id": 149,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they cannot (    ) the fact that their fans are the best in the world.",
    "options": [
      "rely",
      "deny",
      "reply",
      "defy"
    ],
    "answer": 1,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは自分たちのファンが世界一であるという事実を否定できません。",
    "explanation": "deny（〜を否定する）。 / その他の選択肢: rely（頼る）、reply（返事する）。"
  },
  {
    "id": 150,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, they love to (    ) with friends and play board games.",
    "options": [
      "weather",
      "bother",
      "gather",
      "father"
    ],
    "answer": 2,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、彼らは友達と集まってボードゲームをするのが好きです。",
    "explanation": "gather（集める、集まる）。 / その他の選択肢: bother（悩ます）、father（父親）。"
  },
  {
    "id": 151,
    "type": "sentence",
    "text": "The agency decided to (    ) more security guards for Motoki Ohmori's concert.",
    "options": [
      "tire",
      "hire",
      "fire",
      "wire"
    ],
    "answer": 1,
    "translation": "事務所は大森元貴のコンサートのために警備員をさらに雇うことを決定しました。",
    "explanation": "hire（雇う）。 / その他の選択肢: fire（火・解雇する）、tire（疲れさせる）。"
  },
  {
    "id": 152,
    "type": "sentence",
    "text": "Hiroto Wakai thinks people should not (    ) others based solely on appearance.",
    "options": [
      "judge",
      "edge",
      "bridge",
      "pledge"
    ],
    "answer": 0,
    "translation": "若井滉斗は、人は見た目だけで他人を判断するべきではないと考えています。",
    "explanation": "judge（判断する）。 / その他の選択肢: bridge（橋）、edge（端）。"
  },
  {
    "id": 153,
    "type": "sentence",
    "text": "In winter, Ryoka Fujisawa often wears a cozy (    ) sweater.",
    "options": [
      "knit",
      "hit",
      "sit",
      "fit"
    ],
    "answer": 0,
    "translation": "冬には、藤澤涼架はよく着心地の良いニット（編まれた）セーターを着ます。",
    "explanation": "knit（編む、編まれた）。 / その他の選択肢: hit（打つ）、fit（合う）。"
  },
  {
    "id": 154,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, Tired after the live, they tried to (    ) against the wall.",
    "options": [
      "clean",
      "bean",
      "mean",
      "lean"
    ],
    "answer": 3,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、ライブの後で疲れていたので、彼らは壁に寄りかかろうとしました。",
    "explanation": "lean against ~（〜に寄りかかる）。 / その他の選択肢: mean（意味する）、clean（掃除する）。"
  },
  {
    "id": 155,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE uses a special case to (    ) the condition of the vintage guitar.",
    "options": [
      "preserve",
      "observe",
      "reserve",
      "deserve"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルはヴィンテージギターの状態を保存するために特別なケースを使用しています。",
    "explanation": "preserve（保存する、保護する）。 / その他の選択肢: reserve（予約する）、deserve（値する）。"
  },
  {
    "id": 156,
    "type": "sentence",
    "text": "When The members of Mrs. GREEN APPLE started playing, all the nervousness seemed to (    ).",
    "options": [
      "finish",
      "banish",
      "vanish",
      "punish"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルのメンバーが演奏し始めると、すべての緊張が消え去ったように見えました。",
    "explanation": "vanish（消える、見えなくなる）。 / その他の選択肢: punish（罰する）、finish（終える）。"
  },
  {
    "id": 157,
    "type": "sentence",
    "text": "Motoki Ohmori bought some fresh (    ) to cook pasta.",
    "options": [
      "ingredients",
      "instructions",
      "instruments",
      "insects"
    ],
    "answer": 0,
    "translation": "大森元貴はパスタを作るために新鮮な材料をいくつか買いました。",
    "explanation": "ingredient（材料、食材）。料理に関する文脈で使われます。 / その他の選択肢: instruments（楽器）、instructions（指示）、insects（昆虫）。"
  },
  {
    "id": 158,
    "type": "sentence",
    "text": "Hiroto Wakai ordered new (    ) for the home studio.",
    "options": [
      "environment",
      "employment",
      "equipment",
      "experiment"
    ],
    "answer": 2,
    "translation": "若井滉斗は自宅スタジオのために新しい機材を注文しました。",
    "explanation": "equipment（機材、設備）。不可算名詞であることに注意。 / その他の選択肢: experiment（実験）、environment（環境）、employment（雇用）。"
  },
  {
    "id": 159,
    "type": "sentence",
    "text": "Ryoka Fujisawa fell asleep as a (    ) on the train.",
    "options": [
      "messenger",
      "manager",
      "passenger",
      "stranger"
    ],
    "answer": 2,
    "translation": "藤澤涼架は電車の乗客として眠ってしまいました。",
    "explanation": "passenger（乗客）。 / その他の選択肢: messenger（使者）、manager（マネージャー）、stranger（見知らぬ人）。"
  },
  {
    "id": 160,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE finally arrived at the (    ) after a long drive.",
    "options": [
      "decision",
      "destination",
      "department",
      "description"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは長時間のドライブの末、ついに目的地に到着しました。",
    "explanation": "destination（目的地、行き先）。 / その他の選択肢: description（説明）、decision（決定）、department（部門）。"
  },
  {
    "id": 161,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE listens to a wide (    ) of music genres.",
    "options": [
      "safety",
      "anxiety",
      "society",
      "variety"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは幅広いジャンルの音楽を聴きます。",
    "explanation": "a wide variety of ~（幅広い種類の〜）。 / その他の選択肢: society（社会）、safety（安全）、anxiety（不安）。"
  },
  {
    "id": 162,
    "type": "sentence",
    "text": "One (    ) of living in Tokyo are that The members of Mrs. GREEN APPLE can easily go to many concerts.",
    "options": [
      "advice",
      "advantage",
      "advance",
      "adventure"
    ],
    "answer": 1,
    "translation": "東京に住む一つの利点は、ミセスグリーンアップルのメンバーがたくさんのコンサートに簡単に行けることです。",
    "explanation": "advantage（利点、有利な点）。 / その他の選択肢: adventure（冒険）、advance（前進）、advice（助言）。"
  },
  {
    "id": 163,
    "type": "sentence",
    "text": "Motoki Ohmori missed the (    ) to take a walk in the park because of the rain.",
    "options": [
      "opportunity",
      "opinion",
      "opposition",
      "operation"
    ],
    "answer": 0,
    "translation": "大森元貴は雨のせいで公園を散歩する機会を逃しました。",
    "explanation": "opportunity（機会、チャンス）。 / その他の選択肢: opposition（反対）、operation（手術・操作）、opinion（意見）。"
  },
  {
    "id": 164,
    "type": "sentence",
    "text": "The (    ) cheered loudly when Hiroto Wakai appeared on stage.",
    "options": [
      "attendance",
      "absence",
      "appearance",
      "audience"
    ],
    "answer": 3,
    "translation": "若井滉斗がステージに現れた時、観客は大きな声で歓声を上げました。",
    "explanation": "audience（観客、聴衆）。 / その他の選択肢: attendance（出席）、absence（欠席）、appearance（外見・出現）。"
  },
  {
    "id": 165,
    "type": "sentence",
    "text": "Ryoka Fujisawa often takes pictures while walking around the (    ).",
    "options": [
      "childhood",
      "brotherhood",
      "livelihood",
      "neighborhood"
    ],
    "answer": 3,
    "translation": "藤澤涼架は近所を散歩しながらよく写真を撮ります。",
    "explanation": "neighborhood（近所、地域）。 / その他の選択肢: childhood（子供時代）、livelihood（生計）、brotherhood（兄弟の縁）。"
  },
  {
    "id": 166,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE felt a certain (    ) of nervousness before the live broadcast.",
    "options": [
      "degree",
      "disagree",
      "agree",
      "decree"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは生放送の前に、ある程度の緊張を感じました。",
    "explanation": "degree（程度、度合い）。a certain degree of ~ で「ある程度の〜」。 / その他の選択肢: decree（法令）、agree（同意する）、disagree（同意しない）。"
  },
  {
    "id": 167,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE caught a cold because the (    ) dropped suddenly.",
    "options": [
      "literature",
      "creature",
      "temperature",
      "feature"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは気温が急に下がったため風邪をひきました。",
    "explanation": "temperature（温度、気温、体温）。 / その他の選択肢: literature（文学）、creature（生き物）、feature（特徴）。"
  },
  {
    "id": 168,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were deeply moved by the beautiful (    ) of the mountains.",
    "options": [
      "scene",
      "science",
      "scenery",
      "screen"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルのメンバーは山の美しい風景に深く感動しました。",
    "explanation": "scenery（風景、景色）。 / その他の選択肢: scene（場面）、science（科学）、screen（画面）。"
  },
  {
    "id": 169,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, he eats healthy food to prevent (    ).",
    "options": [
      "deceive",
      "disease",
      "desire",
      "decrease"
    ],
    "answer": 1,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、彼は病気を防ぐために健康的な食べ物を食べます。",
    "explanation": "disease（病気）。 / その他の選択肢: decrease（減少する）、deceive（だます）、desire（欲望）。"
  },
  {
    "id": 170,
    "type": "sentence",
    "text": "It is a (    ) for Hiroto Wakai to drink coffee every morning.",
    "options": [
      "costume",
      "custom",
      "customer",
      "castle"
    ],
    "answer": 1,
    "translation": "毎朝コーヒーを飲むのが若井滉斗の習慣です。",
    "explanation": "custom（習慣、風習）。 / その他の選択肢: costume（衣装）、customer（客）、castle（城）。"
  },
  {
    "id": 171,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he spent a large (    ) of money on new clothes.",
    "options": [
      "announce",
      "amount",
      "allowance",
      "account"
    ],
    "answer": 1,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼は新しい服に多額のお金を使いました。",
    "explanation": "a large amount of ~（多量の〜、多額の〜）。 / その他の選択肢: account（口座・説明）、announce（発表する）、allowance（小遣い）。"
  },
  {
    "id": 172,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE worked hard to (    ) the goal of making a great album.",
    "options": [
      "believe",
      "achieve",
      "deceive",
      "receive"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは素晴らしいアルバムを作るという目標を達成するために一生懸命働きました。",
    "explanation": "achieve（達成する）。 / その他の選択肢: believe（信じる）、receive（受け取る）、deceive（だます）。"
  },
  {
    "id": 173,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE never (    )s about being too busy.",
    "options": [
      "complain",
      "contain",
      "explain",
      "remain"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは忙しすぎることについて決して不平を言いません。",
    "explanation": "complain about ~（〜について不平を言う）。 / その他の選択肢: explain（説明する）、remain（残る）、contain（含む）。"
  },
  {
    "id": 174,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE's smile always (    )s the fans.",
    "options": [
      "discourage",
      "engage",
      "enlarge",
      "encourage"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルのメンバーの笑顔はいつもファンを勇気づけます。",
    "explanation": "encourage（勇気づける、励ます）。 / その他の選択肢: discourage（落胆させる）、engage（従事する）、enlarge（拡大する）。"
  },
  {
    "id": 175,
    "type": "sentence",
    "text": "Motoki Ohmori practices every day to (    ) guitar skills.",
    "options": [
      "remove",
      "approve",
      "prove",
      "improve"
    ],
    "answer": 3,
    "translation": "大森元貴はギターのスキルを向上させるために毎日練習しています。",
    "explanation": "improve（向上させる、改善する）。 / その他の選択肢: prove（証明する）、remove（取り除く）、approve（承認する）。"
  },
  {
    "id": 176,
    "type": "sentence",
    "text": "Hiroto Wakai (    )ed that they should go eat ramen after the rehearsal.",
    "options": [
      "request",
      "suggest",
      "invest",
      "digest"
    ],
    "answer": 1,
    "translation": "若井滉斗はリハーサルの後にラーメンを食べに行くべきだと提案しました。",
    "explanation": "suggest（提案する）。 / その他の選択肢: digest（消化する）、request（要求する）、invest（投資する）。"
  },
  {
    "id": 177,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he needs to (    ) the broken strings on the guitar.",
    "options": [
      "replace",
      "place",
      "relax",
      "reduce"
    ],
    "answer": 0,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼はギターの切れた弦を交換する必要があります。",
    "explanation": "replace（交換する、取り替える）。 / その他の選択肢: place（場所）、reduce（減らす）、relax（リラックスする）。"
  },
  {
    "id": 178,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE was easily (    )d by fans while shopping at the mall.",
    "options": [
      "memorize",
      "realize",
      "organize",
      "recognize"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルはショッピングモールで買い物中にファンにすぐ気付かれました。",
    "explanation": "recognize（気付く、認識する）。 / その他の選択肢: organize（組織する）、realize（気付く）、memorize（暗記する）。"
  },
  {
    "id": 179,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they will (    ) in a charity marathon next month.",
    "options": [
      "participate",
      "anticipate",
      "hesitate",
      "calculate"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは来月チャリティーマラソンに参加します。",
    "explanation": "participate in ~（〜に参加する）。 / その他の選択肢: anticipate（予想する）、hesitate（ためらう）、calculate（計算する）。"
  },
  {
    "id": 180,
    "type": "sentence",
    "text": "Writing a good song (    )s a lot of concentration for The members of Mrs. GREEN APPLE.",
    "options": [
      "require",
      "retire",
      "acquire",
      "inquire"
    ],
    "answer": 0,
    "translation": "良い曲を書くことはミセスグリーンアップルのメンバーにとって多くの集中力を必要とします。",
    "explanation": "require（必要とする）。 / その他の選択肢: acquire（獲得する）、inquire（尋ねる）、retire（引退する）。"
  },
  {
    "id": 181,
    "type": "sentence",
    "text": "Motoki Ohmori doesn't like to (    ) themselves with others.",
    "options": [
      "repair",
      "compare",
      "declare",
      "prepare"
    ],
    "answer": 1,
    "translation": "大森元貴は自分自身を他人と比較するのが好きではありません。",
    "explanation": "compare A with B（AをBと比較する）。 / その他の選択肢: prepare（準備する）、repair（修理する）、declare（宣言する）。"
  },
  {
    "id": 182,
    "type": "sentence",
    "text": "Hiroto Wakai wants to (    ) fans with unforgettable memories.",
    "options": [
      "divide",
      "guide",
      "decide",
      "provide"
    ],
    "answer": 3,
    "translation": "若井滉斗はファンに忘れられない思い出を提供したいと思っています。",
    "explanation": "provide A with B（AにBを提供する）。 / その他の選択肢: divide（分割する）、decide（決定する）、guide（案内する）。"
  },
  {
    "id": 183,
    "type": "sentence",
    "text": "Ryoka Fujisawa can always (    ) on the other members when things get tough.",
    "options": [
      "rely",
      "supply",
      "apply",
      "reply"
    ],
    "answer": 0,
    "translation": "困難な時、藤澤涼架はいつも他のメンバーに頼ることができます。",
    "explanation": "rely on ~（〜に頼る）。 / その他の選択肢: reply（返事する）、apply（適用する・申し込む）、supply（供給する）。"
  },
  {
    "id": 184,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE couldn't (    ) to buy that expensive instrument years ago.",
    "options": [
      "reward",
      "record",
      "afford",
      "effort"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは何年も前はあの高価な楽器を買う余裕がありませんでした。",
    "explanation": "afford to do（〜する余裕がある）。 / その他の選択肢: effort（努力）、record（記録）、reward（報酬）。"
  },
  {
    "id": 185,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE wore a warm coat to (    ) catching a cold.",
    "options": [
      "prevent",
      "invent",
      "present",
      "event"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは風邪をひくのを防ぐために暖かいコートを着ました。",
    "explanation": "prevent（防ぐ、妨げる）。 / その他の選択肢: invent（発明する）、event（出来事）、present（提示する・プレゼント）。"
  },
  {
    "id": 186,
    "type": "sentence",
    "text": "A simple meal of rice and miso soup are enough to (    ) The members of Mrs. GREEN APPLE.",
    "options": [
      "qualify",
      "satisfy",
      "modify",
      "terrify"
    ],
    "answer": 1,
    "translation": "ご飯と味噌汁のシンプルな食事でミセスグリーンアップルのメンバーを満足させるのに十分です。",
    "explanation": "satisfy（満足させる）。 / その他の選択肢: modify（修正する）、qualify（資格を与える）、terrify（怖がらせる）。"
  },
  {
    "id": 187,
    "type": "sentence",
    "text": "The melody of that song is very (    ) to Motoki Ohmori.",
    "options": [
      "popular",
      "regular",
      "familiar",
      "similar"
    ],
    "answer": 2,
    "translation": "その曲のメロディーは大森元貴にとってとても馴染みがあります。",
    "explanation": "be familiar to ~（〜にとって馴染みがある）。 / その他の選択肢: similar（似ている）、popular（人気の）、regular（規則的な）。"
  },
  {
    "id": 188,
    "type": "sentence",
    "text": "Living near the station is very (    ) for Hiroto Wakai.",
    "options": [
      "excellent",
      "current",
      "convenient",
      "confident"
    ],
    "answer": 2,
    "translation": "駅の近くに住むことは若井滉斗にとってとても便利です。",
    "explanation": "convenient（便利な）。 / その他の選択肢: confident（自信がある）、current（現在の）、excellent（優れた）。"
  },
  {
    "id": 189,
    "type": "sentence",
    "text": "Ryoka Fujisawa has been very (    ) since moving out of the parents' house.",
    "options": [
      "dependent",
      "silent",
      "confident",
      "independent"
    ],
    "answer": 3,
    "translation": "藤澤涼架は実家を出て以来、とても自立しています。",
    "explanation": "independent（自立した、独立した）。 / その他の選択肢: dependent（依存している）、confident（自信がある）、silent（静かな）。"
  },
  {
    "id": 190,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE likes to cook dishes from (    ) countries.",
    "options": [
      "curious",
      "various",
      "serious",
      "obvious"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは様々な国の料理を作るのが好きです。",
    "explanation": "various（様々な）。 / その他の選択肢: serious（深刻な）、obvious（明らかな）、curious（好奇心が強い）。"
  },
  {
    "id": 191,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE is always (    ) about new fashion trends.",
    "options": [
      "furious",
      "curious",
      "serious",
      "nervous"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルはいつも新しいファッショントレンドに好奇心を持っています。",
    "explanation": "be curious about ~（〜について好奇心が強い、気になる）。 / その他の選択肢: serious（深刻な）、furious（激怒した）、nervous（緊張した）。"
  },
  {
    "id": 192,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were not (    ) of the time and stayed up late playing games.",
    "options": [
      "aware",
      "awake",
      "alike",
      "away"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルのメンバーは時間に気付かず、夜遅くまでゲームをして起きていました。",
    "explanation": "be aware of ~（〜に気付いている）。 / その他の選択肢: awake（起きている）、away（離れて）、alike（似ている）。"
  },
  {
    "id": 193,
    "type": "sentence",
    "text": "That is (    ) what Motoki Ohmori wanted to say.",
    "options": [
      "exactly",
      "mostly",
      "nearly",
      "hardly"
    ],
    "answer": 0,
    "translation": "それはまさに大森元貴が言いたかったことです。",
    "explanation": "exactly（まさに、正確に）。 / その他の選択肢: mostly（主に）、hardly（ほとんど～ない）、nearly（ほとんど）。"
  },
  {
    "id": 194,
    "type": "sentence",
    "text": "Hiroto Wakai (    ) visits that small cafe in the afternoon.",
    "options": [
      "frequently",
      "recently",
      "rarely",
      "suddenly"
    ],
    "answer": 0,
    "translation": "若井滉斗は午後によくその小さなカフェを訪れます。",
    "explanation": "frequently（頻繁に）。 / その他の選択肢: recently（最近）、rarely（めったに～ない）、suddenly（突然）。"
  },
  {
    "id": 195,
    "type": "sentence",
    "text": "Ryoka Fujisawa's singing voice (    ) became stronger over the years.",
    "options": [
      "actually",
      "usually",
      "gradually",
      "naturally"
    ],
    "answer": 2,
    "translation": "藤澤涼架の歌声は年月を経て徐々に力強くなりました。",
    "explanation": "gradually（徐々に）。 / その他の選択肢: usually（普通は）、naturally（自然に）、actually（実は）。"
  },
  {
    "id": 196,
    "type": "sentence",
    "text": "When Mrs. GREEN APPLE heard the news, they (    ) called their family.",
    "options": [
      "immediately",
      "completely",
      "unfortunately",
      "extremely"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルはそのニュースを聞いた時、すぐに家族に電話しました。",
    "explanation": "immediately（すぐに、直ちに）。 / その他の選択肢: completely（完全に）、unfortunately（残念ながら）、extremely（極端に）。"
  },
  {
    "id": 197,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE loves all animals, but (    ) dogs.",
    "options": [
      "especially",
      "eventually",
      "specifically",
      "specially"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルはすべての動物が好きですが、特に犬が好きです。",
    "explanation": "especially（特に）。 / その他の選択肢: specially（特別に）、specifically（明確に）、eventually（最終的に）。"
  },
  {
    "id": 198,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE feel (    ) for making the fans happy.",
    "options": [
      "possible",
      "flexible",
      "responsible",
      "terrible"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルのメンバーはファンを幸せにすることに責任を感じています。",
    "explanation": "be responsible for ~（〜に対して責任がある）。 / その他の選択肢: possible（可能な）、terrible（ひどい）、flexible（柔軟な）。"
  },
  {
    "id": 199,
    "type": "sentence",
    "text": "Motoki Ohmori was not (    ) for the interview yesterday.",
    "options": [
      "valuable",
      "suitable",
      "available",
      "capable"
    ],
    "answer": 2,
    "translation": "大森元貴は昨日のインタビューには対応できませんでした（都合がつきませんでした）。",
    "explanation": "available（利用できる、手が空いている）。 / その他の選択肢: valuable（価値のある）、suitable（適した）、capable（能力がある）。"
  },
  {
    "id": 200,
    "type": "sentence",
    "text": "Hiroto Wakai finally managed to (    ) how to use the new synthesizer.",
    "options": [
      "figure out",
      "carry out",
      "point out",
      "turn out"
    ],
    "answer": 0,
    "translation": "若井滉斗はついに新しいシンセサイザーの使い方を理解することができました。",
    "explanation": "figure out（〜を理解する、解決する）。 / その他の選択肢: point out（指摘する）、turn out（判明する）、carry out（実行する）。"
  },
  {
    "id": 201,
    "type": "sentence",
    "text": "The song Ryoka Fujisawa wrote casually (    ) to be a massive hit.",
    "options": [
      "turn out",
      "break out",
      "find out",
      "run out"
    ],
    "answer": 0,
    "translation": "藤澤涼架が何気なく書いた曲が、大ヒットであることが判明しました。",
    "explanation": "turn out to be ~（〜であることが判明する）。 / その他の選択肢: break out（勃発する）、run out（尽きる）、find out（見つけ出す）。"
  },
  {
    "id": 202,
    "type": "sentence",
    "text": "The success of the live tour will (    ) teamwork, according to Mrs. GREEN APPLE.",
    "options": [
      "focus on",
      "rely on",
      "insist on",
      "depend on"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルによると、ライブツアーの成功はチームワークにかかっているとのことです。",
    "explanation": "depend on ~（〜次第である、〜に頼る）。 / その他の選択肢: insist on（主張する）、focus on（集中する）、rely on（頼る）。"
  },
  {
    "id": 203,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they booked the flight tickets (    ) for the trip.",
    "options": [
      "in detail",
      "in particular",
      "in general",
      "in advance"
    ],
    "answer": 3,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは旅行のために航空券を事前に予約しました。",
    "explanation": "in advance（前もって、事前に）。 / その他の選択肢: in detail（詳細に）、in general（一般的に）、in particular（特に）。"
  },
  {
    "id": 204,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE thought the lyrics didn't (    ) at first, but later understood the deep meaning.",
    "options": [
      "make up",
      "make sure",
      "make progress",
      "make sense"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルのメンバーは最初、その歌詞は意味が通らないと思いましたが、後になって深い意味を理解しました。",
    "explanation": "make sense（意味をなす、理にかなう）。 / その他の選択肢: make up（構成する・化粧する）、make sure（確かめる）、make progress（進歩する）。"
  },
  {
    "id": 205,
    "type": "sentence",
    "text": "Motoki Ohmori noticed that they had (    ) milk while making breakfast.",
    "options": [
      "run out of",
      "get out of",
      "stay out of",
      "keep out of"
    ],
    "answer": 0,
    "translation": "大森元貴は朝食を作っている時に牛乳を切らしてしまったことに気付きました。",
    "explanation": "run out of ~（〜を使い果たす、切らす）。 / その他の選択肢: get out of（抜け出す）、stay out of（関わらない）、keep out of（立ち入らない）。"
  },
  {
    "id": 206,
    "type": "sentence",
    "text": "The music festival where Hiroto Wakai will perform is going to (    ) in August.",
    "options": [
      "take part",
      "take pride",
      "take care",
      "take place"
    ],
    "answer": 3,
    "translation": "若井滉斗が出演する音楽フェスは8月に開催される予定です。",
    "explanation": "take place（開催される、起こる）。 / その他の選択肢: take part（参加する）、take pride（誇りを持つ）、take care（世話をする）。"
  },
  {
    "id": 207,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he is really (    ) meeting the fans again.",
    "options": [
      "look out for",
      "look forward to",
      "look down on",
      "look up to"
    ],
    "answer": 1,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼はまたファンに会えるのを本当に楽しみにしています。",
    "explanation": "look forward to ~（〜を楽しみに待つ）。toの後は名詞か動名詞が来ます。 / その他の選択肢: look up to（尊敬する）、look down on（見下す）、look out for（気をつける）。"
  },
  {
    "id": 208,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they advised the members to (    ) the small details in the sound.",
    "options": [
      "take advantage of",
      "pay attention to",
      "catch sight of",
      "get rid of"
    ],
    "answer": 1,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らはメンバーたちに、音の細部に注意を払うようにアドバイスしました。",
    "explanation": "pay attention to ~（〜に注意を払う）。 / その他の選択肢: catch sight of（見つける）、get rid of（取り除く）、take advantage of（利用する）。"
  },
  {
    "id": 209,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE knows how to politely (    ) difficult situations.",
    "options": [
      "put up with",
      "come up with",
      "keep up with",
      "deal with"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは困難な状況に丁寧に対処する方法を知っています。",
    "explanation": "deal with ~（〜を処理する、〜に対処する）。 / その他の選択肢: come up with（思いつく）、keep up with（遅れずについていく）、put up with（我慢する）。"
  },
  {
    "id": 210,
    "type": "sentence",
    "text": "It have become a (    ) for The members of Mrs. GREEN APPLE to visit a shrine on New Year's Day.",
    "options": [
      "transportation",
      "tradition",
      "transition",
      "translation"
    ],
    "answer": 1,
    "translation": "元旦に神社を訪れることがミセスグリーンアップルのメンバーの伝統（恒例行事）になっています。",
    "explanation": "tradition（伝統、慣習）。 / その他の選択肢: translation（翻訳）、transition（移行）、transportation（交通機関）。"
  },
  {
    "id": 211,
    "type": "sentence",
    "text": "Motoki Ohmori was mentioned as a strong (    ) for the music award.",
    "options": [
      "customer",
      "certificate",
      "celebration",
      "candidate"
    ],
    "answer": 3,
    "translation": "大森元貴はその音楽賞の有力な候補者として言及されました。",
    "explanation": "candidate（候補者）。 / その他の選択肢: certificate（証明書）、celebration（お祝い）、customer（客）。"
  },
  {
    "id": 212,
    "type": "sentence",
    "text": "Hiroto Wakai always treats the concert staff and every (    ) with great respect.",
    "options": [
      "employee",
      "engineer",
      "employer",
      "manager"
    ],
    "answer": 0,
    "translation": "若井滉斗はコンサートスタッフやすべての従業員に大きな敬意を持って接します。",
    "explanation": "employee（従業員）。 / その他の選択肢: employer（雇用主）、engineer（エンジニア）、manager（マネージャー）。"
  },
  {
    "id": 213,
    "type": "sentence",
    "text": "Ryoka Fujisawa discovered a new (    ) to relieve stress after a long tour.",
    "options": [
      "method",
      "department",
      "record",
      "period"
    ],
    "answer": 0,
    "translation": "藤澤涼架は長いツアーの後にストレスを和らげる新しい方法を発見しました。",
    "explanation": "method（方法、方式）。 / その他の選択肢: period（期間）、record（記録）、department（部門）。"
  },
  {
    "id": 214,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE used their first (    ) to buy a gift for their parents.",
    "options": [
      "society",
      "sympathy",
      "safety",
      "salary"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは初任給を使って両親にプレゼントを買いました。",
    "explanation": "salary（給料）。 / その他の選択肢: safety（安全）、sympathy（同情）、society（社会）。"
  },
  {
    "id": 215,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE had to (    ) that they forgot the lyrics for a moment during the live.",
    "options": [
      "submit",
      "permit",
      "commit",
      "admit"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルはライブ中、一瞬歌詞を忘れたことを認めなければなりませんでした。",
    "explanation": "admit（〜を認める）。 / その他の選択肢: permit（許可する）、submit（提出する）。"
  },
  {
    "id": 216,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE never (    )s others when a mistake happens in the studio.",
    "options": [
      "frame",
      "blame",
      "flame",
      "claim"
    ],
    "answer": 1,
    "translation": "スタジオでミスが起きた時、ミセスグリーンアップルのメンバーは決して他人を責めません。",
    "explanation": "blame（〜を責める）。 / その他の選択肢: frame（枠・枠組み）、flame（炎）。"
  },
  {
    "id": 217,
    "type": "sentence",
    "text": "Motoki Ohmori had to (    ) the dinner reservation because the recording took longer.",
    "options": [
      "channel",
      "panel",
      "tunnel",
      "cancel"
    ],
    "answer": 3,
    "translation": "レコーディングが長引いたため、大森元貴は夕食の予約を取り消さなければなりませんでした。",
    "explanation": "cancel（取り消す、キャンセルする）。 / その他の選択肢: channel（チャンネル）、panel（パネル）。"
  },
  {
    "id": 218,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, he tries to (    ) negative comments on the internet.",
    "options": [
      "explore",
      "restore",
      "ignore",
      "store"
    ],
    "answer": 2,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼はインターネット上の否定的なコメントを無視しようと努めています。",
    "explanation": "ignore（無視する）。 / その他の選択肢: explore（探検する）、restore（修復する）。"
  },
  {
    "id": 219,
    "type": "sentence",
    "text": "Ryoka Fujisawa used a ruler to (    ) the size of the new guitar case.",
    "options": [
      "leisure",
      "measure",
      "pleasure",
      "treasure"
    ],
    "answer": 1,
    "translation": "藤澤涼架は新しいギターケースのサイズを測るために定規を使いました。",
    "explanation": "measure（〜を測る）。 / その他の選択肢: treasure（宝物）、pleasure（喜び）。"
  },
  {
    "id": 220,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they donated money to an organization that (    )s stray animals.",
    "options": [
      "argue",
      "continue",
      "value",
      "rescue"
    ],
    "answer": 3,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは迷子の動物を救助する団体に寄付をしました。",
    "explanation": "rescue（救助する）。 / その他の選択肢: argue（議論する）、continue（続ける）。"
  },
  {
    "id": 221,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE will (    ) for the best ramen shop in the city tonight.",
    "options": [
      "reach",
      "teach",
      "search",
      "catch"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは今夜、この街で一番美味しいラーメン屋を探すつもりです。",
    "explanation": "search for ~（〜を探す）。 / その他の選択肢: reach（到達する）、teach（教える）。"
  },
  {
    "id": 222,
    "type": "sentence",
    "text": "The staff (    )ed The members of Mrs. GREEN APPLE not to run on the slippery stage.",
    "options": [
      "turn",
      "warn",
      "learn",
      "burn"
    ],
    "answer": 1,
    "translation": "スタッフはミセスグリーンアップルのメンバーに、滑りやすいステージの上を走らないよう警告しました。",
    "explanation": "warn A not to do（Aに〜しないよう警告する）。 / その他の選択肢: burn（燃える）、turn（回る）。"
  },
  {
    "id": 223,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, Due to a (    ) of sleep, he drank three cups of coffee.",
    "options": [
      "rock",
      "lock",
      "luck",
      "lack"
    ],
    "answer": 3,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、睡眠不足のため、彼はコーヒーを3杯飲みました。",
    "explanation": "a lack of ~（〜の不足）。 / その他の選択肢: luck（幸運）、lock（鍵）。"
  },
  {
    "id": 224,
    "type": "sentence",
    "text": "Hiroto Wakai paid the entrance (    ) to visit the art museum.",
    "options": [
      "flee",
      "tree",
      "fee",
      "free"
    ],
    "answer": 2,
    "translation": "若井滉斗は美術館を訪れるために入場料を支払いました。",
    "explanation": "fee（料金、手数料、入場料）。 / その他の選択肢: free（無料）、flee（逃げる）。"
  },
  {
    "id": 225,
    "type": "sentence",
    "text": "Ryoka Fujisawa believes that good (    ) is much more important than money.",
    "options": [
      "wealth",
      "stealth",
      "health",
      "death"
    ],
    "answer": 0,
    "translation": "藤澤涼架はお金よりも健康のほうがはるかに重要だと信じています。",
    "explanation": "health（健康）。wealth（富）の対義的。 / その他の選択肢: health（健康）、death（死）。"
  },
  {
    "id": 226,
    "type": "sentence",
    "text": "Once Mrs. GREEN APPLE starts writing a song, they enter a deep concentration (    ).",
    "options": [
      "zone",
      "tone",
      "stone",
      "bone"
    ],
    "answer": 0,
    "translation": "一度曲を書き始めると、ミセスグリーンアップルは深い集中のゾーンに入ります。",
    "explanation": "zone（地帯、領域）。 / その他の選択肢: bone（骨）、tone（音色）。"
  },
  {
    "id": 227,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE cannot (    ) the fact that their fans are the best in the world.",
    "options": [
      "reply",
      "deny",
      "defy",
      "rely"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは自分たちのファンが世界一であるという事実を否定できません。",
    "explanation": "deny（〜を否定する）。 / その他の選択肢: rely（頼る）、reply（返事する）。"
  },
  {
    "id": 228,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, they love to (    ) with friends and play board games.",
    "options": [
      "father",
      "weather",
      "gather",
      "bother"
    ],
    "answer": 2,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、彼らは友達と集まってボードゲームをするのが好きです。",
    "explanation": "gather（集める、集まる）。 / その他の選択肢: bother（悩ます）、father（父親）。"
  },
  {
    "id": 229,
    "type": "sentence",
    "text": "The agency decided to (    ) more security guards for Motoki Ohmori's concert.",
    "options": [
      "fire",
      "wire",
      "tire",
      "hire"
    ],
    "answer": 3,
    "translation": "事務所は大森元貴のコンサートのために警備員をさらに雇うことを決定しました。",
    "explanation": "hire（雇う）。 / その他の選択肢: fire（火・解雇する）、tire（疲れさせる）。"
  },
  {
    "id": 230,
    "type": "sentence",
    "text": "Hiroto Wakai thinks people should not (    ) others based solely on appearance.",
    "options": [
      "judge",
      "pledge",
      "bridge",
      "edge"
    ],
    "answer": 0,
    "translation": "若井滉斗は、人は見た目だけで他人を判断するべきではないと考えています。",
    "explanation": "judge（判断する）。 / その他の選択肢: bridge（橋）、edge（端）。"
  },
  {
    "id": 231,
    "type": "sentence",
    "text": "In winter, Ryoka Fujisawa often wears a cozy (    ) sweater.",
    "options": [
      "hit",
      "knit",
      "fit",
      "sit"
    ],
    "answer": 1,
    "translation": "冬には、藤澤涼架はよく着心地の良いニット（編まれた）セーターを着ます。",
    "explanation": "knit（編む、編まれた）。 / その他の選択肢: hit（打つ）、fit（合う）。"
  },
  {
    "id": 232,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, Tired after the live, they tried to (    ) against the wall.",
    "options": [
      "clean",
      "bean",
      "lean",
      "mean"
    ],
    "answer": 2,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、ライブの後で疲れていたので、彼らは壁に寄りかかろうとしました。",
    "explanation": "lean against ~（〜に寄りかかる）。 / その他の選択肢: mean（意味する）、clean（掃除する）。"
  },
  {
    "id": 233,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE uses a special case to (    ) the condition of the vintage guitar.",
    "options": [
      "deserve",
      "observe",
      "reserve",
      "preserve"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルはヴィンテージギターの状態を保存するために特別なケースを使用しています。",
    "explanation": "preserve（保存する、保護する）。 / その他の選択肢: reserve（予約する）、deserve（値する）。"
  },
  {
    "id": 234,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, When they started playing, all the nervousness seemed to (    ).",
    "options": [
      "punish",
      "finish",
      "vanish",
      "banish"
    ],
    "answer": 2,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、彼らが演奏し始めると、すべての緊張が消え去ったように見えました。",
    "explanation": "vanish（消える、見えなくなる）。 / その他の選択肢: punish（罰する）、finish（終える）。"
  },
  {
    "id": 235,
    "type": "sentence",
    "text": "Motoki Ohmori bought some fresh (    ) to cook pasta.",
    "options": [
      "instructions",
      "ingredients",
      "insects",
      "instruments"
    ],
    "answer": 1,
    "translation": "大森元貴はパスタを作るために新鮮な材料をいくつか買いました。",
    "explanation": "ingredient（材料、食材）。料理に関する文脈で使われます。 / その他の選択肢: instruments（楽器）、instructions（指示）、insects（昆虫）。"
  },
  {
    "id": 236,
    "type": "sentence",
    "text": "Hiroto Wakai ordered new (    ) for the home studio.",
    "options": [
      "employment",
      "equipment",
      "environment",
      "experiment"
    ],
    "answer": 1,
    "translation": "若井滉斗は自宅スタジオのために新しい機材を注文しました。",
    "explanation": "equipment（機材、設備）。不可算名詞であることに注意。 / その他の選択肢: experiment（実験）、environment（環境）、employment（雇用）。"
  },
  {
    "id": 237,
    "type": "sentence",
    "text": "Ryoka Fujisawa fell asleep as a (    ) on the train.",
    "options": [
      "passenger",
      "messenger",
      "manager",
      "stranger"
    ],
    "answer": 0,
    "translation": "藤澤涼架は電車の乗客として眠ってしまいました。",
    "explanation": "passenger（乗客）。 / その他の選択肢: messenger（使者）、manager（マネージャー）、stranger（見知らぬ人）。"
  },
  {
    "id": 238,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE finally arrived at the (    ) after a long drive.",
    "options": [
      "description",
      "department",
      "decision",
      "destination"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは長時間のドライブの末、ついに目的地に到着しました。",
    "explanation": "destination（目的地、行き先）。 / その他の選択肢: description（説明）、decision（決定）、department（部門）。"
  },
  {
    "id": 239,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE listens to a wide (    ) of music genres.",
    "options": [
      "variety",
      "safety",
      "society",
      "anxiety"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは幅広いジャンルの音楽を聴きます。",
    "explanation": "a wide variety of ~（幅広い種類の〜）。 / その他の選択肢: society（社会）、safety（安全）、anxiety（不安）。"
  },
  {
    "id": 240,
    "type": "sentence",
    "text": "One (    ) of living in Tokyo are that The members of Mrs. GREEN APPLE can easily go to many concerts.",
    "options": [
      "advice",
      "advance",
      "adventure",
      "advantage"
    ],
    "answer": 3,
    "translation": "東京に住む一つの利点は、ミセスグリーンアップルのメンバーがたくさんのコンサートに簡単に行けることです。",
    "explanation": "advantage（利点、有利な点）。 / その他の選択肢: adventure（冒険）、advance（前進）、advice（助言）。"
  },
  {
    "id": 241,
    "type": "sentence",
    "text": "Motoki Ohmori missed the (    ) to take a walk in the park because of the rain.",
    "options": [
      "opposition",
      "operation",
      "opportunity",
      "opinion"
    ],
    "answer": 2,
    "translation": "大森元貴は雨のせいで公園を散歩する機会を逃しました。",
    "explanation": "opportunity（機会、チャンス）。 / その他の選択肢: opposition（反対）、operation（手術・操作）、opinion（意見）。"
  },
  {
    "id": 242,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, The (    ) cheered loudly when he appeared on stage.",
    "options": [
      "absence",
      "appearance",
      "attendance",
      "audience"
    ],
    "answer": 3,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼がステージに現れた時、観客は大きな声で歓声を上げました。",
    "explanation": "audience（観客、聴衆）。 / その他の選択肢: attendance（出席）、absence（欠席）、appearance（外見・出現）。"
  },
  {
    "id": 243,
    "type": "sentence",
    "text": "Ryoka Fujisawa often takes pictures while walking around the (    ).",
    "options": [
      "brotherhood",
      "neighborhood",
      "childhood",
      "livelihood"
    ],
    "answer": 1,
    "translation": "藤澤涼架は近所を散歩しながらよく写真を撮ります。",
    "explanation": "neighborhood（近所、地域）。 / その他の選択肢: childhood（子供時代）、livelihood（生計）、brotherhood（兄弟の縁）。"
  },
  {
    "id": 244,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE felt a certain (    ) of nervousness before the live broadcast.",
    "options": [
      "disagree",
      "degree",
      "agree",
      "decree"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは生放送の前に、ある程度の緊張を感じました。",
    "explanation": "degree（程度、度合い）。a certain degree of ~ で「ある程度の〜」。 / その他の選択肢: decree（法令）、agree（同意する）、disagree（同意しない）。"
  },
  {
    "id": 245,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE caught a cold because the (    ) dropped suddenly.",
    "options": [
      "temperature",
      "feature",
      "creature",
      "literature"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは気温が急に下がったため風邪をひきました。",
    "explanation": "temperature（温度、気温、体温）。 / その他の選択肢: literature（文学）、creature（生き物）、feature（特徴）。"
  },
  {
    "id": 246,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were deeply moved by the beautiful (    ) of the mountains.",
    "options": [
      "scenery",
      "screen",
      "science",
      "scene"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルのメンバーは山の美しい風景に深く感動しました。",
    "explanation": "scenery（風景、景色）。 / その他の選択肢: scene（場面）、science（科学）、screen（画面）。"
  },
  {
    "id": 247,
    "type": "sentence",
    "text": "Motoki Ohmori eats healthy food to prevent (    ).",
    "options": [
      "deceive",
      "decrease",
      "disease",
      "desire"
    ],
    "answer": 2,
    "translation": "大森元貴は病気を防ぐために健康的な食べ物を食べます。",
    "explanation": "disease（病気）。 / その他の選択肢: decrease（減少する）、deceive（だます）、desire（欲望）。"
  },
  {
    "id": 248,
    "type": "sentence",
    "text": "It is a (    ) for Hiroto Wakai to drink coffee every morning.",
    "options": [
      "castle",
      "custom",
      "costume",
      "customer"
    ],
    "answer": 1,
    "translation": "毎朝コーヒーを飲むのが若井滉斗の習慣です。",
    "explanation": "custom（習慣、風習）。 / その他の選択肢: costume（衣装）、customer（客）、castle（城）。"
  },
  {
    "id": 249,
    "type": "sentence",
    "text": "Ryoka Fujisawa spent a large (    ) of money on new clothes.",
    "options": [
      "allowance",
      "amount",
      "account",
      "announce"
    ],
    "answer": 1,
    "translation": "藤澤涼架は新しい服に多額のお金を使いました。",
    "explanation": "a large amount of ~（多量の〜、多額の〜）。 / その他の選択肢: account（口座・説明）、announce（発表する）、allowance（小遣い）。"
  },
  {
    "id": 250,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they worked hard to (    ) the goal of making a great album.",
    "options": [
      "believe",
      "deceive",
      "receive",
      "achieve"
    ],
    "answer": 3,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは素晴らしいアルバムを作るという目標を達成するために一生懸命働きました。",
    "explanation": "achieve（達成する）。 / その他の選択肢: believe（信じる）、receive（受け取る）、deceive（だます）。"
  },
  {
    "id": 251,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE never (    )s about being too busy.",
    "options": [
      "remain",
      "complain",
      "contain",
      "explain"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは忙しすぎることについて決して不平を言いません。",
    "explanation": "complain about ~（〜について不平を言う）。 / その他の選択肢: explain（説明する）、remain（残る）、contain（含む）。"
  },
  {
    "id": 252,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE's smile always (    )s the fans.",
    "options": [
      "engage",
      "discourage",
      "encourage",
      "enlarge"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルのメンバーの笑顔はいつもファンを勇気づけます。",
    "explanation": "encourage（勇気づける、励ます）。 / その他の選択肢: discourage（落胆させる）、engage（従事する）、enlarge（拡大する）。"
  },
  {
    "id": 253,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, he practices every day to (    ) guitar skills.",
    "options": [
      "remove",
      "improve",
      "approve",
      "prove"
    ],
    "answer": 1,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、彼はギターのスキルを向上させるために毎日練習しています。",
    "explanation": "improve（向上させる、改善する）。 / その他の選択肢: prove（証明する）、remove（取り除く）、approve（承認する）。"
  },
  {
    "id": 254,
    "type": "sentence",
    "text": "Hiroto Wakai (    )ed that they should go eat ramen after the rehearsal.",
    "options": [
      "request",
      "digest",
      "invest",
      "suggest"
    ],
    "answer": 3,
    "translation": "若井滉斗はリハーサルの後にラーメンを食べに行くべきだと提案しました。",
    "explanation": "suggest（提案する）。 / その他の選択肢: digest（消化する）、request（要求する）、invest（投資する）。"
  },
  {
    "id": 255,
    "type": "sentence",
    "text": "Ryoka Fujisawa needs to (    ) the broken strings on the guitar.",
    "options": [
      "reduce",
      "place",
      "relax",
      "replace"
    ],
    "answer": 3,
    "translation": "藤澤涼架はギターの切れた弦を交換する必要があります。",
    "explanation": "replace（交換する、取り替える）。 / その他の選択肢: place（場所）、reduce（減らす）、relax（リラックスする）。"
  },
  {
    "id": 256,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE was easily (    )d by fans while shopping at the mall.",
    "options": [
      "memorize",
      "realize",
      "organize",
      "recognize"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルはショッピングモールで買い物中にファンにすぐ気付かれました。",
    "explanation": "recognize（気付く、認識する）。 / その他の選択肢: organize（組織する）、realize（気付く）、memorize（暗記する）。"
  },
  {
    "id": 257,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE will (    ) in a charity marathon next month.",
    "options": [
      "anticipate",
      "participate",
      "hesitate",
      "calculate"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは来月チャリティーマラソンに参加します。",
    "explanation": "participate in ~（〜に参加する）。 / その他の選択肢: anticipate（予想する）、hesitate（ためらう）、calculate（計算する）。"
  },
  {
    "id": 258,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, Writing a good song (    )s a lot of concentration for they.",
    "options": [
      "inquire",
      "acquire",
      "retire",
      "require"
    ],
    "answer": 3,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、良い曲を書くことは彼らにとって多くの集中力を必要とします。",
    "explanation": "require（必要とする）。 / その他の選択肢: acquire（獲得する）、inquire（尋ねる）、retire（引退する）。"
  },
  {
    "id": 259,
    "type": "sentence",
    "text": "Motoki Ohmori doesn't like to (    ) themselves with others.",
    "options": [
      "declare",
      "prepare",
      "repair",
      "compare"
    ],
    "answer": 3,
    "translation": "大森元貴は自分自身を他人と比較するのが好きではありません。",
    "explanation": "compare A with B（AをBと比較する）。 / その他の選択肢: prepare（準備する）、repair（修理する）、declare（宣言する）。"
  },
  {
    "id": 260,
    "type": "sentence",
    "text": "Hiroto Wakai wants to (    ) fans with unforgettable memories.",
    "options": [
      "decide",
      "provide",
      "divide",
      "guide"
    ],
    "answer": 1,
    "translation": "若井滉斗はファンに忘れられない思い出を提供したいと思っています。",
    "explanation": "provide A with B（AにBを提供する）。 / その他の選択肢: divide（分割する）、decide（決定する）、guide（案内する）。"
  },
  {
    "id": 261,
    "type": "sentence",
    "text": "Ryoka Fujisawa can always (    ) on the other members when things get tough.",
    "options": [
      "supply",
      "apply",
      "rely",
      "reply"
    ],
    "answer": 2,
    "translation": "困難な時、藤澤涼架はいつも他のメンバーに頼ることができます。",
    "explanation": "rely on ~（〜に頼る）。 / その他の選択肢: reply（返事する）、apply（適用する・申し込む）、supply（供給する）。"
  },
  {
    "id": 262,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE couldn't (    ) to buy that expensive instrument years ago.",
    "options": [
      "effort",
      "reward",
      "afford",
      "record"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは何年も前はあの高価な楽器を買う余裕がありませんでした。",
    "explanation": "afford to do（〜する余裕がある）。 / その他の選択肢: effort（努力）、record（記録）、reward（報酬）。"
  },
  {
    "id": 263,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE wore a warm coat to (    ) catching a cold.",
    "options": [
      "prevent",
      "event",
      "present",
      "invent"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは風邪をひくのを防ぐために暖かいコートを着ました。",
    "explanation": "prevent（防ぐ、妨げる）。 / その他の選択肢: invent（発明する）、event（出来事）、present（提示する・プレゼント）。"
  },
  {
    "id": 264,
    "type": "sentence",
    "text": "A simple meal of rice and miso soup are enough to (    ) The members of Mrs. GREEN APPLE.",
    "options": [
      "qualify",
      "terrify",
      "modify",
      "satisfy"
    ],
    "answer": 3,
    "translation": "ご飯と味噌汁のシンプルな食事でミセスグリーンアップルのメンバーを満足させるのに十分です。",
    "explanation": "satisfy（満足させる）。 / その他の選択肢: modify（修正する）、qualify（資格を与える）、terrify（怖がらせる）。"
  },
  {
    "id": 265,
    "type": "sentence",
    "text": "The melody of that song is very (    ) to Motoki Ohmori.",
    "options": [
      "similar",
      "popular",
      "familiar",
      "regular"
    ],
    "answer": 2,
    "translation": "その曲のメロディーは大森元貴にとってとても馴染みがあります。",
    "explanation": "be familiar to ~（〜にとって馴染みがある）。 / その他の選択肢: similar（似ている）、popular（人気の）、regular（規則的な）。"
  },
  {
    "id": 266,
    "type": "sentence",
    "text": "Living near the station is very (    ) for Hiroto Wakai.",
    "options": [
      "confident",
      "convenient",
      "excellent",
      "current"
    ],
    "answer": 1,
    "translation": "駅の近くに住むことは若井滉斗にとってとても便利です。",
    "explanation": "convenient（便利な）。 / その他の選択肢: confident（自信がある）、current（現在の）、excellent（優れた）。"
  },
  {
    "id": 267,
    "type": "sentence",
    "text": "Ryoka Fujisawa has been very (    ) since moving out of the parents' house.",
    "options": [
      "independent",
      "confident",
      "silent",
      "dependent"
    ],
    "answer": 0,
    "translation": "藤澤涼架は実家を出て以来、とても自立しています。",
    "explanation": "independent（自立した、独立した）。 / その他の選択肢: dependent（依存している）、confident（自信がある）、silent（静かな）。"
  },
  {
    "id": 268,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE likes to cook dishes from (    ) countries.",
    "options": [
      "curious",
      "various",
      "obvious",
      "serious"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは様々な国の料理を作るのが好きです。",
    "explanation": "various（様々な）。 / その他の選択肢: serious（深刻な）、obvious（明らかな）、curious（好奇心が強い）。"
  },
  {
    "id": 269,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE is always (    ) about new fashion trends.",
    "options": [
      "furious",
      "nervous",
      "curious",
      "serious"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルはいつも新しいファッショントレンドに好奇心を持っています。",
    "explanation": "be curious about ~（〜について好奇心が強い、気になる）。 / その他の選択肢: serious（深刻な）、furious（激怒した）、nervous（緊張した）。"
  },
  {
    "id": 270,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were not (    ) of the time and stayed up late playing games.",
    "options": [
      "awake",
      "alike",
      "away",
      "aware"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルのメンバーは時間に気付かず、夜遅くまでゲームをして起きていました。",
    "explanation": "be aware of ~（〜に気付いている）。 / その他の選択肢: awake（起きている）、away（離れて）、alike（似ている）。"
  },
  {
    "id": 271,
    "type": "sentence",
    "text": "That is (    ) what Motoki Ohmori wanted to say.",
    "options": [
      "mostly",
      "nearly",
      "hardly",
      "exactly"
    ],
    "answer": 3,
    "translation": "それはまさに大森元貴が言いたかったことです。",
    "explanation": "exactly（まさに、正確に）。 / その他の選択肢: mostly（主に）、hardly（ほとんど～ない）、nearly（ほとんど）。"
  },
  {
    "id": 272,
    "type": "sentence",
    "text": "Hiroto Wakai (    ) visits that small cafe in the afternoon.",
    "options": [
      "suddenly",
      "frequently",
      "rarely",
      "recently"
    ],
    "answer": 1,
    "translation": "若井滉斗は午後によくその小さなカフェを訪れます。",
    "explanation": "frequently（頻繁に）。 / その他の選択肢: recently（最近）、rarely（めったに～ない）、suddenly（突然）。"
  },
  {
    "id": 273,
    "type": "sentence",
    "text": "Ryoka Fujisawa's singing voice (    ) became stronger over the years.",
    "options": [
      "naturally",
      "actually",
      "gradually",
      "usually"
    ],
    "answer": 2,
    "translation": "藤澤涼架の歌声は年月を経て徐々に力強くなりました。",
    "explanation": "gradually（徐々に）。 / その他の選択肢: usually（普通は）、naturally（自然に）、actually（実は）。"
  },
  {
    "id": 274,
    "type": "sentence",
    "text": "When Mrs. GREEN APPLE heard the news, they (    ) called their family.",
    "options": [
      "extremely",
      "completely",
      "immediately",
      "unfortunately"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルはそのニュースを聞いた時、すぐに家族に電話しました。",
    "explanation": "immediately（すぐに、直ちに）。 / その他の選択肢: completely（完全に）、unfortunately（残念ながら）、extremely（極端に）。"
  },
  {
    "id": 275,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE loves all animals, but (    ) dogs.",
    "options": [
      "especially",
      "specifically",
      "eventually",
      "specially"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルはすべての動物が好きですが、特に犬が好きです。",
    "explanation": "especially（特に）。 / その他の選択肢: specially（特別に）、specifically（明確に）、eventually（最終的に）。"
  },
  {
    "id": 276,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, they feel (    ) for making the fans happy.",
    "options": [
      "responsible",
      "terrible",
      "flexible",
      "possible"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、彼らはファンを幸せにすることに責任を感じています。",
    "explanation": "be responsible for ~（〜に対して責任がある）。 / その他の選択肢: possible（可能な）、terrible（ひどい）、flexible（柔軟な）。"
  },
  {
    "id": 277,
    "type": "sentence",
    "text": "Motoki Ohmori was not (    ) for the interview yesterday.",
    "options": [
      "suitable",
      "capable",
      "valuable",
      "available"
    ],
    "answer": 3,
    "translation": "大森元貴は昨日のインタビューには対応できませんでした（都合がつきませんでした）。",
    "explanation": "available（利用できる、手が空いている）。 / その他の選択肢: valuable（価値のある）、suitable（適した）、capable（能力がある）。"
  },
  {
    "id": 278,
    "type": "sentence",
    "text": "Hiroto Wakai finally managed to (    ) how to use the new synthesizer.",
    "options": [
      "point out",
      "carry out",
      "figure out",
      "turn out"
    ],
    "answer": 2,
    "translation": "若井滉斗はついに新しいシンセサイザーの使い方を理解することができました。",
    "explanation": "figure out（〜を理解する、解決する）。 / その他の選択肢: point out（指摘する）、turn out（判明する）、carry out（実行する）。"
  },
  {
    "id": 279,
    "type": "sentence",
    "text": "The song Ryoka Fujisawa wrote casually (    ) to be a massive hit.",
    "options": [
      "find out",
      "run out",
      "turn out",
      "break out"
    ],
    "answer": 2,
    "translation": "藤澤涼架が何気なく書いた曲が、大ヒットであることが判明しました。",
    "explanation": "turn out to be ~（〜であることが判明する）。 / その他の選択肢: break out（勃発する）、run out（尽きる）、find out（見つけ出す）。"
  },
  {
    "id": 280,
    "type": "sentence",
    "text": "The success of the live tour will (    ) teamwork, according to Mrs. GREEN APPLE.",
    "options": [
      "rely on",
      "depend on",
      "insist on",
      "focus on"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルによると、ライブツアーの成功はチームワークにかかっているとのことです。",
    "explanation": "depend on ~（〜次第である、〜に頼る）。 / その他の選択肢: insist on（主張する）、focus on（集中する）、rely on（頼る）。"
  },
  {
    "id": 281,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE booked the flight tickets (    ) for the trip.",
    "options": [
      "in detail",
      "in advance",
      "in particular",
      "in general"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは旅行のために航空券を事前に予約しました。",
    "explanation": "in advance（前もって、事前に）。 / その他の選択肢: in detail（詳細に）、in general（一般的に）、in particular（特に）。"
  },
  {
    "id": 282,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, they thought the lyrics didn't (    ) at first, but later understood the deep meaning.",
    "options": [
      "make progress",
      "make sure",
      "make up",
      "make sense"
    ],
    "answer": 3,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、彼らは最初、その歌詞は意味が通らないと思いましたが、後になって深い意味を理解しました。",
    "explanation": "make sense（意味をなす、理にかなう）。 / その他の選択肢: make up（構成する・化粧する）、make sure（確かめる）、make progress（進歩する）。"
  },
  {
    "id": 283,
    "type": "sentence",
    "text": "Motoki Ohmori noticed that they had (    ) milk while making breakfast.",
    "options": [
      "get out of",
      "keep out of",
      "run out of",
      "stay out of"
    ],
    "answer": 2,
    "translation": "大森元貴は朝食を作っている時に牛乳を切らしてしまったことに気付きました。",
    "explanation": "run out of ~（〜を使い果たす、切らす）。 / その他の選択肢: get out of（抜け出す）、stay out of（関わらない）、keep out of（立ち入らない）。"
  },
  {
    "id": 284,
    "type": "sentence",
    "text": "The music festival where Hiroto Wakai will perform is going to (    ) in August.",
    "options": [
      "take care",
      "take pride",
      "take place",
      "take part"
    ],
    "answer": 2,
    "translation": "若井滉斗が出演する音楽フェスは8月に開催される予定です。",
    "explanation": "take place（開催される、起こる）。 / その他の選択肢: take part（参加する）、take pride（誇りを持つ）、take care（世話をする）。"
  },
  {
    "id": 285,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he is really (    ) meeting the fans again.",
    "options": [
      "look up to",
      "look down on",
      "look forward to",
      "look out for"
    ],
    "answer": 2,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼はまたファンに会えるのを本当に楽しみにしています。",
    "explanation": "look forward to ~（〜を楽しみに待つ）。toの後は名詞か動名詞が来ます。 / その他の選択肢: look up to（尊敬する）、look down on（見下す）、look out for（気をつける）。"
  },
  {
    "id": 286,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE advised the members to (    ) the small details in the sound.",
    "options": [
      "catch sight of",
      "pay attention to",
      "take advantage of",
      "get rid of"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルはメンバーたちに、音の細部に注意を払うようにアドバイスしました。",
    "explanation": "pay attention to ~（〜に注意を払う）。 / その他の選択肢: catch sight of（見つける）、get rid of（取り除く）、take advantage of（利用する）。"
  },
  {
    "id": 287,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE knows how to politely (    ) difficult situations.",
    "options": [
      "put up with",
      "come up with",
      "keep up with",
      "deal with"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは困難な状況に丁寧に対処する方法を知っています。",
    "explanation": "deal with ~（〜を処理する、〜に対処する）。 / その他の選択肢: come up with（思いつく）、keep up with（遅れずについていく）、put up with（我慢する）。"
  },
  {
    "id": 288,
    "type": "sentence",
    "text": "It have become a (    ) for The members of Mrs. GREEN APPLE to visit a shrine on New Year's Day.",
    "options": [
      "tradition",
      "translation",
      "transportation",
      "transition"
    ],
    "answer": 0,
    "translation": "元旦に神社を訪れることがミセスグリーンアップルのメンバーの伝統（恒例行事）になっています。",
    "explanation": "tradition（伝統、慣習）。 / その他の選択肢: translation（翻訳）、transition（移行）、transportation（交通機関）。"
  },
  {
    "id": 289,
    "type": "sentence",
    "text": "Motoki Ohmori was mentioned as a strong (    ) for the music award.",
    "options": [
      "certificate",
      "celebration",
      "candidate",
      "customer"
    ],
    "answer": 2,
    "translation": "大森元貴はその音楽賞の有力な候補者として言及されました。",
    "explanation": "candidate（候補者）。 / その他の選択肢: certificate（証明書）、celebration（お祝い）、customer（客）。"
  },
  {
    "id": 290,
    "type": "sentence",
    "text": "Hiroto Wakai always treats the concert staff and every (    ) with great respect.",
    "options": [
      "employer",
      "employee",
      "manager",
      "engineer"
    ],
    "answer": 1,
    "translation": "若井滉斗はコンサートスタッフやすべての従業員に大きな敬意を持って接します。",
    "explanation": "employee（従業員）。 / その他の選択肢: employer（雇用主）、engineer（エンジニア）、manager（マネージャー）。"
  },
  {
    "id": 291,
    "type": "sentence",
    "text": "Ryoka Fujisawa discovered a new (    ) to relieve stress after a long tour.",
    "options": [
      "record",
      "method",
      "period",
      "department"
    ],
    "answer": 1,
    "translation": "藤澤涼架は長いツアーの後にストレスを和らげる新しい方法を発見しました。",
    "explanation": "method（方法、方式）。 / その他の選択肢: period（期間）、record（記録）、department（部門）。"
  },
  {
    "id": 292,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE used their first (    ) to buy a gift for their parents.",
    "options": [
      "salary",
      "sympathy",
      "safety",
      "society"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは初任給を使って両親にプレゼントを買いました。",
    "explanation": "salary（給料）。 / その他の選択肢: safety（安全）、sympathy（同情）、society（社会）。"
  },
  {
    "id": 293,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE had to (    ) that they forgot the lyrics for a moment during the live.",
    "options": [
      "admit",
      "submit",
      "permit",
      "commit"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルはライブ中、一瞬歌詞を忘れたことを認めなければなりませんでした。",
    "explanation": "admit（〜を認める）。 / その他の選択肢: permit（許可する）、submit（提出する）。"
  },
  {
    "id": 294,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, they never (    )s others when a mistake happens in the studio.",
    "options": [
      "frame",
      "flame",
      "claim",
      "blame"
    ],
    "answer": 3,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、スタジオでミスが起きた時、彼らは決して他人を責めません。",
    "explanation": "blame（〜を責める）。 / その他の選択肢: frame（枠・枠組み）、flame（炎）。"
  },
  {
    "id": 295,
    "type": "sentence",
    "text": "Motoki Ohmori had to (    ) the dinner reservation because the recording took longer.",
    "options": [
      "channel",
      "cancel",
      "tunnel",
      "panel"
    ],
    "answer": 1,
    "translation": "レコーディングが長引いたため、大森元貴は夕食の予約を取り消さなければなりませんでした。",
    "explanation": "cancel（取り消す、キャンセルする）。 / その他の選択肢: channel（チャンネル）、panel（パネル）。"
  },
  {
    "id": 296,
    "type": "sentence",
    "text": "Hiroto Wakai tries to (    ) negative comments on the internet.",
    "options": [
      "explore",
      "store",
      "ignore",
      "restore"
    ],
    "answer": 2,
    "translation": "若井滉斗はインターネット上の否定的なコメントを無視しようと努めています。",
    "explanation": "ignore（無視する）。 / その他の選択肢: explore（探検する）、restore（修復する）。"
  },
  {
    "id": 297,
    "type": "sentence",
    "text": "Ryoka Fujisawa used a ruler to (    ) the size of the new guitar case.",
    "options": [
      "treasure",
      "measure",
      "pleasure",
      "leisure"
    ],
    "answer": 1,
    "translation": "藤澤涼架は新しいギターケースのサイズを測るために定規を使いました。",
    "explanation": "measure（〜を測る）。 / その他の選択肢: treasure（宝物）、pleasure（喜び）。"
  },
  {
    "id": 298,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE donated money to an organization that (    )s stray animals.",
    "options": [
      "continue",
      "value",
      "argue",
      "rescue"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは迷子の動物を救助する団体に寄付をしました。",
    "explanation": "rescue（救助する）。 / その他の選択肢: argue（議論する）、continue（続ける）。"
  },
  {
    "id": 299,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE will (    ) for the best ramen shop in the city tonight.",
    "options": [
      "reach",
      "teach",
      "search",
      "catch"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは今夜、この街で一番美味しいラーメン屋を探すつもりです。",
    "explanation": "search for ~（〜を探す）。 / その他の選択肢: reach（到達する）、teach（教える）。"
  },
  {
    "id": 300,
    "type": "sentence",
    "text": "The staff (    )ed The members of Mrs. GREEN APPLE not to run on the slippery stage.",
    "options": [
      "burn",
      "warn",
      "learn",
      "turn"
    ],
    "answer": 1,
    "translation": "スタッフはミセスグリーンアップルのメンバーに、滑りやすいステージの上を走らないよう警告しました。",
    "explanation": "warn A not to do（Aに〜しないよう警告する）。 / その他の選択肢: burn（燃える）、turn（回る）。"
  },
  {
    "id": 301,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, Due to a (    ) of sleep, he drank three cups of coffee.",
    "options": [
      "rock",
      "lack",
      "luck",
      "lock"
    ],
    "answer": 1,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、睡眠不足のため、彼はコーヒーを3杯飲みました。",
    "explanation": "a lack of ~（〜の不足）。 / その他の選択肢: luck（幸運）、lock（鍵）。"
  },
  {
    "id": 302,
    "type": "sentence",
    "text": "Hiroto Wakai paid the entrance (    ) to visit the art museum.",
    "options": [
      "fee",
      "tree",
      "free",
      "flee"
    ],
    "answer": 0,
    "translation": "若井滉斗は美術館を訪れるために入場料を支払いました。",
    "explanation": "fee（料金、手数料、入場料）。 / その他の選択肢: free（無料）、flee（逃げる）。"
  },
  {
    "id": 303,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he believes that good (    ) is much more important than money.",
    "options": [
      "wealth",
      "stealth",
      "health",
      "death"
    ],
    "answer": 0,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼はお金よりも健康のほうがはるかに重要だと信じています。",
    "explanation": "health（健康）。wealth（富）の対義的。 / その他の選択肢: health（健康）、death（死）。"
  },
  {
    "id": 304,
    "type": "sentence",
    "text": "Once Mrs. GREEN APPLE starts writing a song, they enter a deep concentration (    ).",
    "options": [
      "tone",
      "zone",
      "stone",
      "bone"
    ],
    "answer": 1,
    "translation": "一度曲を書き始めると、ミセスグリーンアップルは深い集中のゾーンに入ります。",
    "explanation": "zone（地帯、領域）。 / その他の選択肢: bone（骨）、tone（音色）。"
  },
  {
    "id": 305,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE cannot (    ) the fact that their fans are the best in the world.",
    "options": [
      "defy",
      "deny",
      "rely",
      "reply"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは自分たちのファンが世界一であるという事実を否定できません。",
    "explanation": "deny（〜を否定する）。 / その他の選択肢: rely（頼る）、reply（返事する）。"
  },
  {
    "id": 306,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE love to (    ) with friends and play board games.",
    "options": [
      "weather",
      "bother",
      "gather",
      "father"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルのメンバーは友達と集まってボードゲームをするのが好きです。",
    "explanation": "gather（集める、集まる）。 / その他の選択肢: bother（悩ます）、father（父親）。"
  },
  {
    "id": 307,
    "type": "sentence",
    "text": "The agency decided to (    ) more security guards for Motoki Ohmori's concert.",
    "options": [
      "wire",
      "fire",
      "tire",
      "hire"
    ],
    "answer": 3,
    "translation": "事務所は大森元貴のコンサートのために警備員をさらに雇うことを決定しました。",
    "explanation": "hire（雇う）。 / その他の選択肢: fire（火・解雇する）、tire（疲れさせる）。"
  },
  {
    "id": 308,
    "type": "sentence",
    "text": "Hiroto Wakai thinks people should not (    ) others based solely on appearance.",
    "options": [
      "bridge",
      "pledge",
      "judge",
      "edge"
    ],
    "answer": 2,
    "translation": "若井滉斗は、人は見た目だけで他人を判断するべきではないと考えています。",
    "explanation": "judge（判断する）。 / その他の選択肢: bridge（橋）、edge（端）。"
  },
  {
    "id": 309,
    "type": "sentence",
    "text": "In winter, Ryoka Fujisawa often wears a cozy (    ) sweater.",
    "options": [
      "hit",
      "sit",
      "knit",
      "fit"
    ],
    "answer": 2,
    "translation": "冬には、藤澤涼架はよく着心地の良いニット（編まれた）セーターを着ます。",
    "explanation": "knit（編む、編まれた）。 / その他の選択肢: hit（打つ）、fit（合う）。"
  },
  {
    "id": 310,
    "type": "sentence",
    "text": "Tired after the live, Mrs. GREEN APPLE tried to (    ) against the wall.",
    "options": [
      "clean",
      "mean",
      "bean",
      "lean"
    ],
    "answer": 3,
    "translation": "ライブの後で疲れていたので、ミセスグリーンアップルは壁に寄りかかろうとしました。",
    "explanation": "lean against ~（〜に寄りかかる）。 / その他の選択肢: mean（意味する）、clean（掃除する）。"
  },
  {
    "id": 311,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE uses a special case to (    ) the condition of the vintage guitar.",
    "options": [
      "deserve",
      "observe",
      "preserve",
      "reserve"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルはヴィンテージギターの状態を保存するために特別なケースを使用しています。",
    "explanation": "preserve（保存する、保護する）。 / その他の選択肢: reserve（予約する）、deserve（値する）。"
  },
  {
    "id": 312,
    "type": "sentence",
    "text": "When The members of Mrs. GREEN APPLE started playing, all the nervousness seemed to (    ).",
    "options": [
      "banish",
      "punish",
      "finish",
      "vanish"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルのメンバーが演奏し始めると、すべての緊張が消え去ったように見えました。",
    "explanation": "vanish（消える、見えなくなる）。 / その他の選択肢: punish（罰する）、finish（終える）。"
  },
  {
    "id": 313,
    "type": "sentence",
    "text": "Motoki Ohmori bought some fresh (    ) to cook pasta.",
    "options": [
      "ingredients",
      "instructions",
      "insects",
      "instruments"
    ],
    "answer": 0,
    "translation": "大森元貴はパスタを作るために新鮮な材料をいくつか買いました。",
    "explanation": "ingredient（材料、食材）。料理に関する文脈で使われます。 / その他の選択肢: instruments（楽器）、instructions（指示）、insects（昆虫）。"
  },
  {
    "id": 314,
    "type": "sentence",
    "text": "Hiroto Wakai ordered new (    ) for the home studio.",
    "options": [
      "environment",
      "experiment",
      "employment",
      "equipment"
    ],
    "answer": 3,
    "translation": "若井滉斗は自宅スタジオのために新しい機材を注文しました。",
    "explanation": "equipment（機材、設備）。不可算名詞であることに注意。 / その他の選択肢: experiment（実験）、environment（環境）、employment（雇用）。"
  },
  {
    "id": 315,
    "type": "sentence",
    "text": "Ryoka Fujisawa fell asleep as a (    ) on the train.",
    "options": [
      "stranger",
      "manager",
      "messenger",
      "passenger"
    ],
    "answer": 3,
    "translation": "藤澤涼架は電車の乗客として眠ってしまいました。",
    "explanation": "passenger（乗客）。 / その他の選択肢: messenger（使者）、manager（マネージャー）、stranger（見知らぬ人）。"
  },
  {
    "id": 316,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE finally arrived at the (    ) after a long drive.",
    "options": [
      "destination",
      "decision",
      "department",
      "description"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは長時間のドライブの末、ついに目的地に到着しました。",
    "explanation": "destination（目的地、行き先）。 / その他の選択肢: description（説明）、decision（決定）、department（部門）。"
  },
  {
    "id": 317,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE listens to a wide (    ) of music genres.",
    "options": [
      "anxiety",
      "variety",
      "safety",
      "society"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは幅広いジャンルの音楽を聴きます。",
    "explanation": "a wide variety of ~（幅広い種類の〜）。 / その他の選択肢: society（社会）、safety（安全）、anxiety（不安）。"
  },
  {
    "id": 318,
    "type": "sentence",
    "text": "One (    ) of living in Tokyo are that The members of Mrs. GREEN APPLE can easily go to many concerts.",
    "options": [
      "advantage",
      "adventure",
      "advice",
      "advance"
    ],
    "answer": 0,
    "translation": "東京に住む一つの利点は、ミセスグリーンアップルのメンバーがたくさんのコンサートに簡単に行けることです。",
    "explanation": "advantage（利点、有利な点）。 / その他の選択肢: adventure（冒険）、advance（前進）、advice（助言）。"
  },
  {
    "id": 319,
    "type": "sentence",
    "text": "Motoki Ohmori missed the (    ) to take a walk in the park because of the rain.",
    "options": [
      "opposition",
      "operation",
      "opportunity",
      "opinion"
    ],
    "answer": 2,
    "translation": "大森元貴は雨のせいで公園を散歩する機会を逃しました。",
    "explanation": "opportunity（機会、チャンス）。 / その他の選択肢: opposition（反対）、operation（手術・操作）、opinion（意見）。"
  },
  {
    "id": 320,
    "type": "sentence",
    "text": "The (    ) cheered loudly when Hiroto Wakai appeared on stage.",
    "options": [
      "absence",
      "audience",
      "appearance",
      "attendance"
    ],
    "answer": 1,
    "translation": "若井滉斗がステージに現れた時、観客は大きな声で歓声を上げました。",
    "explanation": "audience（観客、聴衆）。 / その他の選択肢: attendance（出席）、absence（欠席）、appearance（外見・出現）。"
  },
  {
    "id": 321,
    "type": "sentence",
    "text": "Ryoka Fujisawa often takes pictures while walking around the (    ).",
    "options": [
      "neighborhood",
      "brotherhood",
      "livelihood",
      "childhood"
    ],
    "answer": 0,
    "translation": "藤澤涼架は近所を散歩しながらよく写真を撮ります。",
    "explanation": "neighborhood（近所、地域）。 / その他の選択肢: childhood（子供時代）、livelihood（生計）、brotherhood（兄弟の縁）。"
  },
  {
    "id": 322,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE felt a certain (    ) of nervousness before the live broadcast.",
    "options": [
      "degree",
      "disagree",
      "decree",
      "agree"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは生放送の前に、ある程度の緊張を感じました。",
    "explanation": "degree（程度、度合い）。a certain degree of ~ で「ある程度の〜」。 / その他の選択肢: decree（法令）、agree（同意する）、disagree（同意しない）。"
  },
  {
    "id": 323,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE caught a cold because the (    ) dropped suddenly.",
    "options": [
      "feature",
      "temperature",
      "creature",
      "literature"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは気温が急に下がったため風邪をひきました。",
    "explanation": "temperature（温度、気温、体温）。 / その他の選択肢: literature（文学）、creature（生き物）、feature（特徴）。"
  },
  {
    "id": 324,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were deeply moved by the beautiful (    ) of the mountains.",
    "options": [
      "scenery",
      "screen",
      "science",
      "scene"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルのメンバーは山の美しい風景に深く感動しました。",
    "explanation": "scenery（風景、景色）。 / その他の選択肢: scene（場面）、science（科学）、screen（画面）。"
  },
  {
    "id": 325,
    "type": "sentence",
    "text": "Motoki Ohmori eats healthy food to prevent (    ).",
    "options": [
      "disease",
      "deceive",
      "decrease",
      "desire"
    ],
    "answer": 0,
    "translation": "大森元貴は病気を防ぐために健康的な食べ物を食べます。",
    "explanation": "disease（病気）。 / その他の選択肢: decrease（減少する）、deceive（だます）、desire（欲望）。"
  },
  {
    "id": 326,
    "type": "sentence",
    "text": "It is a (    ) for Hiroto Wakai to drink coffee every morning.",
    "options": [
      "costume",
      "customer",
      "custom",
      "castle"
    ],
    "answer": 2,
    "translation": "毎朝コーヒーを飲むのが若井滉斗の習慣です。",
    "explanation": "custom（習慣、風習）。 / その他の選択肢: costume（衣装）、customer（客）、castle（城）。"
  },
  {
    "id": 327,
    "type": "sentence",
    "text": "Ryoka Fujisawa spent a large (    ) of money on new clothes.",
    "options": [
      "account",
      "amount",
      "announce",
      "allowance"
    ],
    "answer": 1,
    "translation": "藤澤涼架は新しい服に多額のお金を使いました。",
    "explanation": "a large amount of ~（多量の〜、多額の〜）。 / その他の選択肢: account（口座・説明）、announce（発表する）、allowance（小遣い）。"
  },
  {
    "id": 328,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE worked hard to (    ) the goal of making a great album.",
    "options": [
      "believe",
      "receive",
      "deceive",
      "achieve"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは素晴らしいアルバムを作るという目標を達成するために一生懸命働きました。",
    "explanation": "achieve（達成する）。 / その他の選択肢: believe（信じる）、receive（受け取る）、deceive（だます）。"
  },
  {
    "id": 329,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE never (    )s about being too busy.",
    "options": [
      "remain",
      "complain",
      "explain",
      "contain"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは忙しすぎることについて決して不平を言いません。",
    "explanation": "complain about ~（〜について不平を言う）。 / その他の選択肢: explain（説明する）、remain（残る）、contain（含む）。"
  },
  {
    "id": 330,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE's smile always (    )s the fans.",
    "options": [
      "encourage",
      "discourage",
      "engage",
      "enlarge"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルのメンバーの笑顔はいつもファンを勇気づけます。",
    "explanation": "encourage（勇気づける、励ます）。 / その他の選択肢: discourage（落胆させる）、engage（従事する）、enlarge（拡大する）。"
  },
  {
    "id": 331,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, he practices every day to (    ) guitar skills.",
    "options": [
      "approve",
      "prove",
      "improve",
      "remove"
    ],
    "answer": 2,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、彼はギターのスキルを向上させるために毎日練習しています。",
    "explanation": "improve（向上させる、改善する）。 / その他の選択肢: prove（証明する）、remove（取り除く）、approve（承認する）。"
  },
  {
    "id": 332,
    "type": "sentence",
    "text": "Hiroto Wakai (    )ed that they should go eat ramen after the rehearsal.",
    "options": [
      "suggest",
      "request",
      "invest",
      "digest"
    ],
    "answer": 0,
    "translation": "若井滉斗はリハーサルの後にラーメンを食べに行くべきだと提案しました。",
    "explanation": "suggest（提案する）。 / その他の選択肢: digest（消化する）、request（要求する）、invest（投資する）。"
  },
  {
    "id": 333,
    "type": "sentence",
    "text": "Ryoka Fujisawa needs to (    ) the broken strings on the guitar.",
    "options": [
      "relax",
      "reduce",
      "replace",
      "place"
    ],
    "answer": 2,
    "translation": "藤澤涼架はギターの切れた弦を交換する必要があります。",
    "explanation": "replace（交換する、取り替える）。 / その他の選択肢: place（場所）、reduce（減らす）、relax（リラックスする）。"
  },
  {
    "id": 334,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE was easily (    )d by fans while shopping at the mall.",
    "options": [
      "organize",
      "memorize",
      "realize",
      "recognize"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルはショッピングモールで買い物中にファンにすぐ気付かれました。",
    "explanation": "recognize（気付く、認識する）。 / その他の選択肢: organize（組織する）、realize（気付く）、memorize（暗記する）。"
  },
  {
    "id": 335,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they will (    ) in a charity marathon next month.",
    "options": [
      "hesitate",
      "participate",
      "calculate",
      "anticipate"
    ],
    "answer": 1,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは来月チャリティーマラソンに参加します。",
    "explanation": "participate in ~（〜に参加する）。 / その他の選択肢: anticipate（予想する）、hesitate（ためらう）、calculate（計算する）。"
  },
  {
    "id": 336,
    "type": "sentence",
    "text": "Writing a good song (    )s a lot of concentration for The members of Mrs. GREEN APPLE.",
    "options": [
      "retire",
      "require",
      "acquire",
      "inquire"
    ],
    "answer": 1,
    "translation": "良い曲を書くことはミセスグリーンアップルのメンバーにとって多くの集中力を必要とします。",
    "explanation": "require（必要とする）。 / その他の選択肢: acquire（獲得する）、inquire（尋ねる）、retire（引退する）。"
  },
  {
    "id": 337,
    "type": "sentence",
    "text": "Motoki Ohmori doesn't like to (    ) themselves with others.",
    "options": [
      "repair",
      "compare",
      "declare",
      "prepare"
    ],
    "answer": 1,
    "translation": "大森元貴は自分自身を他人と比較するのが好きではありません。",
    "explanation": "compare A with B（AをBと比較する）。 / その他の選択肢: prepare（準備する）、repair（修理する）、declare（宣言する）。"
  },
  {
    "id": 338,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, he wants to (    ) fans with unforgettable memories.",
    "options": [
      "provide",
      "decide",
      "divide",
      "guide"
    ],
    "answer": 0,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼はファンに忘れられない思い出を提供したいと思っています。",
    "explanation": "provide A with B（AにBを提供する）。 / その他の選択肢: divide（分割する）、decide（決定する）、guide（案内する）。"
  },
  {
    "id": 339,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he can always (    ) on the other members when things get tough.",
    "options": [
      "reply",
      "apply",
      "supply",
      "rely"
    ],
    "answer": 3,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、困難な時、彼はいつも他のメンバーに頼ることができます。",
    "explanation": "rely on ~（〜に頼る）。 / その他の選択肢: reply（返事する）、apply（適用する・申し込む）、supply（供給する）。"
  },
  {
    "id": 340,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE couldn't (    ) to buy that expensive instrument years ago.",
    "options": [
      "record",
      "effort",
      "reward",
      "afford"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは何年も前はあの高価な楽器を買う余裕がありませんでした。",
    "explanation": "afford to do（〜する余裕がある）。 / その他の選択肢: effort（努力）、record（記録）、reward（報酬）。"
  },
  {
    "id": 341,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they wore a warm coat to (    ) catching a cold.",
    "options": [
      "event",
      "invent",
      "prevent",
      "present"
    ],
    "answer": 2,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは風邪をひくのを防ぐために暖かいコートを着ました。",
    "explanation": "prevent（防ぐ、妨げる）。 / その他の選択肢: invent（発明する）、event（出来事）、present（提示する・プレゼント）。"
  },
  {
    "id": 342,
    "type": "sentence",
    "text": "A simple meal of rice and miso soup are enough to (    ) The members of Mrs. GREEN APPLE.",
    "options": [
      "terrify",
      "qualify",
      "satisfy",
      "modify"
    ],
    "answer": 2,
    "translation": "ご飯と味噌汁のシンプルな食事でミセスグリーンアップルのメンバーを満足させるのに十分です。",
    "explanation": "satisfy（満足させる）。 / その他の選択肢: modify（修正する）、qualify（資格を与える）、terrify（怖がらせる）。"
  },
  {
    "id": 343,
    "type": "sentence",
    "text": "The melody of that song is very (    ) to Motoki Ohmori.",
    "options": [
      "similar",
      "familiar",
      "popular",
      "regular"
    ],
    "answer": 1,
    "translation": "その曲のメロディーは大森元貴にとってとても馴染みがあります。",
    "explanation": "be familiar to ~（〜にとって馴染みがある）。 / その他の選択肢: similar（似ている）、popular（人気の）、regular（規則的な）。"
  },
  {
    "id": 344,
    "type": "sentence",
    "text": "Living near the station is very (    ) for Hiroto Wakai.",
    "options": [
      "current",
      "confident",
      "excellent",
      "convenient"
    ],
    "answer": 3,
    "translation": "駅の近くに住むことは若井滉斗にとってとても便利です。",
    "explanation": "convenient（便利な）。 / その他の選択肢: confident（自信がある）、current（現在の）、excellent（優れた）。"
  },
  {
    "id": 345,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he has been very (    ) since moving out of the parents' house.",
    "options": [
      "silent",
      "confident",
      "dependent",
      "independent"
    ],
    "answer": 3,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼は実家を出て以来、とても自立しています。",
    "explanation": "independent（自立した、独立した）。 / その他の選択肢: dependent（依存している）、confident（自信がある）、silent（静かな）。"
  },
  {
    "id": 346,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE likes to cook dishes from (    ) countries.",
    "options": [
      "serious",
      "obvious",
      "curious",
      "various"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは様々な国の料理を作るのが好きです。",
    "explanation": "various（様々な）。 / その他の選択肢: serious（深刻な）、obvious（明らかな）、curious（好奇心が強い）。"
  },
  {
    "id": 347,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE is always (    ) about new fashion trends.",
    "options": [
      "nervous",
      "furious",
      "curious",
      "serious"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルはいつも新しいファッショントレンドに好奇心を持っています。",
    "explanation": "be curious about ~（〜について好奇心が強い、気になる）。 / その他の選択肢: serious（深刻な）、furious（激怒した）、nervous（緊張した）。"
  },
  {
    "id": 348,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were not (    ) of the time and stayed up late playing games.",
    "options": [
      "awake",
      "aware",
      "away",
      "alike"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルのメンバーは時間に気付かず、夜遅くまでゲームをして起きていました。",
    "explanation": "be aware of ~（〜に気付いている）。 / その他の選択肢: awake（起きている）、away（離れて）、alike（似ている）。"
  },
  {
    "id": 349,
    "type": "sentence",
    "text": "That is (    ) what Motoki Ohmori wanted to say.",
    "options": [
      "exactly",
      "mostly",
      "hardly",
      "nearly"
    ],
    "answer": 0,
    "translation": "それはまさに大森元貴が言いたかったことです。",
    "explanation": "exactly（まさに、正確に）。 / その他の選択肢: mostly（主に）、hardly（ほとんど～ない）、nearly（ほとんど）。"
  },
  {
    "id": 350,
    "type": "sentence",
    "text": "Hiroto Wakai (    ) visits that small cafe in the afternoon.",
    "options": [
      "rarely",
      "suddenly",
      "frequently",
      "recently"
    ],
    "answer": 2,
    "translation": "若井滉斗は午後によくその小さなカフェを訪れます。",
    "explanation": "frequently（頻繁に）。 / その他の選択肢: recently（最近）、rarely（めったに～ない）、suddenly（突然）。"
  },
  {
    "id": 351,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he's singing voice (    ) became stronger over the years.",
    "options": [
      "usually",
      "naturally",
      "actually",
      "gradually"
    ],
    "answer": 3,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼の歌声は年月を経て徐々に力強くなりました。",
    "explanation": "gradually（徐々に）。 / その他の選択肢: usually（普通は）、naturally（自然に）、actually（実は）。"
  },
  {
    "id": 352,
    "type": "sentence",
    "text": "When Mrs. GREEN APPLE heard the news, they (    ) called their family.",
    "options": [
      "completely",
      "immediately",
      "extremely",
      "unfortunately"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルはそのニュースを聞いた時、すぐに家族に電話しました。",
    "explanation": "immediately（すぐに、直ちに）。 / その他の選択肢: completely（完全に）、unfortunately（残念ながら）、extremely（極端に）。"
  },
  {
    "id": 353,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE loves all animals, but (    ) dogs.",
    "options": [
      "eventually",
      "specially",
      "specifically",
      "especially"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルはすべての動物が好きですが、特に犬が好きです。",
    "explanation": "especially（特に）。 / その他の選択肢: specially（特別に）、specifically（明確に）、eventually（最終的に）。"
  },
  {
    "id": 354,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE feel (    ) for making the fans happy.",
    "options": [
      "possible",
      "terrible",
      "responsible",
      "flexible"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルのメンバーはファンを幸せにすることに責任を感じています。",
    "explanation": "be responsible for ~（〜に対して責任がある）。 / その他の選択肢: possible（可能な）、terrible（ひどい）、flexible（柔軟な）。"
  },
  {
    "id": 355,
    "type": "sentence",
    "text": "Motoki Ohmori was not (    ) for the interview yesterday.",
    "options": [
      "capable",
      "valuable",
      "available",
      "suitable"
    ],
    "answer": 2,
    "translation": "大森元貴は昨日のインタビューには対応できませんでした（都合がつきませんでした）。",
    "explanation": "available（利用できる、手が空いている）。 / その他の選択肢: valuable（価値のある）、suitable（適した）、capable（能力がある）。"
  },
  {
    "id": 356,
    "type": "sentence",
    "text": "Hiroto Wakai finally managed to (    ) how to use the new synthesizer.",
    "options": [
      "point out",
      "turn out",
      "figure out",
      "carry out"
    ],
    "answer": 2,
    "translation": "若井滉斗はついに新しいシンセサイザーの使い方を理解することができました。",
    "explanation": "figure out（〜を理解する、解決する）。 / その他の選択肢: point out（指摘する）、turn out（判明する）、carry out（実行する）。"
  },
  {
    "id": 357,
    "type": "sentence",
    "text": "The song Ryoka Fujisawa wrote casually (    ) to be a massive hit.",
    "options": [
      "break out",
      "find out",
      "turn out",
      "run out"
    ],
    "answer": 2,
    "translation": "藤澤涼架が何気なく書いた曲が、大ヒットであることが判明しました。",
    "explanation": "turn out to be ~（〜であることが判明する）。 / その他の選択肢: break out（勃発する）、run out（尽きる）、find out（見つけ出す）。"
  },
  {
    "id": 358,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, The success of the live tour will (    ) teamwork, according to they.",
    "options": [
      "insist on",
      "focus on",
      "rely on",
      "depend on"
    ],
    "answer": 3,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らによると、ライブツアーの成功はチームワークにかかっているとのことです。",
    "explanation": "depend on ~（〜次第である、〜に頼る）。 / その他の選択肢: insist on（主張する）、focus on（集中する）、rely on（頼る）。"
  },
  {
    "id": 359,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE booked the flight tickets (    ) for the trip.",
    "options": [
      "in particular",
      "in detail",
      "in general",
      "in advance"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは旅行のために航空券を事前に予約しました。",
    "explanation": "in advance（前もって、事前に）。 / その他の選択肢: in detail（詳細に）、in general（一般的に）、in particular（特に）。"
  },
  {
    "id": 360,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE thought the lyrics didn't (    ) at first, but later understood the deep meaning.",
    "options": [
      "make progress",
      "make sense",
      "make sure",
      "make up"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルのメンバーは最初、その歌詞は意味が通らないと思いましたが、後になって深い意味を理解しました。",
    "explanation": "make sense（意味をなす、理にかなう）。 / その他の選択肢: make up（構成する・化粧する）、make sure（確かめる）、make progress（進歩する）。"
  },
  {
    "id": 361,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, he noticed that they had (    ) milk while making breakfast.",
    "options": [
      "get out of",
      "stay out of",
      "run out of",
      "keep out of"
    ],
    "answer": 2,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、彼は朝食を作っている時に牛乳を切らしてしまったことに気付きました。",
    "explanation": "run out of ~（〜を使い果たす、切らす）。 / その他の選択肢: get out of（抜け出す）、stay out of（関わらない）、keep out of（立ち入らない）。"
  },
  {
    "id": 362,
    "type": "sentence",
    "text": "The music festival where Hiroto Wakai will perform is going to (    ) in August.",
    "options": [
      "take care",
      "take place",
      "take part",
      "take pride"
    ],
    "answer": 1,
    "translation": "若井滉斗が出演する音楽フェスは8月に開催される予定です。",
    "explanation": "take place（開催される、起こる）。 / その他の選択肢: take part（参加する）、take pride（誇りを持つ）、take care（世話をする）。"
  },
  {
    "id": 363,
    "type": "sentence",
    "text": "Ryoka Fujisawa is really (    ) meeting the fans again.",
    "options": [
      "look down on",
      "look forward to",
      "look up to",
      "look out for"
    ],
    "answer": 1,
    "translation": "藤澤涼架はまたファンに会えるのを本当に楽しみにしています。",
    "explanation": "look forward to ~（〜を楽しみに待つ）。toの後は名詞か動名詞が来ます。 / その他の選択肢: look up to（尊敬する）、look down on（見下す）、look out for（気をつける）。"
  },
  {
    "id": 364,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE advised the members to (    ) the small details in the sound.",
    "options": [
      "catch sight of",
      "get rid of",
      "take advantage of",
      "pay attention to"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルはメンバーたちに、音の細部に注意を払うようにアドバイスしました。",
    "explanation": "pay attention to ~（〜に注意を払う）。 / その他の選択肢: catch sight of（見つける）、get rid of（取り除く）、take advantage of（利用する）。"
  },
  {
    "id": 365,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE knows how to politely (    ) difficult situations.",
    "options": [
      "deal with",
      "come up with",
      "keep up with",
      "put up with"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは困難な状況に丁寧に対処する方法を知っています。",
    "explanation": "deal with ~（〜を処理する、〜に対処する）。 / その他の選択肢: come up with（思いつく）、keep up with（遅れずについていく）、put up with（我慢する）。"
  },
  {
    "id": 366,
    "type": "sentence",
    "text": "It have become a (    ) for The members of Mrs. GREEN APPLE to visit a shrine on New Year's Day.",
    "options": [
      "translation",
      "tradition",
      "transition",
      "transportation"
    ],
    "answer": 1,
    "translation": "元旦に神社を訪れることがミセスグリーンアップルのメンバーの伝統（恒例行事）になっています。",
    "explanation": "tradition（伝統、慣習）。 / その他の選択肢: translation（翻訳）、transition（移行）、transportation（交通機関）。"
  },
  {
    "id": 367,
    "type": "sentence",
    "text": "Motoki Ohmori was mentioned as a strong (    ) for the music award.",
    "options": [
      "candidate",
      "celebration",
      "certificate",
      "customer"
    ],
    "answer": 0,
    "translation": "大森元貴はその音楽賞の有力な候補者として言及されました。",
    "explanation": "candidate（候補者）。 / その他の選択肢: certificate（証明書）、celebration（お祝い）、customer（客）。"
  },
  {
    "id": 368,
    "type": "sentence",
    "text": "Hiroto Wakai always treats the concert staff and every (    ) with great respect.",
    "options": [
      "employer",
      "manager",
      "employee",
      "engineer"
    ],
    "answer": 2,
    "translation": "若井滉斗はコンサートスタッフやすべての従業員に大きな敬意を持って接します。",
    "explanation": "employee（従業員）。 / その他の選択肢: employer（雇用主）、engineer（エンジニア）、manager（マネージャー）。"
  },
  {
    "id": 369,
    "type": "sentence",
    "text": "Ryoka Fujisawa discovered a new (    ) to relieve stress after a long tour.",
    "options": [
      "department",
      "record",
      "method",
      "period"
    ],
    "answer": 2,
    "translation": "藤澤涼架は長いツアーの後にストレスを和らげる新しい方法を発見しました。",
    "explanation": "method（方法、方式）。 / その他の選択肢: period（期間）、record（記録）、department（部門）。"
  },
  {
    "id": 370,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they used their first (    ) to buy a gift for their parents.",
    "options": [
      "sympathy",
      "salary",
      "safety",
      "society"
    ],
    "answer": 1,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは初任給を使って両親にプレゼントを買いました。",
    "explanation": "salary（給料）。 / その他の選択肢: safety（安全）、sympathy（同情）、society（社会）。"
  },
  {
    "id": 371,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE had to (    ) that they forgot the lyrics for a moment during the live.",
    "options": [
      "permit",
      "commit",
      "submit",
      "admit"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルはライブ中、一瞬歌詞を忘れたことを認めなければなりませんでした。",
    "explanation": "admit（〜を認める）。 / その他の選択肢: permit（許可する）、submit（提出する）。"
  },
  {
    "id": 372,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE never (    )s others when a mistake happens in the studio.",
    "options": [
      "blame",
      "flame",
      "claim",
      "frame"
    ],
    "answer": 0,
    "translation": "スタジオでミスが起きた時、ミセスグリーンアップルのメンバーは決して他人を責めません。",
    "explanation": "blame（〜を責める）。 / その他の選択肢: frame（枠・枠組み）、flame（炎）。"
  },
  {
    "id": 373,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, he had to (    ) the dinner reservation because the recording took longer.",
    "options": [
      "tunnel",
      "channel",
      "panel",
      "cancel"
    ],
    "answer": 3,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、レコーディングが長引いたため、彼は夕食の予約を取り消さなければなりませんでした。",
    "explanation": "cancel（取り消す、キャンセルする）。 / その他の選択肢: channel（チャンネル）、panel（パネル）。"
  },
  {
    "id": 374,
    "type": "sentence",
    "text": "Hiroto Wakai tries to (    ) negative comments on the internet.",
    "options": [
      "explore",
      "store",
      "restore",
      "ignore"
    ],
    "answer": 3,
    "translation": "若井滉斗はインターネット上の否定的なコメントを無視しようと努めています。",
    "explanation": "ignore（無視する）。 / その他の選択肢: explore（探検する）、restore（修復する）。"
  },
  {
    "id": 375,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he used a ruler to (    ) the size of the new guitar case.",
    "options": [
      "leisure",
      "measure",
      "pleasure",
      "treasure"
    ],
    "answer": 1,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼は新しいギターケースのサイズを測るために定規を使いました。",
    "explanation": "measure（〜を測る）。 / その他の選択肢: treasure（宝物）、pleasure（喜び）。"
  },
  {
    "id": 376,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE donated money to an organization that (    )s stray animals.",
    "options": [
      "continue",
      "value",
      "rescue",
      "argue"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは迷子の動物を救助する団体に寄付をしました。",
    "explanation": "rescue（救助する）。 / その他の選択肢: argue（議論する）、continue（続ける）。"
  },
  {
    "id": 377,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE will (    ) for the best ramen shop in the city tonight.",
    "options": [
      "reach",
      "search",
      "catch",
      "teach"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは今夜、この街で一番美味しいラーメン屋を探すつもりです。",
    "explanation": "search for ~（〜を探す）。 / その他の選択肢: reach（到達する）、teach（教える）。"
  },
  {
    "id": 378,
    "type": "sentence",
    "text": "The staff (    )ed The members of Mrs. GREEN APPLE not to run on the slippery stage.",
    "options": [
      "warn",
      "burn",
      "learn",
      "turn"
    ],
    "answer": 0,
    "translation": "スタッフはミセスグリーンアップルのメンバーに、滑りやすいステージの上を走らないよう警告しました。",
    "explanation": "warn A not to do（Aに〜しないよう警告する）。 / その他の選択肢: burn（燃える）、turn（回る）。"
  },
  {
    "id": 379,
    "type": "sentence",
    "text": "Due to a (    ) of sleep, Motoki Ohmori drank three cups of coffee.",
    "options": [
      "luck",
      "lack",
      "rock",
      "lock"
    ],
    "answer": 1,
    "translation": "睡眠不足のため、大森元貴はコーヒーを3杯飲みました。",
    "explanation": "a lack of ~（〜の不足）。 / その他の選択肢: luck（幸運）、lock（鍵）。"
  },
  {
    "id": 380,
    "type": "sentence",
    "text": "Hiroto Wakai paid the entrance (    ) to visit the art museum.",
    "options": [
      "free",
      "fee",
      "tree",
      "flee"
    ],
    "answer": 1,
    "translation": "若井滉斗は美術館を訪れるために入場料を支払いました。",
    "explanation": "fee（料金、手数料、入場料）。 / その他の選択肢: free（無料）、flee（逃げる）。"
  },
  {
    "id": 381,
    "type": "sentence",
    "text": "Ryoka Fujisawa believes that good (    ) is much more important than money.",
    "options": [
      "stealth",
      "death",
      "wealth",
      "health"
    ],
    "answer": 2,
    "translation": "藤澤涼架はお金よりも健康のほうがはるかに重要だと信じています。",
    "explanation": "health（健康）。wealth（富）の対義的。 / その他の選択肢: health（健康）、death（死）。"
  },
  {
    "id": 382,
    "type": "sentence",
    "text": "Once Mrs. GREEN APPLE starts writing a song, they enter a deep concentration (    ).",
    "options": [
      "bone",
      "tone",
      "zone",
      "stone"
    ],
    "answer": 2,
    "translation": "一度曲を書き始めると、ミセスグリーンアップルは深い集中のゾーンに入ります。",
    "explanation": "zone（地帯、領域）。 / その他の選択肢: bone（骨）、tone（音色）。"
  },
  {
    "id": 383,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE cannot (    ) the fact that their fans are the best in the world.",
    "options": [
      "rely",
      "defy",
      "reply",
      "deny"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは自分たちのファンが世界一であるという事実を否定できません。",
    "explanation": "deny（〜を否定する）。 / その他の選択肢: rely（頼る）、reply（返事する）。"
  },
  {
    "id": 384,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE love to (    ) with friends and play board games.",
    "options": [
      "bother",
      "father",
      "weather",
      "gather"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルのメンバーは友達と集まってボードゲームをするのが好きです。",
    "explanation": "gather（集める、集まる）。 / その他の選択肢: bother（悩ます）、father（父親）。"
  },
  {
    "id": 385,
    "type": "sentence",
    "text": "The agency decided to (    ) more security guards for Motoki Ohmori's concert.",
    "options": [
      "tire",
      "hire",
      "fire",
      "wire"
    ],
    "answer": 1,
    "translation": "事務所は大森元貴のコンサートのために警備員をさらに雇うことを決定しました。",
    "explanation": "hire（雇う）。 / その他の選択肢: fire（火・解雇する）、tire（疲れさせる）。"
  },
  {
    "id": 386,
    "type": "sentence",
    "text": "Hiroto Wakai thinks people should not (    ) others based solely on appearance.",
    "options": [
      "edge",
      "judge",
      "pledge",
      "bridge"
    ],
    "answer": 1,
    "translation": "若井滉斗は、人は見た目だけで他人を判断するべきではないと考えています。",
    "explanation": "judge（判断する）。 / その他の選択肢: bridge（橋）、edge（端）。"
  },
  {
    "id": 387,
    "type": "sentence",
    "text": "In winter, Ryoka Fujisawa often wears a cozy (    ) sweater.",
    "options": [
      "hit",
      "fit",
      "sit",
      "knit"
    ],
    "answer": 3,
    "translation": "冬には、藤澤涼架はよく着心地の良いニット（編まれた）セーターを着ます。",
    "explanation": "knit（編む、編まれた）。 / その他の選択肢: hit（打つ）、fit（合う）。"
  },
  {
    "id": 388,
    "type": "sentence",
    "text": "Tired after the live, Mrs. GREEN APPLE tried to (    ) against the wall.",
    "options": [
      "bean",
      "mean",
      "clean",
      "lean"
    ],
    "answer": 3,
    "translation": "ライブの後で疲れていたので、ミセスグリーンアップルは壁に寄りかかろうとしました。",
    "explanation": "lean against ~（〜に寄りかかる）。 / その他の選択肢: mean（意味する）、clean（掃除する）。"
  },
  {
    "id": 389,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE uses a special case to (    ) the condition of the vintage guitar.",
    "options": [
      "preserve",
      "observe",
      "deserve",
      "reserve"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルはヴィンテージギターの状態を保存するために特別なケースを使用しています。",
    "explanation": "preserve（保存する、保護する）。 / その他の選択肢: reserve（予約する）、deserve（値する）。"
  },
  {
    "id": 390,
    "type": "sentence",
    "text": "When The members of Mrs. GREEN APPLE started playing, all the nervousness seemed to (    ).",
    "options": [
      "finish",
      "punish",
      "banish",
      "vanish"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルのメンバーが演奏し始めると、すべての緊張が消え去ったように見えました。",
    "explanation": "vanish（消える、見えなくなる）。 / その他の選択肢: punish（罰する）、finish（終える）。"
  },
  {
    "id": 391,
    "type": "sentence",
    "text": "Motoki Ohmori bought some fresh (    ) to cook pasta.",
    "options": [
      "instructions",
      "ingredients",
      "insects",
      "instruments"
    ],
    "answer": 1,
    "translation": "大森元貴はパスタを作るために新鮮な材料をいくつか買いました。",
    "explanation": "ingredient（材料、食材）。料理に関する文脈で使われます。 / その他の選択肢: instruments（楽器）、instructions（指示）、insects（昆虫）。"
  },
  {
    "id": 392,
    "type": "sentence",
    "text": "Hiroto Wakai ordered new (    ) for the home studio.",
    "options": [
      "employment",
      "equipment",
      "experiment",
      "environment"
    ],
    "answer": 1,
    "translation": "若井滉斗は自宅スタジオのために新しい機材を注文しました。",
    "explanation": "equipment（機材、設備）。不可算名詞であることに注意。 / その他の選択肢: experiment（実験）、environment（環境）、employment（雇用）。"
  },
  {
    "id": 393,
    "type": "sentence",
    "text": "Ryoka Fujisawa fell asleep as a (    ) on the train.",
    "options": [
      "stranger",
      "messenger",
      "passenger",
      "manager"
    ],
    "answer": 2,
    "translation": "藤澤涼架は電車の乗客として眠ってしまいました。",
    "explanation": "passenger（乗客）。 / その他の選択肢: messenger（使者）、manager（マネージャー）、stranger（見知らぬ人）。"
  },
  {
    "id": 394,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE finally arrived at the (    ) after a long drive.",
    "options": [
      "destination",
      "decision",
      "department",
      "description"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは長時間のドライブの末、ついに目的地に到着しました。",
    "explanation": "destination（目的地、行き先）。 / その他の選択肢: description（説明）、decision（決定）、department（部門）。"
  },
  {
    "id": 395,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE listens to a wide (    ) of music genres.",
    "options": [
      "anxiety",
      "variety",
      "safety",
      "society"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは幅広いジャンルの音楽を聴きます。",
    "explanation": "a wide variety of ~（幅広い種類の〜）。 / その他の選択肢: society（社会）、safety（安全）、anxiety（不安）。"
  },
  {
    "id": 396,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, One (    ) of living in Tokyo are that they can easily go to many concerts.",
    "options": [
      "advance",
      "adventure",
      "advantage",
      "advice"
    ],
    "answer": 2,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、東京に住む一つの利点は、彼らがたくさんのコンサートに簡単に行けることです。",
    "explanation": "advantage（利点、有利な点）。 / その他の選択肢: adventure（冒険）、advance（前進）、advice（助言）。"
  },
  {
    "id": 397,
    "type": "sentence",
    "text": "Motoki Ohmori missed the (    ) to take a walk in the park because of the rain.",
    "options": [
      "operation",
      "opportunity",
      "opposition",
      "opinion"
    ],
    "answer": 1,
    "translation": "大森元貴は雨のせいで公園を散歩する機会を逃しました。",
    "explanation": "opportunity（機会、チャンス）。 / その他の選択肢: opposition（反対）、operation（手術・操作）、opinion（意見）。"
  },
  {
    "id": 398,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, The (    ) cheered loudly when he appeared on stage.",
    "options": [
      "absence",
      "audience",
      "attendance",
      "appearance"
    ],
    "answer": 1,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼がステージに現れた時、観客は大きな声で歓声を上げました。",
    "explanation": "audience（観客、聴衆）。 / その他の選択肢: attendance（出席）、absence（欠席）、appearance（外見・出現）。"
  },
  {
    "id": 399,
    "type": "sentence",
    "text": "Ryoka Fujisawa often takes pictures while walking around the (    ).",
    "options": [
      "neighborhood",
      "livelihood",
      "brotherhood",
      "childhood"
    ],
    "answer": 0,
    "translation": "藤澤涼架は近所を散歩しながらよく写真を撮ります。",
    "explanation": "neighborhood（近所、地域）。 / その他の選択肢: childhood（子供時代）、livelihood（生計）、brotherhood（兄弟の縁）。"
  },
  {
    "id": 400,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE felt a certain (    ) of nervousness before the live broadcast.",
    "options": [
      "disagree",
      "agree",
      "degree",
      "decree"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは生放送の前に、ある程度の緊張を感じました。",
    "explanation": "degree（程度、度合い）。a certain degree of ~ で「ある程度の〜」。 / その他の選択肢: decree（法令）、agree（同意する）、disagree（同意しない）。"
  },
  {
    "id": 401,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE caught a cold because the (    ) dropped suddenly.",
    "options": [
      "literature",
      "temperature",
      "feature",
      "creature"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは気温が急に下がったため風邪をひきました。",
    "explanation": "temperature（温度、気温、体温）。 / その他の選択肢: literature（文学）、creature（生き物）、feature（特徴）。"
  },
  {
    "id": 402,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were deeply moved by the beautiful (    ) of the mountains.",
    "options": [
      "scene",
      "scenery",
      "screen",
      "science"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルのメンバーは山の美しい風景に深く感動しました。",
    "explanation": "scenery（風景、景色）。 / その他の選択肢: scene（場面）、science（科学）、screen（画面）。"
  },
  {
    "id": 403,
    "type": "sentence",
    "text": "Motoki Ohmori eats healthy food to prevent (    ).",
    "options": [
      "decrease",
      "deceive",
      "disease",
      "desire"
    ],
    "answer": 2,
    "translation": "大森元貴は病気を防ぐために健康的な食べ物を食べます。",
    "explanation": "disease（病気）。 / その他の選択肢: decrease（減少する）、deceive（だます）、desire（欲望）。"
  },
  {
    "id": 404,
    "type": "sentence",
    "text": "It is a (    ) for Hiroto Wakai to drink coffee every morning.",
    "options": [
      "customer",
      "costume",
      "custom",
      "castle"
    ],
    "answer": 2,
    "translation": "毎朝コーヒーを飲むのが若井滉斗の習慣です。",
    "explanation": "custom（習慣、風習）。 / その他の選択肢: costume（衣装）、customer（客）、castle（城）。"
  },
  {
    "id": 405,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he spent a large (    ) of money on new clothes.",
    "options": [
      "account",
      "amount",
      "announce",
      "allowance"
    ],
    "answer": 1,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼は新しい服に多額のお金を使いました。",
    "explanation": "a large amount of ~（多量の〜、多額の〜）。 / その他の選択肢: account（口座・説明）、announce（発表する）、allowance（小遣い）。"
  },
  {
    "id": 406,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE worked hard to (    ) the goal of making a great album.",
    "options": [
      "receive",
      "believe",
      "deceive",
      "achieve"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは素晴らしいアルバムを作るという目標を達成するために一生懸命働きました。",
    "explanation": "achieve（達成する）。 / その他の選択肢: believe（信じる）、receive（受け取る）、deceive（だます）。"
  },
  {
    "id": 407,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they never (    )s about being too busy.",
    "options": [
      "explain",
      "remain",
      "complain",
      "contain"
    ],
    "answer": 2,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは忙しすぎることについて決して不平を言いません。",
    "explanation": "complain about ~（〜について不平を言う）。 / その他の選択肢: explain（説明する）、remain（残る）、contain（含む）。"
  },
  {
    "id": 408,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, they's smile always (    )s the fans.",
    "options": [
      "enlarge",
      "engage",
      "encourage",
      "discourage"
    ],
    "answer": 2,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、彼らの笑顔はいつもファンを勇気づけます。",
    "explanation": "encourage（勇気づける、励ます）。 / その他の選択肢: discourage（落胆させる）、engage（従事する）、enlarge（拡大する）。"
  },
  {
    "id": 409,
    "type": "sentence",
    "text": "Motoki Ohmori practices every day to (    ) guitar skills.",
    "options": [
      "improve",
      "prove",
      "approve",
      "remove"
    ],
    "answer": 0,
    "translation": "大森元貴はギターのスキルを向上させるために毎日練習しています。",
    "explanation": "improve（向上させる、改善する）。 / その他の選択肢: prove（証明する）、remove（取り除く）、approve（承認する）。"
  },
  {
    "id": 410,
    "type": "sentence",
    "text": "Hiroto Wakai (    )ed that they should go eat ramen after the rehearsal.",
    "options": [
      "invest",
      "request",
      "suggest",
      "digest"
    ],
    "answer": 2,
    "translation": "若井滉斗はリハーサルの後にラーメンを食べに行くべきだと提案しました。",
    "explanation": "suggest（提案する）。 / その他の選択肢: digest（消化する）、request（要求する）、invest（投資する）。"
  },
  {
    "id": 411,
    "type": "sentence",
    "text": "Ryoka Fujisawa needs to (    ) the broken strings on the guitar.",
    "options": [
      "relax",
      "replace",
      "reduce",
      "place"
    ],
    "answer": 1,
    "translation": "藤澤涼架はギターの切れた弦を交換する必要があります。",
    "explanation": "replace（交換する、取り替える）。 / その他の選択肢: place（場所）、reduce（減らす）、relax（リラックスする）。"
  },
  {
    "id": 412,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE was easily (    )d by fans while shopping at the mall.",
    "options": [
      "memorize",
      "recognize",
      "realize",
      "organize"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルはショッピングモールで買い物中にファンにすぐ気付かれました。",
    "explanation": "recognize（気付く、認識する）。 / その他の選択肢: organize（組織する）、realize（気付く）、memorize（暗記する）。"
  },
  {
    "id": 413,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE will (    ) in a charity marathon next month.",
    "options": [
      "participate",
      "hesitate",
      "calculate",
      "anticipate"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは来月チャリティーマラソンに参加します。",
    "explanation": "participate in ~（〜に参加する）。 / その他の選択肢: anticipate（予想する）、hesitate（ためらう）、calculate（計算する）。"
  },
  {
    "id": 414,
    "type": "sentence",
    "text": "Writing a good song (    )s a lot of concentration for The members of Mrs. GREEN APPLE.",
    "options": [
      "require",
      "retire",
      "acquire",
      "inquire"
    ],
    "answer": 0,
    "translation": "良い曲を書くことはミセスグリーンアップルのメンバーにとって多くの集中力を必要とします。",
    "explanation": "require（必要とする）。 / その他の選択肢: acquire（獲得する）、inquire（尋ねる）、retire（引退する）。"
  },
  {
    "id": 415,
    "type": "conversation",
    "text": "A: Did you hear about Motoki Ohmori?\nB: Yeah, he doesn't like to (    ) themselves with others.",
    "options": [
      "prepare",
      "compare",
      "declare",
      "repair"
    ],
    "answer": 1,
    "translation": "A: 大森元貴のこと聞いた？\nB: うん、彼は自分自身を他人と比較するのが好きではありません。",
    "explanation": "compare A with B（AをBと比較する）。 / その他の選択肢: prepare（準備する）、repair（修理する）、declare（宣言する）。"
  },
  {
    "id": 416,
    "type": "sentence",
    "text": "Hiroto Wakai wants to (    ) fans with unforgettable memories.",
    "options": [
      "provide",
      "decide",
      "divide",
      "guide"
    ],
    "answer": 0,
    "translation": "若井滉斗はファンに忘れられない思い出を提供したいと思っています。",
    "explanation": "provide A with B（AにBを提供する）。 / その他の選択肢: divide（分割する）、decide（決定する）、guide（案内する）。"
  },
  {
    "id": 417,
    "type": "sentence",
    "text": "Ryoka Fujisawa can always (    ) on the other members when things get tough.",
    "options": [
      "supply",
      "reply",
      "rely",
      "apply"
    ],
    "answer": 2,
    "translation": "困難な時、藤澤涼架はいつも他のメンバーに頼ることができます。",
    "explanation": "rely on ~（〜に頼る）。 / その他の選択肢: reply（返事する）、apply（適用する・申し込む）、supply（供給する）。"
  },
  {
    "id": 418,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE couldn't (    ) to buy that expensive instrument years ago.",
    "options": [
      "afford",
      "effort",
      "record",
      "reward"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは何年も前はあの高価な楽器を買う余裕がありませんでした。",
    "explanation": "afford to do（〜する余裕がある）。 / その他の選択肢: effort（努力）、record（記録）、reward（報酬）。"
  },
  {
    "id": 419,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE wore a warm coat to (    ) catching a cold.",
    "options": [
      "invent",
      "event",
      "present",
      "prevent"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは風邪をひくのを防ぐために暖かいコートを着ました。",
    "explanation": "prevent（防ぐ、妨げる）。 / その他の選択肢: invent（発明する）、event（出来事）、present（提示する・プレゼント）。"
  },
  {
    "id": 420,
    "type": "sentence",
    "text": "A simple meal of rice and miso soup are enough to (    ) The members of Mrs. GREEN APPLE.",
    "options": [
      "modify",
      "qualify",
      "satisfy",
      "terrify"
    ],
    "answer": 2,
    "translation": "ご飯と味噌汁のシンプルな食事でミセスグリーンアップルのメンバーを満足させるのに十分です。",
    "explanation": "satisfy（満足させる）。 / その他の選択肢: modify（修正する）、qualify（資格を与える）、terrify（怖がらせる）。"
  },
  {
    "id": 421,
    "type": "sentence",
    "text": "The melody of that song is very (    ) to Motoki Ohmori.",
    "options": [
      "similar",
      "familiar",
      "popular",
      "regular"
    ],
    "answer": 1,
    "translation": "その曲のメロディーは大森元貴にとってとても馴染みがあります。",
    "explanation": "be familiar to ~（〜にとって馴染みがある）。 / その他の選択肢: similar（似ている）、popular（人気の）、regular（規則的な）。"
  },
  {
    "id": 422,
    "type": "sentence",
    "text": "Living near the station is very (    ) for Hiroto Wakai.",
    "options": [
      "convenient",
      "current",
      "excellent",
      "confident"
    ],
    "answer": 0,
    "translation": "駅の近くに住むことは若井滉斗にとってとても便利です。",
    "explanation": "convenient（便利な）。 / その他の選択肢: confident（自信がある）、current（現在の）、excellent（優れた）。"
  },
  {
    "id": 423,
    "type": "sentence",
    "text": "Ryoka Fujisawa has been very (    ) since moving out of the parents' house.",
    "options": [
      "independent",
      "confident",
      "dependent",
      "silent"
    ],
    "answer": 0,
    "translation": "藤澤涼架は実家を出て以来、とても自立しています。",
    "explanation": "independent（自立した、独立した）。 / その他の選択肢: dependent（依存している）、confident（自信がある）、silent（静かな）。"
  },
  {
    "id": 424,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE likes to cook dishes from (    ) countries.",
    "options": [
      "serious",
      "various",
      "obvious",
      "curious"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは様々な国の料理を作るのが好きです。",
    "explanation": "various（様々な）。 / その他の選択肢: serious（深刻な）、obvious（明らかな）、curious（好奇心が強い）。"
  },
  {
    "id": 425,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE is always (    ) about new fashion trends.",
    "options": [
      "nervous",
      "curious",
      "serious",
      "furious"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルはいつも新しいファッショントレンドに好奇心を持っています。",
    "explanation": "be curious about ~（〜について好奇心が強い、気になる）。 / その他の選択肢: serious（深刻な）、furious（激怒した）、nervous（緊張した）。"
  },
  {
    "id": 426,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were not (    ) of the time and stayed up late playing games.",
    "options": [
      "aware",
      "alike",
      "away",
      "awake"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルのメンバーは時間に気付かず、夜遅くまでゲームをして起きていました。",
    "explanation": "be aware of ~（〜に気付いている）。 / その他の選択肢: awake（起きている）、away（離れて）、alike（似ている）。"
  },
  {
    "id": 427,
    "type": "sentence",
    "text": "That is (    ) what Motoki Ohmori wanted to say.",
    "options": [
      "exactly",
      "hardly",
      "mostly",
      "nearly"
    ],
    "answer": 0,
    "translation": "それはまさに大森元貴が言いたかったことです。",
    "explanation": "exactly（まさに、正確に）。 / その他の選択肢: mostly（主に）、hardly（ほとんど～ない）、nearly（ほとんど）。"
  },
  {
    "id": 428,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, he (    ) visits that small cafe in the afternoon.",
    "options": [
      "rarely",
      "recently",
      "suddenly",
      "frequently"
    ],
    "answer": 3,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼は午後によくその小さなカフェを訪れます。",
    "explanation": "frequently（頻繁に）。 / その他の選択肢: recently（最近）、rarely（めったに～ない）、suddenly（突然）。"
  },
  {
    "id": 429,
    "type": "sentence",
    "text": "Ryoka Fujisawa's singing voice (    ) became stronger over the years.",
    "options": [
      "usually",
      "actually",
      "naturally",
      "gradually"
    ],
    "answer": 3,
    "translation": "藤澤涼架の歌声は年月を経て徐々に力強くなりました。",
    "explanation": "gradually（徐々に）。 / その他の選択肢: usually（普通は）、naturally（自然に）、actually（実は）。"
  },
  {
    "id": 430,
    "type": "sentence",
    "text": "When Mrs. GREEN APPLE heard the news, they (    ) called their family.",
    "options": [
      "extremely",
      "immediately",
      "unfortunately",
      "completely"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルはそのニュースを聞いた時、すぐに家族に電話しました。",
    "explanation": "immediately（すぐに、直ちに）。 / その他の選択肢: completely（完全に）、unfortunately（残念ながら）、extremely（極端に）。"
  },
  {
    "id": 431,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE loves all animals, but (    ) dogs.",
    "options": [
      "eventually",
      "specifically",
      "especially",
      "specially"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルはすべての動物が好きですが、特に犬が好きです。",
    "explanation": "especially（特に）。 / その他の選択肢: specially（特別に）、specifically（明確に）、eventually（最終的に）。"
  },
  {
    "id": 432,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE feel (    ) for making the fans happy.",
    "options": [
      "flexible",
      "possible",
      "terrible",
      "responsible"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルのメンバーはファンを幸せにすることに責任を感じています。",
    "explanation": "be responsible for ~（〜に対して責任がある）。 / その他の選択肢: possible（可能な）、terrible（ひどい）、flexible（柔軟な）。"
  },
  {
    "id": 433,
    "type": "sentence",
    "text": "Motoki Ohmori was not (    ) for the interview yesterday.",
    "options": [
      "valuable",
      "capable",
      "available",
      "suitable"
    ],
    "answer": 2,
    "translation": "大森元貴は昨日のインタビューには対応できませんでした（都合がつきませんでした）。",
    "explanation": "available（利用できる、手が空いている）。 / その他の選択肢: valuable（価値のある）、suitable（適した）、capable（能力がある）。"
  },
  {
    "id": 434,
    "type": "sentence",
    "text": "Hiroto Wakai finally managed to (    ) how to use the new synthesizer.",
    "options": [
      "figure out",
      "turn out",
      "carry out",
      "point out"
    ],
    "answer": 0,
    "translation": "若井滉斗はついに新しいシンセサイザーの使い方を理解することができました。",
    "explanation": "figure out（〜を理解する、解決する）。 / その他の選択肢: point out（指摘する）、turn out（判明する）、carry out（実行する）。"
  },
  {
    "id": 435,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, The song he wrote casually (    ) to be a massive hit.",
    "options": [
      "turn out",
      "run out",
      "break out",
      "find out"
    ],
    "answer": 0,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼が何気なく書いた曲が、大ヒットであることが判明しました。",
    "explanation": "turn out to be ~（〜であることが判明する）。 / その他の選択肢: break out（勃発する）、run out（尽きる）、find out（見つけ出す）。"
  },
  {
    "id": 436,
    "type": "sentence",
    "text": "The success of the live tour will (    ) teamwork, according to Mrs. GREEN APPLE.",
    "options": [
      "insist on",
      "depend on",
      "focus on",
      "rely on"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルによると、ライブツアーの成功はチームワークにかかっているとのことです。",
    "explanation": "depend on ~（〜次第である、〜に頼る）。 / その他の選択肢: insist on（主張する）、focus on（集中する）、rely on（頼る）。"
  },
  {
    "id": 437,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE booked the flight tickets (    ) for the trip.",
    "options": [
      "in general",
      "in particular",
      "in advance",
      "in detail"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは旅行のために航空券を事前に予約しました。",
    "explanation": "in advance（前もって、事前に）。 / その他の選択肢: in detail（詳細に）、in general（一般的に）、in particular（特に）。"
  },
  {
    "id": 438,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE thought the lyrics didn't (    ) at first, but later understood the deep meaning.",
    "options": [
      "make sure",
      "make up",
      "make progress",
      "make sense"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルのメンバーは最初、その歌詞は意味が通らないと思いましたが、後になって深い意味を理解しました。",
    "explanation": "make sense（意味をなす、理にかなう）。 / その他の選択肢: make up（構成する・化粧する）、make sure（確かめる）、make progress（進歩する）。"
  },
  {
    "id": 439,
    "type": "sentence",
    "text": "Motoki Ohmori noticed that they had (    ) milk while making breakfast.",
    "options": [
      "run out of",
      "keep out of",
      "stay out of",
      "get out of"
    ],
    "answer": 0,
    "translation": "大森元貴は朝食を作っている時に牛乳を切らしてしまったことに気付きました。",
    "explanation": "run out of ~（〜を使い果たす、切らす）。 / その他の選択肢: get out of（抜け出す）、stay out of（関わらない）、keep out of（立ち入らない）。"
  },
  {
    "id": 440,
    "type": "sentence",
    "text": "The music festival where Hiroto Wakai will perform is going to (    ) in August.",
    "options": [
      "take care",
      "take part",
      "take place",
      "take pride"
    ],
    "answer": 2,
    "translation": "若井滉斗が出演する音楽フェスは8月に開催される予定です。",
    "explanation": "take place（開催される、起こる）。 / その他の選択肢: take part（参加する）、take pride（誇りを持つ）、take care（世話をする）。"
  },
  {
    "id": 441,
    "type": "sentence",
    "text": "Ryoka Fujisawa is really (    ) meeting the fans again.",
    "options": [
      "look down on",
      "look forward to",
      "look out for",
      "look up to"
    ],
    "answer": 1,
    "translation": "藤澤涼架はまたファンに会えるのを本当に楽しみにしています。",
    "explanation": "look forward to ~（〜を楽しみに待つ）。toの後は名詞か動名詞が来ます。 / その他の選択肢: look up to（尊敬する）、look down on（見下す）、look out for（気をつける）。"
  },
  {
    "id": 442,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they advised the members to (    ) the small details in the sound.",
    "options": [
      "get rid of",
      "pay attention to",
      "take advantage of",
      "catch sight of"
    ],
    "answer": 1,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らはメンバーたちに、音の細部に注意を払うようにアドバイスしました。",
    "explanation": "pay attention to ~（〜に注意を払う）。 / その他の選択肢: catch sight of（見つける）、get rid of（取り除く）、take advantage of（利用する）。"
  },
  {
    "id": 443,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE knows how to politely (    ) difficult situations.",
    "options": [
      "come up with",
      "deal with",
      "keep up with",
      "put up with"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは困難な状況に丁寧に対処する方法を知っています。",
    "explanation": "deal with ~（〜を処理する、〜に対処する）。 / その他の選択肢: come up with（思いつく）、keep up with（遅れずについていく）、put up with（我慢する）。"
  },
  {
    "id": 444,
    "type": "sentence",
    "text": "It have become a (    ) for The members of Mrs. GREEN APPLE to visit a shrine on New Year's Day.",
    "options": [
      "transition",
      "transportation",
      "translation",
      "tradition"
    ],
    "answer": 3,
    "translation": "元旦に神社を訪れることがミセスグリーンアップルのメンバーの伝統（恒例行事）になっています。",
    "explanation": "tradition（伝統、慣習）。 / その他の選択肢: translation（翻訳）、transition（移行）、transportation（交通機関）。"
  },
  {
    "id": 445,
    "type": "sentence",
    "text": "Motoki Ohmori was mentioned as a strong (    ) for the music award.",
    "options": [
      "certificate",
      "customer",
      "celebration",
      "candidate"
    ],
    "answer": 3,
    "translation": "大森元貴はその音楽賞の有力な候補者として言及されました。",
    "explanation": "candidate（候補者）。 / その他の選択肢: certificate（証明書）、celebration（お祝い）、customer（客）。"
  },
  {
    "id": 446,
    "type": "sentence",
    "text": "Hiroto Wakai always treats the concert staff and every (    ) with great respect.",
    "options": [
      "manager",
      "employer",
      "engineer",
      "employee"
    ],
    "answer": 3,
    "translation": "若井滉斗はコンサートスタッフやすべての従業員に大きな敬意を持って接します。",
    "explanation": "employee（従業員）。 / その他の選択肢: employer（雇用主）、engineer（エンジニア）、manager（マネージャー）。"
  },
  {
    "id": 447,
    "type": "sentence",
    "text": "Ryoka Fujisawa discovered a new (    ) to relieve stress after a long tour.",
    "options": [
      "period",
      "method",
      "record",
      "department"
    ],
    "answer": 1,
    "translation": "藤澤涼架は長いツアーの後にストレスを和らげる新しい方法を発見しました。",
    "explanation": "method（方法、方式）。 / その他の選択肢: period（期間）、record（記録）、department（部門）。"
  },
  {
    "id": 448,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE used their first (    ) to buy a gift for their parents.",
    "options": [
      "society",
      "sympathy",
      "salary",
      "safety"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは初任給を使って両親にプレゼントを買いました。",
    "explanation": "salary（給料）。 / その他の選択肢: safety（安全）、sympathy（同情）、society（社会）。"
  },
  {
    "id": 449,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they had to (    ) that they forgot the lyrics for a moment during the live.",
    "options": [
      "admit",
      "permit",
      "submit",
      "commit"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らはライブ中、一瞬歌詞を忘れたことを認めなければなりませんでした。",
    "explanation": "admit（〜を認める）。 / その他の選択肢: permit（許可する）、submit（提出する）。"
  },
  {
    "id": 450,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, they never (    )s others when a mistake happens in the studio.",
    "options": [
      "claim",
      "frame",
      "blame",
      "flame"
    ],
    "answer": 2,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、スタジオでミスが起きた時、彼らは決して他人を責めません。",
    "explanation": "blame（〜を責める）。 / その他の選択肢: frame（枠・枠組み）、flame（炎）。"
  },
  {
    "id": 451,
    "type": "sentence",
    "text": "Motoki Ohmori had to (    ) the dinner reservation because the recording took longer.",
    "options": [
      "channel",
      "panel",
      "tunnel",
      "cancel"
    ],
    "answer": 3,
    "translation": "レコーディングが長引いたため、大森元貴は夕食の予約を取り消さなければなりませんでした。",
    "explanation": "cancel（取り消す、キャンセルする）。 / その他の選択肢: channel（チャンネル）、panel（パネル）。"
  },
  {
    "id": 452,
    "type": "sentence",
    "text": "Hiroto Wakai tries to (    ) negative comments on the internet.",
    "options": [
      "store",
      "ignore",
      "restore",
      "explore"
    ],
    "answer": 1,
    "translation": "若井滉斗はインターネット上の否定的なコメントを無視しようと努めています。",
    "explanation": "ignore（無視する）。 / その他の選択肢: explore（探検する）、restore（修復する）。"
  },
  {
    "id": 453,
    "type": "sentence",
    "text": "Ryoka Fujisawa used a ruler to (    ) the size of the new guitar case.",
    "options": [
      "treasure",
      "pleasure",
      "measure",
      "leisure"
    ],
    "answer": 2,
    "translation": "藤澤涼架は新しいギターケースのサイズを測るために定規を使いました。",
    "explanation": "measure（〜を測る）。 / その他の選択肢: treasure（宝物）、pleasure（喜び）。"
  },
  {
    "id": 454,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE donated money to an organization that (    )s stray animals.",
    "options": [
      "continue",
      "rescue",
      "value",
      "argue"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは迷子の動物を救助する団体に寄付をしました。",
    "explanation": "rescue（救助する）。 / その他の選択肢: argue（議論する）、continue（続ける）。"
  },
  {
    "id": 455,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE will (    ) for the best ramen shop in the city tonight.",
    "options": [
      "reach",
      "teach",
      "search",
      "catch"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは今夜、この街で一番美味しいラーメン屋を探すつもりです。",
    "explanation": "search for ~（〜を探す）。 / その他の選択肢: reach（到達する）、teach（教える）。"
  },
  {
    "id": 456,
    "type": "sentence",
    "text": "The staff (    )ed The members of Mrs. GREEN APPLE not to run on the slippery stage.",
    "options": [
      "turn",
      "warn",
      "burn",
      "learn"
    ],
    "answer": 1,
    "translation": "スタッフはミセスグリーンアップルのメンバーに、滑りやすいステージの上を走らないよう警告しました。",
    "explanation": "warn A not to do（Aに〜しないよう警告する）。 / その他の選択肢: burn（燃える）、turn（回る）。"
  },
  {
    "id": 457,
    "type": "sentence",
    "text": "Due to a (    ) of sleep, Motoki Ohmori drank three cups of coffee.",
    "options": [
      "lack",
      "lock",
      "luck",
      "rock"
    ],
    "answer": 0,
    "translation": "睡眠不足のため、大森元貴はコーヒーを3杯飲みました。",
    "explanation": "a lack of ~（〜の不足）。 / その他の選択肢: luck（幸運）、lock（鍵）。"
  },
  {
    "id": 458,
    "type": "sentence",
    "text": "Hiroto Wakai paid the entrance (    ) to visit the art museum.",
    "options": [
      "flee",
      "tree",
      "fee",
      "free"
    ],
    "answer": 2,
    "translation": "若井滉斗は美術館を訪れるために入場料を支払いました。",
    "explanation": "fee（料金、手数料、入場料）。 / その他の選択肢: free（無料）、flee（逃げる）。"
  },
  {
    "id": 459,
    "type": "sentence",
    "text": "Ryoka Fujisawa believes that good (    ) is much more important than money.",
    "options": [
      "wealth",
      "death",
      "health",
      "stealth"
    ],
    "answer": 0,
    "translation": "藤澤涼架はお金よりも健康のほうがはるかに重要だと信じています。",
    "explanation": "health（健康）。wealth（富）の対義的。 / その他の選択肢: health（健康）、death（死）。"
  },
  {
    "id": 460,
    "type": "sentence",
    "text": "Once Mrs. GREEN APPLE starts writing a song, they enter a deep concentration (    ).",
    "options": [
      "tone",
      "zone",
      "stone",
      "bone"
    ],
    "answer": 1,
    "translation": "一度曲を書き始めると、ミセスグリーンアップルは深い集中のゾーンに入ります。",
    "explanation": "zone（地帯、領域）。 / その他の選択肢: bone（骨）、tone（音色）。"
  },
  {
    "id": 461,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE cannot (    ) the fact that their fans are the best in the world.",
    "options": [
      "defy",
      "reply",
      "rely",
      "deny"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは自分たちのファンが世界一であるという事実を否定できません。",
    "explanation": "deny（〜を否定する）。 / その他の選択肢: rely（頼る）、reply（返事する）。"
  },
  {
    "id": 462,
    "type": "conversation",
    "text": "A: Did you hear about The members of Mrs. GREEN APPLE?\nB: Yeah, they love to (    ) with friends and play board games.",
    "options": [
      "gather",
      "weather",
      "bother",
      "father"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのメンバーのこと聞いた？\nB: うん、彼らは友達と集まってボードゲームをするのが好きです。",
    "explanation": "gather（集める、集まる）。 / その他の選択肢: bother（悩ます）、father（父親）。"
  },
  {
    "id": 463,
    "type": "sentence",
    "text": "The agency decided to (    ) more security guards for Motoki Ohmori's concert.",
    "options": [
      "fire",
      "hire",
      "wire",
      "tire"
    ],
    "answer": 1,
    "translation": "事務所は大森元貴のコンサートのために警備員をさらに雇うことを決定しました。",
    "explanation": "hire（雇う）。 / その他の選択肢: fire（火・解雇する）、tire（疲れさせる）。"
  },
  {
    "id": 464,
    "type": "sentence",
    "text": "Hiroto Wakai thinks people should not (    ) others based solely on appearance.",
    "options": [
      "judge",
      "pledge",
      "bridge",
      "edge"
    ],
    "answer": 0,
    "translation": "若井滉斗は、人は見た目だけで他人を判断するべきではないと考えています。",
    "explanation": "judge（判断する）。 / その他の選択肢: bridge（橋）、edge（端）。"
  },
  {
    "id": 465,
    "type": "sentence",
    "text": "In winter, Ryoka Fujisawa often wears a cozy (    ) sweater.",
    "options": [
      "fit",
      "knit",
      "sit",
      "hit"
    ],
    "answer": 1,
    "translation": "冬には、藤澤涼架はよく着心地の良いニット（編まれた）セーターを着ます。",
    "explanation": "knit（編む、編まれた）。 / その他の選択肢: hit（打つ）、fit（合う）。"
  },
  {
    "id": 466,
    "type": "sentence",
    "text": "Tired after the live, Mrs. GREEN APPLE tried to (    ) against the wall.",
    "options": [
      "bean",
      "clean",
      "mean",
      "lean"
    ],
    "answer": 3,
    "translation": "ライブの後で疲れていたので、ミセスグリーンアップルは壁に寄りかかろうとしました。",
    "explanation": "lean against ~（〜に寄りかかる）。 / その他の選択肢: mean（意味する）、clean（掃除する）。"
  },
  {
    "id": 467,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they uses a special case to (    ) the condition of the vintage guitar.",
    "options": [
      "observe",
      "reserve",
      "deserve",
      "preserve"
    ],
    "answer": 3,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らはヴィンテージギターの状態を保存するために特別なケースを使用しています。",
    "explanation": "preserve（保存する、保護する）。 / その他の選択肢: reserve（予約する）、deserve（値する）。"
  },
  {
    "id": 468,
    "type": "sentence",
    "text": "When The members of Mrs. GREEN APPLE started playing, all the nervousness seemed to (    ).",
    "options": [
      "punish",
      "vanish",
      "finish",
      "banish"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルのメンバーが演奏し始めると、すべての緊張が消え去ったように見えました。",
    "explanation": "vanish（消える、見えなくなる）。 / その他の選択肢: punish（罰する）、finish（終える）。"
  },
  {
    "id": 469,
    "type": "sentence",
    "text": "Motoki Ohmori bought some fresh (    ) to cook pasta.",
    "options": [
      "insects",
      "ingredients",
      "instruments",
      "instructions"
    ],
    "answer": 1,
    "translation": "大森元貴はパスタを作るために新鮮な材料をいくつか買いました。",
    "explanation": "ingredient（材料、食材）。料理に関する文脈で使われます。 / その他の選択肢: instruments（楽器）、instructions（指示）、insects（昆虫）。"
  },
  {
    "id": 470,
    "type": "sentence",
    "text": "Hiroto Wakai ordered new (    ) for the home studio.",
    "options": [
      "experiment",
      "equipment",
      "environment",
      "employment"
    ],
    "answer": 1,
    "translation": "若井滉斗は自宅スタジオのために新しい機材を注文しました。",
    "explanation": "equipment（機材、設備）。不可算名詞であることに注意。 / その他の選択肢: experiment（実験）、environment（環境）、employment（雇用）。"
  },
  {
    "id": 471,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he fell asleep as a (    ) on the train.",
    "options": [
      "stranger",
      "passenger",
      "manager",
      "messenger"
    ],
    "answer": 1,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼は電車の乗客として眠ってしまいました。",
    "explanation": "passenger（乗客）。 / その他の選択肢: messenger（使者）、manager（マネージャー）、stranger（見知らぬ人）。"
  },
  {
    "id": 472,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE finally arrived at the (    ) after a long drive.",
    "options": [
      "description",
      "department",
      "decision",
      "destination"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは長時間のドライブの末、ついに目的地に到着しました。",
    "explanation": "destination（目的地、行き先）。 / その他の選択肢: description（説明）、decision（決定）、department（部門）。"
  },
  {
    "id": 473,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE listens to a wide (    ) of music genres.",
    "options": [
      "society",
      "anxiety",
      "safety",
      "variety"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは幅広いジャンルの音楽を聴きます。",
    "explanation": "a wide variety of ~（幅広い種類の〜）。 / その他の選択肢: society（社会）、safety（安全）、anxiety（不安）。"
  },
  {
    "id": 474,
    "type": "sentence",
    "text": "One (    ) of living in Tokyo are that The members of Mrs. GREEN APPLE can easily go to many concerts.",
    "options": [
      "advantage",
      "adventure",
      "advance",
      "advice"
    ],
    "answer": 0,
    "translation": "東京に住む一つの利点は、ミセスグリーンアップルのメンバーがたくさんのコンサートに簡単に行けることです。",
    "explanation": "advantage（利点、有利な点）。 / その他の選択肢: adventure（冒険）、advance（前進）、advice（助言）。"
  },
  {
    "id": 475,
    "type": "sentence",
    "text": "Motoki Ohmori missed the (    ) to take a walk in the park because of the rain.",
    "options": [
      "opportunity",
      "opposition",
      "opinion",
      "operation"
    ],
    "answer": 0,
    "translation": "大森元貴は雨のせいで公園を散歩する機会を逃しました。",
    "explanation": "opportunity（機会、チャンス）。 / その他の選択肢: opposition（反対）、operation（手術・操作）、opinion（意見）。"
  },
  {
    "id": 476,
    "type": "sentence",
    "text": "The (    ) cheered loudly when Hiroto Wakai appeared on stage.",
    "options": [
      "attendance",
      "appearance",
      "absence",
      "audience"
    ],
    "answer": 3,
    "translation": "若井滉斗がステージに現れた時、観客は大きな声で歓声を上げました。",
    "explanation": "audience（観客、聴衆）。 / その他の選択肢: attendance（出席）、absence（欠席）、appearance（外見・出現）。"
  },
  {
    "id": 477,
    "type": "conversation",
    "text": "A: Did you hear about Ryoka Fujisawa?\nB: Yeah, he often takes pictures while walking around the (    ).",
    "options": [
      "childhood",
      "livelihood",
      "neighborhood",
      "brotherhood"
    ],
    "answer": 2,
    "translation": "A: 藤澤涼架のこと聞いた？\nB: うん、彼は近所を散歩しながらよく写真を撮ります。",
    "explanation": "neighborhood（近所、地域）。 / その他の選択肢: childhood（子供時代）、livelihood（生計）、brotherhood（兄弟の縁）。"
  },
  {
    "id": 478,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE felt a certain (    ) of nervousness before the live broadcast.",
    "options": [
      "decree",
      "degree",
      "disagree",
      "agree"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルは生放送の前に、ある程度の緊張を感じました。",
    "explanation": "degree（程度、度合い）。a certain degree of ~ で「ある程度の〜」。 / その他の選択肢: decree（法令）、agree（同意する）、disagree（同意しない）。"
  },
  {
    "id": 479,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE caught a cold because the (    ) dropped suddenly.",
    "options": [
      "creature",
      "literature",
      "temperature",
      "feature"
    ],
    "answer": 2,
    "translation": "ミセスグリーンアップルは気温が急に下がったため風邪をひきました。",
    "explanation": "temperature（温度、気温、体温）。 / その他の選択肢: literature（文学）、creature（生き物）、feature（特徴）。"
  },
  {
    "id": 480,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE were deeply moved by the beautiful (    ) of the mountains.",
    "options": [
      "scenery",
      "science",
      "scene",
      "screen"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルのメンバーは山の美しい風景に深く感動しました。",
    "explanation": "scenery（風景、景色）。 / その他の選択肢: scene（場面）、science（科学）、screen（画面）。"
  },
  {
    "id": 481,
    "type": "sentence",
    "text": "Motoki Ohmori eats healthy food to prevent (    ).",
    "options": [
      "deceive",
      "decrease",
      "desire",
      "disease"
    ],
    "answer": 3,
    "translation": "大森元貴は病気を防ぐために健康的な食べ物を食べます。",
    "explanation": "disease（病気）。 / その他の選択肢: decrease（減少する）、deceive（だます）、desire（欲望）。"
  },
  {
    "id": 482,
    "type": "sentence",
    "text": "It is a (    ) for Hiroto Wakai to drink coffee every morning.",
    "options": [
      "castle",
      "costume",
      "customer",
      "custom"
    ],
    "answer": 3,
    "translation": "毎朝コーヒーを飲むのが若井滉斗の習慣です。",
    "explanation": "custom（習慣、風習）。 / その他の選択肢: costume（衣装）、customer（客）、castle（城）。"
  },
  {
    "id": 483,
    "type": "sentence",
    "text": "Ryoka Fujisawa spent a large (    ) of money on new clothes.",
    "options": [
      "announce",
      "account",
      "allowance",
      "amount"
    ],
    "answer": 3,
    "translation": "藤澤涼架は新しい服に多額のお金を使いました。",
    "explanation": "a large amount of ~（多量の〜、多額の〜）。 / その他の選択肢: account（口座・説明）、announce（発表する）、allowance（小遣い）。"
  },
  {
    "id": 484,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE worked hard to (    ) the goal of making a great album.",
    "options": [
      "achieve",
      "receive",
      "deceive",
      "believe"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは素晴らしいアルバムを作るという目標を達成するために一生懸命働きました。",
    "explanation": "achieve（達成する）。 / その他の選択肢: believe（信じる）、receive（受け取る）、deceive（だます）。"
  },
  {
    "id": 485,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they never (    )s about being too busy.",
    "options": [
      "complain",
      "contain",
      "explain",
      "remain"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは忙しすぎることについて決して不平を言いません。",
    "explanation": "complain about ~（〜について不平を言う）。 / その他の選択肢: explain（説明する）、remain（残る）、contain（含む）。"
  },
  {
    "id": 486,
    "type": "sentence",
    "text": "The members of Mrs. GREEN APPLE's smile always (    )s the fans.",
    "options": [
      "enlarge",
      "encourage",
      "engage",
      "discourage"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルのメンバーの笑顔はいつもファンを勇気づけます。",
    "explanation": "encourage（勇気づける、励ます）。 / その他の選択肢: discourage（落胆させる）、engage（従事する）、enlarge（拡大する）。"
  },
  {
    "id": 487,
    "type": "sentence",
    "text": "Motoki Ohmori practices every day to (    ) guitar skills.",
    "options": [
      "prove",
      "approve",
      "improve",
      "remove"
    ],
    "answer": 2,
    "translation": "大森元貴はギターのスキルを向上させるために毎日練習しています。",
    "explanation": "improve（向上させる、改善する）。 / その他の選択肢: prove（証明する）、remove（取り除く）、approve（承認する）。"
  },
  {
    "id": 488,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, he (    )ed that they should go eat ramen after the rehearsal.",
    "options": [
      "invest",
      "request",
      "digest",
      "suggest"
    ],
    "answer": 3,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼はリハーサルの後にラーメンを食べに行くべきだと提案しました。",
    "explanation": "suggest（提案する）。 / その他の選択肢: digest（消化する）、request（要求する）、invest（投資する）。"
  },
  {
    "id": 489,
    "type": "sentence",
    "text": "Ryoka Fujisawa needs to (    ) the broken strings on the guitar.",
    "options": [
      "relax",
      "reduce",
      "place",
      "replace"
    ],
    "answer": 3,
    "translation": "藤澤涼架はギターの切れた弦を交換する必要があります。",
    "explanation": "replace（交換する、取り替える）。 / その他の選択肢: place（場所）、reduce（減らす）、relax（リラックスする）。"
  },
  {
    "id": 490,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE was easily (    )d by fans while shopping at the mall.",
    "options": [
      "realize",
      "recognize",
      "organize",
      "memorize"
    ],
    "answer": 1,
    "translation": "ミセスグリーンアップルはショッピングモールで買い物中にファンにすぐ気付かれました。",
    "explanation": "recognize（気付く、認識する）。 / その他の選択肢: organize（組織する）、realize（気付く）、memorize（暗記する）。"
  },
  {
    "id": 491,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE will (    ) in a charity marathon next month.",
    "options": [
      "calculate",
      "anticipate",
      "hesitate",
      "participate"
    ],
    "answer": 3,
    "translation": "ミセスグリーンアップルは来月チャリティーマラソンに参加します。",
    "explanation": "participate in ~（〜に参加する）。 / その他の選択肢: anticipate（予想する）、hesitate（ためらう）、calculate（計算する）。"
  },
  {
    "id": 492,
    "type": "sentence",
    "text": "Writing a good song (    )s a lot of concentration for The members of Mrs. GREEN APPLE.",
    "options": [
      "retire",
      "acquire",
      "require",
      "inquire"
    ],
    "answer": 2,
    "translation": "良い曲を書くことはミセスグリーンアップルのメンバーにとって多くの集中力を必要とします。",
    "explanation": "require（必要とする）。 / その他の選択肢: acquire（獲得する）、inquire（尋ねる）、retire（引退する）。"
  },
  {
    "id": 493,
    "type": "sentence",
    "text": "Motoki Ohmori doesn't like to (    ) themselves with others.",
    "options": [
      "repair",
      "compare",
      "prepare",
      "declare"
    ],
    "answer": 1,
    "translation": "大森元貴は自分自身を他人と比較するのが好きではありません。",
    "explanation": "compare A with B（AをBと比較する）。 / その他の選択肢: prepare（準備する）、repair（修理する）、declare（宣言する）。"
  },
  {
    "id": 494,
    "type": "conversation",
    "text": "A: Did you hear about Hiroto Wakai?\nB: Yeah, he wants to (    ) fans with unforgettable memories.",
    "options": [
      "divide",
      "decide",
      "guide",
      "provide"
    ],
    "answer": 3,
    "translation": "A: 若井滉斗のこと聞いた？\nB: うん、彼はファンに忘れられない思い出を提供したいと思っています。",
    "explanation": "provide A with B（AにBを提供する）。 / その他の選択肢: divide（分割する）、decide（決定する）、guide（案内する）。"
  },
  {
    "id": 495,
    "type": "sentence",
    "text": "Ryoka Fujisawa can always (    ) on the other members when things get tough.",
    "options": [
      "supply",
      "rely",
      "apply",
      "reply"
    ],
    "answer": 1,
    "translation": "困難な時、藤澤涼架はいつも他のメンバーに頼ることができます。",
    "explanation": "rely on ~（〜に頼る）。 / その他の選択肢: reply（返事する）、apply（適用する・申し込む）、supply（供給する）。"
  },
  {
    "id": 496,
    "type": "conversation",
    "text": "A: Did you hear about Mrs. GREEN APPLE?\nB: Yeah, they couldn't (    ) to buy that expensive instrument years ago.",
    "options": [
      "afford",
      "record",
      "reward",
      "effort"
    ],
    "answer": 0,
    "translation": "A: ミセスグリーンアップルのこと聞いた？\nB: うん、彼らは何年も前はあの高価な楽器を買う余裕がありませんでした。",
    "explanation": "afford to do（〜する余裕がある）。 / その他の選択肢: effort（努力）、record（記録）、reward（報酬）。"
  },
  {
    "id": 497,
    "type": "sentence",
    "text": "Mrs. GREEN APPLE wore a warm coat to (    ) catching a cold.",
    "options": [
      "prevent",
      "event",
      "present",
      "invent"
    ],
    "answer": 0,
    "translation": "ミセスグリーンアップルは風邪をひくのを防ぐために暖かいコートを着ました。",
    "explanation": "prevent（防ぐ、妨げる）。 / その他の選択肢: invent（発明する）、event（出来事）、present（提示する・プレゼント）。"
  },
  {
    "id": 498,
    "type": "sentence",
    "text": "A simple meal of rice and miso soup are enough to (    ) The members of Mrs. GREEN APPLE.",
    "options": [
      "qualify",
      "terrify",
      "modify",
      "satisfy"
    ],
    "answer": 3,
    "translation": "ご飯と味噌汁のシンプルな食事でミセスグリーンアップルのメンバーを満足させるのに十分です。",
    "explanation": "satisfy（満足させる）。 / その他の選択肢: modify（修正する）、qualify（資格を与える）、terrify（怖がらせる）。"
  },
  {
    "id": 499,
    "type": "sentence",
    "text": "The melody of that song is very (    ) to Motoki Ohmori.",
    "options": [
      "familiar",
      "similar",
      "regular",
      "popular"
    ],
    "answer": 0,
    "translation": "その曲のメロディーは大森元貴にとってとても馴染みがあります。",
    "explanation": "be familiar to ~（〜にとって馴染みがある）。 / その他の選択肢: similar（似ている）、popular（人気の）、regular（規則的な）。"
  },
  {
    "id": 500,
    "type": "sentence",
    "text": "Living near the station is very (    ) for Hiroto Wakai.",
    "options": [
      "excellent",
      "convenient",
      "confident",
      "current"
    ],
    "answer": 1,
    "translation": "駅の近くに住むことは若井滉斗にとってとても便利です。",
    "explanation": "convenient（便利な）。 / その他の選択肢: confident（自信がある）、current（現在の）、excellent（優れた）。"
  }
];

export default questionBank;
