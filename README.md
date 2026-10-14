# typing-speed-test

A simple, dependency-free typing speed test built with HTML, CSS, and vanilla JavaScript. Pick a difficulty and mode, start typing, and see your WPM and accuracy update live.
<img width="791" height="594" alt="image" src="https://github.com/user-attachments/assets/2c609b24-734d-4cfa-bbdd-0c3d19a2384d" />  <img width="791" height="594" alt="image" src="https://github.com/user-attachments/assets/394d4cc7-6c61-4e08-9730-8fa7b51a342e" />

<img width="400" height="523" alt="image" src="https://github.com/user-attachments/assets/453cbe2a-d63b-40ef-a3ec-28ca7a7e5c72" />  <img width="352" height="523" alt="image" src="https://github.com/user-attachments/assets/ae3320d4-5341-4ff7-a1dd-690452511a43" />


**Live Demo** :
https://bernie-crypto-cmyk.github.io/typing-speed-test

## Features
 
- **Three difficulty levels:** Easy, Medium, and Hard
- **Two modes:**
  - **Timed (60s):** type as much as you can before the countdown ends
  - **Passage:** type a full passage at your own pace
- **Live stats:** WPM, accuracy, and elapsed/remaining time
- **Character-by-character feedback:** correct characters turn green, mistakes turn red, and the current character is highlighted
- **Random passages** loaded from a JSON file
 
## Tech Stack
 
- HTML5
- CSS3
- JavaScript (ES6+), no frameworks or libraries

## How to Use
 
1. Choose a **difficulty** (Easy, Medium, Hard).
2. Choose a **mode** (Timed or Passage).
3. Click **Start Typing Test** and begin typing.
4. Watch your **WPM**, **accuracy**, and **time** update as you go.

 ## How It's Calculated
 
**WPM** = (characters typed / 5) / minutes elapsed, adjusted by accuracy
**Accuracy** = correct characters / total characters typed × 100
 
## Project Structure
 
```
typing-speed-test/
├── index.html    # Page structure
├── style.css     # Styling
├── script.js     # Test logic, timer, and stats
├── data.json     # Passages grouped by difficulty
└── README.md
```
 
### `data.json` format
 
Passages are grouped by difficulty. Each difficulty is an array of strings:
 
```json
{
  "Easy": ["First easy passage...", "Second easy passage..."],
  "Medium": ["First medium passage..."],
  "Hard": ["First hard passage..."]
}
```
 
To add your own passages, append strings to any of the arrays.
 
## Roadmap
 
- [ ] Stop the timer when the passage is completed
- [ ] Save and display the best score (e.g. with `localStorage`)
- [ ] Results screen at the end of a test
- [ ] Accurate handling of backspace in accuracy calculation
- [ ] Mobile-friendly layout
- [ ] More passages and categories

## Author
GitHub: @Bernie-crypto-cmyk (https://github.com/Bernie-crypto-cmyk)
 
