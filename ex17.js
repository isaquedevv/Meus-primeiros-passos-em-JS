const prompt = require('prompt-sync')();

console.log("--- Cálculo da Área de uma Circunferência ---");

let raio = Number(prompt("Insira o valor do raio da Circunferência: "));


let area = 3.14 * raio * raio

console.log(`A Área da Circunferência é: ${area}`);