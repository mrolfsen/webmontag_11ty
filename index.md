---
title: "Home"
layout: "_sitetemplate"
bodyClass: "start"
date: 2019-01-01
nextDate: "19.09.2022"
nextMonth: "September"
tags:
    - headerNavi
---

{% extends "_starttemplate.njk" %}


{% block einleitung %} 

 ###### Der Webmontag Bonn ist ein zwangloses Zusammentreffen webaffiner Menschen, die bei einem Kaffee oder Bier Kontakte kn&uuml;pfen und sich &uuml;ber die aktuelle Entwicklung im Web austauschen m&ouml;chten. In der Regel gibt es ein bis zwei Vortr&auml;ge &ndash; jeder ist eingeladen, sich einzubringen. Bitte k&uuml;ndigt euren Vortrag im Vorfeld [hier](mailto:welcome@wmbn.de) an, das hilft uns ungemein bei der Koordination. Eine **[Vortrags-Wunschliste findet ihr hier](/vortrags-wunschliste/)**  

{% endblock %}


{% block wannwo %} 

In der Regel findet der Webmontag am DRITTER MONTAG IM MONAT abends um 19 UHR im **"Biergarten Alter Zoll"** statt.

{% endblock %}


{% block firsttalk %}

<li><svg class="largeIcon"> <use xlink:href="#icon-talk"> &nbsp; </use> </svg>

## Biergarten Edition
Im {{ nextMonth }} treffen wir uns wieder zur Biergarten-Edition um 19:00 Uhr im **Biergarten am alten Zoll** bei Essen und Getränken zum entspannten Netzwerken und Nerd-Talken.
## "Web-Stammtisch im Biergarten"
Kontakt: Lina Dillmann  
[welcome@wmbn.de](mailto:welcome@wmbn.de)

</li>

{% endblock %}

