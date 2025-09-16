// Smooth fade-in when scrolling
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Gallery hover effect (optional extra animation)
const images = document.querySelectorAll('.image-placeholder');
images.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.1)';
  });
  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
  });
});
