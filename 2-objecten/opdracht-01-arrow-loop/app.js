const marvels = ["Avengers age of ultron","Avengers end game","Spiderman Far from home","Thor: Ragnarok" ]
// Maak een arrow function genaamd 'addMarvel'
const addmarvel = () => {
    marvels.push("Spiderman No Way Home")
    
}    
 
addmarvel();
// Loop met een for/of loop door de array en toon alle items in de array in je console
for (let marvelfilm of marvels) {
    console.log(marvelfilm)
}