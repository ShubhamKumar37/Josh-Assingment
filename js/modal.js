// Get DOM elements
const requestDishBtn = document.querySelector('.request-dish-btn');
const modal = document.getElementById('requestDishModal');
const backToMenuBtn = document.getElementById('backToMenuBtn');
const body = document.body;

// Show modal and disable background scroll
requestDishBtn.addEventListener('click', () => {
    modal.classList.add('visible');
    body.classList.add('no-scroll'); // Disable scrolling
});

// Close modal and enable background scroll
function closeModal() {
    modal.classList.remove('visible');
    body.classList.remove('no-scroll'); // Enable scrolling
}

// Close modal on button click or background click
backToMenuBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
