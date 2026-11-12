const membersUrl = "data/members.json";

async function getMemberSpotlights() {
  try {
    const response = await fetch(membersUrl);

    if (!response.ok) {
      throw new Error("Member data could not be retrieved.");
    }

    const members = await response.json();

    displaySpotlights(members);

  } catch (error) {
    console.error("Spotlight Error:", error);
  }
}

function displaySpotlights(members) {

  const spotlightContainer =
    document.querySelector("#spotlight-container");

  spotlightContainer.innerHTML = "";

  const qualifiedMembers = members.filter(member =>
    member.membership === "Gold" ||
    member.membership === "Silver"
  );

  const shuffledMembers = [...qualifiedMembers].sort(
    () => Math.random() - 0.5
  );

  const selectedMembers = shuffledMembers.slice(0, 3);

  selectedMembers.forEach(member => {

    const card = document.createElement("article");

    card.classList.add("spotlight-card");

    card.innerHTML = `
            <h3>${member.name}</h3>

            <img
                src="${member.image}"
                alt="${member.name} logo"
                loading="lazy"
                width="200"
                height="120"
            >

            <p class="tagline">
                ${member.tagline}
            </p>

            <p>
                <strong>Email:</strong><br>
                ${member.email}
            </p>

            <p>
                <strong>Phone:</strong><br>
                ${member.phone}
            </p>

            <p>
                <a
                    href="${member.website}"
                    target="_blank"
                    rel="noopener noreferrer">
                    Visit Website
                </a>
            </p>

            <p class="membership-level">
                ${member.membership} Member
            </p>
        `;

    spotlightContainer.appendChild(card);

  });
}

export { getMemberSpotlights };