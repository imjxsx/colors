<h1 align="center">🎨 colors (v1.0.2)</h1>
<p align="center">ANSI escape codes for styling terminal output.</p>
<p align="center">Includes <b>foreground</b>, <b>background</b>, <b>256-color</b> and <b>truecolor (RGB)</b> support.</p>

<h2>📥 Install</h2>
<h3>- PNPM</h3>

```bash
pnpm add github:imjxsx/colors
```
<h3>- NPM</h3>

```bash
npm install github:imjxsx/colors
```
<h3>- YARN</h3>

```bash
yarn add github:imjxsx/colors
```

<h2>🚀 Usage</h2>

```ts
import colors from "colors";

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

<h2>🔷 Features</h2>
<ul>
  <li>Foreground & Background colors</li>
  <li>Bright colors</li>
  <li>256-color support</li>
  <li>Truecolor (RGB)</li>
  <li>Text styles: bright, dim, underscore, blink, reverse, hidden</li>
</ul>