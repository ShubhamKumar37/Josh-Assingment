import { homeKitchenData } from './data.js';

const container = document.getElementById('home-kitchen-container');

// Create cards dynamically
let cardsHTML = '';
homeKitchenData.forEach((item) => {
    cardsHTML += `
        <div class="card">
            <img src="${item.url}" alt="${item.alt}" class="card-image">
            ${item.discount ? `<div class="discount-badge">${item.discount}</div>` : ''}
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-price">${item.price}</p>
            </div>
            <div class="card-details">
                <div>
                    <span class="card-rating"><i class="fas fa-star"></i>4.7</span>
                    <span class="card-time">50-70 min</span>
                </div>
                <div>
                    <span class="card-add"><i class="fas fa-plus"></i></span>
                </div>
            </div>
        </div>
    `;
});

// Insert all cards at once
container.innerHTML = cardsHTML;
