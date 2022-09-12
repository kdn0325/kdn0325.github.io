---
title: "컴퓨터 공학"
layout: archive
permalink: categories/computerscience
author_profile: true
sidebar_main: true
---

***

{% assign posts = site.categories.computerscience %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}