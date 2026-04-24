const prompt = require('prompt-sync')();

console.log("--- Apuração de votos em uma Eleição Sindical ---");

let c1 = Number(prompt("Insira a quantidade de votos para o primeiro candidato: "));
let c2 = Number(prompt("Insira a quantidade de votos para o segundo candidato: "));
let c3 = Number(prompt("Insira a quantidade de votos para o terceiro candidato: "));
let nulo = Number(prompt("Insira a quantidade de votos nulos: "));
let branco = Number(prompt("Insira a quantidade de votos em branco: "));

let total_votos = c1 + c2 + c3 + nulo + branco
let candidatos = c1 + c2 + c3

let percentual_c1 = (c1 / total_votos) * 100
let percentual_c2 = (c2 / total_votos) * 100
let percentual_c3 = (c3 / total_votos) * 100
let percentual_nulo = (nulo / total_votos) * 100
let percentual_branco = (branco / total_votos) * 100

console.log(`Total de eleitores: ${total_votos}`);
console.log(`Percentual de votos válidos: `);
console.log(`Candidato 1: ${percentual_c1}%`);
console.log(`Candidato 2: ${percentual_c2}%`);
console.log(`Candidato 3: ${percentual_c3}%`);
console.log(`Votos nulos: ${percentual_nulo}%`);
console.log(`Votos em branco: ${percentual_branco}%`);