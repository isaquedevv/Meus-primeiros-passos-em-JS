const prompt = require('prompt-sync')();

console.log("--- Cálculo de Potência ---");

let base = Number(prompt("Insira o valor da base: "));
let expo = Number(prompt("Insira o valor do expoente: "));


let resultado = Math.pow(base,expo)

console.log(`Seu resultado é: ${resultado}`);