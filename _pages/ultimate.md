---
layout: single
permalink: /ultimate/
title: &title "Alt om ultimate frisbee"
excerpt: "Ultimate Frisbee, også kendt som Ultimate, er en hurtig og spændende holdsport, der involverer en disc og to målzoner."
header:
  overlay_image: https://images.unsplash.com/photo-1591337819702-5c21810edd47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=630&w=1200&q=10
  caption: *title
author_profile: true
toc: false
faq:
  - question: Hvad vil det sige at have en god kondition?
    answer: Du er i god kondition, når konditallet er tilstrækkelig højt. Din kondition varierer med alderen og for mænd og kvinder. Du kan kigge i vores [tabeller over kondital](/kondital/), hvis du gerne vil have vurderet dit.
  - question: Hvad er dårlig kondition?
    answer: Hvis konditallet er lavt ifølge de gængse [normer for kondital](/kondital/), så siger man, at du er i dårlig kondition. Konditionen afhænger især af alderen.
breadcrumbs: true
---

Ultimate Frisbee, også kendt som Ultimate, er en hurtig og spændende holdsport, der involverer en disc og to målzoner.

Ultimate er en non-kontakt sport, hvilket betyder, at spillere ikke må tackle eller andre fysiske kontakter, når de forsøger at score et mål.

I stedet skal spillerne passere disken til hinanden og navigere den gennem modstanderens forsvarszone for at score et mål. Ultimate er en sport, der kræver både fysisk udholdenhed og mental tæft, da spillere skal tænke strategisk og samarbejde som et hold for at opnå succes på banen.

Hvis du leder efter en sjov og udfordrende sport, der kræver både fysiske og mentale færdigheder, så er Ultimate måske lige noget for dig!

{% assign site_posts = site.posts | where: "category", "Ultimate" | where_exp: "post", "post.url != page.url" | sort: "date" %}

{% if site_posts.size > 0 %}
## Artikler om ultimate

<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html type="grid" show_excerpt="false" %}
  {% endfor %}
</div>
{% endif %}
