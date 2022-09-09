---
title: "컴퓨터 공학"
layout: archive
permalink: categories/cs
author_profile: true
sidebar_main: true
---

***

{% assign posts = site.categories.CS %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}