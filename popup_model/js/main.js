const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
btn.onclick = () => {
    modal.classList.add('active');
}

closeBtn.onclick = () => {
    modal.classList.remove('active');
}