


// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// Consegna
// 1) Scrivi un programma che stampi in console i numeri da 1 a 100                 ----> ok
// 2) per i multipli di 3 stampi “Fizz” al posto del numero                         ----> ok
// 3) per i multipli di 5 stampi “Buzz”                                             ----> ok
// 4) Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

let i = 1
// stampo in console numeri da 1 a 100 utilizzando il ciclo for
for(let i = 1; i <= 100; i++){
    console.log(i)
// stampo "fizz" al posto dei numeri multipli di 3
    if (i % 3 ==0) {
        console.log(i,"Fizz")
    }

    else if(i % 5 ==0){
        console.log(i,"Buzz")
    }







}

