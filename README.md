# Anti-Tigers — Title Screen Demo

This is a small, static demo of a professional title screen for the "Anti-Tigers" American football team. It includes navigation between the title, an information screen, and a players list.

Files added:

- [index.html](index.html) — main entry
- [styles.css](styles.css) — styles
- [script.js](script.js) — client-side navigation and player rendering

Open locally:

Option 1 — Open file directly (quick test):

```powershell
start index.html
```

Option 2 — Serve with Python (recommended for more consistent behavior):

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Option 3 — Serve with Node (http-server):

```powershell
npm install -g http-server
http-server -p 8000
# then open http://localhost:8000
```

If you'd like, I can start a local dev server for you now or expand the demo with player detail pages, animations, or accessibility improvements.

Publishing permanently (free) — GitHub Pages
------------------------------------------------
1. Create a GitHub repository (you need a GitHub account).

Option A (using `gh` CLI):

```powershell
cd workspace
gh repo create anti-tigers-site --public --source=. --remote=origin --push
```

Option B (manual):

- Create a new repository on github.com (name it e.g. `anti-tigers-site`).
- In `workspace` run:

```powershell
cd workspace
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/anti-tigers-site.git
git push -u origin main
```

2. The included GitHub Actions workflow will publish the contents to GitHub Pages automatically after you push to `main`. Your site will be available at:

```
https://<YOUR_USERNAME>.github.io/anti-tigers-site
```

3. Optional: map your custom domain `www.anti-tigers-footballteam.com` by adding a `CNAME` record in the repository root (create `CNAME` with the domain as its contents) and setting DNS to point the domain to GitHub Pages. I can guide DNS steps if you own the domain.

Alternative quick host (no repo): Drag-and-drop the `workspace` folder to Netlify's deploy page or Cloudflare Pages — both have free tiers.