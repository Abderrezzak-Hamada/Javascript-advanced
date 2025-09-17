// Opdracht 2.1: Filter en Map
console.log('🚀 Opdracht 2.1: Filter en Map');

const prijzen = [800, 25, 75, 300, 150, 45];
const productnamen = ['laptop', 'muis', 'toetsenbord', 'monitor', 'webcam', 'kabel'];

console.log('Alle prijzen:', prijzen);
console.log('Alle productnamen:', productnamen);

// ✅ Filter prijzen onder de €10
const goedkopePrijzen = prijzen.filter(prijs => prijs < 10);
console.log('Prijzen onder €10:', goedkopePrijzen);

// ✅ Filter productnamen die beginnen met 'm'
const productenMetM = productnamen.filter(naam => naam.startsWith('m'));
console.log('Producten die beginnen met m:', productenMetM);

// ✅ Combineer prijzen + productnamen → lijst met budgetproducten (< €100)
const budgetProducten = productnamen
  .map((naam, index) => ({ naam, prijs: prijzen[index] })) // koppel naam en prijs
  .filter(product => product.prijs < 100);

console.log('Budget producten (< €100):', budgetProducten);
