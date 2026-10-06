// Print the CV pages to A4 PDFs with Playwright (Chromium).
//
//   bundle exec jekyll serve                      # or any server for the built _site
//   node scripts/cv-pdf.js [base-url] [out-dir] [--phone "+86 ..."] [--font-css fonts.css]
//
// Defaults: base-url http://localhost:4000, out-dir files/cv. `--phone` adds a phone number to the
// contact line, for a private copy that is not published (write it outside the repo).
// `--font-css` injects an extra stylesheet before printing (e.g. to try other fonts).
const path = require('path');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const phoneAt = args.indexOf('--phone');
const phone = phoneAt >= 0 ? args.splice(phoneAt, 2)[1] : null;
const cssAt = args.indexOf('--font-css');
const fontCss = cssAt >= 0 ? args.splice(cssAt, 2)[1] : null;
const base = (args[0] || 'http://localhost:4000').replace(/\/$/, '');
const outDir = args[1] || path.join(__dirname, '..', 'files', 'cv');

const pages = [
  { url: '/cv/', file: 'Jiapeng_Zhang_CV_EN.pdf' },
  { url: '/cv/zh/', file: 'Jiapeng_Zhang_CV_ZH.pdf' },
];

(async () => {
  const browser = await chromium.launch();
  for (const p of pages) {
    const page = await browser.newPage();
    await page.goto(base + p.url, { waitUntil: 'networkidle' });
    if (fontCss) await page.addStyleTag({ path: fontCss });
    await page.evaluate(() => document.fonts.ready);
    if (phone) {
      await page.evaluate((tel) => {
        const li = document.createElement('li');
        li.innerHTML = '<i class="cvi fas fa-phone" aria-hidden="true"></i>';
        li.appendChild(document.createTextNode(tel));
        const list = document.querySelector('.cv-contact');
        const rest = list.querySelector('li:nth-child(2)');
        list.insertBefore(li, rest);
        // Five items do not fit on one line: break after email · phone.
        rest.classList.add('cv-contact__wrap');
        list.insertBefore(document.createElement('br'), rest);
      }, phone);
    }
    await page.emulateMedia({ media: 'print', colorScheme: 'light' });
    const out = path.join(outDir, p.file);
    await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
    console.log('wrote', out);
    await page.close();
  }
  await browser.close();
})();
