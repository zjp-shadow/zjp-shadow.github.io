---
permalink: /
title: "About Me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="home-intro" markdown="1">

I am a third-year Ph.D. student in the Department of Computer Science and Technology at [Tsinghua University](https://www.tsinghua.edu.cn/), working in the [CSCG Group](https://cg.cs.tsinghua.edu.cn/) under the supervision of Prof. [Shi-Min Hu](https://cg.cs.tsinghua.edu.cn/shimin.htm).

My research lies at the intersection of **computer graphics** and **generative AI**, with a focus on **3D characters**: generating them, rigging them, and bringing them to life with animation. I am especially interested in technologies for games and virtual characters, like **VTubers**, aiming to bring people a better digital entertainment experience.

If you are interested in 3D characters, rigging, animation, or VTuber research, feel free to [contact me](mailto:zjp24@mails.tsinghua.edu.cn)!

</div>

<div class="home-tags">
  <span>3D Character Generation</span>
  <span>Auto Rigging</span>
  <span>Character Animation</span>
  <span>Generative AI</span>
  <span>VTuber</span>
</div>

## News

<ul class="news-list">
{% for item in site.data.news %}
  <li><span class="news-date">{{ item.date }}</span><span class="news-text">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}</span></li>
{% endfor %}
</ul>

## Publications

<p class="pub-note">Full list on <a href="https://scholar.google.com/citations?user=XkE68gcAAAAJ">Google Scholar</a>.</p>

{% include pub-cards.html %}

## Interests

In research, I prefer AIGC-related work that delivers direct visual impact. For sports, I like skating and swimming. For entertainment, I enjoy games, VR/AR, virtual livestreaming, and so on.
