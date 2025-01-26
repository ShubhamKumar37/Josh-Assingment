import { navLinks } from "./data.js";

const navLinksContainer = document.querySelector(".nav-links");
const footerNavLinksContainer = document.querySelector(".footer-section .nav-links");

(function navLinkRender() {
    const allLinks = navLinks.map((link) => {
        return `<li><a href="#">${link}</a></li>`;
    }).join("");

    // Render links in the header's nav
    navLinksContainer.innerHTML = allLinks;

    // Render links in the footer's nav
    if (footerNavLinksContainer) {
        footerNavLinksContainer.innerHTML = allLinks;
    }
})();
