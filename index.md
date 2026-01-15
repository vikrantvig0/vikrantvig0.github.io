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

<div class="bio-section">
  <button class="bio-toggle" onclick="toggleBio()" type="button">
    Biography
  </button>

  <div id="bio-content" class="bio-content" style="display: none;">
    <p>
      I am the William R. Timken Chaired Professor of Finance at the Graduate School of Business,
      Stanford University. Previously, I held the Henry D. Bullock Chaired Professorship of Finance at the
      Kellogg School of Management and served as a Term Chair Professor of Finance at the London Business School.
    </p>

    <p>
      My research interest lies at the intersection of Law, Politics, and Organizations. The objective of my
      research is to further our understanding of ways by which we can structure financial contracts and design
      institutions to improve the overall efficiency of credit markets.
    </p>

    <p>
      My papers have been published in leading journals, including the <em>American Economic Review</em>,
      <em>Quarterly Journal of Economics</em>, <em>Journal of Political Economy</em>, <em>Journal of Finance</em>,
      <em>Journal of Financial Economics</em>, and <em>Review of Financial Studies</em>.
      I was previously Editor of the <em>Review of Finance</em> and later served on the advisory board of that journal.
    </p>

    <p>
      My research has won several awards and has been featured in leading media outlets, including
      <em>The Economist</em>, <em>The Financial Times</em>, <em>The New York Times</em>, and
      <em>The Wall Street Journal</em>.
    </p>

    <p>
      I received my PhD (with Distinction) from Columbia University; a Master of Finance, an MBA, and a Master
      of Science in Engineering from the University of Illinois; and my bachelor’s degree in mechanical
      engineering from the University of Delhi.
    </p>
  </div>
</div>

<script>
function toggleBio() {
  const section = document.querySelector('.bio-section');
  const bio = document.getElementById('bio-content');

  const isOpen = bio.style.display === 'block';

  bio.style.display = isOpen ? 'none' : 'block';
  section.classList.toggle('open', !isOpen);
}
</script>


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

  {%- assign pdf_name = paper.pdf | split:'/' | last -%}
  {%- assign paper_id = pdf_name | remove:'.pdf' | remove:'.PDF' -%}

  <div class="paper-entry">
    <div class="paper-title">
      {{ forloop.index }}.
      <strong>
        <a
          href="{{ paper.pdf | relative_url }}"
          data-paper-id="{{ paper_id }}"
          data-paper-title="{{ paper.title | escape }}"
          data-click-type="pdf"
        >{{ paper.title }}</a>
      </strong>

      {% if paper.appendix %}
        <a
          href="{{ paper.appendix | relative_url }}"
          class="appendix-link"
          data-paper-id="{{ paper_id }}"
          data-paper-title="{{ paper.title | escape }}"
          data-click-type="appendix"
        >[Appendix]</a>
      {% endif %}

      {% if paper.abstract %}
        <button
          class="abstract-toggle"
          type="button"
          data-paper-id="{{ paper_id }}"
          data-paper-title="{{ paper.title | escape }}"
          data-abstract-target="abstract-paper-{{ forloop.index }}"
          onclick="toggleAbstractById(this.dataset.abstractTarget)"
        >Abstract</button>
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

  {%- if workingpaper.pdf and workingpaper.pdf != "" -%}
    {%- assign wp_name = workingpaper.pdf | split:'/' | last -%}
    {%- assign wp_id = wp_name | remove:'.pdf' | remove:'.PDF' -%}
  {%- else -%}
    {%- assign wp_id = workingpaper.title | slugify -%}
  {%- endif -%}

  <div class="workingpaper-entry">
    <div class="workingpaper-title">
      {{ forloop.index }}.
      <strong>
        {% if workingpaper.pdf %}
          <a
            href="{{ workingpaper.pdf | relative_url }}"
            data-paper-id="{{ wp_id }}"
            data-paper-title="{{ workingpaper.title | escape }}"
            data-click-type="pdf"
          >{{ workingpaper.title }}</a>
        {% elsif workingpaper.link %}
          <a
            href="{{ workingpaper.link }}"
            data-paper-id="{{ wp_id }}"
            data-paper-title="{{ workingpaper.title | escape }}"
            data-click-type="external"
          >{{ workingpaper.title }}</a>
        {% else %}
          {{ workingpaper.title }}
        {% endif %}
      </strong>

      {% if workingpaper.abstract %}
        <button
          class="abstract-toggle"
          type="button"
          data-paper-id="{{ wp_id }}"
          data-paper-title="{{ workingpaper.title | escape }}"
          data-abstract-target="abstract-workingpaper-{{ forloop.index }}"
          onclick="toggleAbstractById(this.dataset.abstractTarget)"
        >Abstract</button>
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

  function toggleAbstractById(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = (el.style.display === 'none' || !el.style.display) ? 'block' : 'none';
  }
</script>




## Teaching

Advanced Corporate Valuation

Capital Markets and Financing

PhD Econometrics

PhD Financial Economics III (Corporate Finance)

Foundations of Finance

Investments

