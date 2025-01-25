import { navLinks } from "./data.js";

const navLinksContainer = document.querySelector(".nav-links");

(function navLinkRender() {
    const allLinks = navLinks.map((link) => {
        return `<li><a href="#">${link}</a></li>`;
    }).join("");

    navLinksContainer.innerHTML = allLinks;
})();