# Amanda Methoxha — Portfolio

A fast, minimal portfolio built with **React + Vite + TypeScript**, **Tailwind CSS**, and **shadcn/ui**.  
It showcases featured projects on the home page and a full, scrollable list at **/projects**, with per-project detail pages at **/projects/:slug**.

## ✨ Features

- **Sections:** Hero, Featured Projects, All Projects page, Project Details, Contact.
- **Project data in code:** edit one file to add/update projects.
- **Nice UX:** smooth routing with React Router, responsive layout, accessible buttons/labels.
- **Design system:** Tailwind CSS + shadcn/ui components.
- **Dev-friendly:** Vite alias `@` → `src` for clean imports.

## 🧱 Tech Stack

- **Frontend:** React (TypeScript), Vite
- **UI:** Tailwind CSS, shadcn/ui, lucide-react icons
- **Routing:** react-router-dom
- **State/Utilities:** TanStack Query (for future data), class utilities
- **Tooling:** ESLint, Prettier

## 🚀 Quick Start

> Prereqs: Node 18+ and npm (or pnpm/yarn).

```bash
# 1) Install dependencies
npm install

# 2) Start the dev server (Vite)
npm run dev
```

Open the app at: **http://localhost:8080**  
(Port 8080 is set in `vite.config.ts`.)

### Other useful scripts

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview

# Optional: lint / format (if configured)
npm run lint
npm run format
```

## 🗂 Project Structure (key bits)

```
.
├── public/
│   └── images/              # screenshots, favicons, etc.
├── src/
│   ├── assets/              # static assets (e.g., portrait)
│   ├── components/
│   │   └── portfolio/       # Navigation, HeroSection, ProjectsSection, ContactSection
│   ├── data/
│   │   └── projects.ts      # <— add/update your projects here
│   ├── pages/
│   │   ├── Index.tsx        # home (hero + featured + contact)
│   │   ├── ProjectsIndex.tsx# /projects (all projects)
│   │   └── ProjectDetails.tsx# /projects/:slug
│   ├── main.tsx             # routes
│   └── index.css            # Tailwind entry
├── index.html               # root HTML
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json            # path alias @ -> ./src
└── vite.config.ts           # dev server (port 8080) + alias
```

## ➕ Adding a Project

Edit `src/data/projects.ts`. Each entry looks like:

```ts
{
  slug: "student-information-system",
  title: "Student Information System",
  featured: true,                   // show on the home page “Featured Projects” grid
  category: "full-stack",           // "software" | "electronics" | "full-stack"
  description: "Short card blurb...",
  longDescription: [
    "1–3 sentences or bullets that appear on the details page..."
  ],
  tech: ["C#", ".NET 7", ".NET MAUI", "SQLite"],
  githubUrl: "https://github.com/…",
  // Optional:
  demoUrl: "/videos/demo.mp4",      // shows a “Live/Demo” button if present
  image: "/images/sis/01-home.png", // hero image on details page
  imageAlt: "Home screen",
  screens: [
    { src: "/images/sis/01-home.png", alt: "Home" },
    { src: "/images/sis/02-staff-login.png", alt: "Staff login" }
  ]
}
```

- **Featured grid** uses `featured: true`.
- **All Projects** page shows everything (featured or not).
- **Details page** pulls from `longDescription`, `tech`, `image`, and `screens`.

## 🔗 Navigation

- Home (Featured): `/`
- All Projects: `/projects`
- Project details: `/projects/:slug` (e.g. `/projects/student-information-system`)

## 🧩 Tailwind / Editor Notes

- If your editor flags `@tailwind` or `@apply` as “Unknown at rule,” install the **Tailwind CSS IntelliSense** VS Code extension (visual warning only).
- Tailwind is wired in `src/index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Path alias `@` is set in **tsconfig.json** and **vite.config.ts**. If imports fail, ensure both files include:
  - `paths: { "@/*": ["./src/*"] }` in `tsconfig.json`
  - `alias: { "@": path.resolve(__dirname, "./src") }` in `vite.config.ts`

## 📦 Deployment

- **Vercel / Netlify / Render:** push to GitHub and connect—framework auto-detected (Vite).
- **GitHub Pages:** `npm run build` → deploy `dist/`.
- Set a custom domain if you want a clean URL on your CV.



## 🛠 Troubleshooting

- **Port already in use:** change `server.port` in `vite.config.ts`.
- **Hash links (#projects) not scrolling:** `Index.tsx` includes a small hook to smooth-scroll to sections; ensure section IDs match.

---

### TL;DR — How to run

```bash
npm install
npm run dev
# open http://localhost:8080
```
