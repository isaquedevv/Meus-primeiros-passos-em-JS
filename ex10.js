const prompt = require('prompt-sync')();

console.log("--- Cálculo da diferença de dois números ---");

let valor1 = Number(prompt("Insira o primeiro valor: "));
let valor2 = Number(prompt("Insira o segundo valor: "));

let diferença = valor1 - valor2

console.log(`A diferença entre esses números é de: ${diferença}`);