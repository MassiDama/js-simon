// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. 

// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, 
// i numeri che ha visto precedentemente.

// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Visualizzare in pagina 5 numeri casuali.
let numRandom = getRandomNumArray(5);

let numRandom2 =  numRandom;

// richiamo la variabile playGame in html e la inserisco in html
let playGame = document.querySelector(".game");
playGame.innerHTML = numRandom;

// impostare un timer di 30 secondi
let timer = 5;

const clock = setInterval(

    function () {

        
        if (timer === 0) {

            // quando il timer arriva a zero scompare l'array
            numRandom = getRandomNumArray(0);
            playGame.innerHTML = numRandom;

            // funzione che salva numeri inseriti dall'user x 5 volte
            const getUserNum = [];

            for (let i = 0; i < 5; i++) {
                askUserNum = parseInt(prompt("Inserisci i numeri che ricordi precedentemente:"));
                

                for (let j = 0; j < numRandom2.length; j++) {

                    if (numRandom2[j] === askUserNum) {

                        //console.log(askUserNum);
                        getUserNum.push(askUserNum);
                        
                    }
                }

            }

            console.log("I numeri da te indovinati sono in totale: " + getUserNum.length);
            console.log("e sono i seguenti: " + getUserNum);


            clearInterval(clock);

            
        } else {

            timer--;
            console.log(timer);
        }
    },

    1000
);











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


    
    
