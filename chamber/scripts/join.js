let membershipData = [];

const membershipCards = document.querySelector("#membership-cards");
const membershipDialog = document.querySelector("#membership-details");
const timestamp = document.querySelector("#timestamp");

if (timestamp) {
  timestamp.value = new Date().toISOString();
}

async function getMembershipLevels() {
  try {
    const response = await fetch("data/memberships.json");

    if (!response.ok) {
      throw new Error("Unable to load membership data.");
    }

    const data = await response.json();

    membershipData = data.memberships;

    displayMembershipCards(data.memberships);
  } catch (error) {
    console.error("Error loading membership levels:", error);
  }
}

function displayMembershipCards(memberships) {
  membershipCards.innerHTML = "";

  memberships.forEach((membership) => {
    const card = document.createElement("article");
    card.classList.add("membership-card");

    const heading = document.createElement("h3");
    heading.textContent = membership.name;

    const cost = document.createElement("p");
    cost.textContent = membership.cost;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Learn More";
    button.dataset.level = membership.level;

    button.addEventListener("click", () => {
      displayMembershipDetails(membership);
    });

    card.appendChild(heading);
    card.appendChild(cost);
    card.appendChild(button);

    membershipCards.appendChild(card);
  });
}

function displayMembershipDetails(membership) {
  membershipDialog.innerHTML = "";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.classList.add("close-modal");
  closeButton.setAttribute("aria-label", "Close membership details");
  closeButton.textContent = "×";

  const heading = document.createElement("h2");
  heading.textContent = membership.name;

  const benefitsHeading = document.createElement("h3");
  benefitsHeading.textContent = "Benefits include:";

  const benefitsList = document.createElement("ul");

  membership.benefits.forEach((benefit) => {
    const listItem = document.createElement("li");
    listItem.textContent = benefit;
    benefitsList.appendChild(listItem);
  });

  const cost = document.createElement("p");
  cost.classList.add("membership-cost");

  const strong = document.createElement("strong");
  strong.textContent = "Cost: ";

  cost.appendChild(strong);
  cost.appendChild(document.createTextNode(membership.cost));

  closeButton.addEventListener("click", () => {
    membershipDialog.close();
  });

  membershipDialog.appendChild(closeButton);
  membershipDialog.appendChild(heading);
  membershipDialog.appendChild(benefitsHeading);
  membershipDialog.appendChild(benefitsList);
  membershipDialog.appendChild(cost);

  membershipDialog.showModal();
}

membershipDialog.addEventListener("click", (event) => {
  if (event.target === membershipDialog) {
    membershipDialog.close();
  }
});

getMembershipLevels();