---
layout: single
title: "Om Discer formål og tilblivelse"
permalink: /om/
excerpt: "Discer er skrevet for at formidle frisbeesporten, så du kan kaste dig ud i denne fortrinlige verden, hvor alle kan være med."
author_profile: true
sitemap: false
breadcrumbs: true
---

Discer er et gratis medie for alle brugerne. Der ligger rigtig mange timer bag ved artiklerne og indholdet på sitet.

Discer ejes og drives af Lars Olesen (chefredaktør), som er tidligere medejer af Discimport.dk.

Lars Olesen er cand.scient. og har læst Sundhed og Idræt på Syddansk Universitet. Under studiet fik han øjnene op for ultimate frisbee og senere discgolf. Han har i flere år undervist i discsporten på [Vejle Idrætshøjskole](https://www.vih.dk/).

## Gratis medie med reklamer

Discer finansierer bl.a. driften gennem reklamer. Der kan optræde bannerannoncer og nogle links på sitet er affiliate links. Affiliate links er tydeligt markeret med (*). Det betyder, at vi tjener en lille kommision, hvis du køber produkter efter at have klikket på et link til en leverandør. Produkterne ikke bliver dyrere af, at du støtter Discer. Prisen for dig er den samme.

Når der er affiliate links i en artikel, betyder det ikke at alt indholdet er kommercielt.

Indtjeningen går til at støtte arbejdet med hjemmesiden, den løbende opdatering og optimering og til nye tiltag. Vi håber, at du vil støtte op om arbejdet.

Du kan aktivere et **reklamefrit Discer** ved at støtte Discer. Forhåbentlig giver det dig en endnu bedre oplevelse på sitet.

Du kan også støtte os ved at købe os en kop kaffe, hvis du synes, at vi har fortjent det.

{% include buymeacoffee.html %}

## Materiale på sitet

Vi bruger billeder fra [Unsplash.com](https://unsplash.com/){: rel="nofollow noopener" } og skriver selv alle artiklerne.

Ikoner brugt på sitet er lavet af <a href="https://www.flaticon.com/authors/dave-gandy" rel="nofollow noopener" title="Dave Gandy">Dave Gandy</a> fra <a rel="nofollow noopener" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.

## Tal om Discer

- Blogindlæg: {{ site.posts.size }}

## Forfattere

{% assign featured_authors = site.data.authors %}
{% for authors in featured_authors %}
  {% assign author=authors[1] %}
  {% include author.html author=author %}
{% endfor %}
