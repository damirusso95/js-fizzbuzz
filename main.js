


// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// Consegna
// 1) Scrivi un programma che stampi in console i numeri da 1 a 100                 ----> ok
// 2) per i multipli di 3 stampi “Fizz” al posto del numero                         ----> ok
// 3) per i multipli di 5 stampi “Buzz”                                             ----> ok
// 4) Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.           ----> ok   
const item = document.querySelector('ul');
let i = 1
// stampo in console numeri da 1 a 100 utilizzando il ciclo for
for( i ; i <= 100; i++){
    let valore = i;
    
// stampo Bazz al posto dei numeri multipli di 5 e 3
if(i % 5 ==0 && i % 3 ==0){
    console.log(i,"FizzBuzz")
    valore = `fizzBuzz`
    
   
}
// stampo "fizzBuzz" al posto dei numeri multipli di 3
else if(i % 3 ==0){
    console.log(i,"Fizz")
    valore = `fizz`
    
}

// stampo Fizz al posto dei numeri multipli di 5
 else if(i % 5 ==0){
    console.log(i,"Buzz")
    valore = `buzz`
}

else{
    console.log(i);
}

item.innerHTML = item.innerHTML + `<li>${valore}<li/>`;

}

