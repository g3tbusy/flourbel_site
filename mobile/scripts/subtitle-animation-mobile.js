document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, является ли устройство мобильным
  if (window.matchMedia('(min-width: 993px)').matches) {
    return; // Выходим, если это ПК версия
  }

  const subtitleElement = document.getElementById('animated-subtitle-mobile') || document.getElementById('animated-subtitle');
  
  // Используем неразрывные пробелы для красивого вида
  const firstLine = ["БОЛЬШЕ,\u00A0", "\u00A0ЧЕМ"];
  const secondLine = ["ПРОСТО\u00A0", "\u00A0ВИДЕО"];
  
  function resetAnimation() {
    subtitleElement.innerHTML = "";
    const line1 = document.createElement('div');
    line1.className = 'line';
    const line2 = document.createElement('div');
    line2.className = 'line';
    subtitleElement.appendChild(line1);
    subtitleElement.appendChild(line2);
    firstLine.forEach(word => {
      const span = document.createElement('span');
      span.textContent = word;
      line1.appendChild(span);
    });
    secondLine.forEach(word => {
      const span = document.createElement('span');
      span.textContent = word;
      line2.appendChild(span);
    });
    return {
      firstLineSpans: Array.from(line1.querySelectorAll('span')),
      secondLineSpans: Array.from(line2.querySelectorAll('span'))
    };
  }
  
  function animateSubtitle() {
    const spans = resetAnimation();
    
    let delay = 300;
    const wordDelay = 1000;
    
    spans.firstLineSpans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('visible');
      }, delay);
      delay += wordDelay;
    });
    
    spans.secondLineSpans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('visible');
      }, delay);
      delay += wordDelay;
    });
    
    // Через 1 секунду после появления — исчезновение и повтор
    setTimeout(() => {
      subtitleElement.classList.add('subtitle-disappear');
      setTimeout(() => {
        subtitleElement.innerHTML = '';
        subtitleElement.classList.remove('subtitle-disappear');
        setTimeout(() => {
          animateSubtitle();
        }, 100);
      }, 1000);
    }, delay + 1000);
  }
  
  // Меньший шрифт для мобильных
  subtitleElement.style.fontSize = '22px';
  subtitleElement.style.fontWeight = '300';
  subtitleElement.style.letterSpacing = '0.02em';
  
  animateSubtitle();
}); 