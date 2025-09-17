// Opdracht 1.3: Includes Oefening
console.log('🚀 Opdracht 1.3: Includes Oefening');

const kleuren = ['rood', 'blauw', 'groen', 'geel'];
console.log('Beschikbare kleuren:', kleuren);

const zoekKleur = prompt('Voer een kleur in:') || 'blauw';
console.log('Gezochte kleur:', zoekKleur);

// ✅ Gebruik includes om te checken of de kleur aanwezig is
const gevonden = kleuren.includes(zoekKleur);

console.log('Kleur gevonden:', gevonden);
console.log('Verwacht resultaat (bijv. als "blauw" ingevoerd is): true');
