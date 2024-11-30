---
pagination:
  data: brands
  size: 1
  alias: brand
permalink: "brands/{{ brand.brand | slugify }}/index.html"
layout: single
eleventyComputed:
  title: "{{ brand.brand }}"
---
You can use the alias in your content too {{ brand.brand }}

![{{ brand.brand }}](/assets/images/brands/{{ brand.brand | slugify }}-bg-200px.jpg)