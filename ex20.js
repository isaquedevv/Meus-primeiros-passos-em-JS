const prompt = require('prompt-sync')();

console.log("--- Cálculo da Velocidade de um Projétil ---");

let dist = Number(prompt("Insira o valor da distância percorrida em kilômetos: "));
let temp = Number(prompt("Insira o valor dao tempo percorrido em horas: "));


let velocidade = dist / temp / 3.6

console.log(`A velocidade percorrida em metros por segundo foi de: ${velocidade} m/s`);