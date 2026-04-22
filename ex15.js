const prompt = require('prompt-sync')();

console.log("--- Cálculo do Produto e da Soma de Quatro Números ---");

let v1 = Number(prompt("Insira o primeiro valor: "));
let v2 = Number(prompt("Insira o segundo valor: "));
let v3 = Number(prompt("Insira o terceiro valor: "));
let v4 = Number(prompt("Insira o quarto valor: "));

let produto = v1*v3
let soma = v2+v4

console.log(`Os resultados são: | Produto = ${produto} (${v1} * ${v3}) | Soma = ${soma} (${v2} + ${v4})`);