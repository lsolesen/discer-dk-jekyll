---
layout: single
permalink: /discgolf/
title: &title "Alt om Discgolf"
excerpt: "Discgolf er en sjov og spændende sport, der involverer at kaste en disc mod et mål. Her dykker vi ned i alle detaljerne."
header:
  overlay_image: https://images.unsplash.com/photo-1655161915224-be1d887802aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=630&w=1200&q=10
  caption: *title
author_profile: true
toc: true
faq:
  - question: Hvad vil det sige at have en god kondition?
    answer: Du er i god kondition, når konditallet er tilstrækkelig højt. Din kondition varierer med alderen og for mænd og kvinder. Du kan kigge i vores [tabeller over kondital](/kondital/), hvis du gerne vil have vurderet dit.
  - question: Hvad er dårlig kondition?
    answer: Hvis konditallet er lavt ifølge de gængse [normer for kondital](/kondital/), så siger man, at du er i dårlig kondition. Konditionen afhænger især af alderen.
breadcrumbs: true
---

Discgolf er en sjov og spændende sport, der involverer at kaste en disc mod et mål.

Discgolf ligner golf, men i stedet for at slå en bold med en kølle, kaster du en disc mod et mål. Målet er at nå målet i færrest mulige kast.

Discgolf er en sport, der kræver både præcision og udholdenhed, da du skal navigere disken gennem træer, buske og andre forhindringer for at nå målet.

Discgolf er en sport, der er tilgængelig for alle aldre og færdighedsniveauer, så uanset om du er en erfaren spiller eller helt nybegynder, kan du være med!

## Artikler om discgolf

{% assign site_posts = site.posts | where: "category", "Discgolf" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" show_excerpt="false" %}
  {% endfor %}
{% endif %}

</div>
