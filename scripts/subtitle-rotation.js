/**
 * Animates subtitle words rotation effect
 */
document.addEventListener('DOMContentLoaded', function() {
  const words = document.querySelectorAll('.subtitle-2');
  let currentIndex = 0;

  function animateWords() {
    words.forEach(word => {
      word.classList.remove('active', 'exit');
    });

    words[currentIndex].classList.add('active');

    setTimeout(() => {
      words[currentIndex].classList.add('exit');
    }, 1000);

    currentIndex = (currentIndex + 1) % words.length;
  }

  animateWords();
  setInterval(animateWords, 2000);
}); 