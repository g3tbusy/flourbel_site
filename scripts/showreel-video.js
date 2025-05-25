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
      // Проверяем ширину экрана
      if (window.innerWidth <= 1367) {
        // Для планшетов - перенаправляем на VK
        window.open('https://vk.com/video537084431_456242127', '_blank');
      } else {
        // Для десктопов - старое поведение
        mp4.style.display = 'none';
        if (clickText) clickText.style.display = 'none';
        if (videoContainer) videoContainer.style.display = 'none';
        if (vkIframe) {
          vkIframe.style.zIndex = '5';
          vkIframe.style.position = 'relative';
        }
      }
    });
  }
}); 