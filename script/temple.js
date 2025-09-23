// Footer year & last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu toggle
const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar');
btn.addEventListener('click', () => nav.classList.toggle('show'));
