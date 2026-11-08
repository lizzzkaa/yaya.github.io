const colors = ['#ffe4e9', '#e0f0ff', '#f5e6d3']; // розовый → голубой → бежевый
let current = 0;

document.getElementById('bg')?.addEventListener('click', function () {
  current = (current + 1) % colors.length;
  document.body.style.background = colors[current];
});

document.getElementById('date')?.addEventListener('click', function () {
  alert('Сегодня: ' + new Date().toLocaleDateString('ru-RU'));
});

setInterval(function () {
  document.title = new Date().toLocaleTimeString('ru-RU') + ' | Культура чаепития';
}, 1000);
