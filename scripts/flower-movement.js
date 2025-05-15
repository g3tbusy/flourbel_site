/**
 * Creates interactive flower movement on showreel section
 */
document.addEventListener('DOMContentLoaded', function() {
  const flowers = document.querySelectorAll('.flower-repel');
  const showreel = document.querySelector('.showreel');
  
  const flowerMaxDistance = 800;
  const flowerMaxMove = 100;
  
  // Handle mouse movement
  showreel.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    flowers.forEach(flower => {
      const rect = flower.getBoundingClientRect();
      
      const flowerCenterX = rect.left + rect.width / 2;
      const flowerCenterY = rect.top + rect.height / 2;
      
      const distanceX = mouseX - flowerCenterX;
      const distanceY = mouseY - flowerCenterY;
      
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      if (distance < flowerMaxDistance) {
        const proximity = 1 - (distance / flowerMaxDistance);
        
        const moveX = -distanceX * proximity * (flowerMaxMove / flowerMaxDistance);
        const moveY = -distanceY * proximity * (flowerMaxMove / flowerMaxDistance);
        
        let finalMoveX = moveX;
        let finalMoveY = moveY;
        
        // Customize movement for specific flowers
        if (flower.id === 'flower1' && moveX > 0) {
          finalMoveX = 0;
        }
        
        if (flower.id === 'flower2' && moveY < 0) {
          finalMoveY = 0;
        }
        
        if (flower.id === 'flower3') {
          if (moveX < 0) finalMoveX = 0;
          if (moveY < 0) finalMoveY = 0;
        }
        
        flower.style.transform = `translate(${finalMoveX}px, ${finalMoveY}px)`;
      } else {
        flower.style.transform = 'translate(0, 0)';
      }
    });
  });
  
  // Reset flower positions on mouse leave
  showreel.addEventListener('mouseleave', () => {
    flowers.forEach(flower => {
      flower.style.transform = 'translate(0, 0)';
    });
  });
}); 