
console.log(' Opdracht 3.1: Zoekfunctie');

const films = ['The Matrix', 'avatar', 'INCEPTION', 'Titanic'];
console.log('Alle films:', films);

function zoekFilms(films, zoekterm) {
    return films.filter(film => film.toLowerCase().includes(zoekterm.toLowerCase()));
}


console.log('Zoek "the":', zoekFilms(films, 'the'));
console.log('Zoek "a":', zoekFilms(films, 'a'));
console.log('Verwacht voor "the": ["The Matrix"]');
