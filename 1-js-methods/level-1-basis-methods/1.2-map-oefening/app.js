const namen = ['sanne', 'johan', 'sjoerd'];

const hoofdletterNamen = namen.map(naam => 
  naam.charAt(0).toUpperCase() + naam.slice(1)
);

console.log(hoofdletterNamen);
// ➝ ['Sanne', 'Johan', 'Sjoerd']
