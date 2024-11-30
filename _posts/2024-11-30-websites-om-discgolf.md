---
title: &title "Websites om discgolf"
seo_title: "Websites om discgolf"
excerpt: "Der findes masser af spændende websites om discgolf. Her har vi listet nogle af dem, hvis du vil have lidt mere inspiration."
permalink: /websites-om-discgolf/
language: da
header:
  teaser: https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Discgolf
tags:
  - discgolf
last_modified_at: 2024-11-29T10:21:26Z
websites:
  - url: https://www.anhyzer.dk/
    name: "Anhyzer.dk"
    description: "Anhyzer.dk blev lanceret i efteråret 2021. Ambitionen er foreløbigt at være en internetportal, der kan supplere det danske disc golf miljø. Siden bestræber sig på at favne bredt, ved at introducere helt nye spillere til sporten, hjælpe begyndere til at blive øvede, og tilbyde øvede spillere ét sted at finde information, nyheder, turneringer mv."
---

Der findes masser af spændende websites om discgolf. Her har vi listet nogle af dem, hvis du vil have lidt mere inspiration.

{% for website in websites %}
## {{ website.name }}

![Screenshot af {{ website.name }}](https://v1.screenshot.11ty.dev/{{ website.url | url_encode }}/large/)

{{ website.description | markdownify }}
{% endfor %}

## Butikker med frisbees og golfdiscs

Hvis du er på udkig efter butikker, hvor du kan købe frisbees og golfdiscs, så har vi skrevet denne guide til [discgolf butikker](/discgolf-butikker/).