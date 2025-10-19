// ========================================
// 行程資料 - 這裡集中管理所有行程，方便維護修改
// ========================================

const itineraryData = {
    day1: [
        {
            time: "06:55",
            title: "🛫 小港機場出發",
            description: "台灣虎航 IT284",
            image: "images/4c72b9540b1db13ef00d4795f066b94d.webp",
            type: "transport"
        },
        {
            time: "10:55",
            title: "✈️ 抵達關西機場",
            image: "images/20241224_111605_2f730d32_w1920.webp",
            location: "關西國際機場",
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3543969437087!2d135.23406707648098!3d34.43199938564929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b91323cdfaf7%3A0xf171a79f8d908f88!2z6Zec6KW_5ZyL6Zqb5qmf5aC0!5e0!3m2!1szh-TW!2stw!4v1728472000000!5m2!1szh-TW!2stw",
            type: "arrival"
        },
        {
            time: "12:44 - 14:00",
            title: "🚄 HARUKA 特急列車",
            description: "從關西機場到京都站",
            image: "images/h23048953_m-thumb.webp",
            notes: [
                "🎫 已購買 HARUKA 套票",
                "🚄 列車編號：No.24",
                "🕐 發車時間：12:44",
                "🚃 車廂 9 號 - 座位 8C、8D",
                "⏱️ 車程約 75 分鐘"
            ],
            type: "transport"
        },
        {
            time: "14:00 - 14:30",
            title: "🏨 入住飯店",
            location: "Hotel Keihan Kyoto Ekiminami（京阪京都站南飯店）",
            address: "〒601-8001 京都府京都市南區東九條室町55番地",
            description: "放行李、稍作休息",
            website: "https://kyotoekiminami.hotelkeihan.co.jp/",
            image: "images/img_mainimg01-pc.jpg",
            notes: [
                "🚶 距離 JR 京都站八条口步行 1 分鐘",
                "🧳 可在入住前/退房後免費寄放行李",
                "📶 提供免費高速網路",
                "",
                "📞 聯絡資訊（行李寄送/諮詢）：",
                "  電話：075-692-0321",
                "  Email：info-kyotominami@hotelkeihan.co.jp",
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.9119136626596!2d135.75515147575683!3d34.98387107282036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109b1e416fb6b%3A0x9c0ef85f412b327!2z5Lqs6Ziq5Lqs6YO96LuK56uZ5Y2X6aOv5bqX!5e0!3m2!1szh-TW!2stw!4v1760028010484!5m2!1szh-TW!2stw",
            type: "hotel"
        },
        {
            time: "15:00 - 17:00",
            title: "⛩️ 伏見稻荷大社",
            location: "伏見稻荷大社",
            address: "京都府京都市伏見区深草藪之内町68",
            description: "走千本鳥居、參道茶屋品嚐抹茶與糰子",
            image: "images/index_mainvisual.jpg",
            notes: [
                "千本鳥居超壯觀，建議走到山頂",
                "參道有很多小吃攤位",
                "拍照時段：下午光線較好",
                "",
                "📍 備案景點：<a href='https://maps.app.goo.gl/aK5hZW6evXDEUh9Y8' target='_blank' style='color: #e74c3c; font-weight: bold; text-decoration: underline;'>錦市場</a>（京都廚房，美食街）"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.5574619723607!2d135.77661267620738!3d34.96769886883938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010f153d2e6d21%3A0x7b1aca1c753ae2e9!2z5LyP6KaL56i76I235aSn56S-!5e0!3m2!1szh-TW!2stw!4v1760028077626!5m2!1szh-TW!2stw",
            type: "sightseeing"
        },
        {
            time: "18:30",
            title: "🐟 晚餐 - 京極かねよ",
            location: "京極かねよ（百年鰻魚飯老店）",
            address: "京都府京都市中京区六角通新京極東入松ヶ枝町456",
            description: "百年鰻魚飯老店，必吃招牌鰻魚蛋包飯",
            image: "images/images.jpg",
            notes: [
                "招牌：きんし丼（鰻魚蛋絲飯）",
                "🚃 從伏見稻荷的交通方式：",
                "1. 步行 5 分鐘到京阪電車伏見稻荷站",
                "2. 搭京阪本線（往出町柳方向）約 10 分鐘",
                "3. 在三条站下車，步行 10 分鐘",
                "總時間約 25-30 分鐘，車資約 ¥210-270"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.9493006530606!2d135.76698340161755!3d35.00797423828839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001089397ad4159%3A0x7f3486e9783a343b!2z5Lqs5qW144GL44Gt44KI!5e0!3m2!1szh-TW!2stw!4v1760028130138!5m2!1szh-TW!2stw",
            type: "dining"
        },
        {
            time: "20:00",
            title: "🛌 回飯店休息",
            description: "第一天旅程結束，好好休息準備明天的和服體驗！",
            type: "rest"
        }
    ],

    day2: [
        {
            time: "08:00",
            title: "🍴 飯店早餐",
            description: "在飯店享用早餐，補充體力",
            type: "dining"
        },
        {
            time: "09:00 - 12:30",
            title: "👘 和服體驗 - 璃光祇園店",
            location: "璃光和服 祇園店",
            address: "京都府京都市東山区祇園町南側570-119",
            description: "和服體驗＋專業攝影（預留 3.5 小時）",
            image: "images/1_020240720133728_cFTVU.jpg",
            notes: [
                "提早 10 分鐘到達",
                "包含髮型設計與配件",
                "可選擇加購專業攝影服務",
                "記得帶相機拍照！"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.2299577896706!2d135.77386877575753!3d35.00094827281446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109c6e038c56b%3A0xeb02f06e50a4981!2z55KD5YWJ5ZKM5pyN5Ye656efIOelh-WckuW6lw!5e0!3m2!1szh-TW!2stw!4v1760028388009!5m2!1szh-TW!2stw",
            type: "activity"
        },
        {
            time: "12:30 - 14:30",
            title: "🏯 清水寺周邊散策",
            location: "清水寺・二年坂・三年坂區域",
            address: "京都府京都市東山区清水1丁目294",
            description: "穿著和服在古色古香的街道漫步",
            image: "images/kiyomizudera-midokoro_thumb.webp",
            notes: [
                "📍 清水寺：京都必訪景點，可眺望市區",
                "🛍️ 二年坂・三年坂：傳統商店街",
                "⛩️ 八坂神社：祇園地區指標神社",
                "🎨 庚申堂：彩色猴子御守超可愛",
                "☕ % ARABICA 咖啡：網美咖啡廳",
                "🍮 清水坂 八ツ橋しゅ泡芙：必買甜點",
                "🍗 喜楽庵岡本：超juicy炸雞"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.480859080648!2d135.78208607575735!3d34.99466617281661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108d385dcfb07%3A0x62af658650c434ba!2z5riF5rC05a-6!5e0!3m2!1szh-TW!2stw!4v1760028489412!5m2!1szh-TW!2stw",
            type: "sightseeing"
        },
        {
            time: "16:00",
            title: "🧳 回飯店取行李",
            description: "回京都的飯店拿行李，準備前往大阪",
            type: "transit"
        },
        {
            time: "16:30 - 18:00",
            title: "🚄 京都 → 大阪",
            description: "搭乘 JR 前往大阪（車程約 30-50 分鐘）",
            notes: ["建議搭乘 JR 新快速", "可使用 ICOCA 卡"],
            type: "transport"
        },
        {
            time: "18:00",
            title: "🏨 入住大阪飯店",
            location: "Hotel Royal Classic Osaka（ホテル ロイヤル クラシック 大阪）",
            address: "〒542-0076 大阪府大阪市中央区難波4-3-3",
            description: "放好行李，準備探索大阪！",
            image: "images/014-scaled-1.jpg",
            website: "https://hotel-royalclassic.jp/",
            notes: [
                "🚇 距離難波站步行約 5 分鐘",
                "🧳 可在入住前寄放行李",
                "",
                "📞 聯絡資訊（行李寄送/諮詢）：",
                "  電話：06-6633-0030",
                "  傳真：06-6633-0036",
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5526325404053!2d135.50017309999998!3d34.6659994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e75b2a21f615%3A0x61a47fd8e1f83b35!2z5aSn6Ziq55qH5a6257aT5YW46YWS5bqX!5e0!3m2!1szh-TW!2stw!4v1760066611232!5m2!1szh-TW!2stw",
            type: "hotel"
        },
        {
            time: "19:00",
            title: "🥞 晚餐 - 味乃家大阪燒",
            location: "味乃家（みのや）",
            address: "大阪府大阪市中央区難波3丁目2-28",
            description: "道地大阪燒老店，濃郁醬汁與鬆軟口感令人難忘",
            image: "images/IMG_3142.webp",
            notes: [
                "🥞 招牌推薦：",
                "  - 豚玉（豬肉大阪燒）",
                "  - 海鮮大阪燒（鮮蝦、花枝、干貝）",
                "  - 廣島燒（分層製作更豐富）",
                "  - 炒麵（焼きそば）也很推薦！",
                "👨‍🍳 現點現做，可以看到師傅在鐵板上製作過程",
                "🚇 交通：從飯店步行約 5-8 分鐘即可到達",
                "💡 小提醒：店內空間不大，建議避開用餐尖峰時段",
                "🌃 吃完可順便前往道頓堀欣賞固力果跑跑人夜景"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.470642301129!2d135.49840107619752!3d34.66806938496231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e71370f515bd%3A0xbc2902b4000717ce!2z5ZGz5LmD5a625b6h5aW954eS!5e0!3m2!1szh-TW!2stw!4v1760892223884!5m2!1szh-TW!2stw",
            type: "dining"
        }
    ],

    day3: [
        {
            time: "11:00",
            title: "🌅 悠哉出門",
            description: "睡到自然醒，慢慢準備出發",
            type: "rest"
        },
        {
            time: "11:30 - 12:30",
            title: "🐟 黑門市場",
            location: "黑門市場",
            address: "大阪府大阪市中央区日本橋2丁目4-1",
            description: "大阪的廚房！新鮮海產、和牛、水果一次滿足",
            image: "images/unnamed.jpg",
            notes: [
                "🍣 推薦：生魚片丼飯（現場製作超新鮮）",
                "🍓 必買：草莓大福、哈密瓜",
                "🥩 和牛壽司現烤現吃",
                "建議早點去人比較少"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.578065262334!2d135.50366567619727!3d34.66535728510769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e741e541225d%3A0xac1d2c78be23c141!2z6buS6ZaA5biC5aC0!5e0!3m2!1szh-TW!2stw!4v1760066688144!5m2!1szh-TW!2stw",
            type: "dining"
        },
        {
            time: "13:00 - 14:00",
            title: "☕ OSA Coffee Minami",
            location: "OSA Coffee Minami",
            address: "大阪府大阪市中央区難波千日前7-9",
            description: "超美工業風咖啡店，IG打卡熱點",
            image: "images/DSC03497.jpg",
            notes: [
                "黑白極簡工業風裝潢",
                "咖啡專業、氛圍一流",
                "適合拍照打卡"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.226791315223!2d135.49249067619766!3d34.67422518463235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7422ec4ba61%3A0x86548c780084eb0d!2sOSA%20Coffee%20Minami!5e0!3m2!1szh-TW!2stw!4v1760066875504!5m2!1szh-TW!2stw",
            type: "cafe"
        },
        {
            time: "14:30 - 16:00",
            title: "🛍️ 心齋橋購物血拼",
            location: "心齋橋・道頓堀區域",
            address: "大阪府大阪市中央区心斎橋筋",
            description: "瘋狂購物時間！藥妝、服飾、美食一次滿足",
            image: "images/Dotonbori_(53067359216).jpg",
            notes: [
                "🍜 必吃美食：",
                "  🥟 一蘭拉麵 - 道頓堀本店（24小時營業）",
                "  🐙 元祖章魚燒 - 會津屋（章魚燒發源地）",
                "  🥩 MooKEN - 炸牛排三明治（超人氣排隊美食）",
                "  🍰 りくろーおじさん（Rikuro）- 現烤起司蛋糕",
                "  🍡 夫婦善哉 - 紅豆湯圓甜品老店",
                "🎟️ 優惠券懶人包：",
                "  🔗 <a href='https://rabbitfunaround.com/blog/post/japan-coupon' target='_blank' style='color: #e74c3c; font-weight: bold; text-decoration: underline;'>日本購物優惠券總整理（唐吉軻德、大國藥妝、BIC CAMERA 等）</a>",
            ],
            additionalImage: "images/20250305215501_0_b1810d.jpg",
            additionalImageCaption: "🗺️ 心齋橋・道頓堀逛街地圖",
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.3061895766527!2d135.49942378704964!3d34.67222095163377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e713fc37b373%3A0x625cc4399599c323!2z5b-D6b2L5qmL562L5ZWG5bqX6KGX!5e0!3m2!1szh-TW!2stw!4v1760066985586!5m2!1szh-TW!2stw",
            type: "shopping"
        },
        {
            time: "16:00 - 17:00",
            title: "🍰 下午茶 - HARBS 心齋橋Parco店",
            location: "HARBS 心齋橋Parco店",
            address: "大阪府大阪市中央区心斎橋筋1-8-3 心斎橋PARCO 本館 B1F",
            description: "日本超人氣千層蛋糕名店，精緻甜點與優雅氛圍",
            image: "images/精選圖片-harbs.png",
            notes: [
                "🍰 招牌必點：",
                "  - 千層蛋糕（ミルクレープ）- 店內超人氣第一名",
                "  - 草莓蛋糕（季節限定）",
                "  - 栗子蒙布朗",
                "  - 水果塔",
                "",
                "☕ 飲品推薦：",
                "  - 手沖咖啡",
                "  - 皇家奶茶",
                "  - 季節限定飲品",
                "",
                "💡 小提醒：",
                "  - 位於心齋橋PARCO地下一樓，購物後很方便",
                "  - 蛋糕份量大，可以兩人分享",
                "  - 下午茶時段人潮較多，建議提早到",
                "  - 用餐時間約 60-90 分鐘",
                "  - 價格：蛋糕約 ¥800-1,200，套餐約 ¥1,500-2,000"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.241587927756!2d135.49838247619772!3d34.67385168465233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e710c66a9f1d%3A0x3dbc1d54599d7b4b!2sShinsaibashi%20PARCO!5e0!3m2!1szh-TW!2stw!4v1760895463193!5m2!1szh-TW!2stw",
            type: "cafe"
        },
        {
            time: "17:00 - 20:00",
            title: "🛍️ 繼續購物或自由活動",
            description: "繼續在心齋橋購物，或回飯店稍作休息",
            notes: [
                "可以繼續逛心齋橋、道頓堀",
                "或回飯店放戰利品、休息一下",
                "為晚上的展望台行程儲備體力"
            ],
            type: "free"
        },
        {
            time: "20:30 - 21:30",
            title: "🌃 阿倍野 HARUKAS 展望台",
            location: "阿倍野 HARUKAS 300 展望台",
            address: "大阪府大阪市阿倍野区阿倍野筋1-1-43",
            description: "日本最高大樓，60樓觀景台看大阪夜景",
            image: "images/Harukas300-new.jpg",
            notes: [
                "高度 300 公尺，360度全景",
                "夜景超美，建議傍晚前往看日落",
                "門票：成人 ¥1,500",
                "建議事先網路購票"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.332449293169!2d135.5107341757422!3d34.64630617293919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000ddf0273be0dd%3A0xf2471a0513ff5e8a!2zSGFydWthczMwMOWxleacm-WPsA!5e0!3m2!1szh-TW!2stw!4v1760067088274!5m2!1szh-TW!2stw",
            type: "sightseeing"
        },
        {
            time: "22:00",
            title: "🛌 回飯店休息",
            description: "充電準備明天環球影城瘋狂一整天！",
            type: "rest"
        }
    ],

    day4: [
        {
            time: "08:00",
            title: "🚊 出發前往環球影城",
            description: "搭乘 JR 夢咲線到 Universal City 站",
            notes: [
                "從難波搭 JR 約 30 分鐘",
                "建議提早到達避開人潮"
            ],
            type: "transport"
        },
        {
            time: "08:30 - 21:00",
            title: "🎢 大阪環球影城 USJ",
            location: "日本環球影城",
            address: "大阪府大阪市此花区桜島2丁目1-33",
            description: "萬聖節主題日！整天沉浸在魔法世界",
            image: "images/super-nintendo-world.jpg",
            notes: [
                "VIP 09:00入園",
                "🧙‍♂️ 哈利波特魔法世界：必玩禁忌之旅、逛活米村",
                "🍄 超級任天堂世界：瑪利歐賽車、耀西冒險",
                "🎢 刺激遊樂設施：飛天翼龍、蜘蛛人、好萊塢美夢",
                "🎃 萬聖節限定活動：",
                "  - 驚嚇小巷（膽小勿入）",
                "  - 鬼裝民眾到處都是",
                "  - 萬聖節限定裝飾與表演",
                "  - 特殊角色見面會",
                "🍴 午餐建議：三根掃帚餐廳（哈利波特區）",
                "🎁 必買：魔杖、爆米花桶、限定周邊",
                "",
                "⚠️ 小提醒：",
                "- 下載 USJ 官方 APP 查看等候時間",
                "- 可考慮購買快速通關券",
                "- 記得充好行動電源"
            ],
            pdfFile: "images/usj-pdf-studio-guide-tw.pdf",
            pdfCaption: "🗺️ USJ 環球影城園區導覽地圖",
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5654111220592!2d135.42974357574303!3d34.6656767729322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0d083d5e25d%3A0x3605fe25303252aa!2z5pel5pys55Kw55CD5b2x5Z-O!5e0!3m2!1szh-TW!2stw!4v1760067285839!5m2!1szh-TW!2stw",
            type: "activity"
        },
        {
            time: "21:00",
            title: "🌙 回飯店休息",
            description: "玩了一整天，好好休息！明天就要回台灣了",
            type: "rest"
        }
    ],

    day5: [
        {
            time: "07:45 - 08:00",
            title: "🧳 飯店退房",
            description: "整理行李，準備前往機場",
            type: "checkout"
        },
        {
            time: "08:00 - 10:00",
            title: "🚆 前往關西機場",
            description: "搭乘電車前往關西機場",
            notes: [
                "建議路線選擇：",
                "- 南海電鐵 Rapi:t α（特急列車，約 40 分鐘）",
                "- JR 關空快速（從天王寺/新大阪出發，約 50-70 分鐘）",
                "- JR HARUKA（最快約 50 分鐘）",
                "",
                "💡 記得預留充足時間辦理登機"
            ],
            type: "transport"
        },
        {
            time: "11:55",
            title: "🛫 關西機場起飛",
            description: "長榮航空 BR181",
            location: "關西國際機場 第一航廈",
            image: "images/下載.jpg",
            notes: [
                "記得最後採購：白色戀人、薯條三兄弟",
                "退稅櫃檯在出境前",
                "登機前 2 小時到機場"
            ],
            type: "departure"
        },
        {
            time: "14:00",
            title: "🏠 抵達高雄小港機場",
            description: "完美收心，期待下次旅行！🧡",
            notes: [
                "記得填寫入境健康聲明",
                "歡迎回家！",
                "記得整理照片分享美好回憶 📸"
            ],
            type: "arrival"
        }
    ]
};

// ========================================
// 深淺色主題切換功能
// ========================================

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');

    // 讀取儲存的主題設定
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, themeIcon);

    // 主題切換事件
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, themeIcon);
    });
}

function updateThemeIcon(theme, iconElement) {
    iconElement.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ========================================
// 分頁切換功能
// ========================================

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const dayContents = document.querySelectorAll('.day-content');

    // 讀取上次選擇的頁簽，如果沒有則預設為 day 1
    const savedTab = localStorage.getItem('currentTab') || '1';

    // 恢復上次選擇的頁簽
    switchToTab(savedTab, tabButtons, dayContents);

    // 為每個按鈕添加點擊事件
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetDay = button.getAttribute('data-day');
            
            // 切換到目標頁簽
            switchToTab(targetDay, tabButtons, dayContents);
            
            // 儲存當前選擇的頁簽
            localStorage.setItem('currentTab', targetDay);

            // 捲動到頁面頂部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// 切換頁簽的輔助函數
function switchToTab(targetDay, tabButtons, dayContents) {
    // 移除所有 active 狀態
    tabButtons.forEach(btn => btn.classList.remove('active'));
    dayContents.forEach(content => content.classList.remove('active'));

    // 添加新的 active 狀態
    const targetButton = document.querySelector(`.tab-btn[data-day="${targetDay}"]`);
    const targetContent = document.getElementById(`day-${targetDay}`);
    
    if (targetButton && targetContent) {
        targetButton.classList.add('active');
        targetContent.classList.add('active');
    }
}

// ========================================
// 渲染行程內容
// ========================================

function renderItinerary() {
    // 渲染每一天的行程
    Object.keys(itineraryData).forEach((day, index) => {
        const dayNumber = index + 1;
        const container = document.getElementById(`day-${dayNumber}-items`);
        const items = itineraryData[day];

        items.forEach(item => {
            const itemHTML = createTimelineItem(item);
            container.innerHTML += itemHTML;
        });
    });
}

function createTimelineItem(item) {
    const itemId = `item-${Math.random().toString(36).substr(2, 9)}`;
    const headerBgStyle = item.image ? `style="background-image: url('${item.image}');"` : '';

    let html = `
        <div class="timeline-item">
            <div class="item-card">
                <div class="item-header ${item.image ? 'has-bg-image' : ''}" ${headerBgStyle} onclick="toggleItem('${itemId}')">
                    <div class="item-header-left">
                        <div class="item-time">${item.time}</div>
                        <h3 class="item-title">${item.title}</h3>
                    </div>
                    <button class="toggle-btn" aria-label="展開/收合">
                        <span class="toggle-icon">▼</span>
                    </button>
                </div>
                <div class="item-content" id="${itemId}">
    `;

    // 地點
    if (item.location) {
        html += `<p class="item-description"><strong>📍 ${item.location}</strong></p>`;
    }

    // 描述
    if (item.description) {
        html += `<p class="item-description">${item.description}</p>`;
    }

    // 地址
    if (item.address) {
        html += `<p class="item-address">🗺️ ${item.address}</p>`;
    }

    // 網址
    if (item.website) {
        html += `<p class="item-website">🔗 <a href="${item.website}" target="_blank" rel="noopener noreferrer">官方網站</a></p>`;
    }

    // 備註
    if (item.notes && item.notes.length > 0) {
        html += `<div class="item-notes"><ul>`;
        item.notes.forEach(note => {
            html += `<li>${note}</li>`;
        });
        html += `</ul></div>`;
    }

    // 額外圖片（如地圖等）
    if (item.additionalImage) {
        html += `
            <div class="item-additional-image" style="margin: 20px 0; padding: 15px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="font-size: 32px;">🗺️</span>
                    <div style="flex: 1;">
                        <p style="margin: 0 0 5px 0; font-weight: bold; color: white; font-size: 16px;">${item.additionalImageCaption || '參考地圖'}</p>
                        <p style="margin: 0; font-size: 13px; color: rgba(255,255,255,0.9);">點擊下方按鈕開啟完整地圖</p>
                    </div>
                </div>
                <a href="${item.additionalImage}" target="_blank" rel="noopener noreferrer" 
                   style="display: block; margin-top: 12px; padding: 12px 20px; background: white; color: #f5576c; text-align: center; text-decoration: none; border-radius: 8px; font-weight: bold; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
                   onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)';"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)';">
                    🗺️ 開啟逛街地圖
                </a>
            </div>
        `;
    }

    // PDF 文件（如地圖導覽等）
    if (item.pdfFile) {
        html += `
            <div class="item-pdf" style="margin: 20px 0; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="font-size: 32px;">📄</span>
                    <div style="flex: 1;">
                        <p style="margin: 0 0 5px 0; font-weight: bold; color: white; font-size: 16px;">${item.pdfCaption || 'PDF 導覽文件'}</p>
                        <p style="margin: 0; font-size: 13px; color: rgba(255,255,255,0.9);">點擊下方按鈕開啟或下載 PDF 文件</p>
                    </div>
                </div>
                <a href="${item.pdfFile}" target="_blank" rel="noopener noreferrer" 
                   style="display: block; margin-top: 12px; padding: 12px 20px; background: white; color: #667eea; text-align: center; text-decoration: none; border-radius: 8px; font-weight: bold; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
                   onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)';"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)';">
                    📥 開啟 PDF 導覽地圖
                </a>
            </div>
        `;
    }

    // Google Map
    if (item.googleMapEmbed) {
        html += `
            <div class="item-map">
                <iframe 
                    src="${item.googleMapEmbed}" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        `;
    }

    html += `
                </div>
            </div>
        </div>
    `;

    return html;
}

// ========================================
// 展開/收合行程項目
// ========================================

function toggleItem(itemId) {
    const content = document.getElementById(itemId);
    const card = content.closest('.item-card');
    const toggleBtn = card.querySelector('.toggle-btn');

    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        toggleBtn.classList.remove('active');
    } else {
        content.classList.add('expanded');
        toggleBtn.classList.add('active');
    }
}

// 全部展開
function expandAll() {
    const allContents = document.querySelectorAll('.item-content');
    const allButtons = document.querySelectorAll('.toggle-btn');

    allContents.forEach(content => content.classList.add('expanded'));
    allButtons.forEach(btn => btn.classList.add('active'));
}

// 全部收合
function collapseAll() {
    const allContents = document.querySelectorAll('.item-content');
    const allButtons = document.querySelectorAll('.toggle-btn');

    allContents.forEach(content => content.classList.remove('expanded'));
    allButtons.forEach(btn => btn.classList.remove('active'));
}

// ========================================
// 初始化
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTabs();
    renderItinerary();

    console.log('🇯🇵 京都大阪旅遊網頁已載入完成！祝旅途愉快！');
});

