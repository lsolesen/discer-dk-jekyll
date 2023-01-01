---
layout: posts
permalink: /blog/
redirect_from:
  - /artikler/
excerpt: "Discer blog er for os der gerne vil blive klogere på frisbeesporten, discgolf og ultimate."
title: Discers blog
seo_title: "Blog om frisbeesport, discgolf og ultimate | Discer"
classes: wide
author_profile: true
blog:
  - excerpt: '[Se blogindlæg efter kategori](/blog/){: .btn .btn--large .btn--success }'
---

<h2>Seneste opdateringer på Discers blog</h2>

<div class="feature__wrapper">

{% assign site_posts = site.posts | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

{% include feature_row id="blog" type="center" %}
