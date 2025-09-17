const getallen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter haalt alleen de elementen die voldoen aan de voorwaarde
const evenGetallen = getallen.filter(getal => getal % 2 === 0);

console.log(evenGetallen);
// ➝ [2, 4, 6, 8, 10]
