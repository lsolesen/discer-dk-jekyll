---
layout: single
title: Affiliate
eleventyImport:
  collections: ["affiliates"]
---

{{ collections.affiliates | log }}

{{ data.affiliates | json  }}

<ol>
{% assign products = affiliates | where: "brand", "Discmania" %}
{%- for item in products %}
  <li>{{ item.brand }}</li>
{% endfor -%}
</ol>