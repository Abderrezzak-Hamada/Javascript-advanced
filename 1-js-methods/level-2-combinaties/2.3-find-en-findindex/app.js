// Opdracht 2.3: Find en FindIndex
console.log('🚀 Opdracht 2.3: Find en FindIndex');

const temperaturen = [18, 22, 25, 19, 28, 24, 21];
const kleuren = ['rood', 'blauw', 'groen', 'geel', 'paars', 'oranje'];

console.log('Temperaturen:', temperaturen);
console.log('Kleuren:', kleuren);

// ✅ Zoek de eerste temperatuur boven 25 graden
const warmeTemperatuur = temperaturen.find(temperature => temperature > 25);
console.log('Eerste warme temperatuur:', warmeTemperatuur);

// ✅ Zoek de index van de kleur 'groen'
const groenIndex = kleuren.findIndex(kleur => kleur === 'groen');
console.log('Index van groen:', groenIndex);

// ✅ Zoek de eerste temperatuur onder 20 graden
const koudeTemperatuur = temperaturen.find(temperature => temperature < 20);
console.log('Eerste koude temperatuur:', koudeTemperatuur);

// ✅ Zoek de index van de eerste temperatuur boven 23 graden
const warmeIndex = temperaturen.findIndex(temperature => temperature > 23);
console.log('Index van eerste warme temperatuur:', warmeIndex);
