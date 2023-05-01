---
title: "Issue"
layout: archive
permalink: categories/issue
author_profile: true
sidebar_main: true
---

***

{% assign posts = site.categories.issue %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}