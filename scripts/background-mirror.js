/**
 * Toggles background mirror effect for visual enhancement
 */
function toggleBackgroundMirror() {
  const section2Bg = document.querySelector('.section-2-bg');
  const section4Bg = document.querySelector('.section-4-bg');
  const currentTransform = section2Bg.style.transform;
  const newTransform = currentTransform === 'scaleX(-1)' ? 'scaleX(1)' : 'scaleX(-1)';
  section2Bg.style.transform = newTransform;
  section4Bg.style.transform = newTransform;
}

setInterval(toggleBackgroundMirror, 500); 