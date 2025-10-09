// ========================================
// 行程資料 - 這裡集中管理所有行程，方便維護修改
// ========================================

const itineraryData = {
    day1: [
        {
            time: "06:55",
            title: "🛫 小港機場出發",
            description: "台灣虎航 IT284",
            type: "transport"
        },
        {
            time: "10:55",
            title: "✈️ 抵達關西機場",
            location: "關西國際機場",
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3543969437087!2d135.23406707648098!3d34.43199938564929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b91323cdfaf7%3A0xf171a79f8d908f88!2z6Zec6KW_5ZyL6Zqb5qmf5aC0!5e0!3m2!1szh-TW!2stw!4v1728472000000!5m2!1szh-TW!2stw",
            type: "arrival"
        },
        {
            time: "12:44 - 14:00",
            title: "🚄 HARUKA 特急列車 No.24",
            description: "從關西機場到京都站",
            notes: [
                "🎫 已購買 HARUKA 套票",
                "🚄 列車編號：No.24",
                "🕐 發車時間：12:44",
                "🚃 車廂 9 號 - 座位 8C、8D",
                "⏱️ 車程約 75 分鐘"
            ],
            image: "images/21_73.jpg",
            type: "transport"
        },
        {
            time: "14:00 - 14:30",
            title: "🏨 入住飯店",
            location: "Hotel Keihan Kyoto Ekiminami",
            address: "京都府京都市南区東九条上殿田町45",
            description: "放行李、稍作休息",
            website: "https://kyotoekiminami.hotelkeihan.co.jp/",
            image: "images/img_mainimg01-pc.jpg",
            notes: [
                "距離 JR 京都站八条口步行 1 分鐘",
                "可在入住前/退房後免費寄放行李",
                "提供免費高速網路"
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
            notes: [
                "千本鳥居超壯觀，建議走到山頂",
                "參道有很多小吃攤位",
                "拍照時段：下午光線較好"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.5574619723607!2d135.77661267620738!3d34.96769886883938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010f153d2e6d21%3A0x7b1aca1c753ae2e9!2z5LyP6KaL56i76I235aSn56S-!5e0!3m2!1szh-TW!2stw!4v1760028077626!5m2!1szh-TW!2stw",
            tags: ["景點", "神社", "必拍"],
            type: "sightseeing"
        },
        {
            time: "18:30",
            title: "🐟 晚餐 - 京極かねよ",
            location: "京極かねよ（百年鰻魚飯老店）",
            address: "京都府京都市中京区六角通新京極東入松ヶ枝町456",
            description: "百年鰻魚飯老店，必吃招牌鰻魚蛋包飯",
            notes: [
                "建議 18:00 前到達排隊",
                "招牌：きんし丼（鰻魚蛋絲飯）",
                "人氣很高，可能需要等待 30-60 分鐘"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.9493006530606!2d135.76698340161755!3d35.00797423828839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001089397ad4159%3A0x7f3486e9783a343b!2z5Lqs5qW144GL44Gt44KI!5e0!3m2!1szh-TW!2stw!4v1760028130138!5m2!1szh-TW!2stw",
            tags: ["美食", "鰻魚", "晚餐"],
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
            notes: [
                "提早 10 分鐘到達",
                "包含髮型設計與配件",
                "可選擇加購專業攝影服務",
                "記得帶相機拍照！"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.2299577896706!2d135.77386877575753!3d35.00094827281446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109c6e038c56b%3A0xeb02f06e50a4981!2z55KD5YWJ5ZKM5pyN5Ye656efIOelh-WckuW6lw!5e0!3m2!1szh-TW!2stw!4v1760028388009!5m2!1szh-TW!2stw",
            tags: ["體驗", "和服", "攝影"],
            type: "activity"
        },
        {
            time: "12:30 - 14:30",
            title: "🏯 清水寺周邊散策",
            location: "清水寺・二年坂・三年坂區域",
            address: "京都府京都市東山区清水1丁目294",
            description: "穿著和服在古色古香的街道漫步",
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
            tags: ["景點", "散策", "美食"],
            type: "sightseeing"
        },
        {
            time: "15:00 - 15:40",
            title: "🐰 岡崎神社（兔兔神社）",
            location: "岡崎神社",
            address: "京都府京都市左京区岡崎東天王町51",
            description: "超可愛的兔子神社，求姻緣、安產",
            notes: [
                "滿滿的兔子雕像超療癒",
                "可以買兔兔御守",
                "記得摸摸黑兔子求好運"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.562345678901!2d135.78521897649896!3d35.015498972955567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010f56d3b3d3b3%3A0x3d3d3d3d3d3d3d3d!2z5bKh5bSO56We56S-!5e0!3m2!1szh-TW!2stw!4v1728473200000!5m2!1szh-TW!2stw",
            tags: ["景點", "神社", "可愛"],
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
            location: "Hotel Royal Classic Osaka",
            address: "大阪府大阪市中央区難波4-3-3",
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.234890123456!2d135.49802407648567!3d34.66502347241234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7d3b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sHotel%20Royal%20Classic%20Osaka!5e0!3m2!1szh-TW!2stw!4v1728473300000!5m2!1szh-TW!2stw",
            type: "hotel"
        },
        {
            time: "19:00",
            title: "🍶 大阪居酒屋晚餐",
            description: "自由探索難波・道頓堀區域的居酒屋",
            notes: [
                "推薦區域：道頓堀、心齋橋",
                "必吃：串炸、章魚燒、大阪燒",
                "可以順便欣賞固力果跑跑人招牌夜景"
            ],
            tags: ["美食", "居酒屋", "晚餐"],
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
            notes: [
                "🍣 推薦：生魚片丼飯（現場製作超新鮮）",
                "🍓 必買：草莓大福、哈密瓜",
                "🥩 和牛壽司現烤現吃",
                "建議早點去人比較少"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5678901234!2d135.50351897648456!3d34.66003457241567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e86d3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2z6buS6ZaA5biC5aC0!5e0!3m2!1szh-TW!2stw!4v1728473400000!5m2!1szh-TW!2stw",
            tags: ["美食", "市場", "午餐"],
            type: "dining"
        },
        {
            time: "13:00 - 14:00",
            title: "☕ OSA Coffee Minami",
            location: "OSA Coffee Minami",
            address: "大阪府大阪市中央区難波千日前7-9",
            description: "超美工業風咖啡店，IG打卡熱點",
            notes: [
                "黑白極簡工業風裝潢",
                "咖啡專業、氛圍一流",
                "適合拍照打卡"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.3456789012!2d135.50001897648512!3d34.66201457241345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7e3b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sOSA%20Coffee%20Minami!5e0!3m2!1szh-TW!2stw!4v1728473500000!5m2!1szh-TW!2stw",
            tags: ["咖啡", "網美店", "下午茶"],
            type: "cafe"
        },
        {
            time: "14:30 - 17:30",
            title: "🛍️ 心齋橋購物血拼",
            location: "心齋橋・道頓堀區域",
            address: "大阪府大阪市中央区心斎橋筋",
            description: "瘋狂購物時間！藥妝、服飾、美食一次滿足",
            notes: [
                "🛍️ 心齋橋筋商店街：藥妝、服飾、雜貨",
                "🏬 OPA 百貨：日系品牌",
                "🍜 道頓堀：一蘭拉麵、大阪王將、章魚燒",
                "📸 固力果跑跑人：必拍地標",
                "💊 藥妝店比價：松本清、大國藥妝、唐吉軻德"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1234567890!2d135.49903907648578!3d34.67150457240123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e715d3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2z5b-D6Zm45qmL!5e0!3m2!1szh-TW!2stw!4v1728473600000!5m2!1szh-TW!2stw",
            tags: ["購物", "美食", "景點"],
            type: "shopping"
        },
        {
            time: "20:30 - 21:30",
            title: "🌃 阿倍野 HARUKAS 展望台",
            location: "阿倍野 HARUKAS 300 展望台",
            address: "大阪府大阪市阿倍野区阿倍野筋1-1-43",
            description: "日本最高大樓，60樓觀景台看大阪夜景",
            notes: [
                "高度 300 公尺，360度全景",
                "夜景超美，建議傍晚前往看日落",
                "門票：成人 ¥1,500",
                "建議事先網路購票"
            ],
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.8901234567!2d135.51202907648345!3d34.64580457242890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0ab3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2z6Zi_5YCN6YeO6Zec5paw5pyb5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1728473700000!5m2!1szh-TW!2stw",
            tags: ["夜景", "展望台", "景點"],
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
            notes: [
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
            googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.5678901234!2d135.43002907648890!3d34.66550457245678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0d56d3b3b3b%3A0x3b3b3b3b3b3b3b3b!2z5pel5pys55Kw55CD5b2x5Z-O!5e0!3m2!1szh-TW!2stw!4v1728473800000!5m2!1szh-TW!2stw",
            tags: ["遊樂園", "環球影城", "萬聖節"],
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
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetDay = button.getAttribute('data-day');
            
            // 移除所有 active 狀態
            tabButtons.forEach(btn => btn.classList.remove('active'));
            dayContents.forEach(content => content.classList.remove('active'));
            
            // 添加新的 active 狀態
            button.classList.add('active');
            document.getElementById(`day-${targetDay}`).classList.add('active');
            
            // 捲動到頁面頂部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
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
    
    let html = `
        <div class="timeline-item">
            <div class="item-card">
                <div class="item-header" onclick="toggleItem('${itemId}')">
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
    
    // 圖片
    if (item.image) {
        html += `
            <div class="item-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
        `;
    }
    
    // 備註
    if (item.notes && item.notes.length > 0) {
        html += `<div class="item-notes"><ul>`;
        item.notes.forEach(note => {
            html += `<li>${note}</li>`;
        });
        html += `</ul></div>`;
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
    
    // 標籤
    if (item.tags && item.tags.length > 0) {
        html += `<div class="item-tags">`;
        item.tags.forEach(tag => {
            html += `<span class="tag">${tag}</span>`;
        });
        html += `</div>`;
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

