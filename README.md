# Train ticket price calculator (advanced)

- Sostituisco le variabili che erano tamite prompt con quelle nuove tramite input
- Prendo il bottone dal DOM e lo salvo
- Faccio in modo che il calcolo si effettui solo quando l'utente clicca sul bottone
- Il biglietto deve comprarire solo se si clicca il bottone

- Salvo i dati inseriti dall'utente in variabili:
    - prezzo per km
    - nome e congnome dell'utente
    - fascia di età dell'utente
- Salvo il target dei "contenitori" dove alla fine inserirò i dati elaborati
- Targetto due bottoni che richiameranno funzioni differenti:
    <br>
    <br>
    - Aggiungo al primo bottone un event-listener che eseguirà la validazione dati inseriti e il conseguente codice
        - **SE** il nome e congnome sono numeri **o** il nome cognome è vuoto **o** i km sono negativi ---> do un messaggio di errore
        - **ALTRIMENTI** ---> eseguo il codice:
            - Calcolo prezzo biglietto
            - Calcolo lo sconto in base alla fascia di età
            - Calcolo il prezzo finale scontato
            - Inserisco i dati in pagina (usando i contenitori targhettati in rpecedenza):
                - Tipo di biglietto
                - Numero cabina (random)
                - codice (random)
                - prezzo finale scontato
            - Mostro il biglietto completo di dati elaborati in pagina
    <br>
    <br>
    - Aggiungo al secondo bottone un event-listener che eseguirà:
        - reset dei dati inseriti negli imput dall'utente
        - rimozione di un eventuale biglietto in pagina