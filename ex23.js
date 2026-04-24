const prompt = require('prompt-sync')();

console.log("--- Conversão de Pés para Metros ---");

let pes = Number(prompt("Insira uma distância em Pés(Medida): "));


let metros = pes * 0.3048

console.log(`A distância em Metros é de: ${metros}`);
//Math.floor arredonda para baixo 
//Math.ceil arredonda para cima 
//Math.trunc