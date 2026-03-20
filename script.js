function scrollToGallery(){
  document.getElementById('gallery').scrollIntoView({behavior:'smooth'});
}

function openLightbox(img){
  const lb = document.getElementById('lightbox');
  lb.style.display='flex';
  document.getElementById('lightbox-img').src = img.src;
}

function closeLightbox(){
  document.getElementById('lightbox').style.display='none';
}

// Scroll animation
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});
faders.forEach(el=>observer.observe(el));
