# zjp-shadow.github.io

Personal academic homepage of **Jiapeng Zhang** (Tsinghua University), served at <https://zjp-shadow.github.io/>.

Built with Jekyll on top of the [AcademicPages](https://github.com/academicpages/academicpages.github.io) template (a fork of [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)).

## Layout

| Path | Content |
|---|---|
| `_pages/about.md` | Homepage (bio, news, selected publications) |
| `_data/news.yml` | News items shown on the homepage |
| `_data/publications.yml` | Publication cards shown on the homepage |
| `_publications/` | One page per paper, listed at `/publications/` |
| `_posts/` | Blog posts |
| `works/` | Standalone project pages (UniRig, SkinTokens) |
| `images/publication/` | Paper teaser images and thumbnails |

## Run locally

```bash
bundle install
bundle exec jekyll serve -l
```
