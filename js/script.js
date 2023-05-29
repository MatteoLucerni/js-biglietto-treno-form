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
-Il proprio nome
- Il numero di chilometri da percorrere
- Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */

const target = document.getElementById('target');
const errorTarget = document.getElementById('error');
const pricePerKm = 0.21;
const button = document.getElementById('calculate');

// Creo una callback function sul bottone

button.addEventListener('click', function(){

    const distance = parseInt(document.getElementById('distance').value);
    const age = document.getElementById('age').value;

    console.log('distance: ' + distance);
    console.log('age: ' + age);

    // Validazione elementi inseriti
    
    if(distance >= 0){

        console.log('Validazione completata correttamente');

        // Calcolo prezzo biglietto

        const price = (distance * pricePerKm);
        console.log('price: ' + price);

        // Calcolo lo sconto in base all età

        let discount = 0;
        let discountMessage = 'Nessuno sconto disponibile D:'

        if(age === "Minor"){
            discount = 20;
            discountMessage = `Sei minorenne, lo sconto è del' ${discount}%.`;
        } else if(age === "Over"){
            discount = 40;
            discountMessage = `Sei over 65, lo sconto è del' ${discount}%.`;
        }

        console.log('Sconto: ',discount,'%.');

        // Calcolo il prezzo finale scontato

        discountedPrice = (price - ((discount / 100) * price)).toFixed(2);
        console.log('Prezzo scontato: ' + discountedPrice);

        // Inserisco il prezzo scontato in pagina

        if(discount != 0){
            target.innerText = `Il tuo biglietto costa: ${discountedPrice}€. ${discountMessage} Prezzo non scontato: ${price}€`;
        } else{
            target.innerText = `Il tuo biglietto costa: ${discountedPrice}€. ${discountMessage}`;
        }

    } else{
        console.log('Errore: Per favore inserisci solo valori numerici validi');
        target.innerText = 'Errore: Per favore inserisci solo valori numerici  validi';
    }

})

