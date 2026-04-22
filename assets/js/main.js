function toggleBio() {
  const section = document.querySelector('.bio-section');
  const bio = document.getElementById('bio-content');

  const isOpen = bio.style.display === 'block';

  bio.style.display = isOpen ? 'none' : 'block';
  section.classList.toggle('open', !isOpen);
}

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
