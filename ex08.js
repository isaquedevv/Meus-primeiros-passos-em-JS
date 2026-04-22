const prompt = require('prompt-sync')();

console.log("--- Cálculo do valor de uma Prestação em Atraso ---");

let comprimento = Number(prompt("Insira o comprimento da caixa retangular: "));
let largura = Number(prompt("Insira a largura da caixa retangular: "));
let altura = Number(prompt("Insira a altura da caixa retangular: "));

let volume = comprimento * largura * altura

console.log(`O volume da caixa é de: ${volume}`);