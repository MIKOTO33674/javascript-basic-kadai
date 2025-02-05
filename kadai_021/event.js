const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  console.log('クリックされました');
});

btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});

  setTimeout(() => {
    Text.textContent = 'ボタンをクリックしました';
  }, 2000); 