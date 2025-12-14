---
layout: default
title: Home
---

<div class="profile-section">
<div class="profile-info">
{% capture profile_content %}

# Vikrant Vig

William R. Timken Professor of Finance 

Graduate School of Business, Stanford University

655 Knight Way, Stanford, CA 94305

e-mail: [vvig@stanford.edu](mailto:vvig@stanford.edu)

[Curriculum vitae]({{ '/assets/cv/CV.pdf' | relative_url }})  
[Stanford GSB page](https://www.gsb.stanford.edu/faculty-research/faculty/vikrant-vig)  
[Google Scholar Page](https://scholar.google.com/citations?user=dol7xHwAAAAJ&hl=en)

{% endcapture %}
{{ profile_content | markdownify }}
</div>

<img src="{{ '/assets/images/profile.png' | relative_url }}" alt="vikrant vig" class="profile-image">

</div>

## Research Papers

{% for paper in site.data.papers %}
<div class="paper-entry">
  <div class="paper-title">
    {{ forloop.index }}.
    <strong><a href="{{ paper.pdf }}">{{ paper.title }}</a></strong>

    {% if paper.appendix %}
      <a href="{{ paper.appendix }}" class="appendix-link">[Appendix]</a>
    {% endif %}

    {% if paper.abstract %}
      <button onclick="toggleAbstract('paper-{{ forloop.index }}')" class="abstract-toggle">
        Abstract
      </button>
    {% endif %}
  </div>

  <div class="paper-info">
    {% if paper.authors and paper.authors != "" %}(with {{ paper.authors }}){% endif %}
    {% if paper.date %}{% if paper.authors and paper.authors != "" %}, {% endif %}{{ paper.date }}{% endif %}
    {% if paper.journal %}, <em>{{ paper.journal }}</em>{% endif %}
    {% if paper.volume %}. vol.{{ paper.volume }}{% endif %}
    {% if paper.pages %}, pp {{ paper.pages }}{% endif %}
  </div>

  {% if paper.abstract %}
    <div id="abstract-paper-{{ forloop.index }}" class="abstract" style="display:none;">
      {{ paper.abstract }}
    </div>
  {% endif %}
</div>
{% endfor %}



## Working Papers

{% for workingpaper in site.data.working_papers.working_papers %}
<div class="workingpaper-entry">
  <div class="workingpaper-title">
    <strong>
      {% if workingpaper.pdf %}
        <a href="{{ workingpaper.pdf }}">{{ workingpaper.title }}</a>
      {% elsif workingpaper.link %}
        <a href="{{ workingpaper.link }}">{{ workingpaper.title }}</a>
      {% else %}
        {{ workingpaper.title }}
      {% endif %}
    </strong>

    {% if workingpaper.abstract %}
      <button
        onclick="toggleAbstract('workingpaper-{{ workingpaper.id }}')"
        class="abstract-toggle"
      >
        Abstract
      </button>
    {% endif %}
  </div>

  <div class="workingpaper-info">
    {% if workingpaper.authors and workingpaper.authors != "" %}
      (with {{ workingpaper.authors }})
    {% endif %}

    {% if workingpaper.date %}
      {% if workingpaper.authors and workingpaper.authors != "" %}, {% endif %}
      {{ workingpaper.date }}
    {% endif %}

    {% if workingpaper.journal %}, <em>{{ workingpaper.journal }}</em>{% endif %}
    {% if workingpaper.book %}, in <em>{{ workingpaper.book }}</em>{% endif %}
    {% if workingpaper.editors %}, edited by {{ workingpaper.editors }}{% endif %}
    {% if workingpaper.volume %}. vol.{{ workingpaper.volume }}{% endif %}
    {% if workingpaper.pages %}, pp {{ workingpaper.pages }}{% endif %}

    {% if workingpaper.publisher %}
      {% if workingpaper.location %}
        , {{ workingpaper.publisher }}, {{ workingpaper.location }}
      {% else %}
        , {{ workingpaper.publisher }}
      {% endif %}
    {% endif %}

    {% if workingpaper.type %}, {{ workingpaper.type }}{% endif %}
  </div>

  {% if workingpaper.abstract %}
    <div
      id="abstract-workingpaper-{{ workingpaper.id }}"
      class="abstract"
      style="display: none;"
    >
      {{ workingpaper.abstract }}
    </div>
  {% endif %}
</div>
{% endfor %}


## Teaching

Advanced Corporate Valuation

Capital Markets and Financing

PhD Econometrics

PhD Financial Economics III (Corporate Finance)

Foundations of Finance

Investments

