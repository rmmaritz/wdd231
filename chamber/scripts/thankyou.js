const params = new URLSearchParams(window.location.search);

document.querySelector("#results").innerHTML = `
    <p><strong>First Name:</strong> ${params.get("firstname")}</p>
    <p><strong>Last Name:</strong> ${params.get("lastname")}</p>
    <p><strong>Email:</strong> ${params.get("email")}</p>
    <p><strong>Mobile Phone:</strong> ${params.get("mobile")}</p>
    <p><strong>Business Name:</strong> ${params.get("organization")}</p>
    <p><strong>Application Submitted:</strong> ${new Date(params.get("timestamp")).toLocaleString()}</p>
`;