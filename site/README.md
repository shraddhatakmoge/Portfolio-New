# Shraddha Takmoge | Portfolio

Static site (HTML, CSS, JS). No build step or dependencies.

## Structure
- index.html: all page content
- css/style.css: styles and the 3 themes (Aurora, Champagne, Ivory)
- js/main.js: theme switcher, project filters, gallery pop-ups
- images/: portrait and gallery photos

## Edit before deploying
In index.html, replace: the resume link (href="#" on Download resume),
mailto:you@example.com, and the LinkedIn / GitHub links in the Contact section.
To offer a resume download, add resume.pdf to this folder and use href="resume.pdf" download.

## Run locally
Open index.html in a browser, or run: python3 -m http.server

## Deploy
- Netlify: drag and drop this folder at app.netlify.com/drop
- Vercel: run `vercel` in this folder (framework: Other)
- GitHub Pages: push to a repo, then Settings > Pages > deploy from main branch (root)
