# 🎨 @imjxsx/colors (v1.0.3)

## ANSI escape codes for styling terminal output

### 📥 Installation

---

#### - With NPM

```bash
npm install @imjxsx/colors
```

#### - With PNPM

```bash
pnpm add @imjxsx/colors
```

#### - With YARN

```bash
yarn add @imjxsx/colors
```

---

### 🚀 Example of Use

```javascript
// index.js
import colors from "@imjxsx/colors";

// Basic foreground colors
console.log(colors.fg.red + "Error!" + colors.reset);
console.log(colors.fg.green + "Success!" + colors.reset);
// Background colors
console.log(colors.bg.yellow + colors.fg.black + " Warning " + colors.reset);
// 256-color
console.log(colors.fg256(202) + "Orange-ish text" + colors.reset);
// Truecolor (RGB)
console.log(colors.fgRGB(128, 0, 200) + "Custom purple" + colors.reset);
```

---

Developed with **❤** by **[imjxsx](https://github.com/imjxsx)**
