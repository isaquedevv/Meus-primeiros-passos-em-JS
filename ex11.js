const prompt = require('prompt-sync')();

console.log("--- Conversão de dólar para real ---");

let dolar = Number(prompt("Insira o valor em dólares: "));

let real = dolar * 4.99

console.log(`Esse valor em reais é de: ${real}`);