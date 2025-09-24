const book = {
  title: "Mein Kampf",
  author: "Adolf Hitler",
  publisher: "Adolf Hitler",
  year: 1925,
  sold: 250000000,
  price: "2.99 euros"
};

const output = document.querySelector(".output");

for (let property in book) {
  const p = document.createElement("p");
  p.textContent = property + ": " + book[property];
  output.appendChild(p);
  console.log
}
