const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
  setTimeout(() => {
    console.log('ボタンをクリックしました');
  }, 2000);
})