const prompt = require('prompt-sync')();

console.log("--- Somatório, Média e Total de Valores Lidos ---");

let somatorio = 0
let totalValores = 0
let media = 0
let valor

while(true){
    valor = Number(prompt("Insira um valor numérico: "));
    if(valor <= 0){
        break;
    }
    somatorio = somatorio + valor
    totalValores = totalValores + 1
    media = somatorio / totalValores
}

console.log(`Somatório: ${somatorio}, Média: ${media}, Total de valores lidos: ${totalValores}.`);