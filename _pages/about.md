---
permalink: /
layout: home
title: "Jiapeng Zhang"
excerpt: "Ph.D. student at Tsinghua University working on 3D characters, rigging and animation."
author_profile: false
redirect_from: 
  - /about/
  - /about.html
hero:
  eyebrow: "Ph.D. Student · Tsinghua University"
  tagline: "I build generative models that **create, rig, and animate 3D characters**, with the goal of making virtual characters and VTubers easy for everyone to bring to life."
  meta:
    - { icon: "fas fa-university", text: "CSCG Group, Tsinghua University" }
    - { icon: "fas fa-map-marker-alt", text: "Beijing, China" }
---

<section class="home-section reveal" markdown="1">

## About Me

I am a third-year Ph.D. student in the Department of Computer Science and Technology at [Tsinghua University](https://www.tsinghua.edu.cn/), working in the [CSCG Group](https://cg.cs.tsinghua.edu.cn/) under the supervision of Prof. [Shi-Min Hu](https://cg.cs.tsinghua.edu.cn/shimin.htm).

My research lies at the intersection of **computer graphics** and **generative AI**, with a focus on **3D characters**: generating them, rigging them, and bringing them to life with animation. I am especially interested in technologies for games and virtual characters, like **VTubers**, aiming to bring people a better digital entertainment experience.

If you are interested in 3D characters, rigging, animation, or VTuber research, feel free to [contact me](mailto:zjp24@mails.tsinghua.edu.cn)!

<div class="home-tags">
  <span>3D Character Generation</span>
  <span>Auto Rigging</span>
  <span>Character Animation</span>
  <span>Generative AI</span>
  <span>VTuber</span>
</div>

</section>

<section class="home-section reveal">
  <h2 id="news">News</h2>
  <ol class="timeline">
  {% for item in site.data.news %}
    <li class="timeline__item">
      <time class="timeline__date">{{ item.date }}</time>
      <div class="timeline__text">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}</div>
    </li>
  {% endfor %}
  </ol>
</section>

<section class="home-section reveal">
  <h2 id="publications">Publications</h2>
  <p class="section-note">Full list on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>
  {% include pub-cards.html %}
</section>

<section class="home-section reveal">
  <h2 id="interests">Beyond Research</h2>
  <div class="interest-grid">
    <div class="interest">
      <i class="fas fa-palette" aria-hidden="true"></i>
      <h3>Research taste</h3>
      <p>AIGC work with direct visual impact: things you can see, play with, and animate.</p>
    </div>
    <div class="interest">
      <i class="fas fa-swimmer" aria-hidden="true"></i>
      <h3>Sports</h3>
      <p>Skating and swimming.</p>
    </div>
    <div class="interest">
      <i class="fas fa-gamepad" aria-hidden="true"></i>
      <h3>Entertainment</h3>
      <p>Games, VR/AR, and virtual livestreaming.</p>
    </div>
  </div>
</section>
