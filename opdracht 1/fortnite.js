// Selecteer container
const container = document.getElementById("cosmetics-container");
let out = ""
// Haal data op van de Fortnite API
fetch("https://fortnite-api.com/v2/cosmetics/new")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data.items.br)

    for (let fortnite of data.data.items.br) {
      out += `
        <div class="person">
          <img src="${fortnite.images.featured}" >
          <div>
            <h4>${fortnite.name}</h4>
            <p>${fortnite.description} years</p>
          </div>
        </div>
      `;
    }
    container.innerHTML = out;
  });


