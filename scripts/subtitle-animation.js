/**
 * Animates the subtitle with a typewriter-like effect
 */
document.addEventListener('DOMContentLoaded', function() {
  const subtitleElement = document.getElementById('animated-subtitle');
  
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
  
  animateSubtitle();
}); 