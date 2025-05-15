/**
 * Scales the main container based on viewport size
 */
function scaleContainer() {
  const baseWidth = 1920;
  const baseHeight = 1000;
  const scale = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeight);
  document.documentElement.style.setProperty('--container-scale', scale);
}

window.addEventListener('resize', scaleContainer);
window.addEventListener('DOMContentLoaded', scaleContainer); 