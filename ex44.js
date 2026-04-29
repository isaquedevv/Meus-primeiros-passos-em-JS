const prompt = require('prompt-sync')();

console.log("--- Soma dos Cem Primeiros Números Naturais ---");

let soma = 0
let contador = 1

for (let contador = 1; contador <= 100; contador++) {
    soma = soma + contador
}
console.log(`Soma = ${soma}`)