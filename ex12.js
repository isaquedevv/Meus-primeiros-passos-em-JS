const prompt = require('prompt-sync')();

console.log("--- Conversão de real para dólar ---");

let real = Number(prompt("Insira o valor em dólares: "));

let dolar = real/4.99

console.log(`Esse valor em dólares é de: ${dolar}`);