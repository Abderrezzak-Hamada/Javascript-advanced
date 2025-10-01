let list = document.querySelector('.list');
let count = document.querySelector('#count');
let clearBtn = document.querySelector('#clear');
let out = '';

fetch('./Birthday.json')
  .then(res => res.json())
  .then(data => {
    count.textContent = data.length; // aantal personen tonen
    for (let person of data) {
      out += `
        <div class="person">
          <img src="${person.image}" alt="${person.name}">
          <div>
            <h4>${person.name}</h4>
            <p>${person.age} years</p>
          </div>
        </div>
      `;
    }
    list.innerHTML = out;
  });

// Clear button
clearBtn.addEventListener('click', () => {
  list.innerHTML = '';
  count.textContent = 0;
});
