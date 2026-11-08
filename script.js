// Массив из 3 цветов
const colors = ['#ffe4e9', '#e0f0ff', '#f5e6d3']; // светло-розовый, светло-голубой, нежно-бежевый
let currentColor = 0;

// 1. Смена цвета фона по кругу
document.getElementById('bg')?.addEventListener('click', function() {
  currentColor = (currentColor + 1) % colors.length;
  document.body.style.background = colors[currentColor];
});

// 2. Показать текущую дату
document.getElementById('date')?.addEventListener('click', function() {
  alert('Сегодня: ' + new Date().toLocaleDateString('ru-RU'));
});

// 3. Часы в заголовке вкладки
setInterval(function() {
  const time = new Date().toLocaleTimeString('ru-RU');
  document.title = time + ' | Культура чаепития';
}, 1000);
