const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  console.log('クリックされました');
});

btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});

setTimeout(() => {
  text.textContent = '2秒後に書き換えられました';
}, 2000);