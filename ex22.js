const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume de uma Esfera ---");

let raio = Number(prompt("Insira o raio da esfera: "));


let resultado = (4/3) * Math.PI * Math.pow(raio,3);

console.log(`O volume da esfera: ${Math.round(resultado)}`);
//Math.floor arredonda para baixo 
//Math.ceil arredonda para cima 
//Math.trunc