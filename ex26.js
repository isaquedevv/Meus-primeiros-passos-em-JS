const prompt = require('prompt-sync')();

console.log("--- Cálculo do Quadrado de Dois Números Inteiros ---");

let v1 = Number(prompt("Insira o primeiro valor numérico: "));
let v2 = Number(prompt("Insira o segundo valor numérico: "));


let divisao = v1 / v2
let quadrado = divisao * divisao

console.log(`Seu resultado é: ${quadrado} (${v1} / ${v2} = ${divisao}, ${divisao}²  = ${quadrado})`);