/**
 * Handles showreel video interaction
 */
document.addEventListener('DOMContentLoaded', function() {
  const mp4 = document.querySelector('.showreel-mp4');
  const clickText = document.querySelector('.click-text');
  const videoContainer = document.querySelector('.video-container');
  const vkIframe = document.querySelector('.showreel-video');
  
  if (mp4) {
    mp4.addEventListener('click', function() {
      mp4.style.display = 'none';
      if (clickText) clickText.style.display = 'none';
      if (videoContainer) videoContainer.style.display = 'none';
      if (vkIframe) {
        vkIframe.style.zIndex = '5';
        vkIframe.style.position = 'relative';
      }
    });
  }
}); 