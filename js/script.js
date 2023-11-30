// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. 

// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, 
// i numeri che ha visto precedentemente.

// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Visualizzare in pagina 5 numeri casuali.
const numRandom = getRandomNumArray(5);

console.log(numRandom);







// funzione che genere numeri random
function getRandomNum (min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione che genera numeri casuali x 5 volte
function getRandomNumArray(num) {

    const array = [];

    for (let i = 0; i < num; i++) {

        array.push(getRandomNum(1,100));

    }
    
    return array;
}