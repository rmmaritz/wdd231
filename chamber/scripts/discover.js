import { places } from "./places.mjs";
import { showVisitMessage } from "./visitor.js";

showVisitMessage();

const cards = document.querySelector("#cards");

const dialog = document.querySelector("#place-details");
const dialogTitle = document.querySelector("#dialog-title");
const dialogContent = document.querySelector("#dialog-content");
const closeDialog = document.querySelector("#close-dialog");

closeDialog.addEventListener("click", () => {
  dialog.close();
});

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
                 decoding="async"
                 width="300"
                 height="200">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button class="learn-more">Learn More</button>
    `;

  const button = card.querySelector(".learn-more");

  button.addEventListener("click", () => {

    dialogTitle.textContent = place.name;

    dialogContent.innerHTML = `
            <img src="${place.image}"
                 alt="${place.name}"
                 class="dialog-image">

            <p>
                ${place.details || place.description}
            </p>

            <p>
                <strong>Address:</strong>
                ${place.address}
            </p>

            <p>
                <strong>Hours:</strong>
                ${place.hours || "See website for current hours"}
            </p>

            <p>
                <strong>Admission:</strong>
                ${place.cost || "See website for pricing"}
            </p>

            ${place.website
        ? `<p>
                        <a href="${place.website}"
                           target="_blank"
                           rel="noopener noreferrer">
                            Visit Website
                        </a>
                       </p>`
        : ""
      }
        `;

    dialog.showModal();
  });

  cards.appendChild(card);
});

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();

  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) {
    dialog.close();
  }
});