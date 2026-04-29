const prompt = require('prompt-sync')();

console.log("--- Somatório dos Valores Pares ---");

let somaPares = 0

for (let numero = 2; numero <= 500; numero += 2) {
    somaPares = somaPares + numero
}
console.log(`Soma = ${somaPares}`)