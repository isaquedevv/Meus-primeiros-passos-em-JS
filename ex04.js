const prompt = require('prompt-sync')();

console.log("--- Cálculo da quantidade de combustível gasta em uma viagem ---");

let km = Number(prompt("Insira a distância percorrida em kilômetros: "));
let kml = Number(prompt("Insira o consumo do veículo em kilômetros por litro: "));

let litros = km / kml

console.log(`A quantidade de combustível gasta é de: ${litros} Litros`);