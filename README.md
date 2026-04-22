# Website Update Guide

This is the source for your personal academic website at **https://vikrantvig.com**.

All updates can be made directly on GitHub — no programming required. After you save, the website rebuilds automatically in about 30–60 seconds.

---

## Quick Reference

| What you want to do | Where to do it |
| --- | --- |
| Replace the CV | Upload new file to `assets/cv/`, keep the name `CV.pdf` |
| Add / edit a published paper | `_data/papers.yml` |
| Add / edit a working paper | `_data/working_papers.yml` |
| Upload a paper PDF | `assets/papers/` |
| Edit name, affiliation, contact info | `index.md` (top of file) |
| Edit biography paragraphs | `index.md` (the `<div class="bio-section">` block) |
| Edit teaching list | `index.md` (the `## Teaching` section at the bottom) |

---

## How to Edit a File on GitHub

1. Open the file on github.com
2. Click the **pencil icon** in the top-right of the file view
3. Make your changes
4. Scroll down and click **Commit changes**
5. Wait ~1 minute, then refresh the website

If something breaks, open the same file, click the **History** button, and revert to the previous version.

---

## 1. Updating the CV

Upload the new file to `assets/cv/` and **keep the filename `CV.pdf`**. No other change is needed — the link on the homepage will automatically point to the new file.

---

## 2. Adding a Published Paper

**Step 1.** Upload the PDF to `assets/papers/`. Recommended naming: `YEAR_JOURNAL.pdf` (e.g. `2025_JF.pdf`).

**Step 2.** Edit `_data/papers.yml` and add a new entry. Papers appear on the website in the same order they are listed here (newest at the top is the convention).

Template:

```yaml
- title: "Title of the Paper"
  authors: "J. Smith and K. Doe"
  journal: "Journal of Finance"
  date: 2025
  pdf: assets/papers/2025_JF.pdf
  abstract: "Full abstract text here."
```

**Field guide** (only `title` is strictly required — omit any line you don't need):

| Field | Required? | Notes |
| --- | --- | --- |
| `title` | yes | The paper title |
| `authors` | optional | Co-authors only; omit if sole author |
| `journal` | optional | Shown in italics |
| `date` | optional | Just the year, e.g. `2025` |
| `pdf` | optional | Path to the uploaded PDF |
| `appendix` | optional | Path to an appendix PDF, shown as `[Appendix]` |
| `abstract` | optional | Adds an "Abstract" button that expands inline |
| `volume` / `pages` | optional | Citation details |

Papers are numbered automatically on the site — do **not** add numbers in the YAML.

---

## 3. Adding a Working Paper

Working papers are stored in `_data/working_papers.yml`. This file has one top-level key `working_papers:`, and each paper is listed underneath it.

**Important**: new entries must be indented two spaces under `working_papers:`. Here is the full expected structure:

```yaml
working_papers:
  - id: 1
    title: "First Working Paper"
    authors: "J. Smith"

  - id: 2
    title: "Second Working Paper"
    authors: "K. Doe"
```

To add a new paper, copy one of the existing blocks and edit it. Same optional fields as published papers (`pdf`, `abstract`, `date`, `journal`, etc.) are supported.

---

## 4. Editing the Homepage (Bio and Contact)

Open `index.md`. The top section contains:

- Name
- Academic title and affiliation
- Office address
- Email
- Links to CV, Stanford GSB page, Google Scholar

Edit the plain text directly. The biography (the "Biography" expandable block) is further down, inside `<div class="bio-section">`. The teaching list is at the bottom under `## Teaching`.

---

## 5. Uploading a PDF

1. Open the `assets/papers/` folder on GitHub
2. Click **Add file** → **Upload files**
3. Drag the PDF in, then click **Commit changes**

Once uploaded, reference it in the relevant YAML file as `assets/papers/YOUR_FILE.pdf`.

---

## Files You Normally Shouldn't Touch

These control the site's layout, styling, and build. Edits here can break the site.

- `_layouts/`, `_includes/` — HTML templates
- `assets/css/` — stylesheet
- `assets/js/` — JavaScript
- `_config.yml` — site configuration
- `Gemfile`, `Gemfile.lock` — build dependencies
- `CNAME` — custom domain (`vikrantvig.com`)

If one of these needs to change, ask the web admin.

---

## Troubleshooting

- **Website didn't update after I saved.** Wait 60 seconds, then hard-refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows). If still not updated, check the **Actions** tab on GitHub for a failed build.
- **A paper link gives 404.** Make sure the PDF was uploaded to `assets/papers/` and the `pdf:` path in the YAML matches the filename **exactly** (including capitalization).
- **YAML error / site fails to build.** Most often caused by missing quotes around a title that contains special characters, or incorrect indentation. Revert to the previous version via the **History** button and try again.
