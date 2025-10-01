// Selecteer container
const container = document.getElementById("cosmetics-container");
let out = ""
// Haal data op van de Fortnite API
fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)

    for (let countries of data) {
      out += `
        <div class="person">
          <img src="${countries.flags.png}" >
          <div>
          <h3>${countries.name.common}</h3>
          
          </div>
        </div>
      `;
    }
    container.innerHTML = out;
  });


