console.log('JS OK');

/*  TRACCIA

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.
*/

// ! TRACCIA AGGIORNATA
/* Scrivere un programma che chieda all’utente:
- Il proprio nome
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */

const pricePerKm = 0.21;
const resetButton = document.getElementById('reset');
const button = document.getElementById('calculate');
const error = document.getElementById('errorPlace');
const userNamePlace = document.getElementById('namePlace');
const ticket = document.getElementById('ticketPlace');
const cab = document.getElementById('cabPlace');
const code = document.getElementById('codePlace');
const pricePlace = document.getElementById('pricePlace');
const ticketBox = document.getElementById('ticket-box');

// Creo una callback function sul bottone

button.addEventListener('click', function(){

    const userName = document.getElementById('user').value
    const distance = parseInt(document.getElementById('distance').value);
    const age = document.getElementById('age').value;

    console.log('distance: ' + distance);
    console.log('age: ' + age);

    // Validazione elementi inseriti

    const userNameValid = isNaN(userName);
    console.log(userNameValid);
    
    if(distance >= 0 && userName && userNameValid){

        console.log('Validazione completata correttamente');
        error.innerText = '';

        // Calcolo prezzo biglietto

        const price = (distance * pricePerKm);
        console.log('price: ' + price);

        // Calcolo lo sconto in base all età

        let discount = 0;

        if(age === "Minori"){
            discount = 20;
        } else if(age === "Over"){
            discount = 40;
        }

        console.log('Sconto: ',discount,'%.');

        // Calcolo il prezzo finale scontato

        const discountedPrice = (price - ((discount / 100) * price)).toFixed(2);
        console.log('Prezzo scontato: ' + discountedPrice);

        // Inserisco i dati in pagina

        userNamePlace.innerText = userName;
        ticket.innerText = 'Biglietto ' + age;
        cab.innerText = Math.floor(Math.random() * 10) + 1;
        code.innerText = Math.floor(Math.random() * 99999) + 1;
        pricePlace.innerText = discountedPrice + '€';

        ticketBox.className = 'd-block';

    } else{
        console.log('Errore: Per favore inserisci solo valori numerici validi');
        error.innerText = 'Errore: Per favore inserisci dati validi';
        ticketBox.className = 'd-none';
    }

});

// button reset

resetButton.addEventListener('click', function(){
    document.getElementById('user').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('age').value = 'Standard';
});

