document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;

    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});


const scrollTopButton = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {

  if (window.scrollY > 200) {
    scrollTopButton.style.display = 'inline-block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const testimonialSlider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

testimonialSlider.addEventListener('mousedown', (e) => {
  isDown = true;
  testimonialSlider.classList.add('active');
  startX = e.pageX - testimonialSlider.offsetLeft;
  scrollLeft = testimonialSlider.scrollLeft;
});

testimonialSlider.addEventListener('mouseleave', () => {
  isDown = false;
  testimonialSlider.classList.remove('active');
});

testimonialSlider.addEventListener('mouseup', () => {
  isDown = false;
  testimonialSlider.classList.remove('active');
});

testimonialSlider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - testimonialSlider.offsetLeft;
  const walk = (x - startX) * 2; 
  testimonialSlider.scrollLeft = scrollLeft - walk;
});
