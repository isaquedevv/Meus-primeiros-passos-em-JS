const prompt = require('prompt-sync')();

console.log("--- Maior e Menor Valores entre Valores Positivos ---");

let maior = -1
let menor = -1

while(true){
    let valor = Number(prompt("Insira um valor: "));
    if(valor>=0){
        if(maior < valor){
            maior = valor
        }
        if(menor == -1 || menor > valor){
            menor = valor
        }
    }else{
        break;
    }
}
console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);