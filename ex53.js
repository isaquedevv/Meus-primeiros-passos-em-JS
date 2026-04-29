const prompt = require('prompt-sync')();

console.log("--- Somatório da Fatorial de Quinze Valores ---");

let somatorio = 0

for(let valor = 1; valor <= 15; valor++){
    let fatorial = 1
    for(let numero = 1; numero <=valor; numero++){
        fatorial = fatorial * numero
    }
    somatorio = somatorio + fatorial
}
console.log(`Somatório da fatorial de cada valor lido: ${somatorio}`);