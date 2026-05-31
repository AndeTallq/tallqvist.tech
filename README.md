# Andreas Tallqvist - CV Website

A clean, modern, single-page CV/resume built with plain HTML, CSS, and JavaScript. Perfect for GitHub Pages.

## Features

- **Responsive** - Looks great on desktop, tablet, and mobile
- **Dark mode** - Toggle with automatic system preference detection + localStorage persistence
- **Print-optimized** - "Download PDF" button triggers clean print layout (use "Save as PDF")
- **Accessible** - Semantic HTML, keyboard friendly, good contrast
- **Fast** - Zero dependencies, loads instantly
- **Professional timeline** design for experience

## How to Customize

### 1. Edit Your Information

Open the files and replace the placeholder content:

- **index.html**
  - Name, title, location
  - Email and phone (already has your real ones)
  - About section text
  - Experience entries
  - Education
  - Skills

- **style.css** (optional)
  - Change accent color (search for `--accent`)
  - Adjust spacing or fonts

### 2. Add Your Real Links

In `index.html`, update:
- GitHub link (currently `https://github.com/`)
- Add LinkedIn, personal site, etc. if you want

### 3. Translate to Finnish (optional)

If you want the site in Finnish instead of English:
1. Replace all visible text in `index.html`
2. Keep the structure the same

## Deploy to GitHub Pages (Free)

### Option A - Root of repo (recommended)

1. Create a new GitHub repository named exactly:  
   `yourusername.github.io` (example: `andreas-tallqvist.github.io`)

2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial CV site"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. Go to repository **Settings → Pages**  
   - Source: **Deploy from a branch**  
   - Branch: `main`  
   - Folder: `/ (root)`  
   - Save

4. Your site will be live at:  
   `https://yourusername.github.io`

### Option B - Using `/docs` folder

1. Create a normal repo (any name)
2. Move all files into a `/docs` folder
3. In repo Settings → Pages → Source: `docs` folder on `main`

### Option C - `gh-pages` branch

Use the GitHub CLI or actions if you prefer that workflow.

## Local Development

No build step needed. Just open `index.html` directly in a browser.

For a better experience:

```bash
# Using Python
python -m http.server 8000

# Using Node (if you have `serve` installed)
npx serve .
```

Then open http://localhost:8000

## Tips

- The **Download PDF** button uses your browser's print dialog. Choose "Save as PDF" for best results.
- Dark mode state is saved between visits.
- The page is designed to look excellent when printed or saved to PDF.
- You can add a photo if you want (add an `<img>` in the hero section).

## Tech Stack

- Vanilla HTML5 + CSS3 + JavaScript
- No frameworks, no build tools, no tracking

---

Made with ❤️ for Andreas Tallqvist. Feel free to fork and adapt for your own use.