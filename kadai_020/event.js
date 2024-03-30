const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.querySelector('h2').innerHTML = "ボタンをクリックしました";
    console.log('クリックされました!');
});