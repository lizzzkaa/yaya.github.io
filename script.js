// 1. Смена цвета фона
document.getElementById('bg')?.addEventListener('click', function() {
  document.body.style.background = '#e8d5b7';
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
