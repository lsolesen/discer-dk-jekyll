---
layout: posts
permalink: /blog/
excerpt: "Discer blog er for os der gerne vil blive klogere på frisbeesporten, discgolf og ultimate."
title: Discers blog
seo_title: "Blog om frisbeesport, discgolf og ultimate | Discer"
classes: wide
author_profile: true
---
{% assign site_posts = site.posts | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<h2>Seneste opdateringer på Discers blog</h2>
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}
