/**
 * Animates clouds when section 3 is visible
 */
document.addEventListener('DOMContentLoaded', function() {
  const section3 = document.getElementById('section-3');
  const skyRight = document.querySelector('.sky-right');
  const skyLeft = document.querySelector('.sky-left');
  let cloudsAnimated = false;

  if ('IntersectionObserver' in window && section3 && skyRight && skyLeft) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !cloudsAnimated) {
          skyRight.classList.add('cloud-animate');
          skyLeft.classList.add('cloud-animate');
          cloudsAnimated = true;
        }
      });
    }, { threshold: 0.3 });

    observer.observe(section3);
  }
}); 