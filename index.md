---
layout: default
title: Home
---
<div class="top-logo"> 
  <img src="{{ '/assets/images/GSB_logo.png' | relative_url }}"  alt="Stanford GSB" />
</div>

<div class="profile-section">
<div class="profile-info">
{% capture profile_content %}

# Vikrant Vig

William R. Timken Professor of Finance 

Graduate School of Business, Stanford University

655 Knight Way, Stanford, CA 94305

e-mail: [vvig@stanford.edu](mailto:vvig@stanford.edu)

[Curriculum Vitae]({{ '/assets/cv/CV.pdf' | relative_url }})  
[Stanford GSB page](https://www.gsb.stanford.edu/faculty-research/faculty/vikrant-vig)  
[Google Scholar Page](https://scholar.google.com/citations?user=dol7xHwAAAAJ&hl=en)

{% endcapture %}
{{ profile_content | markdownify }}
</div>

<img src="{{ '/assets/images/profile.png' | relative_url }}" alt="vikrant vig" class="profile-image">

</div>

## Papers

<div class="papers-tabs" role="tablist" aria-label="Papers tabs">
  <button
    class="tab-btn is-active"
    id="tab-published"
    role="tab"
    aria-selected="true"
    aria-controls="panel-published"
    onclick="showPapersTab('published')"
    type="button"
  >
    Published Papers
  </button>

  <button
    class="tab-btn"
    id="tab-working"
    role="tab"
    aria-selected="false"
    aria-controls="panel-working"
    onclick="showPapersTab('working')"
    type="button"
  >
    Working Papers
  </button>
</div>

<div class="tab-panel is-active" id="panel-published" role="tabpanel" aria-labelledby="tab-published">
  {% for paper in site.data.papers %}
  <div class="paper-entry">
    <div class="paper-title">
      {{ forloop.index }}.
      <strong><a href="{{ paper.pdf }}">{{ paper.title }}</a></strong>

      {% if paper.appendix %}
        <a href="{{ paper.appendix }}" class="appendix-link">[Appendix]</a>
      {% endif %}

      {% if paper.abstract %}
        <button onclick="toggleAbstract('paper-{{ forloop.index }}')" class="abstract-toggle" type="button">
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
</div>

<div class="tab-panel" id="panel-working" role="tabpanel" aria-labelledby="tab-working">
  {% for workingpaper in site.data.working_papers.working_papers %}
  <div class="workingpaper-entry">
    <div class="workingpaper-title">
      {{ forloop.index }}.
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
        <button onclick="toggleAbstract('workingpaper-{{ forloop.index }}')" class="abstract-toggle" type="button">
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
      <div id="abstract-workingpaper-{{ forloop.index }}" class="abstract" style="display:none;">
        {{ workingpaper.abstract }}
      </div>
    {% endif %}
  </div>
  {% endfor %}
</div>

<script>
  function showPapersTab(which) {
    const pubBtn = document.getElementById('tab-published');
    const workBtn = document.getElementById('tab-working');
    const pubPanel = document.getElementById('panel-published');
    const workPanel = document.getElementById('panel-working');

    const isPublished = which === 'published';

    pubBtn.classList.toggle('is-active', isPublished);
    workBtn.classList.toggle('is-active', !isPublished);

    pubBtn.setAttribute('aria-selected', isPublished ? 'true' : 'false');
    workBtn.setAttribute('aria-selected', !isPublished ? 'true' : 'false');

    pubPanel.classList.toggle('is-active', isPublished);
    workPanel.classList.toggle('is-active', !isPublished);
  }
</script>



## Teaching

Advanced Corporate Valuation

Capital Markets and Financing

PhD Econometrics

PhD Financial Economics III (Corporate Finance)

Foundations of Finance

Investments

