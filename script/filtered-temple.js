const temples = [
    {
        templeName: "Guatemala City Guatemala Temple",
        location: "Guatemala City, Guatemala",
        dedicated: "1984-12-14",
        area: 11600,
        imageUrl: "images/Temple_Guatemala_City.avif"
    },
    {
        templeName: "Quetzaltenango Guatemala Temple",
        location: "Quetzaltenango, Guatemala",
        dedicated: "2011-12-11",
        area: 21200,
        imageUrl: "images/Temple_Guatemala_Xela.avif"
    },
    {
        templeName: "Coban Guatemala Temple",
        location: "Coban, Guatemala",
        dedicated: "2023-09-10",
        area: 8800,
        imageUrl: "images/Temple_Guatemala_Coban.avif"
    },
    {
        templeName: "Huehuetenango Guatemala Temple",
        location: "Huehuetenango, Guatemala",
        dedicated: "2025-02-16",
        area: 9300,
        imageUrl: "images/Temple_Guatemala_Huehue.avif"
    },
    {
        templeName: "Miraflores Guatemala Temple",
        location: "Guatemala City, Guatemala",
        dedicated: "2026-05-12",
        area: 7500,
        imageUrl: "images/Temple_Guatemala_Miraflores.avif"
    },
];

const container = document.querySelector(".temple-container");
const title = document.getElementById("page-title");

function displayTemples(filteredTemples) {
    container.innerHTML = "";
    filteredTemples.forEach((temple) => {
        const card = document.createElement("figure");
        card.innerHTML = `
      <img src="${temple.imageUrl}" 
           alt="${temple.templeName}" 
           loading="lazy">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;
        container.appendChild(card);
    });
}

// Filter functions
function filterTemples(criteria) {
    let filtered = temples;
    switch (criteria) {
        case "old":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 2000);
            title.textContent = "Old Temples";
            break;
        case "new":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            title.textContent = "New Temples";
            break;
        case "large":
            filtered = temples.filter(t => t.area > 10000);
            title.textContent = "Large Temples";
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            title.textContent = "Small Temples";
            break;
        default:
            title.textContent = "Home";
            break;
    }
    displayTemples(filtered);
}

// Handle nav clicks
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filter = event.target.dataset.filter;
        filterTemples(filter);
    });
});

// Initial load
displayTemples(temples);
