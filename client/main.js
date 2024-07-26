const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  // fetch to server.js endpoint - will connect THAT to Supabase
  //
  const response = await fetch("https://localhost:8080/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const data = await response.json();
  console.log(data);
});
