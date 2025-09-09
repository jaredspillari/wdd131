document.addEventListener('DOMContentLoaded', () => {
    const currentyear = document.getElementById('currentyear');
    currentyear.textContent = `Jeffrey Castellanos | Guatemala – ${new Date().getFullYear()}`;

    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = `Last modified: ${document.lastModified}`;
});