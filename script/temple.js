// Footer year & last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
    hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰";
});
