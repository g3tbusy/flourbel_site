document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, является ли устройство мобильным
    if (window.matchMedia('(max-width: 992px)').matches) {
        // Находим все ссылки внутри center-block-videoeditor
        const links = document.querySelectorAll('.center-block-videoeditor a');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Предотвращаем немедленный переход по ссылке
                
                const button = this.querySelector('.videoeditor-btn');
                const href = this.href;
                const target = this.target;
                
                // Добавляем класс для анимации нажатия
                button.classList.add('button-clicked');
                
                // Через 200мс возвращаем кнопку в исходное состояние
                setTimeout(() => {
                    button.classList.remove('button-clicked');
                }, 200);
                
                // Ждем 400мс (время анимации + возврата) перед переходом по ссылке
                setTimeout(() => {
                    if (target === '_blank') {
                        window.open(href, '_blank');
                    } else {
                        window.location.href = href;
                    }
                }, 400);
            });
        });
    }
}); 