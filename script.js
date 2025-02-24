document.querySelector('a[href="#home"]').addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Select elements
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// Toggle the menu when clicking the hamburger icon
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");  // Add or remove 'active' class
    menuIcon.classList.toggle("bx-x");  // Change icon to 'X' when open
});

// Close menu when a navbar link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");  // Close menu
        menuIcon.classList.remove("bx-x");  // Reset icon
    });
});
