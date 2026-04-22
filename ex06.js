const prompt = require('prompt-sync')();

console.log("--- Cálculo do valor de uma Prestação em Atraso ---");

let a = Number(prompt("Insira o valor A: "));
let b = Number(prompt("Insira o valor B: "));
let Temp

Temp = a
a = b
b = Temp

console.log(`Antes da troca: ${b}, ${a} | Após a troca: ${a}, ${b}.`);