// Import navigation links
import { navLinks } from "./data.js";

// Select elements
const navLinksContainer = document.querySelector(".nav-links");
const footerNavLinksContainer = document.querySelector(".footer-section .nav-links");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navModal = document.createElement("div"); // Create modal dynamically
const backButton = document.createElement("button"); // Create back button dynamically

// **NEW: Dynamic modal structure creation**
navModal.classList.add("nav-modal");
navModal.setAttribute("id", "navModal"); // Assign ID for consistency

// Add the modal HTML structure
navModal.innerHTML = `
    <div class="nav-modal-content">
        <ul class="nav-modal-links">
        ${navLinks
        .map((link) => `<li><a href="#">${link}</a></li>`)
        .join("")
    }</ul> <!-- Placeholder for modal links -->
    </div>
`;

// Add modal to the body
document.body.appendChild(navModal);

// **NEW: Add dynamic back button inside the modal**
backButton.classList.add("back-button");
backButton.setAttribute("id", "backButton");
backButton.textContent = "Back";
navModal.querySelector(".nav-modal-content").appendChild(backButton);

// **Render navigation links**
(function navLinkRender() {
    const allLinks = navLinks
        .map((link) => `<li><a href="#">${link}</a></li>`)
        .join("");

    // Render links in the header's nav
    navLinksContainer.innerHTML = allLinks;

    // Render links in the footer's nav (if it exists)
    if (footerNavLinksContainer) {
        footerNavLinksContainer.innerHTML = allLinks;
    }
})();


function toggleModal() {
    navModal.classList.toggle("visible");
    document.body.classList.toggle("no-scroll");
}

// Open modal when hamburger menu is clicked
hamburgerMenu.addEventListener("click", toggleModal);

// Close modal when back button or modal background is clicked
backButton.addEventListener("click", toggleModal);
navModal.addEventListener("click", (e) => {
    if (e.target === navModal) toggleModal();
});

// Ensure the nav is always visible on large screens
window.addEventListener('resize', function () {
    if (window.innerWidth > 640) {
        navModal.classList.remove('visible');
        document.body.classList.remove('no-scroll');
    }
});
