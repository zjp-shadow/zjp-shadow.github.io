# zjp-shadow.github.io

Personal academic homepage of **Jiapeng Zhang** (Tsinghua University), served at <https://zjp-shadow.github.io/>.

Built with Jekyll on top of the [AcademicPages](https://github.com/academicpages/academicpages.github.io) template (a fork of [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)).

## Layout

| Path | Content |
|---|---|
| `_pages/about.md` | Homepage (hero, about, news, publications, interests); uses `_layouts/home.html` |
| `_data/news.yml` | News items shown on the homepage |
| `_data/publications.yml` | Publication cards (homepage + `/publications/`), linked to pages by `key` |
| `_publications/` | One page per paper (abstract + BibTeX); uses `_layouts/publication.html` |
| `_posts/` | Blog posts; use `_layouts/post.html`, listed by `_pages/year-archive.html` |
| `works/` | Standalone project pages (UniRig, SkinTokens) |
| `images/publication/` | Paper teasers (`<key>.jpg`) and card thumbnails (`<key>-thumb.jpg`) |
| `_sass/_theme.scss` | Site theme: colors (light/dark CSS variables), typography, components |
| `assets/js/site.js` | Dark-mode toggle, BibTeX copy, scroll reveal, back-to-top |

## Adding a paper

1. Add an entry to `_data/publications.yml` (title, authors, venue, badge, links, `key`, `date`, `page`, `image`, `teaser`). Cards are sorted by `date`, newest first.
2. Add `_publications/<Name>.md` with `pub_key: <key>`, the abstract as content and a `bibtex:` block.
3. Put a ~1600px teaser at `images/publication/<key>.jpg` and a ~900px thumbnail at `images/publication/<key>-thumb.jpg`.

## Run locally

```bash
bundle install
bundle exec jekyll serve -l
```
