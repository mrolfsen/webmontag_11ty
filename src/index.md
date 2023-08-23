---
title: "Home"
layout: "_sitetemplate"
bodyClass: "start"
date: "2023-09-18"

---

{% extends "_starttemplate.njk" %}


{% block einleitung %} 

Der Webmontag Bonn ist ein zwangloses Zusammentreffen webaffiner Menschen, die bei einem Kaffee oder Bier Kontakte kn&uuml;pfen und sich &uuml;ber die aktuelle Entwicklung im Web austauschen m&ouml;chten. In der Regel gibt es ein bis zwei Vortr&auml;ge &ndash; jeder ist eingeladen, sich einzubringen. Bitte k&uuml;ndigt euren Vortrag im Vorfeld [hier](mailto:welcome@wmbn.de) an, das hilft uns ungemein bei der Koordination. Eine **[Vortrags-Wunschliste findet ihr hier](/vortrags-wunschliste/)**  

{% endblock %}


{% block wannwo %} 

In der Regel findet der Webmontag am DRITTER MONTAG IM MONAT abends um 19 UHR im **"Biergarten Alter Zoll"** statt.

{% endblock %}




{% block firsttalk %}
    {% for item in talks2020 %}              
        {% if (item.talk_startseite === 1)  %} 
            {% include 'src/_includes/_talk-start-item.njk' %}
        {% else %}
            Boffii! 1
        {% endif %}        
    {% endfor %}    

{% endblock %}

<!-- Das hier klappt noch nicht -->

{% block secondtalk %}
    
    {% for item in talks2020 %}
        {% if (item.talk_startseite === 2)  %} 
            {% include 'src/_includes/_talk-start-item.njk' %}
        {% else %}
            Boffllll! 2
        {% endif %}        
    {% endfor %}

{% endblock %}

 