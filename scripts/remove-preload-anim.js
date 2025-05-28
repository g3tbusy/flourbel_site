window.addEventListener("load", () => {
    const videos = document.querySelectorAll("video");
    const preloader = document.getElementById("preloader");
  
    if (!preloader) return;
  
    let loadedVideos = 0;
    // const totalVideos = videos.length;
    const totalVideos = 5;
  
    if (totalVideos === 0) {
      removePreloader();
      return;
    }
  
    // Проверка загрузки каждого видео
    videos.forEach((video) => {
      // Если уже загружено
      if (video.readyState >= 3) {
        loadedVideos++;
        if (loadedVideos === totalVideos) removePreloader();
      } else {
        video.addEventListener("loadeddata", () => {
          loadedVideos++;
          if (loadedVideos === totalVideos) removePreloader();
        });
        // На случай ошибок загрузки
        video.addEventListener("error", () => {
          loadedVideos++;
          if (loadedVideos === totalVideos) removePreloader();
        });
      }
    });
  
    function removePreloader() {
      preloader.style.opacity = "0";
      preloader.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }
  });
  