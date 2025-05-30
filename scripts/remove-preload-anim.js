(() => {
  const removePreloader = () => {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;
    
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";
    setTimeout(() => preloader.remove(), 2000);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(removePreloader, 3000)); // 3000 need
  } else {
    setTimeout(removePreloader, 3000);
  }
})();
  