/* Site-wide enhancements: responsive nav, theme toggle, BibTeX copy, reveal-on-scroll, back-to-top. */
(function () {
  var root = document.documentElement;

  // Responsive nav: move links into the dropdown, from the end, until the bar fits.
  // The first item (the site title) always stays visible.
  var nav = document.getElementById('site-nav');
  if (nav) {
    var btn = nav.querySelector('button');
    var vlinks = nav.querySelector('.visible-links');
    var hlinks = nav.querySelector('.hidden-links');
    var fit = function () {
      while (hlinks.firstElementChild) vlinks.appendChild(hlinks.firstElementChild);
      btn.classList.add('hidden');
      var available = nav.clientWidth;
      while (vlinks.offsetWidth > available && vlinks.children.length > 1) {
        hlinks.insertBefore(vlinks.lastElementChild, hlinks.firstElementChild);
        if (btn.classList.contains('hidden')) {
          btn.classList.remove('hidden');
          available = nav.clientWidth - btn.offsetWidth - 30;
        }
      }
      btn.setAttribute('count', hlinks.children.length);
      if (!hlinks.children.length) {
        hlinks.classList.add('hidden');
        btn.classList.remove('close');
      }
    };
    btn.addEventListener('click', function () {
      hlinks.classList.toggle('hidden');
      btn.classList.toggle('close');
    });
    window.addEventListener('resize', fit);
    window.addEventListener('load', fit);
    fit();
  }

  // Theme toggle
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Copy buttons on BibTeX blocks
  document.querySelectorAll('[data-copy-target]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.getAttribute('data-copy-target'));
      if (!target) return;
      var text = target.innerText.trim();
      var done = function () {
        var label = btn.querySelector('span');
        var old = label ? label.textContent : '';
        btn.classList.add('is-copied');
        if (label) label.textContent = 'Copied';
        setTimeout(function () {
          btn.classList.remove('is-copied');
          if (label) label.textContent = old;
        }, 1600);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); done(); } catch (e) {}
        document.body.removeChild(ta);
      }
    });
  });

  // Reveal elements as they scroll into view
  var reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px' });
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Back-to-top button
  var top = document.querySelector('.back-to-top');
  if (top) {
    var onScroll = function () { top.classList.toggle('is-shown', window.scrollY > 600); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }
})();
