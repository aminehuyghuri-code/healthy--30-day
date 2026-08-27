# Adding the UKIJ Uyghur Font

The site's CSS (`css/style.css`) already references UKIJ font files via `@font-face`, but the font files themselves are **not included** — UKIJ fonts are licensed separately and must be added by you.

## Steps

1. Get the UKIJ font files you want to use (e.g. **UKIJ Tuz** and/or **UKIJ Ekran**) in `.ttf` or `.otf` format.
2. Copy them into this `fonts/` folder using these exact names:
   - `UKIJTuz.ttf` (or `UKIJTuz.otf`)
   - `UKIJEkran.ttf` (or `UKIJEkran.otf`)
3. Reload the site. Uyghur text will automatically switch from the fallback font (Scheherazade New / system Arabic-script fonts) to true UKIJ.

## Notes

- You can use different UKIJ font names/files — just update the `src:` paths in the `@font-face` rules at the top of `css/style.css` to match.
- Until the files are added, Uyghur text still displays correctly (right-to-left, correct script) using the fallback font stack — it just won't have the exact UKIJ letterforms.
- Common sources for UKIJ fonts include Uyghur-language typesetting communities; make sure you have the right to use/distribute whichever font you choose.
