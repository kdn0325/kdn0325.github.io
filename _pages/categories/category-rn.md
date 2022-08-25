---
title: "Jekyll/Github 블로그 R&D"
layout: archive
permalink: categories/rn
author_profile: true
sidebar_main: true
---

***

{% assign posts = site.categories.Rn %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}