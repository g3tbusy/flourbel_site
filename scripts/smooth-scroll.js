/**
 * Enables smooth scrolling between sections
 */
document.addEventListener('DOMContentLoaded', function() {
  const allSections = [
    document.querySelector('.container-1'),
    document.querySelector('.section-2'),
    document.querySelector('.showreel'),
    document.querySelector('.section-3'),
    document.querySelector('.section-4'),
    document.querySelector('.footer')
  ];
  
  let currentSectionIndex = 0;
  
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
  
  let isScrolling = false;
  
  // Handle mouse wheel scrolling
  window.addEventListener('wheel', function(e) {
    e.preventDefault();
    
    if (!isScrolling) {
      isScrolling = true;
      
      if (e.deltaY > 0) {
        // Scroll down
        if (currentSectionIndex < allSections.length - 1) {
          currentSectionIndex++;
        }
      } else {
        // Scroll up
        if (currentSectionIndex > 0) {
          currentSectionIndex--;
        }
      }
      
      allSections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    }
  }, { passive: false });
  
  // Handle keyboard navigation
  window.addEventListener('keydown', function(e) {
    switch(e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        if (!isScrolling && currentSectionIndex < allSections.length - 1) {
          isScrolling = true;
          currentSectionIndex++;
          allSections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        if (!isScrolling && currentSectionIndex > 0) {
          isScrolling = true;
          currentSectionIndex--;
          allSections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }
        break;
      case 'Home':
        e.preventDefault();
        if (!isScrolling) {
          isScrolling = true;
          currentSectionIndex = 0;
          allSections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }
        break;
      case 'End':
        e.preventDefault();
        if (!isScrolling) {
          isScrolling = true;
          currentSectionIndex = allSections.length - 1;
          allSections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }
        break;
    }
  });
}); 