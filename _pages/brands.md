---
permalink: /brands/
layout: single
---

## Brands

<ol>
{%- for item in brands %}
  <li><a href="/brands/{{ item.brand | slugify }}/">{{ item.brand }}</a></li>
{% endfor -%}
</ol>