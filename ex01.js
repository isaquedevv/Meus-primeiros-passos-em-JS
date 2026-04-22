const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura ---");

let C = Number(prompt("Insira a temperatura em graus Celcius: "));
let F = C * 9/5 + 32

console.log(`Sua temperatura em graus Fahrenheit é de: ${F}`);