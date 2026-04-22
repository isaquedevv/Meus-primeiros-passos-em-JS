const prompt = require('prompt-sync')();

console.log("--- Cálculo do quadrado de um número inteiro ---");

let valor = Number(prompt("Insira o número desejado: "));

let quadrado = valor*valor

console.log(`O resultado do quadrado de seu valor é: ${quadrado}`);