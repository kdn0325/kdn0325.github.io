---
title: "Jekyll/Github 블로그 R&D"
layout: archive
permalink: categories/blog
author_profile: true
sidebar_main: true
---

***

{% assign posts = site.categories.Blog %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}