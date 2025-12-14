# Personal Academic Website – Update Guide

This repository hosts the source files for my personal academic website (hosted via GitHub Pages).
Most updates can be made by editing simple files; no programming knowledge is required.

This short guide explains **which files control which parts of the website**, and **how to update them safely**.

---

## 1. Updating the CV

**File to update:**
```

assets/cv/CV.pdf

```

**How to update:**
- Replace the existing `CV.pdf` file with the new version (keep the same file name).
- No other changes are needed.
- The website will automatically display the updated CV.

---

## 2. Updating Published Papers

Published papers are listed in a data file and rendered automatically on the website.

**File to edit:**
```

_data/papers.yml

````

Each paper is represented by one entry in this file. Example:

```yaml
- title: "The Limits of Model-Based Regulation"
  authors: "M. Behn and R. Haselmann"
  journal: "Journal of Finance"
  date: 2022
  pdf: "assets/papers/2022_JF.pdf"
  abstract: "Abstract text here."
````

**To add a new published paper:**

1. Copy an existing entry and paste it at the top or bottom of the file.
2. Update the title, authors, journal, year, and abstract.
3. Upload the corresponding PDF to `assets/papers/`.
4. No numbering is required; papers are numbered automatically on the website.

---

## 3. Updating Working Papers

Working papers are stored separately from published papers.

**File to edit:**

```
_data/working_papers.yml
```

Example entry:

```yaml
- title: "Title of Working Paper"
  authors: "Coauthors"
  date: 2024
  pdf: "assets/papers/working_paper.pdf"
  abstract: "Abstract text here."
```

**To update working papers:**

* Add, edit, or remove entries in this file.
* Upload or replace PDFs in `assets/papers/`.

---

## 4. Uploading or Replacing Paper PDFs

All paper PDFs (published and working) are stored in:

```
assets/papers/
```

You may:

* Replace an existing PDF (keeping the same file name), or
* Upload a new PDF and reference it in the corresponding `.yml` file.

---

## 5. Editing Homepage Information (Bio and Contact Details)

**File to edit:**

```
index.md
```

This file contains:

* Name
* Academic title and affiliation
* Office address
* Email address
* Links to CV, Stanford GSB page, and Google Scholar

The content is written in Markdown and can be edited like plain text.

---

## 6. Files That Normally Do Not Need Editing

In regular use, the following files do **not** need to be modified:

* Style files (`assets/css/`)
* Layout files (`_layouts/`)
* Any JavaScript files

These control appearance only.

---

## 7. Publishing Changes

After saving changes:

* GitHub automatically rebuilds the website.
* Updates typically appear within **30–60 seconds**.
* No manual deployment is required.

---

## Quick Reference

| Task                  | File                       |
| --------------------- | -------------------------- |
| Update CV             | `assets/cv/CV.pdf`         |
| Add published paper   | `_data/papers.yml`         |
| Add working paper     | `_data/working_papers.yml` |
| Upload paper PDF      | `assets/papers/`           |
| Edit bio/contact info | `index.md`                 |

```
 
