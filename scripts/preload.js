/**
 * Preloads key images used throughout the site for better user experience
 */
function preloadImages() {
  const images = [
    'images/container-1/background.png',
    'images/general/noise_bg.webp',
    'images/section-3/moon.webp',
    'images/general/videographer_bg.png',
    'images/general/portfolio_bg.webp',
    'images/general/videoeditor_bg.webp',
    'images/general/contacts_bg.webp',
    'images/general/photo.webp',
    'images/general/DANIEL MELNIKOV.svg',
    'images/general/footer_qr.webp',
    'images/section-3/sky_right.webp',
    'images/section-3/sky_left.webp'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

window.addEventListener('load', preloadImages); 