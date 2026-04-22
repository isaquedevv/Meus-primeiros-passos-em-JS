const prompt = require('prompt-sync')();

console.log("--- Cálculo da Soma dos Quadrados ---");

let v1 = Number(prompt("Insira o primeiro valor: "));
let v2 = Number(prompt("Insira o segundo valor: "));
let v3 = Number(prompt("Insira o terceiro valor: "));

let resultado = (v1*v1) + (v2*v2) + (v3*v3)

console.log(`O resultado é: (${v1} * ${v1}) + (${v2} * ${v2}) + (${v3} * ${v3}) = ${resultado}`);