const prompt = require('prompt-sync')();
let caracter = prompt("Ingresa el simbolo que desees: ");
let m = 4;
let n = 7;  

for (let i = 0; i < m; i++) {
    console.log(caracter.repeat(n));
}