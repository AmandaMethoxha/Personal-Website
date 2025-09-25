# Amanda – Developer Portfolio (HTML/CSS/JavaScript)

A responsive, single-page developer portfolio built with vanilla **HTML**, **CSS**, and a tiny bit of **JavaScript**. It includes a sticky navbar with a mobile dropdown, a hero section with a circular portrait and rotating “I’m a …” text, social links, and a CV download button.

## Features
- Sticky, glassy navbar with hover underline effects
- Mobile hamburger menu (ESC closes it)
- Hero section with circular portrait (responsive)
- Rotating role text (“I’m a …”) driven by CSS keyframes
- Social icons via Font Awesome
- Optional “Download CV” button
- Clean gradient background and comfortable reading width
- Pure HTML/CSS/JS — no frameworks

## Project Structure
├─ index.html # Main page (HTML + small JS for mobile menu)
├─ style.css # Styles (navbar, hero, circle image, animations)
├─ html-web.png # Portrait image used in the hero (optional)
└─ Amanda-Shpendi-CV.pdf # CV to download (optional)


## Getting Started
1. Clone/download the repository.
2. Open `index.html` in your browser, **or** use a local server:
   - VS Code → install **Live Server** → Right-click `index.html` → *Open With Live Server*.

## Customize
**Name, intro, links, CV** (in `index.html`):
- Update the `<title>`, `.logo`, and the `<h1>` “Hey I’m Amanda”.
- Replace social links (`href="#"`) with your profiles.
- If you aren’t shipping a CV yet, remove the `<a><button>Download CV</button></a>` block.

**Circular portrait** (in `index.html`):
```html
<div class="image"><img src="html-web.png" alt="Portrait of Amanda"></div>
