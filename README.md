# 🌸 Guess Flower's Name – C346 Week 4 (Lesson 7: Stylesheets & Flexbox)

A React Native quiz app where the user looks at a flower picture and picks its name from a dropdown.
This version improves the styling using **Lesson 7: StyleSheet and Flexbox**, and adds a **Show Hints** button.


## 📸 Screenshots

### Before changes

| Top of screen | Scrolled down | Score alert |
|:---:|:---:|:---:|
| <img src="Screenshots%20before%20changes/Screenshot_20261114_170637.png" width="220"> | <img src="Screenshots%20before%20changes/Screenshot_20261114_170727.png" width="220"> | <img src="Screenshots%20before%20changes/Screenshot_20261114_170802.png" width="220"> |

### After changes

| Top of screen | Scrolled down | Hints popup |
|:---:|:---:|:---:|
| <img src="Screenshots%20after%20changes/Screenshot_20261114_184637.png" width="220"> | <img src="Screenshots%20after%20changes/Screenshot_20261114_184704.png" width="220"> | <img src="Screenshots%20after%20changes/Screenshot_20261114_184819.png" width="220"> |

---

## ✨ What I Changed

### 1. StyleSheet instead of inline styles
All inline `style={{...}}` code was moved into `StyleSheet.create()` at the bottom of `App.js` and `components/QuestionsBox.js`.
This keeps the code organised and is better for performance.

### 2. Combining styles
- `style={[styles.card, styles.shadow]}` – combines two StyleSheet styles to make each question a white card with a shadow.
- `style={[styles.ratioBox, {flex: 1, backgroundColor: 'pink'}]}` – combines a StyleSheet style with an inline style.

### 3. Flexbox

| Lesson 7 topic | Style | What it does |
|---|---|---|
| `flexDirection: 'row'` | `questionRow` | Number badge and question text side by side |
| `flexDirection: 'row'` | `buttonRow` | SUBMIT and SHOW HINTS buttons side by side |
| `flex: 1` | `buttonItem` | Both buttons share the row equally |
| `flex: 1` | `questionText` | Question text fills the space left after the badge |
| Flex ratio 1 : 2 : 1 | `ratioRow` / `ratioBox` | Decorative pink–purple–pink bar under the title |
| `justifyContent` + `alignItems: 'center'` | `badge` | Number centred inside the purple circle |
| `alignItems: 'center'` | `header` | Title and subtitle centred |
| `alignItems: 'flex-end'` | `labelRow` | "Question 1 of 4" label pushed to the right |
| `maxHeight` | `image` | Image never taller than 200 |

### 4. Other improvements
- Light purple background, rounded corners on cards, images and pickers.
- Proper spacing with `margin` and `padding` instead of empty `<Text></Text>` lines.
- Fixed the title typo ("FLower" → "Flower") and question text ("What is this flower's name?").
- Fixed the scoring bug: a perfect score is now **4**, not 3.
- Added a **SHOW HINTS** button that shows hints only for wrong answers.

---


## 🎥 Video Explanation

▶️ **[https://youtu.be/qnIbUiBv1HQ](PASTE_YOUR_VIDEO_LINK_HERE)**

---
## 📁 Files

| File | Description |
|---|---|
| `App.js` | Main screen – answers, scoring, hints, layout |
| `components/QuestionsBox.js` | Re-usable question card (image, badge, question, picker) |

## ▶️ How to Run

```bash
npm install
npx expo start
```
