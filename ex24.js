const prompt = require('prompt-sync')();

console.log("--- Cálculo de Raiz ---");

let base = Number(prompt("Insira o valor da base: "));
let indi = Number(prompt("Insira o valor do índice da raiz: "));


let raiz = Math.pow(base,(1/indi))

console.log(`Seu resultado é: ${raiz}`);