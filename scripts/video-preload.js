const head = document.head;
      
        function addPreloadVideo(href) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "video";
          link.type = "video/mp4";
          link.href = href;
          head.appendChild(link);
        }
      
        function isMobileOrTablet() {
          return window.matchMedia("(max-width: 1024px)").matches;
        }
      
        function preloadVideos() {
          if (isMobileOrTablet()) {
            // 📱 Мобильные и планшеты
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/main_page/main_1.mp4");
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/main_page/main_2.mp4");
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/showreel/mobile_showreel_cutted.mp4");
          } else {
            // 💻 Десктоп
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/main_page/main_1.mp4");
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/main_page/main_2.mp4");
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/main_page/main_3.mp4");
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/main_page/main_4.mp4");
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/main_page/main_5.mp4");
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/main_page/main_6.mp4");
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/main_page/main_7.mp4");
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/showreel/showreel_cutted.mp4");
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/cases/case_1.mp4");
            addPreloadVideo("https://cdn.jsdelivr.net/gh/g3tbusy/cdn-content@main/desktop/cases/case_2.mp4");
          }
        }
      
        document.addEventListener("DOMContentLoaded", preloadVideos);