const prompt = require('prompt-sync')();

console.log("--- Cálculo das Quatro Operações Básicas ---");

let v1 = Number(prompt("Insira o primeiro valor: "));
let v2 = Number(prompt("Insira o segundo valor: "));

let soma = v1 + v2
let subtracao = v1 - v2
let multiplicacao = v1 * v2
let divisao = v1 / v2

console.log(`Adição: ${v1} + ${v2} = ${soma}`);
console.log(`Adição: ${v1} - ${v2} = ${subtracao}`);
console.log(`Adição: ${v1} x ${v2} = ${multiplicacao}`);
console.log(`Adição: ${v1} / ${v2} = ${divisao}`);