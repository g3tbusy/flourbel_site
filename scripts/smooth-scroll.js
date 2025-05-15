/**
 * Enables smooth scrolling between sections
 */
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling CSS
  const style = document.createElement('style');
  style.textContent = `
    html {
      scroll-behavior: smooth;
    }
  `;
  document.head.appendChild(style);

  const allSections = [
    document.querySelector('.container-1'),
    document.querySelector('.section-2'),
    document.querySelector('.showreel'),
    document.querySelector('.section-3'),
    document.querySelector('.section-4'),
    document.querySelector('.footer')
  ];
  
  let currentSectionIndex = 0;
  let isScrolling = false;
  let lastScrollTime = 0;
  let scrollAccumulator = 0;
  const SCROLL_COOLDOWN = 1000; // 1 second cooldown
  const SCROLL_THRESHOLD = 50; // Threshold for touchpad scroll accumulation
  
  /**
   * Gets the current visible section based on scroll position
   */
  function getCurrentSection() {
    const scrollPosition = window.scrollY;
    let index = 0;
    
    for (let i = 0; i < allSections.length; i++) {
      const section = allSections[i];
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop - window.innerHeight/2 && 
          scrollPosition < sectionTop + sectionHeight - window.innerHeight/2) {
        index = i;
        break;
      }
    }
    
    return index;
  }
  
  currentSectionIndex = getCurrentSection();
  
  function scrollToSection(index) {
    const currentTime = Date.now();
    if (currentTime - lastScrollTime < SCROLL_COOLDOWN) {
      return; // Ignore scroll if cooldown hasn't passed
    }

    if (index >= 0 && index < allSections.length) {
      isScrolling = true;
      currentSectionIndex = index;
      allSections[index].scrollIntoView({ behavior: 'smooth' });
      lastScrollTime = currentTime;
      
      setTimeout(() => {
        isScrolling = false;
      }, SCROLL_COOLDOWN);
    }
  }
  
  // Handle mouse wheel scrolling
  window.addEventListener('wheel', function(e) {
    e.preventDefault();
    
    if (!isScrolling) {
      // Accumulate scroll events for touchpad
      scrollAccumulator += e.deltaY;
      
      // Check if accumulated scroll exceeds threshold
      if (Math.abs(scrollAccumulator) >= SCROLL_THRESHOLD) {
        if (scrollAccumulator > 0) {
          // Scroll down
          scrollToSection(currentSectionIndex + 1);
        } else {
          // Scroll up
          scrollToSection(currentSectionIndex - 1);
        }
        scrollAccumulator = 0; // Reset accumulator after scroll
      }
    }
  }, { passive: false });
  
  // Handle keyboard navigation
  window.addEventListener('keydown', function(e) {
    switch(e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        if (!isScrolling) {
          scrollToSection(currentSectionIndex + 1);
        }
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        if (!isScrolling) {
          scrollToSection(currentSectionIndex - 1);
        }
        break;
      case 'Home':
        e.preventDefault();
        if (!isScrolling) {
          scrollToSection(0);
        }
        break;
      case 'End':
        e.preventDefault();
        if (!isScrolling) {
          scrollToSection(allSections.length - 1);
        }
        break;
    }
  });
}); 
//