// Скрипт для перезагрузки страницы при изменении ориентации устройства
const mediaQuery = window.matchMedia("(orientation: portrait)");
let lastOrientation = mediaQuery.matches;

// Слушаем изменения ориентации
mediaQuery.addEventListener("change", (e) => {
    // Добавляем небольшую задержку, чтобы дать устройству время на изменение ориентации
    setTimeout(() => {
        // Проверяем, действительно ли изменилась ориентация
        if (e.matches !== lastOrientation) {
            location.reload();
        }
        lastOrientation = e.matches;
    }, 50);
}); 