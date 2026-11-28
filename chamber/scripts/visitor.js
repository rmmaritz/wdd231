export function showVisitMessage() {
  const visitMessage = document.querySelector("#visit-message");

  const lastVisit = localStorage.getItem("lastVisit");
  const currentVisit = Date.now();

  if (!lastVisit) {
    visitMessage.textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const millisecondsBetweenVisits =
      currentVisit - Number(lastVisit);

    const daysBetweenVisits =
      Math.floor(millisecondsBetweenVisits / 86400000);

    if (daysBetweenVisits < 1) {
      visitMessage.textContent =
        "Back so soon! Awesome!";
    } else if (daysBetweenVisits === 1) {
      visitMessage.textContent =
        "You last visited 1 day ago.";
    } else {
      visitMessage.textContent =
        `You last visited ${daysBetweenVisits} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", currentVisit);
}