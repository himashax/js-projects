// select modal-btn,modal-overlay,close-btn
const openBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.modal-overlay');

// listen for click events on modal-btn and close-btn
openBtn.addEventListener('click', function() {
    overlay.classList.add('open-modal')
})

closeBtn.addEventListener('click', function() {
    overlay.classList.remove('open-modal')
})

// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay