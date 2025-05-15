/**
 * Preloads key images used throughout the site for better user experience
 */
function preloadImages() {
  const images = [
    'images/background.png',
    'images/2-2-2.png',
    'images/showreel_bg_1.png',
    'images/showreel_bg_2.png',
    'images/lamp.png',
    'images/videographer.png',
    'images/portfolio.png',
    'images/montajer.png',
    'images/contacts_bg.png',
    'images/image-4.png',
    'images/DANIEL MELNIKOV.svg',
    'images/footer_qr.png',
    'images/section-3/sky_right.png',
    'images/section-3/sky_left.png'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

window.addEventListener('load', preloadImages); 