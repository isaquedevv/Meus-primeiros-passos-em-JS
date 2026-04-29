const prompt = require('prompt-sync')();

console.log("--- Quadrados na Faixa de Valores ---");

let resultado_quadrados = "";

for (let numero = 15; numero <= 200; numero++) {
    let quadrado = numero * numero;
    resultado_quadrados += quadrado + ", "
}

console.log(resultado_quadrados);