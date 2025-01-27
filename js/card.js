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

$(document).ready(function () {
    const carouselContainer = $('#home-kitchen-carousel');

    // Dynamically render carousel cards with the updated class name
    homeKitchenData.forEach(item => {
        const cardHTML = `
            <div class="card">
                    <img class="card-image" src="${item.url}" alt="${item.alt}">
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
                    <div style="width: fit-content;">
                        <span class="card-add"><i class="fas fa-plus"></i></span>
                    </div>
                </div>
                
            </div>
        `;
        carouselContainer.append(cardHTML);
    });

    // Initialize Slick Carousel
    carouselContainer.slick({
        slidesToShow: 3, // Display 3 slides at a time
        slidesToScroll: 1, // Scroll one slide at a time
        arrows: false, // Disable default arrows
        dots: true, // Enable dots for navigation
        infinite: true, // Enable infinite scrolling
        responsive: [
            {
                breakpoint: 1024, // For screen sizes below 1024px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1, // Scroll one slide
                }
            },
            {
                breakpoint: 768, // For screen sizes below 768px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1, // Scroll one slide
                }
            }
        ]
    });

    // Custom previous button
    $('#prev-button').click(function () {
        carouselContainer.slick('slickPrev'); // Go to previous slide
    });

    // Custom next button
    $('#next-button').click(function () {
        carouselContainer.slick('slickNext'); // Go to next slide
    });
});