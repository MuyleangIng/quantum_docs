
# Documentation Guide (Nextra) — Project Setup & Page Structure

This README explains how to **clone the project**, **run the docs locally**, and **create/edit Nextra pages** using folders + `_meta.js` for sidebar navigation.

---

## 1) Clone the project

```bash
git clone <YOUR_REPO_URL>
cd <YOUR_PROJECT_FOLDER>
````

Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open:

* [http://localhost:3000](http://localhost:3000)

---

## 2) Where the docs live (folder structure)

Most Nextra projects put documentation pages inside:

* `pages/` (common for Nextra)

Example structure:

```
pages/
├── index.mdx
├── errors/
│   ├── _meta.js
│   ├── index.mdx
│   ├── mitigation.mdx
│   ├── correction.mdx
│   ├── mitigation/
│   │   ├── _meta.js
│   │   ├── overview.mdx
│   │   ├── zne.mdx
│   │   ├── pec.mdx
│   │   └── dd.mdx
│   └── correction/
│       ├── _meta.js
│       ├── overview.mdx
│       ├── basis.mdx
│       └── workflow.mdx
└── quantum/
    ├── _meta.js
    ├── index.mdx
    └── ...
```

---

## 3) Images (IMPORTANT)

Put images inside:

```
public/images/...
```

Example:

```
public/images/errors/zne-overview.png
```

Use this in MDX:

```mdx
<img src="/images/errors/zne-overview.png" width="780" />
```

Correct: `/images/...`
Wrong: `public/images/...`

---

## 4) What is `_meta.js` and why we need it?

In Nextra, `_meta.js` controls:

* Sidebar labels (page titles in navigation)
* Sidebar ordering
* Which pages appear in the sidebar

If you want a folder to have a clean sidebar navigation, **add `_meta.js`** inside that folder.

---

## 5) `_meta.js` examples

### 5.1 `pages/errors/_meta.js`

```js
export default {
  index: "Introduction",
  mitigation: "Quantum Error Mitigation",
  correction: "Quantum Error Correction"
}
```

Meaning:

* `index.mdx` shows as **Introduction**
* `mitigation.mdx` shows as **Quantum Error Mitigation**
* `correction.mdx` shows as **Quantum Error Correction**

---

### 5.2 `pages/errors/mitigation/_meta.js`

```js
export default {
  overview: "Overview",
  zne: "Zero-Noise Extrapolation (ZNE)",
  pec: "Probabilistic Error Cancellation (PEC)",
  dd: "Dynamical Decoupling (DD)"
}
```

---

### 5.3 `pages/errors/correction/_meta.js`

```js
export default {
  overview: "Overview",
  basis: "Basis of QEC",
  workflow: "Workflow of QEC Code"
}
```

---

## 6) How routing works (URL mapping)

In Nextra, file paths map to routes like this:

* `pages/errors/index.mdx` → `/errors`
* `pages/errors/mitigation.mdx` → `/errors/mitigation`
* `pages/errors/mitigation/zne.mdx` → `/errors/mitigation/zne`

---

## 7) How to create a new documentation page (step-by-step)

Example: you want to create a new page:

### Create file

```bash
touch pages/errors/mitigation/readout.mdx
```

### Add it to the folder `_meta.js`

Edit:

`pages/errors/mitigation/_meta.js`

```js
export default {
  overview: "Overview",
  zne: "Zero-Noise Extrapolation (ZNE)",
  pec: "Probabilistic Error Cancellation (PEC)",
  dd: "Dynamical Decoupling (DD)",
  readout: "Readout Error Mitigation"
}
```

### Add frontmatter + content

`pages/errors/mitigation/readout.mdx`

```mdx
---
title: "Readout Error Mitigation"
description: "Reduce measurement errors by calibration and correction."
---

# Readout Error Mitigation

Write your content here...
```

Now your page appears in sidebar and is accessible at:

* `/errors/mitigation/readout`

---

## 8) Best practice: Landing pages (avoid empty pages)

If you have:

* `pages/errors/mitigation.mdx`
* `pages/errors/correction.mdx`

These should not be empty. Use them as **landing pages** that:

* Explain the section
* Link to subpages

Example:

```mdx
# Quantum Error Mitigation

This section covers practical NISQ-focused mitigation methods:

- [ZNE](/errors/mitigation/zne)
- [PEC](/errors/mitigation/pec)
- [DD](/errors/mitigation/dd)
```

---

## 9) Common errors & fixes

### Error: Module not found (image path)

If you see:

```
Can't resolve '/.../public/images/...'
```

Fix:

* Put images inside `public/images/...`
* Reference as:

```mdx
<img src="/images/..." />
```

Do **NOT** import using absolute file path.

---

## 10) Contribution workflow (optional)

Create a new branch:

```bash
git checkout -b docs/add-errors-pages
```

Commit changes:

```bash
git add .
git commit -m "docs: add errors pages and sidebar meta"
git push origin docs/add-errors-pages
```

---

## Summary

* Docs pages are `.mdx` in `pages/`
* Every folder that needs sidebar ordering should have `_meta.js`
* Images live in `public/` and are referenced via `/images/...`
* Create file → update `_meta.js` → run `dev` and check sidebar