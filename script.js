function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToGallery() {
  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

function openLightbox(img) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = img.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
