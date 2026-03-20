function scrollToGallery(){
  document.getElementById('gallery').scrollIntoView({behavior:'smooth'});
}

function openLightbox(img, text){
  document.getElementById('lightbox').style.display='flex';
  document.getElementById('lightbox-img').src=img.src;
  document.getElementById('lightbox-text').innerText=text;
}

function closeLightbox(){
  document.getElementById('lightbox').style.display='none';
}
