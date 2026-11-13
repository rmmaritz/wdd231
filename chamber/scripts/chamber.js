const membersContainer = document.querySelector("#members");

async function getMembers() {
  const response = await fetch("data/members.json");

  if (!response.ok) {
    throw Error("Member data could not be loaded.");
  }

  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {

  members.forEach(member => {

    const card = document.createElement("article");
    card.classList.add("member-card");

    card.innerHTML = `
            <div class="card-header">
                <h3>${member.name}</h3>
                <p>${member.tagline}</p>
            </div>

            <div class="card-body">
                <img src="${member.image}"
                     alt="${member.name} logo"
                     loading="lazy">

                <div class="contact-info">
                    <p><strong>EMAIL:</strong> ${member.email}</p>
                    <p><strong>PHONE:</strong> ${member.phone}</p>
                    <p>
                        <strong>URL:</strong>
                        <a href="${member.website}"
                           target="_blank">
                           ${member.website.replace("https://", "")}
                        </a>
                    </p>
                </div>
            </div>
        `;

    membersContainer.appendChild(card);
  });
}

getMembers();

/* Grid View Button */
document.querySelector("#grid-view")
  .addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
  });

/* List View Button */
document.querySelector("#list-view")
  .addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
  });

