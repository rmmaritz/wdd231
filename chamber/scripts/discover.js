import { places } from "./places.mjs";
import { showVisitMessage } from "./visitor.js";

showVisitMessage();

const cards = document.querySelector("#cards");

places.forEach((place, index) => {
  const card = document.createElement("section");

  card.classList.add("card");
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}"
                 alt="${place.name}"
                 loading="lazy"
                 width="300"
                 height="200">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;

  cards.appendChild(card);
});