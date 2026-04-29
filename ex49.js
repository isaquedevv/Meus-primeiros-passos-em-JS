const prompt = require('prompt-sync')();

console.log("--- Potência de uma Base Elevada a um Expoente ---");

let v1 = Number(prompt("Insira o valor da Base: "));
let v2 = Number(prompt("Insira o valor do Expoente: "));
let potencia = v1

for(let i = 1; i <v2; i++){
    potencia = potencia * v1
}

console.log(`${v1} elevado a ${v2} = ${potencia}`);