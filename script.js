// Intersection Observer for fade in/out
const fadeSections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.transform = 'translateY(20px)';
    }
  });
}, { threshold: 0.1 });

fadeSections.forEach(section => observer.observe(section));

// Fade in gallery images individually
const galleryImages = document.querySelectorAll('.gallery img');

const galleryObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
    } else {
      entry.target.style.opacity = 0;
    }
  });
}, { threshold: 0.1 });

galleryImages.forEach(img => galleryObserver.observe(img));
