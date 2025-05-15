/**
 * Preloads key images used throughout the site for better user experience
 */
function preloadImages() {
  const images = [
    'images/container-1/background.png',
    'images/general/noise_bg.png',
    'images/section-3/moon.png',
    'images/general/videographer_bg.png',
    'images/general/portfolio_bg.png',
    'images/general/videoeditor_bg.png',
    'images/general/contacts_bg.png',
    'images/general/photo.png',
    'images/general/DANIEL MELNIKOV.svg',
    'images/general/footer_qr.png',
    'images/section-3/sky_right.png',
    'images/section-3/sky_left.png'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

window.addEventListener('load', preloadImages); 