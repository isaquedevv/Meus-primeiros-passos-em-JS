const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura ---");

let F = Number(prompt("Insira a temperatura em graus Fahrenheit: "));
let C = (F - 32) * 5/9

console.log(`Sua temperatura em graus Celcius é de: ${C}`);