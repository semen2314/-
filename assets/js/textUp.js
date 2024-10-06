document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        const description = this.previousElementSibling; // Получаем блок с текстом до кнопки
        description.classList.toggle('expanded'); // Добавляет или убирает класс "expanded"

        // Изменяем текст кнопки в зависимости от состояния
        if (description.classList.contains('expanded')) {
            this.innerText = 'Скрыть'; // Меняем текст кнопки
        } else {
            this.innerText = 'Читать далее'; // Меняем текст кнопки
        }
    });
});
