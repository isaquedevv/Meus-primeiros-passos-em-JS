const prompt = require('prompt-sync')();

console.log("--- Cálculo do quadrado da soma de três números ---");

let v1 = Number(prompt("Insira o primeiro valor: "));
let v2 = Number(prompt("Insira o segundo valor: "));
let v3 = Number(prompt("Insira o terceiro valor: "));

let soma = (v1 + v2 + v3)
let quadrado = soma*soma

console.log(`O resultado é: (${v1} + ${v2} + ${v3})² = ${quadrado}`);