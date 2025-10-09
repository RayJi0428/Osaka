# 🇯🇵 京都大阪旅遊行程網頁

這是一個靜態的旅遊行程規劃網頁，專為 2024.10.24-10.28 的京都大阪 5 天 4 夜之旅設計。

## ✨ 功能特色

- 📱 **RWD 響應式設計**：完美支援手機、平板、電腦各種裝置
- 🌓 **深淺色主題切換**：點擊右上角按鈕可切換，保護眼睛
- 📑 **分頁瀏覽**：5 天行程分開顯示，清楚明瞭
- 🗺️ **Google Maps 整合**：每個景點都有嵌入式地圖
- ⚡ **無需網路伺服器**：靜態網頁，直接用瀏覽器開啟即可
- 💾 **記住主題偏好**：自動儲存你選擇的深/淺色主題

## 📁 檔案結構

```
Osaka/
├── index.html          # 主頁面（網頁結構）
├── css/
│   └── style.css      # 樣式表（外觀、RWD、主題顏色）
├── js/
│   └── app.js         # JavaScript（行程資料、分頁切換、主題功能）
└── README.md          # 本說明文件
```

## 🚀 如何使用

### 方法一：直接開啟檔案（最簡單）
1. 用瀏覽器直接開啟 `index.html`
2. 完成！🎉

### 方法二：使用本地伺服器（推薦）
如果想要在手機上查看，可以架設簡易伺服器：

**使用 Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**使用 Node.js:**
```bash
npx http-server
```

然後在瀏覽器開啟 `http://localhost:8000`

### 在手機上查看
1. 確保電腦和手機連接同一個 Wi-Fi
2. 啟動本地伺服器（使用方法二）
3. 在手機瀏覽器輸入：`http://你的電腦IP:8000`
4. 建議加入主畫面書籤，方便在日本時快速開啟

## 🛠️ 如何修改行程資料

### 📝 所有行程資料都在 `js/app.js` 檔案中

找到 `itineraryData` 物件，裡面包含 `day1` 到 `day5` 的所有行程。

### 修改範例

#### 範例 1：修改現有行程時間
```javascript
{
    time: "15:00 - 17:00",  // ← 改這裡
    title: "⛩️ 伏見稻荷大社",
    // ...
}
```

#### 範例 2：新增一個景點
```javascript
day3: [
    // ... 現有行程 ...
    {
        time: "19:00",
        title: "🍜 晚餐 - 一蘭拉麵",
        location: "一蘭拉麵 道頓堀店",
        address: "大阪府大阪市中央区宗右衛門町7-18",
        description: "超有名的豚骨拉麵",
        notes: [
            "24 小時營業",
            "用餐前填寫口味選單",
            "可能需要排隊"
        ],
        googleMapEmbed: "https://www.google.com/maps/embed?pb=...",
        tags: ["美食", "拉麵", "晚餐"],
        type: "dining"
    }
]
```

#### 範例 3：刪除某個行程
直接把整個物件 `{ ... }` 刪除即可。

### 行程項目的完整屬性說明

```javascript
{
    time: "08:00 - 10:00",           // 必填：時間
    title: "🎯 景點名稱",             // 必填：標題（可加 emoji）
    location: "完整地點名稱",         // 選填：地點
    address: "詳細地址",             // 選填：地址
    description: "簡短描述",         // 選填：描述
    notes: [                         // 選填：備註（陣列）
        "備註1",
        "備註2"
    ],
    googleMapEmbed: "地圖網址",      // 選填：Google Map 嵌入連結
    tags: ["標籤1", "標籤2"],        // 選填：標籤
    type: "類型"                     // 選填：類型（用於分類）
}
```

### 🗺️ 如何取得 Google Maps 嵌入連結

1. 打開 [Google Maps](https://www.google.com/maps)
2. 搜尋你要的地點
3. 點擊左側的「分享」按鈕
4. 選擇「嵌入地圖」
5. 複製 `src="..."` 裡面的網址
6. 貼到 `googleMapEmbed` 屬性

**範例：**
```javascript
googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!..."
```

> 💡 **小技巧**：如果沒有網址，地圖就不會顯示，不影響其他功能。

## 🎨 如何修改主題顏色

所有顏色設定都在 `css/style.css` 最上方的 CSS 變數中：

```css
:root {
    /* 淺色主題 */
    --bg-primary: #f5f7fa;        /* 背景色 */
    --accent-color: #3498db;      /* 主要強調色 */
    /* ... 其他顏色 */
}

[data-theme="dark"] {
    /* 深色主題 */
    --bg-primary: #1a1a2e;
    --accent-color: #4a90e2;
    /* ... */
}
```

只需要修改這些顏色代碼，整個網站的配色就會改變。

### 推薦配色工具
- [Coolors](https://coolors.co/) - 配色產生器
- [Adobe Color](https://color.adobe.com/) - 色彩搭配

## 📱 RWD 斷點說明

網頁會根據螢幕寬度自動調整：

- **手機** (< 768px)：單欄顯示，較大按鈕
- **平板** (768px - 1024px)：雙欄顯示
- **電腦** (> 1024px)：多欄顯示，最佳閱讀體驗

如需調整斷點，修改 `css/style.css` 底部的 `@media` 查詢。

## 🌐 部署到網路上（可選）

### GitHub Pages（免費）
1. 在 GitHub 建立新的 repository
2. 上傳所有檔案
3. 到 Settings > Pages
4. 選擇 main branch
5. 完成！你的網站網址會是：`https://你的帳號.github.io/repository名稱`

### Netlify（免費）
1. 到 [Netlify](https://www.netlify.com/)
2. 拖曳整個資料夾到網站上
3. 自動部署完成！

### Vercel（免費）
1. 到 [Vercel](https://vercel.com/)
2. Import 你的專案
3. 一鍵部署！

## 💡 使用技巧

### 在日本旅遊時
1. **加入手機主畫面書籤**：在瀏覽器選單選擇「加入主畫面」
2. **離線使用**：瀏覽過一次後，瀏覽器會快取，沒網路也能看（地圖除外）
3. **暗黑模式**：晚上查看時切換到深色主題，比較不傷眼

### 列印行程表
在瀏覽器按 `Ctrl/Cmd + P` 列印，會自動：
- 顯示所有 5 天行程
- 隱藏分頁按鈕
- 移除地圖（節省紙張）

## 🐛 常見問題

### Q: 地圖顯示不出來？
A: 檢查 `googleMapEmbed` 連結是否正確，或是網路連線狀態。

### Q: 修改後沒有變化？
A: 清除瀏覽器快取（Ctrl/Cmd + Shift + R 強制重新載入）。

### Q: 手機版面跑掉？
A: 確認 `index.html` 的 `<meta name="viewport">` 標籤沒有被移除。

### Q: 主題切換沒反應？
A: 檢查瀏覽器 Console 是否有錯誤訊息（F12 開發者工具）。

## 📝 維護清單

出發前記得檢查：

- [ ] 所有時間是否正確
- [ ] 飯店地址和名稱
- [ ] 餐廳營業時間
- [ ] Google Maps 連結是否有效
- [ ] 交通方式和時刻表
- [ ] 預約時間（和服、餐廳等）

## 🎯 進階功能建議

如果想要更多功能，可以考慮加入：

1. **待辦清單**：打勾確認已去過的景點
2. **預算追蹤**：記錄花費
3. **天氣預報**：串接天氣 API
4. **匯率計算**：日幣台幣轉換
5. **PWA 離線功能**：完全離線使用
6. **照片上傳**：旅途中上傳照片到行程

## 📧 技術支援

- HTML/CSS 問題：[MDN Web Docs](https://developer.mozilla.org/)
- JavaScript 問題：[JavaScript.info](https://javascript.info/)
- Google Maps：[Google Maps Platform](https://developers.google.com/maps)

---

## 🧳 旅途愉快！

祝你在京都大阪玩得開心！別忘了：

- 📸 多拍照留念
- 🍜 多吃美食
- 🎁 買好買滿
- 😊 保持笑容

**Have a great trip! 🇯🇵✨**

---

*最後更新：2024.10.09*

