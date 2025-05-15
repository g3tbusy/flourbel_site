/**
 * Creates interactive movement of cards on mouse movement
 */
document.addEventListener('DOMContentLoaded', function() {
  const container1 = document.querySelector('.container-1');
  const cards = document.querySelectorAll('.card-11-center-left, .card-11-lower-left, .card-12-center-left, .card-7-center, .card-11-center, .card-11-lower, .card-12-center');
  
  const cardMaxDistance = 600;
  const cardMaxMove = 40;
  const cardMaxRotate = 2.5;
  
  // Store initial card positions
  const cardPositions = {};
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const transform = window.getComputedStyle(card).transform;
    const isIdentity = transform === 'none' || transform === 'matrix(1, 0, 0, 1, 0, 0)';
    
    cardPositions[card.className] = {
      left: rect.left + rect.width / 2,
      top: rect.top + rect.height / 2,
      originalTransform: isIdentity ? '' : transform
    };
  });
  
  // Mouse movement handler
  container1.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    cards.forEach(card => {
      const cardInfo = cardPositions[card.className];
      
      if (!cardInfo) return;
      
      const distanceX = mouseX - cardInfo.left;
      const distanceY = mouseY - cardInfo.top;
      
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      if (distance < cardMaxDistance) {
        const proximity = 1 - (distance / cardMaxDistance);
        
        const randomFactor = 0.7 + Math.random() * 0.6;
        const moveX = distanceX * proximity * (cardMaxMove / cardMaxDistance) * randomFactor;
        const moveY = distanceY * proximity * (cardMaxMove / cardMaxDistance) * randomFactor;
        
        const rotateZ = (Math.atan2(distanceY, distanceX) * 180 / Math.PI) * 0.05 * proximity * randomFactor;
        const rotate = Math.min(Math.abs(rotateZ), cardMaxRotate) * Math.sign(rotateZ);
        
        card.style.transform = `${cardInfo.originalTransform} translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`;
      } else {
        card.style.transform = cardInfo.originalTransform;
      }
    });
  });
  
  // Reset card positions on mouse leave
  container1.addEventListener('mouseleave', () => {
    cards.forEach(card => {
      const cardInfo = cardPositions[card.className];
      if (cardInfo) {
        card.style.transform = cardInfo.originalTransform;
      }
    });
  });
}); 